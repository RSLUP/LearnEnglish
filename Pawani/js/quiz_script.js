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


    var msg=["Well done!:)","That's just okay","You need more practice"];

    var index;
    if( correct<6){
        index=2;
    }
    if (correct>5 && correct<9){
        index=1;
    }
    if (correct>9 && correct<11){
        index=0;
    }

    document.getElementById("msg").innerHTML=msg[index];
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("result").innerHTML="You got "+ correct+" correct.";
}


function tenses_check() {
    var question1=document.quiz2form.que1.value;
    var question2=document.quiz2form.que2.value;
    var question3=document.quiz2form.que3.value;
    var question4=document.quiz2form.que4.value;
    var question5=document.quiz2form.que5.value;
    var question6=document.quiz2form.que6.value;
    var question7=document.quiz2form.que7.value;
    var question8=document.quiz2form.que8.value;
    var question9=document.quiz2form.que9.value;
    var question10=document.quiz2form.que10.value;
    var correct=0;

    if(question1=="Wants"){
        correct++;
    }
    if(question2=="Tastes"){
        correct++;
    }
    if(question3=="Watches"){
        correct++;
    }
    if(question4=="Went"){
        correct++;
    }
    if(question5=="Went"){
        correct++;
    }
    if(question6=="Has been crying"){
        correct++;
    }
    if(question7=="Saw"){
        correct++;
    }
    if(question8=="Haven't seen"){
        correct++;
    }
    if(question9=="Appears"){
        correct++;
    }
    if(question10=="Was mending"){
        correct++;
    }



}