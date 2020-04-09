function validate()
{
    if( document.loginForm.username.value == "" || document.loginForm.password.value == "")
    {
      alert( "Please provide both username and the password!" );
     document.loginForm.username.focus() ;
     return false;
    }
    if(document.loginForm.username.value!="RSLUP" || document.loginForm.password.value!="ama123")
    {
         alert("Please provide the correct username and the password");
        document.loginForm.username.focus();
        return false;
    }
    else{
      if (typeof(Storage) !== "undefined") {
        // Store
        var val = document.getElementById("username").value;
        localStorage.setItem("key", val);
       // window.location.href="EnglishHub.html";
        // Retrieve
      // document.getElementById("log").innerHTML = localStorage.getItem("key");
      var logDate = new Date();
      var dd = logDate.getDate();
      var mm = logDate.getMonth(); 
      var yyyy = logDate.getFullYear();
      logDate = mm+'-'+dd+'-'+yyyy;

      localStorage.setItem("logdate", logDate);
      document.getElementById("log").innerHTML = localStorage.getItem("logdate");
     
      } else {
        document.getElementById("log").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
    }
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
   
return (true);
}

