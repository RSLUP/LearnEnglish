var a=false;

function check() {
    a=true;
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


    var msg=["Well done!:)","That's just okay :|","You need more practice :("];
    // var picture=["gif/dancing.gif"];
    var index;
    if( correct<6){
        index=2;
    }
    if (correct>5 && correct<9){
        index=1;
    }
    if (correct>8 && correct<11){
        index=0;
    }

    document.getElementById("msg").innerHTML=msg[index];
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("result").innerHTML="You got "+ correct+" correct.";
    // document.getElementById("win_gif1").src=picture[0];
}


function tenses_check() {
    a=true;
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

    if(question1=="wants"){
        correct++;
    }
    if(question2=="tastes"){
        correct++;
    }
    if(question3=="watches"){
        correct++;
    }
    if(question4=="went"){
        correct++;
    }
    if(question5=="went"){
        correct++;
    }
    if(question6=="has_been_crying"){
        correct++;
    }
    if(question7=="saw"){
        correct++;
    }
    if(question8=="haven't_seen"){
        correct++;
    }
    if(question9=="appears"){
        correct++;
    }
    if(question10=="was_mending"){
        correct++;
    }

    var tensesmsg=["Well done!:)","That's just okay :|","You need more practice :("];
    // var picture=["gif/dancing.gif"];
    var index;
    if( correct<6){
        index=2;
    }
    if (correct>5 && correct<9){
        index=1;
    }
    if (correct>8 && correct<11){
        index=0;
    }



    document.getElementById("tenses_msg").innerHTML=tensesmsg[index];
    document.getElementById("after_tenses_submit").style.visibility="visible";
    document.getElementById("tenses_result").innerHTML="You got "+ correct+" correct.";


}


function highlight(){
    // document.getElementsByClassName("verbn").style.color="red";
    // document.getElementsByName("que1").style.color="yello";


  if (a) {
      document.getElementById("nadj").style.color = 'darkred';
      document.getElementById("npro").style.color = 'darkred';
      document.getElementById("npre").style.color = 'darkred';
      document.getElementById("nadv").style.color = 'darkred';
      document.getElementById("nverb").style.color = 'darkred';
      document.getElementById("nnoun").style.color = 'darkred';
      document.getElementById("ninter").style.color = 'darkred';
      document.getElementById("nver").style.color = 'darkred';
      document.getElementById("nconj").style.color = 'darkred';
      document.getElementById("nprep").style.color = 'darkred';
  }
}


function tenses_highlight(){

    // document.getElementsByClassName("tense").style.color='darkred';
    if (a) {
        document.getElementById("t1").style.color = 'green';
        document.getElementById("t2").style.color = 'green';
        document.getElementById("t3").style.color = 'green';
        document.getElementById("t4").style.color = 'green';
        document.getElementById("t5").style.color = 'green';
        document.getElementById("t6").style.color = 'green';
        document.getElementById("t7").style.color = 'green';
        document.getElementById("t8").style.color = 'green';
        document.getElementById("t9").style.color = 'green';
        document.getElementById("t10").style.color = 'green';
    }

}

function retrive_func() {
    // window.open("tenses.html");
    var d = new Date();
    var n = d.toISOString();
    //alert(n);
    //
    var stored_name = localStorage.getItem('username');
    // alert("loading");
    var stored_date = localStorage.getItem("date");

    if ((stored_date !== n) || (stored_name == null)) {
        window.open("login.html");
    } else {
        alert("loading");
    }
}