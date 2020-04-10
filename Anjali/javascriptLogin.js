function validateData()
	{
        if(!(document.login.txtUsername.value == "RSLUP" && document.login.txtPassword.value == "r5Lup@Ac9"))
        {
            alert("Invalid Username and Password!");
            document.login.txtUsername.focus() ;
            return true;
        }
        if(!(document.login.txtUsername.value == "RSLUP"))
        {
            alert("Username is incorrect!");
        }
        
        if(!(document.login.txtPassword.value == "r5Lup@Ac9"))
        {
            alert("Password is incorrect!");
        }
       
       /* if((document.login.txtUsername.value == "RSLUP") || (document.login.txtPassword.value == "r5Lup@Ac9"))
        {
            alert("username or password is incorrect!");
            document.login.txtUsername.focus() ;
            return false;
        }*/
        if( document.login.txtUsername.value == "RSLUP" && document.login.txtPassword.value == "r5Lup@Ac9")
        {
            window.localStorage.setItem("LocalStUsername",document.login.txtUsername.value);
            var date = new Date().toISOString();
            window.localStorage.setItem("loginTimeStamp", date);
            
        }
        
		if( document.login.txtUsername.value == "" ) {
       		alert( "Please provide your Username!" );
       		document.login.txtUsername.focus() ;
       		return false;
     	}
   		 if( document.login.txtPassword.value == "" ) {
      		 alert( "Please provide your password!" );
       		document.login.txtPassword.focus() ;
       		return false;
            }
            
    }
    