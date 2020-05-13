function validateData()
	{
      
           var date = new Date().toISOString().split('T');
            localStorage.setItem("date",date); 
            window.location.href ="englishIndex.php";  
            return false;
            
           
         
            
        
        if(!(document.login.txtUsername.value == ""))
        {
            alert("please enter username!");
        }
        
        if(!(document.login.txtPassword.value == ""))
        {
            alert("Please enter pssword!");
        }
       
       
       
        
		
    }
    