//**modals
//present
var modalspr = document.getElementById("modalspr");
var modalprc = document.getElementById("modalprc");
var modalprp = document.getElementById("modalprp");
var modalprpc = document.getElementById("modalprpc");
//past
var modalspa = document.getElementById("modalspa");
var modalpac = document.getElementById("modalpac");
var modalpap = document.getElementById("modalpap");
var modalpapc = document.getElementById("modalpapc");
//future
var modalsf = document.getElementById("modalsf");
var modalfc = document.getElementById("modalfc");
var modalfp = document.getElementById("modalfp");
var modalfpc = document.getElementById("modalfpc");

//**Model box popup
function sprQuiz(){modalspr.style.display = "block";}
function prcQuiz(){modalprc.style.display = "block";}
function prpQuiz(){modalprp.style.display = "block";}
function prpcQuiz(){modalprpc.style.display = "block";}
function spaQuiz(){modalspa.style.display = "block";}
function pacQuiz(){modalpac.style.display = "block";}
function papQuiz(){modalpap.style.display = "block";}
function papcQuiz(){modalpapc.style.display = "block";}
function sfQuiz(){modalsf.style.display = "block";}
function fcQuiz(){modalfc.style.display = "block";}
function fpQuiz(){modalfp.style.display = "block";}
function fpcQuiz(){modalfpc.style.display = "block";}


//*******************Check Answers*******************

var a1, a2, a3, a4, a5;

//Simple Present-------------------------------
function spr_Submit(a1,a2,a3,a4,a5){
	this.spr1(a1);
	this.spr2(a2);
	this.spr3(a3);
	this.spr4(a4);
	this.spr5(a5);
}

