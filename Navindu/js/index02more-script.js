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
		document.getElementById("spr-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spr-r1").style.color="red";
		document.getElementById("spr-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("spr-caHead").style.display = "block";
		document.getElementById("spr-ca1").innerHTML = "1) "+a1;
	}
}

function spr2(a2){
	if(document.getElementById("spr-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("spr-r2").style.color="green";
		document.getElementById("spr-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spr-r2").style.color="red";
		document.getElementById("spr-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("spr-caHead").style.display = "block";
		document.getElementById("spr-ca2").innerHTML = "2) "+a2;
	}
}

function spr3(a3){
	if(document.getElementById("spr-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("spr-r3").style.color="green";
		document.getElementById("spr-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spr-r3").style.color="red";
		document.getElementById("spr-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("spr-caHead").style.display = "block";
		document.getElementById("spr-ca3").innerHTML = "3) "+a3;
	}
}

function spr4(a4){
	if(document.getElementById("spr-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("spr-r4").style.color="green";
		document.getElementById("spr-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spr-r4").style.color="red";
		document.getElementById("spr-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("spr-caHead").style.display = "block";
		document.getElementById("spr-ca4").innerHTML = "4) "+a4;
	}
}

function spr5(a5){
	if(document.getElementById("spr-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("spr-r5").style.color="green";
		document.getElementById("spr-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spr-r5").style.color="red";
		document.getElementById("spr-r5").innerHTML = "&#10006 Wrong";
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
		document.getElementById("prc-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prc-r1").style.color="red";
		document.getElementById("prc-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("prc-caHead").style.display = "block";
		document.getElementById("prc-ca1").innerHTML = "1) "+a1;
	}
}

function prc2(a2){
	if(document.getElementById("prc-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("prc-r2").style.color="green";
		document.getElementById("prc-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prc-r2").style.color="red";
		document.getElementById("prc-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("prc-caHead").style.display = "block";
		document.getElementById("prc-ca2").innerHTML = "2) "+a2;
	}
}

function prc3(a3){
	if(document.getElementById("prc-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("prc-r3").style.color="green";
		document.getElementById("prc-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prc-r3").style.color="red";
		document.getElementById("prc-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("prc-caHead").style.display = "block";
		document.getElementById("prc-ca3").innerHTML = "3) "+a3;
	}
}

function prc4(a4){
	if(document.getElementById("prc-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("prc-r4").style.color="green";
		document.getElementById("prc-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prc-r4").style.color="red";
		document.getElementById("prc-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("prc-caHead").style.display = "block";
		document.getElementById("prc-ca4").innerHTML = "4) "+a4;
	}
}

function prc5(a5){
	if(document.getElementById("prc-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("prc-r5").style.color="green";
		document.getElementById("prc-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prc-r5").style.color="red";
		document.getElementById("prc-r5").innerHTML = "&#10006 Wrong";
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
		document.getElementById("prp-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prp-r1").style.color="red";
		document.getElementById("prp-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("prp-caHead").style.display = "block";
		document.getElementById("prp-ca1").innerHTML = "1) "+a1;
	}
}

function prp2(a2){
	if(document.getElementById("prp-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("prp-r2").style.color="green";
		document.getElementById("prp-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prp-r2").style.color="red";
		document.getElementById("prp-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("prp-caHead").style.display = "block";
		document.getElementById("prp-ca2").innerHTML = "2) "+a2;
	}
}

function prp3(a3){
	if(document.getElementById("prp-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("prp-r3").style.color="green";
		document.getElementById("prp-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prp-r3").style.color="red";
		document.getElementById("prp-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("prp-caHead").style.display = "block";
		document.getElementById("prp-ca3").innerHTML = "3) "+a3;
	}
}

function prp4(a4){
	if(document.getElementById("prp-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("prp-r4").style.color="green";
		document.getElementById("prp-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prp-r4").style.color="red";
		document.getElementById("prp-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("prp-caHead").style.display = "block";
		document.getElementById("prp-ca4").innerHTML = "4) "+a4;
	}
}

function prp5(a5){
	if(document.getElementById("prp-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("prp-r5").style.color="green";
		document.getElementById("prp-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prp-r5").style.color="red";
		document.getElementById("prp-r5").innerHTML = "&#10006 Wrong";
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
		document.getElementById("prpc-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prpc-r1").style.color="red";
		document.getElementById("prpc-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca1").innerHTML = "1) "+a1;
	}
}

function prpc2(a2){
	if(document.getElementById("prpc-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("prpc-r2").style.color="green";
		document.getElementById("prpc-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prpc-r2").style.color="red";
		document.getElementById("prpc-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca2").innerHTML = "2) "+a2;
	}
}

function prpc3(a3){
	if(document.getElementById("prpc-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("prpc-r3").style.color="green";
		document.getElementById("prpc-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prpc-r3").style.color="red";
		document.getElementById("prpc-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca3").innerHTML = "3) "+a3;
	}
}

function prpc4(a4){
	if(document.getElementById("prpc-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("prpc-r4").style.color="green";
		document.getElementById("prpc-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prpc-r4").style.color="red";
		document.getElementById("prpc-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca4").innerHTML = "4) "+a4;
	}
}

function prpc5(a5){
	if(document.getElementById("prpc-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("prpc-r5").style.color="green";
		document.getElementById("prpc-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("prpc-r5").style.color="red";
		document.getElementById("prpc-r5").innerHTML = "&#10006 Wrong";
		document.getElementById("prpc-caHead").style.display = "block";
		document.getElementById("prpc-ca5").innerHTML = "5) "+a5;
	}
}

//Simple Past-------------------------------
function spa_Submit(a1,a2,a3,a4,a5){
	this.spa1(a1);
	this.spa2(a2);
	this.spa3(a3);
	this.spa4(a4);
	this.spa5(a5);
}

function spa1(a1){
	if(document.getElementById("spa-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("spa-r1").style.color="green";
		document.getElementById("spa-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spa-r1").style.color="red";
		document.getElementById("spa-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("spa-caHead").style.display = "block";
		document.getElementById("spa-ca1").innerHTML = "1) "+a1;
	}
}

function spa2(a2){
	if(document.getElementById("spa-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("spa-r2").style.color="green";
		document.getElementById("spa-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spa-r2").style.color="red";
		document.getElementById("spa-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("spa-caHead").style.display = "block";
		document.getElementById("spa-ca2").innerHTML = "2) "+a2;
	}
}

function spa3(a3){
	if(document.getElementById("spa-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("spa-r3").style.color="green";
		document.getElementById("spa-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spa-r3").style.color="red";
		document.getElementById("spa-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("spa-caHead").style.display = "block";
		document.getElementById("spa-ca3").innerHTML = "3) "+a3;
	}
}

function spa4(a4){
	if(document.getElementById("spa-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("spa-r4").style.color="green";
		document.getElementById("spa-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spa-r4").style.color="red";
		document.getElementById("spa-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("spa-caHead").style.display = "block";
		document.getElementById("spa-ca4").innerHTML = "4) "+a4;
	}
}

function spa5(a5){
	if(document.getElementById("spa-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("spa-r5").style.color="green";
		document.getElementById("spa-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("spa-r5").style.color="red";
		document.getElementById("spa-r5").innerHTML = "&#10006 Wrong";
		document.getElementById("spa-caHead").style.display = "block";
		document.getElementById("spa-ca5").innerHTML = "5) "+a5;
	}
}

//Past continu-------------------------------
function pac_Submit(a1,a2,a3,a4,a5){
	this.pac1(a1);
	this.pac2(a2);
	this.pac3(a3);
	this.pac4(a4);
	this.pac5(a5);
}

function pac1(a1){
	if(document.getElementById("pac-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("pac-r1").style.color="green";
		document.getElementById("pac-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pac-r1").style.color="red";
		document.getElementById("pac-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("pac-caHead").style.display = "block";
		document.getElementById("pac-ca1").innerHTML = "1) "+a1;
	}
}

function pac2(a2){
	if(document.getElementById("pac-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("pac-r2").style.color="green";
		document.getElementById("pac-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pac-r2").style.color="red";
		document.getElementById("pac-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("pac-caHead").style.display = "block";
		document.getElementById("pac-ca2").innerHTML = "2) "+a2;
	}
}

function pac3(a3){
	if(document.getElementById("pac-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("pac-r3").style.color="green";
		document.getElementById("pac-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pac-r3").style.color="red";
		document.getElementById("pac-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("pac-caHead").style.display = "block";
		document.getElementById("pac-ca3").innerHTML = "3) "+a3;
	}
}

function pac4(a4){
	if(document.getElementById("pac-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("pac-r4").style.color="green";
		document.getElementById("pac-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pac-r4").style.color="red";
		document.getElementById("pac-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("pac-caHead").style.display = "block";
		document.getElementById("pac-ca4").innerHTML = "4) "+a4;
	}
}

function pac5(a5){
	if(document.getElementById("pac-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("pac-r5").style.color="green";
		document.getElementById("pac-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pac-r5").style.color="red";
		document.getElementById("pac-r5").innerHTML = "&#10006 Wrong";
		document.getElementById("pac-caHead").style.display = "block";
		document.getElementById("pac-ca5").innerHTML = "5) "+a5;
	}
}

//past perfect-------------------------------
function pap_Submit(a1,a2,a3,a4,a5){
	this.pap1(a1);
	this.pap2(a2);
	this.pap3(a3);
	this.pap4(a4);
	this.pap5(a5);
}

function pap1(a1){
	if(document.getElementById("pap-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("pap-r1").style.color="green";
		document.getElementById("pap-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pap-r1").style.color="red";
		document.getElementById("pap-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("pap-caHead").style.display = "block";
		document.getElementById("pap-ca1").innerHTML = "1) "+a1;
	}
}

function pap2(a2){
	if(document.getElementById("pap-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("pap-r2").style.color="green";
		document.getElementById("pap-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pap-r2").style.color="red";
		document.getElementById("pap-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("pap-caHead").style.display = "block";
		document.getElementById("pap-ca2").innerHTML = "2) "+a2;
	}
}

function pap3(a3){
	if(document.getElementById("pap-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("pap-r3").style.color="green";
		document.getElementById("pap-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pap-r3").style.color="red";
		document.getElementById("pap-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("pap-caHead").style.display = "block";
		document.getElementById("pap-ca3").innerHTML = "3) "+a3;
	}
}

function pap4(a4){
	if(document.getElementById("pap-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("pap-r4").style.color="green";
		document.getElementById("pap-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pap-r4").style.color="red";
		document.getElementById("pap-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("pap-caHead").style.display = "block";
		document.getElementById("pap-ca4").innerHTML = "4) "+a4;
	}
}

function pap5(a5){
	if(document.getElementById("pap-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("pap-r5").style.color="green";
		document.getElementById("pap-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("pap-r5").style.color="red";
		document.getElementById("pap-r5").innerHTML = "&#10006 Wrong";
		document.getElementById("pap-caHead").style.display = "block";
		document.getElementById("pap-ca5").innerHTML = "5) "+a5;
	}
}

//past perfect continuous-------------------------------
function papc_Submit(a1,a2,a3,a4,a5){
	this.papc1(a1);
	this.papc2(a2);
	this.papc3(a3);
	this.papc4(a4);
	this.papc5(a5);
}

function papc1(a1){
	if(document.getElementById("papc-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("papc-r1").style.color="green";
		document.getElementById("papc-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("papc-r1").style.color="red";
		document.getElementById("papc-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("papc-caHead").style.display = "block";
		document.getElementById("papc-ca1").innerHTML = "1) "+a1;
	}
}

function papc2(a2){
	if(document.getElementById("papc-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("papc-r2").style.color="green";
		document.getElementById("papc-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("papc-r2").style.color="red";
		document.getElementById("papc-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("papc-caHead").style.display = "block";
		document.getElementById("papc-ca2").innerHTML = "2) "+a2;
	}
}

function papc3(a3){
	if(document.getElementById("papc-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("papc-r3").style.color="green";
		document.getElementById("papc-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("papc-r3").style.color="red";
		document.getElementById("papc-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("papc-caHead").style.display = "block";
		document.getElementById("papc-ca3").innerHTML = "3) "+a3;
	}
}

function papc4(a4){
	if(document.getElementById("papc-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("papc-r4").style.color="green";
		document.getElementById("papc-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("papc-r4").style.color="red";
		document.getElementById("papc-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("papc-caHead").style.display = "block";
		document.getElementById("papc-ca4").innerHTML = "4) "+a4;
	}
}

function papc5(a5){
	if(document.getElementById("papc-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("papc-r5").style.color="green";
		document.getElementById("papc-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("papc-r5").style.color="red";
		document.getElementById("papc-r5").innerHTML = "&#10006 Wrong";
		document.getElementById("papc-caHead").style.display = "block";
		document.getElementById("papc-ca5").innerHTML = "5) "+a5;
	}
}

//Simple future-------------------------------
function sf_Submit(a1,a2,a3,a4,a5){
	this.sf1(a1);
	this.sf2(a2);
	this.sf3(a3);
	this.sf4(a4);
	this.sf5(a5);
}

function sf1(a1){
	if(document.getElementById("sf-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("sf-r1").style.color="green";
		document.getElementById("sf-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("sf-r1").style.color="red";
		document.getElementById("sf-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("sf-caHead").style.display = "block";
		document.getElementById("sf-ca1").innerHTML = "1) "+a1;
	}
}

function sf2(a2){
	if(document.getElementById("sf-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("sf-r2").style.color="green";
		document.getElementById("sf-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("sf-r2").style.color="red";
		document.getElementById("sf-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("sf-caHead").style.display = "block";
		document.getElementById("sf-ca2").innerHTML = "2) "+a2;
	}
}

function sf3(a3){
	if(document.getElementById("sf-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("sf-r3").style.color="green";
		document.getElementById("sf-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("sf-r3").style.color="red";
		document.getElementById("sf-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("sf-caHead").style.display = "block";
		document.getElementById("sf-ca3").innerHTML = "3) "+a3;
	}
}

function sf4(a4){
	if(document.getElementById("sf-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("sf-r4").style.color="green";
		document.getElementById("sf-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("sf-r4").style.color="red";
		document.getElementById("sf-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("sf-caHead").style.display = "block";
		document.getElementById("sf-ca4").innerHTML = "4) "+a4;
	}
}

function sf5(a5){
	if(document.getElementById("sf-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("sf-r5").style.color="green";
		document.getElementById("sf-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("sf-r5").style.color="red";
		document.getElementById("sf-r5").innerHTML = "&#10006 Wrong";
		document.getElementById("sf-caHead").style.display = "block";
		document.getElementById("sf-ca5").innerHTML = "5) "+a5;
	}
}

//Future continuous-------------------------------
function fc_Submit(a1,a2,a3,a4,a5){
	this.fc1(a1);
	this.fc2(a2);
	this.fc3(a3);
	this.fc4(a4);
	this.fc5(a5);
}

function fc1(a1){
	if(document.getElementById("fc-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("fc-r1").style.color="green";
		document.getElementById("fc-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fc-r1").style.color="red";
		document.getElementById("fc-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("fc-caHead").style.display = "block";
		document.getElementById("fc-ca1").innerHTML = "1) "+a1;
	}
}

function fc2(a2){
	if(document.getElementById("fc-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("fc-r2").style.color="green";
		document.getElementById("fc-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fc-r2").style.color="red";
		document.getElementById("fc-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("fc-caHead").style.display = "block";
		document.getElementById("fc-ca2").innerHTML = "2) "+a2;
	}
}

function fc3(a3){
	if(document.getElementById("fc-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("fc-r3").style.color="green";
		document.getElementById("fc-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fc-r3").style.color="red";
		document.getElementById("fc-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("fc-caHead").style.display = "block";
		document.getElementById("fc-ca3").innerHTML = "3) "+a3;
	}
}

function fc4(a4){
	if(document.getElementById("fc-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("fc-r4").style.color="green";
		document.getElementById("fc-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fc-r4").style.color="red";
		document.getElementById("fc-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("fc-caHead").style.display = "block";
		document.getElementById("fc-ca4").innerHTML = "4) "+a4;
	}
}

function fc5(a5){
	if(document.getElementById("fc-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("fc-r5").style.color="green";
		document.getElementById("fc-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fc-r5").style.color="red";
		document.getElementById("fc-r5").innerHTML = "&#10006 Wrong";
		document.getElementById("fc-caHead").style.display = "block";
		document.getElementById("fc-ca5").innerHTML = "5) "+a5;
	}
}

//future perfect-------------------------------
function fp_Submit(a1,a2,a3,a4,a5){
	this.fp1(a1);
	this.fp2(a2);
	this.fp3(a3);
	this.fp4(a4);
	this.fp5(a5);
}

function fp1(a1){
	if(document.getElementById("fp-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("fp-r1").style.color="green";
		document.getElementById("fp-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fp-r1").style.color="red";
		document.getElementById("fp-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("fp-caHead").style.display = "block";
		document.getElementById("fp-ca1").innerHTML = "1) "+a1;
	}
}

function fp2(a2){
	if(document.getElementById("fp-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("fp-r2").style.color="green";
		document.getElementById("fp-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fp-r2").style.color="red";
		document.getElementById("fp-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("fp-caHead").style.display = "block";
		document.getElementById("fp-ca2").innerHTML = "2) "+a2;
	}
}

function fp3(a3){
	if(document.getElementById("fp-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("fp-r3").style.color="green";
		document.getElementById("fp-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fp-r3").style.color="red";
		document.getElementById("fp-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("fp-caHead").style.display = "block";
		document.getElementById("fp-ca3").innerHTML = "3) "+a3;
	}
}

function fp4(a4){
	if(document.getElementById("fp-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("fp-r4").style.color="green";
		document.getElementById("fp-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fp-r4").style.color="red";
		document.getElementById("fp-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("fp-caHead").style.display = "block";
		document.getElementById("fp-ca4").innerHTML = "4) "+a4;
	}
}

function fp5(a5){
	if(document.getElementById("fp-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("fp-r5").style.color="green";
		document.getElementById("fp-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fp-r5").style.color="red";
		document.getElementById("fp-r5").innerHTML = "&#10006 Wrong";
		document.getElementById("fp-caHead").style.display = "block";
		document.getElementById("fp-ca5").innerHTML = "5) "+a5;
	}
}

//Future perfect continuous-------------------------------
function fpc_Submit(a1,a2,a3,a4,a5){
	this.fpc1(a1);
	this.fpc2(a2);
	this.fpc3(a3);
	this.fpc4(a4);
	this.fpc5(a5);
}

function fpc1(a1){
	if(document.getElementById("fpc-q1").value.toUpperCase()==a1.toUpperCase()){
		document.getElementById("fpc-r1").style.color="green";
		document.getElementById("fpc-r1").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fpc-r1").style.color="red";
		document.getElementById("fpc-r1").innerHTML = "&#10006 Wrong";
		document.getElementById("fpc-caHead").style.display = "block";
		document.getElementById("fpc-ca1").innerHTML = "1) "+a1;
	}
}

function fpc2(a2){
	if(document.getElementById("fpc-q2").value.toUpperCase()==a2.toUpperCase()){
		document.getElementById("fpc-r2").style.color="green";
		document.getElementById("fpc-r2").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fpc-r2").style.color="red";
		document.getElementById("fpc-r2").innerHTML = "&#10006 Wrong";
		document.getElementById("fpc-caHead").style.display = "block";
		document.getElementById("fpc-ca2").innerHTML = "2) "+a2;
	}
}

function fpc3(a3){
	if(document.getElementById("fpc-q3").value.toUpperCase()==a3.toUpperCase()){
		document.getElementById("fpc-r3").style.color="green";
		document.getElementById("fpc-r3").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fpc-r3").style.color="red";
		document.getElementById("fpc-r3").innerHTML = "&#10006 Wrong";
		document.getElementById("fpc-caHead").style.display = "block";
		document.getElementById("fpc-ca3").innerHTML = "3) "+a3;
	}
}

function fpc4(a4){
	if(document.getElementById("fpc-q4").value.toUpperCase()==a4.toUpperCase()){
		document.getElementById("fpc-r4").style.color="green";
		document.getElementById("fpc-r4").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fpc-r4").style.color="red";
		document.getElementById("fpc-r4").innerHTML = "&#10006 Wrong";
		document.getElementById("fpc-caHead").style.display = "block";
		document.getElementById("fpc-ca4").innerHTML = "4) "+a4;
	}
}

function fpc5(a5){
	if(document.getElementById("fpc-q5").value.toUpperCase()==a5.toUpperCase()){
		document.getElementById("fpc-r5").style.color="green";
		document.getElementById("fpc-r5").innerHTML = "&#10004 Correct";
	}
	else{
		document.getElementById("fpc-r5").style.color="red";
		document.getElementById("fpc-r5").innerHTML = "&#10006 Wrong";
		document.getElementById("fpc-caHead").style.display = "block";
		document.getElementById("fpc-ca5").innerHTML = "5) "+a5;
	}
}

//Colse the window--------------------------------
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
