

const user = "RSLUP";
const pass = "r5Lup@Ac9";




function login(){

  const usernminp = document.querySelector(".usernminp");
  const passinp = document.querySelector(".passinp");


  if (user == usernminp && pass == passinp) {



    //if data are correct store them in local
    localStorage.setItem("userName", usernminp);
    localStorage.setItem("logDate", date);

    window.open("index.html");
  }else
  {
      message.innerHTML = "Invalid username and password!";

  }


}