function spr1(a1){
	if(document.getElementById("spr-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("spr-r1").style.color="green";
		document.getElementById("spr-r1").innerHTML = "Correct";
	}
	else{
		document.getElementById("spr-r1").style.color="red";
		document.getElementById("spr-r1").innerHTML = "Wrong";
		document.getElementById("spr-caHead").style.display = "block";
		document.getElementById("spr-ca1").innerHTML = "1) "+a1;
	}
}

function spr2(a2){
	if(document.getElementById("spr-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("spr-r2").style.color="green";
		document.getElementById("spr-r2").innerHTML = "Correct";
	}
	else{
		document.getElementById("spr-r2").style.color="red";
		document.getElementById("spr-r2").innerHTML = "Wrong";
		document.getElementById("spr-caHead").style.display = "block";
		document.getElementById("spr-ca2").innerHTML = "2) "+a2;
	}
}

function spr3(a3){
	if(document.getElementById("spr-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("spr-r3").style.color="green";
		document.getElementById("spr-r3").innerHTML = "Correct";
	}
	else{
		document.getElementById("spr-r3").style.color="red";
		document.getElementById("spr-r3").innerHTML = "Wrong";
		document.getElementById("spr-caHead").style.display = "block";
		document.getElementById("spr-ca3").innerHTML = "3) "+a3;
	}
}

function spr4(a4){
	if(document.getElementById("spr-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("spr-r4").style.color="green";
		document.getElementById("spr-r4").innerHTML = "Correct";
	}
	else{
		document.getElementById("spr-r4").style.color="red";
		document.getElementById("spr-r4").innerHTML = "Wrong";
		document.getElementById("spr-caHead").style.display = "block";
		document.getElementById("spr-ca4").innerHTML = "4) "+a4;
	}
}

function spr5(a5){
	if(document.getElementById("spr-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("spr-r5").style.color="green";
		document.getElementById("spr-r5").innerHTML = "Correct";
	}
	else{
		document.getElementById("spr-r5").style.color="red";
		document.getElementById("spr-r5").innerHTML = "Wrong";
		document.getElementById("spr-caHead").style.display = "block";
		document.getElementById("spr-ca5").innerHTML = "5) "+a5;
	}
}

//Present Continuous-------------------------------
function prc_Submit(a1,a2,a3,a4,a5){
	this.prc1(a1);
	this.prc2(a2);
	this.prc3(a3);
	this.prc4(a4);
	this.prc5(a5);
}

function prc1(a1){
	if(document.getElementById("prc-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("prc-r1").style.color="green";
		document.getElementById("prc-r1").innerHTML = "Correct";
	}
	else{
		document.getElementById("prc-r1").style.color="red";
		document.getElementById("prc-r1").innerHTML = "Wrong";
		document.getElementById("prc-caHead").style.display = "block";
		document.getElementById("prc-ca1").innerHTML = "1) "+a1;
	}
}

function prc2(a2){
	if(document.getElementById("prc-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("prc-r2").style.color="green";
		document.getElementById("prc-r2").innerHTML = "Correct";
	}
	else{
		document.getElementById("prc-r2").style.color="red";
		document.getElementById("prc-r2").innerHTML = "Wrong";
		document.getElementById("prc-caHead").style.display = "block";
		document.getElementById("prc-ca2").innerHTML = "2) "+a2;
	}
}

function prc3(a3){
	if(document.getElementById("prc-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("prc-r3").style.color="green";
		document.getElementById("prc-r3").innerHTML = "Correct";
	}
	else{
		document.getElementById("prc-r3").style.color="red";
		document.getElementById("prc-r3").innerHTML = "Wrong";
		document.getElementById("prc-caHead").style.display = "block";
		document.getElementById("prc-ca3").innerHTML = "3) "+a3;
	}
}

function prc4(a4){
	if(document.getElementById("prc-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("prc-r4").style.color="green";
		document.getElementById("prc-r4").innerHTML = "Correct";
	}
	else{
		document.getElementById("prc-r4").style.color="red";
		document.getElementById("prc-r4").innerHTML = "Wrong";
		document.getElementById("prc-caHead").style.display = "block";
		document.getElementById("prc-ca4").innerHTML = "4) "+a4;
	}
}

function prc5(a5){
	if(document.getElementById("prc-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("prc-r5").style.color="green";
		document.getElementById("prc-r5").innerHTML = "Correct";
	}
	else{
		document.getElementById("prc-r5").style.color="red";
		document.getElementById("prc-r5").innerHTML = "Wrong";
		document.getElementById("prc-caHead").style.display = "block";
		document.getElementById("prc-ca5").innerHTML = "5) "+a5;
	}
}

//Present Perfect-------------------------------
function prp_Submit(a1,a2,a3,a4,a5){
	this.prp1(a1);
	this.prp2(a2);
	this.prp3(a3);
	this.prp4(a4);
	this.prp5(a5);
}

function prp1(a1){
	if(document.getElementById("prp-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("prp-r1").style.color="green";
		document.getElementById("prp-r1").innerHTML = "Correct";
	}
	else{
		document.getElementById("prp-r1").style.color="red";
		document.getElementById("prp-r1").innerHTML = "Wrong";
		document.getElementById("prp-caHead").style.display = "block";
		document.getElementById("prp-ca1").innerHTML = "1) "+a1;
	}
}

function prp2(a2){
	if(document.getElementById("prp-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("prp-r2").style.color="green";
		document.getElementById("prp-r2").innerHTML = "Correct";
	}
	else{
		document.getElementById("prp-r2").style.color="red";
		document.getElementById("prp-r2").innerHTML = "Wrong";
		document.getElementById("prp-caHead").style.display = "block";
		document.getElementById("prp-ca2").innerHTML = "2) "+a2;
	}
}

function prp3(a3){
	if(document.getElementById("prp-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("prp-r3").style.color="green";
		document.getElementById("prp-r3").innerHTML = "Correct";
	}
	else{
		document.getElementById("prp-r3").style.color="red";
		document.getElementById("prp-r3").innerHTML = "Wrong";
		document.getElementById("prp-caHead").style.display = "block";
		document.getElementById("prp-ca3").innerHTML = "3) "+a3;
	}
}

function prp4(a4){
	if(document.getElementById("prp-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("prp-r4").style.color="green";
		document.getElementById("prp-r4").innerHTML = "Correct";
	}
	else{
		document.getElementById("prp-r4").style.color="red";
		document.getElementById("prp-r4").innerHTML = "Wrong";
		document.getElementById("prp-caHead").style.display = "block";
		document.getElementById("prp-ca4").innerHTML = "4) "+a4;
	}
}

function prp5(a5){
	if(document.getElementById("prp-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("prp-r5").style.color="green";
		document.getElementById("prp-r5").innerHTML = "Correct";
	}
	else{
		document.getElementById("prp-r5").style.color="red";
		document.getElementById("prp-r5").innerHTML = "Wrong";
		document.getElementById("prp-caHead").style.display = "block";
		document.getElementById("prp-ca5").innerHTML = "5) "+a5;
	}
}

//Present Perfect Continuous-------------------------------
function prpc_Submit(a1,a2,a3,a4,a5){
	this.prpc1(a1);
	this.prpc2(a2);
	this.prpc3(a3);
	this.prpc4(a4);
	this.prpc5(a5);
}

function prpc1(a1){
	if(document.getElementById("prpc-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("prpc-r1").style.color="green";
		document.getElementById("prpc-r1").innerHTML = "Correct";
	}
	else{
		document.getElementById("prpc-r1").style.color="red";
		document.getElementById("prpc-r1").innerHTML = "Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca1").innerHTML = "1) "+a1;
	}
}

function prpc2(a2){
	if(document.getElementById("prpc-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("prpc-r2").style.color="green";
		document.getElementById("prpc-r2").innerHTML = "Correct";
	}
	else{
		document.getElementById("prpc-r2").style.color="red";
		document.getElementById("prpc-r2").innerHTML = "Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca2").innerHTML = "2) "+a2;
	}
}

function prpc3(a3){
	if(document.getElementById("prpc-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("prpc-r3").style.color="green";
		document.getElementById("prpc-r3").innerHTML = "Correct";
	}
	else{
		document.getElementById("prpc-r3").style.color="red";
		document.getElementById("prpc-r3").innerHTML = "Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca3").innerHTML = "3) "+a3;
	}
}

function prpc4(a4){
	if(document.getElementById("prpc-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("prpc-r4").style.color="green";
		document.getElementById("prpc-r4").innerHTML = "Correct";
	}
	else{
		document.getElementById("prpc-r4").style.color="red";
		document.getElementById("prpc-r4").innerHTML = "Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca4").innerHTML = "4) "+a4;
	}
}

function prpc5(a5){
	if(document.getElementById("prpc-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("prpc-r5").style.color="green";
		document.getElementById("prpc-r5").innerHTML = "Correct";
	}
	else{
		document.getElementById("prpc-r5").style.color="red";
		document.getElementById("prpc-r5").innerHTML = "Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca5").innerHTML = "5) "+a5;
	}
}

//Colse the window
function quizClose() {
    modalspr.style.display = "none";
    modalprc.style.display = "none";
	modalprp.style.display = "none";
	modalprpc.style.display = "none";
	modalspa.style.display = "none";
	modalpac.style.display = "none";
	modalpap.style.display = "none";
	modalpapc.style.display = "none";
	modalsf.style.display = "none";
	modalfc.style.display = "none";
	modalfp.style.display = "none";
	modalfpc.style.display = "none";
}
