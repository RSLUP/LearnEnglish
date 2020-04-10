var user=document.getElementById("userIn").value;
var psw=document.getElementById("pswIn").value;

if(user!="" || pass!="")
    {
        if(user=="RSLUP" && pass=="r5Lup@Ac9")
        {
            
            var date=new Date().toISOString().split('T');

            sessionStorage.setItem("userName", user);
            sessionStorage.setItem("loginDate", date[0]);


            window.location.href = "index.html";
           return false;
        }
        else
        {
            alert("invalid Username or password.!");
        }
    }