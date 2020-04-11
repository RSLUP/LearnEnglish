function sessionCheck(){

    var sessionDate = new Date();
    var logDate = localStorage.getItem("logDateCheck");
    var logUser = localStorage.getItem("logUser");
    var logTime = localStorage.getItem("logTimeDisplay");
    //alert(logDate);
    
    if(logDate==null || sessionDate.toDateString() != logDate) 
    {
        alert("Session Expired \n Please login!");
        window.location.href = "index00.html";
    }
    else{
        document.getElementById("loggeduser").innerHTML="Logged as : <b>" + logUser + "</b> | @ " + logTime;
    }
    
}
