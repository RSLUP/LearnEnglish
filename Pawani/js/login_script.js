if(window.localStorage){
    console.log("supported");
}else {
    console.log("not supported");
}


function login_func() {
    var username=document.login_form.username.value;
    var password=document.login_form.password.value;;

    if ( username == "RSLUP" && password == "r5Lup@Ac9"){
        alert ("Login successfully");
        localStorage.setItem('username', username);
        var d = new Date();
        var n = d.toISOString();
        localStorage.setItem('date', n);
        alert("date"+n);
        alert(username+"haaa");
        window.open("index.html");
    }

    else {
        alert ("Username or password is incorrect");
    }
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