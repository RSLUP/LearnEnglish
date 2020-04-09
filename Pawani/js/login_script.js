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





function retrive_func() {
    var user=document.getElementById("un").value;
    // var d = new Date();
    // var n = d.toISOString();
    // //
    // var stored_name=localStorage.getItem('username');
    // var stored_date=localStorage.getItem("date");

    alert(user+"ha ha");
    // if((username==stored_name) && (n==stored_date)){
    //     alert("ha ha");
    // }else{
    //     alert("don't match log again");
    //     window.open("login.html");
    // }

}