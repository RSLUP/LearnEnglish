var form;

function redirect(form){

	var user="RSLUP";
	var pass="r5Lup@Ac9"

	if(form.email.value==user && form.pass.value==pass){
		var logintime = new Date();

		localStorage.setItem("logUser", user);
		localStorage.setItem("logDateCheck", logintime.toDateString());
		localStorage.setItem("logTimeDisplay", logintime.toLocaleString());
		//alert(logtime.toDateString());

		window.location.href = "index01.html";
	}
	
	else{
		document.getElementById("Error").innerHTML="Incorrect username or password.";
	}

}