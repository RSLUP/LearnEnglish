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


