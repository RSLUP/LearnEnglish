
function valid()
{
    var user=document.getElementById("txtUser").value;
    var pass=document.getElementById("txtPass").value;



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
    else
    {
        alert("You cannot blank username or password.!");
    }


}




function da()
{


var dt = new Date().toISOString();
var dat=new Date().toISOString().split('T');
//Print results
console.log(dt);
console.log(dat[0]);




}

//da();