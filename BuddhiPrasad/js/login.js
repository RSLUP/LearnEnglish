function login_func(){

    var user=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;



    if(user!="" || pass!="")
    {
        if(user=="1" && pass=="1")
        {
            
            var date=new Date().toISOString().split('T');

            localStorage.setItem("userName", user);
            localStorage.setItem("loginDate", date[0]);


            window.location.href = "index.html";
           return false;
        }
        else
        {
            alert("invalid Username or password.!");
        }
    }
    else
    {
        alert("You cannot blank username or password.!");
    }

}

function retrive_func() {

    var d = new Date();
    var n = d.toISOString().split('T');
    
    var stored_name = localStorage.getItem('userName');
    var stored_date = localStorage.getItem("date");

    if ((stored_date !== n[0]) || (stored_name == null)) {
        window.location.href= "login.html";  
    } else {
        alert("Page Loaded:).");
    }
}


function logout_func(){

    localStorage.clear();
    window.location.href = "login.html";

}

function preventGoBack()
{
    window.history.forward();
}
setTimeout("preventGoBack()",0);
window.onunload = function() {null};


function userdetails() {
    var loggedtime = localStorage.getItem("date");
    var name = localStorage.getItem("username");
    if (name !== "") {
        var user = localStorage.getItem("username");
        alert("Hi, " + name + "\nYou logged in " + localStorage.clickcount + " times.\nYour login time: " + loggedtime);

    }
}
