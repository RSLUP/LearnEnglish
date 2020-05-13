function timeStamp()
{
    var name = document.login.txtUsername.value;
    var date = window.localStorage.getItem("date");
    alert("Username : "+name+ " \n Date : "+date);


    
}