
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

const txtuser = document.querySelector(".txtuser");
const txtpass = document.querySelector(".txtpass");
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");
const form = document.querySelector(".form");


const user = "RSLUP";
const pass = "r5Lup@Ac9";

submit.addEventListener("click",(e)=>
{

    if(user===txtuser.value && pass===txtpass.value)
    {
        
        var date = new Date().toISOString().split('T');

        sessionStorage.setItem("userName", txtuser);
        sessionStorage.setItem("loginDate", date[0]);

        window.location.href = "speech.html";
        return;
    }
    if(user===txtuser.value && pass!==txtpass.value)
    {
        message.innerHTML = "Invalid password!";
        return;
    }
    else
    
    {
        message.innerHTML = "Invalid username and password!";
    
    }
});



function runFirst()
{

    var today = new Date().toISOString().split('T');

    if(sessionStorage.getItem("userName")==="" ||  sessionStorage.getItem("loginDate")!==today[0])
    {
        window.location.href = "login.html";
                   
    }
              
}
