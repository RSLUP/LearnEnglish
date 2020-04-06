var modal = document.getElementById("modalquiz");

function openQuiz(){
    modal.style.display = "block";
}

function quizClose(){
    modal.style.display = "none";
}

var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10;
var marks=0;

function quizSubmit(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
    qq1(a1);
    qq2(a2);
    qq3(a3);
    qq3(a4);
    qq3(a5);
    qq3(a6);
    qq3(a7);
    qq3(a8);
    qq3(a9);
    qq3(a10);
    document.getElementById("Button1").style.background="gray";
    document.getElementById("Button1").style.pointerEvents= "none";
    document.getElementById("Marks").style.display="block";
    document.getElementById("Marks").innerHTML = marks +" /10";
    document.getElementById("Button2").style.display="block";
}

function quizRetry(){
    document.getElementById("Button1").style.background="rgb(85, 6, 6)";
    document.getElementById("Button1").style.pointerEvents= "visible";
    document.getElementById("Button2").style.display="none";
    document.getElementById("Marks").style.display="none";
    marks = 0;
}

function qq1(a1){
    if(document.getElementById(a1).checked){
		document.getElementById("r1").style.color="green";
        document.getElementById("r1").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r1").style.color="red";
		document.getElementById("r1").innerHTML = "&#10006 Wrong";
    }
}

function qq2(a2){
    if(document.getElementById(a2).checked){
		document.getElementById("r2").style.color="green";
        document.getElementById("r2").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r2").style.color="red";
		document.getElementById("r2").innerHTML = "&#10006 Wrong";
    }
}

function qq3(a3){
    if(document.getElementById(a3).checked){
		document.getElementById("r3").style.color="green";
        document.getElementById("r3").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r3").style.color="red";
		document.getElementById("r3").innerHTML = "&#10006 Wrong";
    }
}

function qq4(a4){
    if(document.getElementById(a4).checked){
		document.getElementById("r4").style.color="green";
        document.getElementById("r4").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r4").style.color="red";
		document.getElementById("r4").innerHTML = "&#10006 Wrong";
    }
}

function qq5(a5){
    if(document.getElementById(a5).checked){
		document.getElementById("r5").style.color="green";
        document.getElementById("r5").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r5").style.color="red";
		document.getElementById("r5").innerHTML = "&#10006 Wrong";
    }
}

function qq6(a6){
    if(document.getElementById(a6).checked){
		document.getElementById("r6").style.color="green";
        document.getElementById("r6").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r6").style.color="red";
		document.getElementById("r6").innerHTML = "&#10006 Wrong";
    }
}

function qq7(a7){
    if(document.getElementById(a7).checked){
		document.getElementById("r7").style.color="green";
        document.getElementById("r7").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r7").style.color="red";
		document.getElementById("r7").innerHTML = "&#10006 Wrong";
    }
}

function qq8(a8){
    if(document.getElementById(a8).checked){
		document.getElementById("r8").style.color="green";
        document.getElementById("r8").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r8").style.color="red";
		document.getElementById("r8").innerHTML = "&#10006 Wrong";
    }
}

function qq9(a9){
    if(document.getElementById(a9).checked){
		document.getElementById("r9").style.color="green";
        document.getElementById("r9").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r9").style.color="red";
		document.getElementById("r9").innerHTML = "&#10006 Wrong";
    }
}

function qq10(a10){
    if(document.getElementById(a10).checked){
		document.getElementById("r10").style.color="green";
        document.getElementById("r10").innerHTML = "&#10004 Correct";
        marks++;
	}
	else{
		document.getElementById("r10").style.color="red";
		document.getElementById("r10").innerHTML = "&#10006 Wrong";
    }
}