//document.quiz1_div = undefined;

function check() {
    var question1=document.quiz1form.que1.value;
    var question2=document.quiz1form.que2.value;
    var question3=document.quiz1form.que3.value;
    var question4=document.quiz1form.que4.value;
    var question5=document.quiz1form.que5.value;
    var question6=document.quiz1form.que6.value;
    var question7=document.quiz1form.que7.value;
    var question8=document.quiz1form.que8.value;
    var question9=document.quiz1form.que9.value;
    var question10=document.quiz1form.que10.value;
    var correct=0;

    if(question1=="adjective"){
        correct++;
    }
    if(question2=="pronoun"){
        correct++;
    }
    if(question3=="preposition"){
        correct++;
    }
    if(question4=="adverb"){
        correct++;
    }
    if(question5=="verb"){
        correct++;
    }
    if(question6=="noun"){
        correct++;
    }
    if(question7=="verb"){
        correct++;
    }
    if(question8=="interjection"){
        correct++;
    }
    if(question9=="conjunction"){
        correct++;
    }
    if(question10=="preposition"){
        correct++;
    }
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("result").innerHTML="You got "+ correct+" correct.";
}