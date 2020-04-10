function validateData()
	{
        if(!(document.login.txtUsername.value == "RSLUP" && document.login.txtPassword.value == "r5Lup@Ac9"))
        {
            alert("Invalid Username and Password!");
            document.login.txtUsername.focus() ;
            return false;
        }
        else{
            var name = document.login.txtUsername.value;
            localStorage.setItem("name", name);
            var date = new Date().toISOString().split('T');
            localStorage.setItem("date",date); 
            window.location.href ="englishIndex.html";  
            return false;
            }
           
            
            
        
        if(!(document.login.txtUsername.value == "RSLUP"))
        {
            alert("Username is incorrect!");
        }
        
        if(!(document.login.txtPassword.value == "r5Lup@Ac9"))
        {
            alert("Password is incorrect!");
        }
       
       
       
        
		
    }
    