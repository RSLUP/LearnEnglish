
var count =0;


var q1= ["1. I bought a beautiful dress at the mall."];
var a1=["preposition","adjective","noun"];

var q2="2. What did she ask you to do?";
var a2=["conjunction","preposition","pronoun"];

var q3="3. I left my shoes under the kitchen table.";
var a3=["adjective","preposition","pronoun"];

var q4="4. If we finish our work quickly we can go to the movies.";
var a4=["adverb","conjunction","verb"];

var q5="5. On Saturdays I work from nine to five.";
var a5=["verb","preposition","adverb"];

var q6="6. I want to go to a university in the United States.";
var a6=["adjective","preposition","noun"];

var q7="7. I'm sure I've met your girlfriend before.";
var a7=["verb","preposition","interjection"];

var q8="8. Well, I don't think I'll be home before 6.";
var a8=["interjection","preposition","pronoun"];

var q9="9. Andy knocked on the door but nobody answered.";
var a9=["adverb","adjective","conjunction"];

var q10="10. After lunch let's go out for a coffee.";
var a10=["pronoun","preposition","verb"];

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

        document.getElementById("btnBack").disabled=false;
        
      
       
    document.getElementById("r1").checked=false;
    document.getElementById("r2").checked=false;
    document.getElementById("r3").checked=false;
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
    var rArr=[2,3,2,1,1,3,1,1,3,2];
    
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


