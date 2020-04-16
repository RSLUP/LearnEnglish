
//js for tenses
function openPage(pageName, elmnt, color) 
{
    // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) 
  {
    tabcontent[i].style.display = "none";
  }
  
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) 
  {
    tablinks[i].style.backgroundColor = "";
  }
  
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  
  // add color to button
  elmnt.style.backgroundColor = color;
  
}
  

//js for login design

const inputs = document.querySelectorAll('.input');

function focusFunc()
{
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}
function blurFunc()
{
    let parent = this.parentNode.parentNode;
    if(this.value=="")
    {
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

//js for login code

// const txtuser = document.querySelector(".txtuser");
// const txtpass = document.querySelector(".txtpass");
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");
const form = document.querySelector(".form");

const profile = document.querySelector(".profile");




const user = "RSLUP";
const pass = "r5Lup@Ac9";

function login()
{
    var txtuser = document.querySelector(".txtuser").value;
    var txtpass = document.querySelector(".txtpass").value;
    if(user===txtuser && pass===txtpass)
    {
        
        var date = new Date().toISOString().split('T');
        
        //if data are correct store them in local
        localStorage.setItem("userName", txtuser);
        localStorage.setItem("logDate", date[0]);   

        window.location.href = "speech.html";
        return;     
    }
    if(user===txtuser.value && pass!==txtpass.value)
    {
        message.innerHTML = "Invalid password!";
        alert("Invalid password!");
        return;
    }
    else
    
    {
        message.innerHTML = "Invalid username and password!";
        alert("Invalid username and password!");
    
    }
}

//redirect to login page

function runFirst()
{   
    var now = new Date();
    var today=now.toISOString().split('T');
    console.log(localStorage.getItem("userName"));
    console.log(localStorage.getItem("logDate"));
    console.log(today[0]);
    profile.innerHTML = localStorage.getItem("userName");
               

    if(localStorage.getItem("userName")=="" ||  localStorage.getItem("logDate")!=today[0])
    {
        alert('Session Expired..!');
        window.location.href = "login.html";
                    
    }
    else{
        document.querySelector(".day").innerHTML= localStorage.getItem("userName") +" on " + now.toLocaleString();
    }
    
}

function details()
{
    alert('Hi, '+localStorage.getItem("userName") +"\n" +"Name : "+localStorage.getItem("userName") +"\n" + "Last Logging : "+ localStorage.getItem("logDate"));

}
function exitUd()
{
    userd.classList.remove("show");
}
function logout()
{
    localStorage.clear();
    alert('Logging Out..!');
    window.location.href = "login.html";
   
}
