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
    else
    {
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("username", "RSLUP");
            // Retrieve
            document.getElementById("logininfo").innerHTML = localStorage.getItem("username");
          } else {
            document.getElementById("logininfo").innerHTML = "Sorry, your browser does not support Web Storage...";
          }
    }
    
return (true);
}