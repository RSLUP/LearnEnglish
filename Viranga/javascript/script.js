


//js for tenses
function openPage(pageName, elmnt, color) 
{
   
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) 
  {
    tabcontent[i].style.display = "none";
  }
  
 
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) 
  {
    tablinks[i].style.backgroundColor = "";
  }
  

  document.getElementById(pageName).style.display = "block";
  
  
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

//const profile = document.querySelector(".profile");




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

        window.location.href = "index.html";
        return;     
    }
    if(user===txtuser && pass!==txtpass)
    {
        message.innerHTML = "Please Enter correct password!";
        alert("Please Enter correct password!");
        return;
    }
    if(txtuser==="" && txtpass==="")
    {
        message.innerHTML = "Please Enter username and password!";
        alert("Please Enter username and password!");
        return;
    }
    else

    {
        message.innerHTML = "Invalid username and password!";
        alert("Invalid username and password!");

    }
}


//show password when hover
$(function(){
  $('i').hover(function(){
    $('.txtpass').attr('type','text');
    },function(){
      $('.txtpass').attr('type','password');
    });
});







//redirect to login page

function runFirst()
{   
    var now = new Date();
    var today=now.toISOString().split('T');
    console.log(localStorage.getItem("userName"));
    console.log(localStorage.getItem("logDate"));
    console.log(today[0]);
    //profile.innerHTML = localStorage.getItem("userName");
    

               

    if(localStorage.getItem("userName")=="" ||  localStorage.getItem("logDate")!=today[0])
    {
        alert('Session Expired..!');
        window.location.href = "login.html";
                    
    }
    
    
}
//show user details

const userd = document.querySelector(".profile-details");



function details()
{
    alert('Hi, '+localStorage.getItem("userName") +"\n" +"Name : "+localStorage.getItem("userName") +"\n" + "Last Logging : "+ localStorage.getItem("logDate"));

}
function profile()
{
    userd.classList.add("show");
    document.querySelector(".uname").innerHTML = localStorage.getItem("userName");
    document.querySelector(".uname2").innerHTML = localStorage.getItem("userName");
    document.querySelector(".utime").innerHTML = localStorage.getItem("logDate");
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
//stick header
$(document).ready(function(){
    $('.myHeader').sticky();
  });

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//-------------------------------------------------------------------


//go home
function mainPage()
{
  window.location.href = "index.html";
}

//tabs
function openTab(evt, tenseTab) {
  // Declare all variables
  var i, tabcontent, tablinks;

  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

 
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

 
  document.getElementById(tenseTab).style.display = "block";
  evt.currentTarget.className += " active";
}




//scroll
