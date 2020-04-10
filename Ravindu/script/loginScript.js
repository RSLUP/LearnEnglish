

const user = "RSLUP";
const pass = "r5Lup@Ac9";




function login(){


  //QUERYSELECTORS are not working
  // var usernminp = document.querySelector(".usernminp");
  // var passinp = document.querySelector(".passinp");

   var username=document.login_form.usernminp.value;
   var password = document.login_form.passinp.value;



  if (user == usernminp && pass == passinp) {

window.open("index.html");

    //if data are correct store them in local
    localStorage.setItem("userName", usernminp);
    localStorage.setItem("logDate", date);


  }else
  {
      message.innerHTML = "Invalid username and password!";

  }


}
