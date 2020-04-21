

const user = "RSLUP";
const pass = "r5Lup@Ac9";

  document.write(username);


function login(){


  //QUERYSELECTORS are not working
    var usernminp = document.querySelector(".usernminp").value;
    var passinp = document.querySelector(".passinp").value;

    // var usernminp = document.login_form.username.value;
    // var passinp = document.login_form.passinp.value;



  if (user == usernminp && pass == passinp) {
document.write(username);
window.open("index.html");

    //if data are correct store them in local
    localStorage.setItem("userName", usernminp);
    localStorage.setItem("logDate", date);


  }else
  {
      message.innerHTML = "Invalid username and password!";

  }


}
