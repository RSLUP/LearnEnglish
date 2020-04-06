
var count =0;


var q1= ["1.This time tomorrow, I ............................... on the beach."];
var a1=["am lying","will lie","will be lying"];

var q2="2.She said that she ....................... help me.";
var a2=["will","shall","would"];

var q3="3.Phone me when you ............................ time.";
var a3=["have","would have","will have"];

var q4="4.I will follow you wherever you ...........................";
var a4=["go","goes","will go"];

var q5="5.You ........................... an accident if you go on driving like that.";
var a5=["are having","will have","would have"];

var q6="6.When you phoned, I ................................. in the garage.";
var a6=["worked","am working","was working"];

var q7="7.I .............................. all my childhood in South India. ";
var a7=["was spending","spend","spent"];

var q8="8.The phone ......................... while I was having a bath.";
var a8=["rings","rang","was ringing"];

var q9="9.I tried a little of the soup to see how it ..........................";
var a9=["tastes","is tasting","tasted"];

var q10="10.When we were children we ............................. our own toys.";
var a10=["were making","made","had made"];

var quesion=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
var uArr=[];

var rad1=document.getElementById("r1");
var rad2=document.getElementById("r2");
var rad3=document.getElementById("r3");




var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10;




function quize()
{
    
   
   
   
   if(count>-1 && count<9)
   {
       count= count+1;
     //  mincount=count;
   }
  //  alert(count);
        if(count>-1 && count<10 )
        {

     
           // alert(count);

           // document.getElementById("quize").innerHTML=quesion[count];
         


          
           
            if(count==0)
        {   
            document.getElementById("quize").innerHTML=quesion[0];

            document.getElementById("ans1").innerHTML=a1[0];
            document.getElementById("ans2").innerHTML=a1[1];
            document.getElementById("ans3").innerHTML=a1[2];
          
           
        }
 
           
        if(count==1)
        {   
            document.getElementById("quize").innerHTML=quesion[1];

            document.getElementById("ans1").innerHTML=a2[0];
            document.getElementById("ans2").innerHTML=a2[1];
            document.getElementById("ans3").innerHTML=a2[2];
            
          
        }
        if(count==2)
        {   
            document.getElementById("quize").innerHTML=quesion[2];
           
            document.getElementById("ans1").innerHTML=a3[0];
            document.getElementById("ans2").innerHTML=a3[1];
            document.getElementById("ans3").innerHTML=a3[2];
           
           
        }
        if(count==3)
        {   
            document.getElementById("quize").innerHTML=quesion[3];

            document.getElementById("ans1").innerHTML=a4[0];
            document.getElementById("ans2").innerHTML=a4[1];
            document.getElementById("ans3").innerHTML=a4[2];

           
        }   
        if(count==4)
        {   
            document.getElementById("quize").innerHTML=quesion[4];

            document.getElementById("ans1").innerHTML=a5[0];
            document.getElementById("ans2").innerHTML=a5[1];
            document.getElementById("ans3").innerHTML=a5[2];
           
           
        }
        if(count==5)
        {   
            document.getElementById("quize").innerHTML=quesion[5];

            document.getElementById("ans1").innerHTML=a6[0];
            document.getElementById("ans2").innerHTML=a6[1];
            document.getElementById("ans3").innerHTML=a6[2];
           
           
        }
        if(count==6)
        {   
            document.getElementById("quize").innerHTML=quesion[6];

            document.getElementById("ans1").innerHTML=a7[0];
            document.getElementById("ans2").innerHTML=a7[1];
            document.getElementById("ans3").innerHTML=a7[2];
           
            
        }
        if(count==7)
        {   
            document.getElementById("quize").innerHTML=quesion[7];

            document.getElementById("ans1").innerHTML=a8[0];
            document.getElementById("ans2").innerHTML=a8[1];
            document.getElementById("ans3").innerHTML=a8[2];
          
          
        }
        if(count==8)
        {   
            document.getElementById("quize").innerHTML=quesion[8];

            document.getElementById("ans1").innerHTML=a9[0];
            document.getElementById("ans2").innerHTML=a9[1];
            document.getElementById("ans3").innerHTML=a9[2];
          
           
        }
        if(count==9)
        {   
            document.getElementById("quize").innerHTML=quesion[9];

            document.getElementById("ans1").innerHTML=a10[0];
            document.getElementById("ans2").innerHTML=a10[1];
            document.getElementById("ans3").innerHTML=a10[2];
           
          
            document.getElementById("btnNext").disabled=true;
        }
           
        
        }
        else
        {
            alert("error");
        }
      
       
       

       
        if(document.getElementById("r1").checked==true)
        {
            uArr.push(1);
           
            
        }
        if(document.getElementById("r2").checked==true)
        {
            uArr.push(2);
           // chkArr
            //alert(document.getElementById("r2").value);
        }
        if(document.getElementById("r3").checked==true)
        {
            uArr.push(3);
            //chkArr
            //alert(document.getElementById("r3").value);
        }

        //document.getElementById("btnBack").disabled=false;
        
        rad1.checked=false;
           rad2.checked=false;
           rad3.checked=false;
      
}






function answer()
{

      


    if(document.getElementById("r1").checked==true)
        {
            uArr.push(1);
         
        }
        if(document.getElementById("r2").checked==true)
        {
            uArr.push(2);
            //alert(document.getElementById("r2").value);
        }
        if(document.getElementById("r3").checked==true)
        {
            uArr.push(3);
            //alert(document.getElementById("r3").value);
        }



  //  alert(uArr[0]);
    var rArr=[3,3,1,1,2,3,3,2,3,2];
    
    var tot=0;

    var i;
    for(i=0;i<10;i++)
    {
        if(rArr[i]==uArr[i])
        {
            tot=tot+1;
        }
    }

    document.getElementById("ans").innerHTML="Total : " +10;
    document.getElementById("tot").innerHTML="Correct : "+tot;
    document.getElementById("pre").innerHTML="Presentage : " +(tot/10)*100+"%";
    
    document.getElementById("btnTry").style.visibility='visible';

    //document.getElementById("btnBack").style.visibility='hidden';
    //document.getElementById("btnNext").style.visibility='hidden';
    //document.getElementById("btnSub").style.visibility='hidden';

    //document.getElementById("r1").style.visibility='hidden';
    //document.getElementById("r2").style.visibility='hidden';
    //document.getElementById("r3").style.visibility='hidden';

  //  document.getElementById("quize").style.visibility='hidden';
  //  document.getElementById("ans1").style.visibility='hidden';
  //  document.getElementById("ans2").style.visibility='hidden';
   // document.getElementById("ans3").style.visibility='hidden';
  

}


