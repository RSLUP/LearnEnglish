if(window.localStorage){
    console.log("supported");
}else {
    console.log("not supported");
}


function login_func() {
    var username=document.getElementById("un").value;
    var password=document.getElementById("pw").value;

    if ( username == "RSLUP" && password == "r5Lup@Ac9"){
        alert ("Login successfully");
        localStorage.setItem('username', username.value);
        var d = new Date();
        var n = d.toISOString();
        localStorage.setItem('date', n);
        // alert("date"+n);
        window.open("index.html");
    }

    else {
        alert ("Username or password is incorrect");
    }
}