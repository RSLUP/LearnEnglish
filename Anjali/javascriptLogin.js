function validateData()
	{
        if((document.login.txtUsername.value == "RSLUP") && (document.login.txtPassword.value == "r5Lup@Ac9"))
        {

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
    