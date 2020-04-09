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

//login code

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



