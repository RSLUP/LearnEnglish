function login_func(){

if(window.localStorage){
    console.log("supported");
    var username=document.login_form.username.value;
    var password = document.login_form.password.value;
    if ( username == "RSLUP" && password == "r5Lup@Ac9"){
        alert ("Login successfully");
        localStorage.setItem('username', username);
        var d = new Date();
        var n = d.toISOString().split('T');
        localStorage.setItem('date', n[0]);
        // window.open("first.php");
        //window.location.replace("first.php");
         window.location.href= "first.php";
        // location.href= "first.php";
        // window.location="first.php";
        // window.open("first.php","_self");

        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        }else {
            localStorage.clickcount = 1;
        }
    }
    else {
        alert ("Username or password is incorrect");
    }


}else {
    console.log("not supported");
}

}





function retrive_func() {
    // window.open("tenses.html");
    var d = new Date();
    var n = d.toISOString().split('T');
    //alert(n);
    //
    var stored_name = localStorage.getItem('username');
    // alert("loading");
    var stored_date = localStorage.getItem("date");

    if ((stored_date !== n[0]) || (stored_name == null)) {
        window.location.href= "index.php";

        // window.open("index.php");
    } else {
        alert("Page Loaded:).");
    }
}
function logout_func(){
    localStorage.removeItem("username");
    window.location ="index.php"

}

// function userdetails() {
//     var loggedtime = localStorage.getItem("date");
//     var name = localStorage.getItem("username");
//     if (name !== "") {
//         var user = localStorage.getItem("username");
//         alert("Hi, " + name + "\nYou logged in " + localStorage.clickcount + " times.\nYour last logging time: " + loggedtime);
//
//     }
// }

