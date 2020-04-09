var mov2 = 0;
slideds2();

function slideds2() {
    var a = document.getElementsByClassName("img");
    var i = 0;


    for (i = 0; i < a.length; i++) {
        a[i].style.display = "none";
    }

    if (mov2 == a.length) mov2 = 0
    a[mov2].style.display = "block";
    mov2++;

    setTimeout(slideds2,1000);


}


function retrive_func() {
    // window.open("tenses.html");
    var d = new Date();
    var n = d.toISOString();
    //alert(n);
    //
    var stored_name = localStorage.getItem('username');
    // alert("loading");
    var stored_date = localStorage.getItem("date");

    if ((stored_date !== n) && (stored_name == null)) {
        window.open("login.html");
    } else {
        alert("loading");
    }
}