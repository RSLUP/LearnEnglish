
/*var count = 0;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count++;
  if (count === 10){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);*/


/*(cell11 !== 2 || cell11 !== 3 || cell11 !== 7 || cell11 !== 9) ||
       (cell15 != 2 ||  cell15 != 4 ||  cell15 != 6 ||  cell15 != 7) ||
       (cell16 != 6 ||  cell16 != 7 ||  cell16 != 9 ) ||
       (cell19 != 1 ||  cell19 != 2 ) ||
       
       (cell21 != 4 ||  cell21 != 6 ||  cell21 != 8 ||  cell21 != 9) ||
       (cell22 != 5 ||  cell22 != 7 ) ||
       (cell24 != 1 ||  cell24 != 6 ||  cell24 != 7) ||
       (cell25 != 6 ||  cell25 != 7 ||  cell25 != 9) ||       
       (cell28 != 2 ||  cell28 != 3 ||  cell28 != 5 ||  cell28 != 7) ||

       (cell32 != 2 ||  cell32 != 3 ||  cell32 != 4 ||  cell32 != 6) ||
       (cell33 != 1 ||  cell33 != 2 ||  cell33 != 4 ||  cell33 != 6) ||
       (cell34 != 2 ||  cell34 != 4 ||  cell34 != 6 ||  cell34 != 9) ||
       (cell35 != 5 ||  cell35 != 7 ||  cell35 != 8) ||
       (cell36 != 1 ||  cell36 != 2 ||  cell36 != 3 ||  cell36 != 5) ||
       (cell37 != 3 ||  cell37 != 4 ||  cell37 != 6 ||  cell37 != 9) ||
       (cell38 !=3 ||  cell38 != 4 ||  cell38 != 6 ||  cell38 != 9) ||

       (cell42 != 2 ||  cell42 != 3 ||  cell42 != 6 ||  cell42 != 8) ||
       (cell45 != 3 ||  cell45 != 5 ||  cell45 != 6 ||  cell45 != 7) ||
       (cell46 != 3 ||  cell46 != 4 ||  cell46 != 6 ||  cell46 != 8) ||
       (cell47 != 1 ||  cell47 != 3 ||  cell47 != 6 ||  cell47 != 7) ||
       (cell49 != 3 ||  cell49 != 5 ||  cell49 != 6 ||  cell49 != 7) ||

       (cell51 != 2 ||  cell51 != 3 ||  cell51 != 5 ||  cell51 != 8) ||
       (cell53 != 4 ||  cell53 != 7 ||  cell53 != 8 ||  cell53 != 9) ||
       (cell55 != 3 ||  cell55 != 6 ||  cell55 != 8 ||  cell55 != 9) ||
       (cell57 != 1 ||  cell57 != 3 ||  cell57 != 6 ||  cell57 != 7) ||
       (cell59 != 1 ||  cell59 != 2 ||  cell59 != 3 ||  cell59 != 4)  

       (cell61 != 2 ||  cell61 != 3 ||  cell61 != 4 ||  cell61 != 6) ||
       (cell62 != 4 ||  cell62 != 6 ||  cell62 != 9) ||
       (cell63 != 2 ||  cell63 != 4 ||  cell63 != 6 ||  cell63 != 8) ||
       (cell64 != 1 ||  cell64 != 2 ||  cell64 != 3 ||  cell64 != 8) ||
       (cell68 != 3 ||  cell68 != 4 ||  cell68 != 7 ||  cell68 != 9) ||
       (cell69 != 4 ||  cell69 != 2 ||  cell69 != 7 ||  cell69 != 8) ||
        
       (cell73 != 6 ||  cell73 != 8 ||  cell73 != 9) ||
       (cell74 != 1 ||  cell74 != 3 ||  cell74 != 4 ||  cell74 != 7 ||  cell74 != 9) ||
       (cell75 != 3 ||  cell75 != 4 ||  cell75 != 6 ||  cell75 != 7) ||
       (cell77 != 1 ||  cell77 != 3 ||  cell77 != 6 ||  cell77 != 8) ||
       (cell78 != 1 ||  cell78 != 3 ||  cell78 != 6 ||  cell78 != 8) ||

       (cell82 != 6 ||  cell82 != 8 ||  cell82 != 4) ||
       (cell85 != 1 ||  cell85 != 3) ||
       (cell86 != 5 ||  cell86 != 8 ||  cell86 != 6 ||  cell86 != 9) ||
       (cell88 != 2 ||  cell88 != 4) ||
       (cell89 != 2 ||  cell89 != 5 ||  cell89 != 6 ||  cell89 != 8) ||

       (cell94 != 4  ||  cell94 != 5 ||  cell94 != 6 ||  cell94 != 8) ||
       (cell99 != 8 ||  cell99 != 9) )*/

function wrong()
{
  var cell11 = document.getElementById("cell11").value,
   cell15 = document.getElementById("cell15").value;
   /*cell16 = document.getElementById("cell16").value,
   cell19 = document.getElementById("cell19").value,

   cell21 = document.getElementById("cell21").value,
   cell22 = document.getElementById("cell22").value,
   cell24 = document.getElementById("cell24").value,
   cell25 = document.getElementById("cell25").value,
   cell27 = document.getElementById("cell27").value,

   cell32 = document.getElementById("cell32").value,
   cell33 = document.getElementById("cell33").value,
   cell34 = document.getElementById("cell34").value,
   cell35 = document.getElementById("cell35").value,
   cell36 = document.getElementById("cell36").value,
   cell37 = document.getElementById("cell37").value,
   cell38 = document.getElementById("cell38").value,

   cell42 = document.getElementById("cell42").value,
   cell45 = document.getElementById("cell45").value,
   cell46 = document.getElementById("cell46").value,
   cell47 = document.getElementById("cell47").value,
   cell49 = document.getElementById("cell49").value,

   cell51 = document.getElementById("cell51").value,
   cell53 = document.getElementById("cell53").value,
   cell55 = document.getElementById("cell55").value,
   cell57 = document.getElementById("cell57").value,
   cell59 = document.getElementById("cell59").value,

   cell61 = document.getElementById("cell61").value,
   cell63 = document.getElementById("cell63").value,
   cell64 = document.getElementById("cell64").value,
   cell65 = document.getElementById("cell65").value,
   cell68 = document.getElementById("cell68").value,
   cell69 = document.getElementById("cell69").value,

   cell73 = document.getElementById("cell73").value,  
   cell74 = document.getElementById("cell74").value,
   cell75 = document.getElementById("cell75").value,
   cell77 = document.getElementById("cell77").value,
   cell78 = document.getElementById("cell78").value,

   cell82 = document.getElementById("cell82").value,  
   cell85 = document.getElementById("cell85").value,
   cell86 = document.getElementById("cell86").value,
   cell88 = document.getElementById("cell88").value,
   cell89 = document.getElementById("cell89").value,

   cell94 = document.getElementById("cell94").value,
   cell99 = document.getElementById("cell99").value;*/



  if((cell11 !== 2 || cell11 !== 3 || cell11 !== 7 || cell11 !== 9) ||
       (cell15 != 2 ||  cell15 != 4 ||  cell15 != 6 ||  cell15 != 7))
  {
    document.getElementById("cell11").style.background='rgb(247, 119, 119)';
    document.getElementById("cell15").style.background='rgb(247, 119, 119)';
   /* document.getElementById("cell16").style.background='rgb(247, 119, 119)';
    document.getElementById("cell19").style.background='rgb(247, 119, 119)';

    document.getElementById("cell21").style.background='rgb(247, 119, 119)';
    document.getElementById("cell22").style.background='rgb(247, 119, 119)';
    document.getElementById("cell24").style.background='rgb(247, 119, 119)';
    document.getElementById("cell25").style.background='rgb(247, 119, 119)';
    document.getElementById("cell28").style.background='rgb(247, 119, 119)';

    document.getElementById("cell32").style.background='rgb(247, 119, 119)';
    document.getElementById("cell33").style.background='rgb(247, 119, 119)';
    document.getElementById("cell34").style.background='rgb(247, 119, 119)';
    document.getElementById("cell35").style.background='rgb(247, 119, 119)';
    document.getElementById("cell36").style.background='rgb(247, 119, 119)';
    document.getElementById("cell37").style.background='rgb(247, 119, 119)';
    document.getElementById("cell38").style.background='rgb(247, 119, 119)';

    document.getElementById("cell42").style.background='rgb(247, 119, 119)';
    document.getElementById("cell45").style.background='rgb(247, 119, 119)';
    document.getElementById("cell46").style.background='rgb(247, 119, 119)';
    document.getElementById("cell47").style.background='rgb(247, 119, 119)';
    document.getElementById("cell49").style.background='rgb(247, 119, 119)';
    
    document.getElementById("cell51").style.background='rgb(247, 119, 119)';
    document.getElementById("cell53").style.background='rgb(247, 119, 119)';
    document.getElementById("cell55").style.background='rgb(247, 119, 119)';
    document.getElementById("cell57").style.background='rgb(247, 119, 119)';
    document.getElementById("cell59").style.background='rgb(247, 119, 119)';

    document.getElementById("cell61").style.background='rgb(247, 119, 119)';
    document.getElementById("cell62").style.background='rgb(247, 119, 119)';
    document.getElementById("cell63").style.background='rgb(247, 119, 119)';
    document.getElementById("cell64").style.background='rgb(247, 119, 119)';
    document.getElementById("cell68").style.background='rgb(247, 119, 119)';
    document.getElementById("cell69").style.background='rgb(247, 119, 119)';

    document.getElementById("cell73").style.background='rgb(247, 119, 119)';
    document.getElementById("cell74").style.background='rgb(247, 119, 119)';
    document.getElementById("cell75").style.background='rgb(247, 119, 119)';
    document.getElementById("cell77").style.background='rgb(247, 119, 119)';
    document.getElementById("cell78").style.background='rgb(247, 119, 119)';

    document.getElementById("cell82").style.background='rgb(247, 119, 119)';
    document.getElementById("cell85").style.background='rgb(247, 119, 119)';
    document.getElementById("cell86").style.background='rgb(247, 119, 119)';
    document.getElementById("cell88").style.background='rgb(247, 119, 119)';
    document.getElementById("cell89").style.background='rgb(247, 119, 119)';

    document.getElementById("cell94").style.background='rgb(247, 119, 119)';
    document.getElementById("cell99").style.background='rgb(247, 119, 119)';*/
  

    //document.getElementsByClassName("ans").style.background = 'rgb(247, 119, 119)';
  //  doStuff(document.querySelectorAll("#cell11 , #cell15")).style.background ='rgb(247, 119, 119)';
   //document.getElementByIds("cell11", "cell15");
   //someFunc(document.querySelectorAll("#cell11, #cell15")).style.background='rgb(247, 119, 119)';

  }
  if((cell11 == 2 || cell11 == 3 || cell11 == 7 || cell11 == 9) ||
  (cell15 == 2 ||  cell15 == 4 ||  cell15 == 6 ||  cell15 == 7))
  {
    document.getElementById("cell11").style.background='rgb(243, 209, 165)';
    document.getElementById("cell15").style.background='rgb(243, 209, 165)';
    document.getElementById("cell16").style.background='rgb(243, 209, 165)';
    document.getElementById("cell19").style.background='rgb(243, 209, 165)';

    document.getElementById("cell21").style.background='rgb(243, 209, 165)';
    document.getElementById("cell22").style.background='rgb(243, 209, 165)';
    document.getElementById("cell24").style.background='rgb(243, 209, 165)';
    document.getElementById("cell25").style.background='rgb(243, 209, 165)';
    document.getElementById("cell28").style.background='rgb(243, 209, 165)';

    document.getElementById("cell32").style.background='rgb(243, 209, 165)';
    document.getElementById("cell33").style.background='rgb(243, 209, 165)';
    document.getElementById("cell34").style.background='rgb(243, 209, 165)';
    document.getElementById("cell35").style.background='rgb(243, 209, 165)';
    document.getElementById("cell36").style.background='rgb(243, 209, 165)';
    document.getElementById("cell37").style.background='rgb(243, 209, 165)';
    document.getElementById("cell38").style.background='rgb(243, 209, 165)';

    document.getElementById("cell42").style.background='rgb(243, 209, 165)';
    document.getElementById("cell45").style.background='rgb(243, 209, 165)';
    document.getElementById("cell46").style.background='rgb(243, 209, 165)';
    document.getElementById("cell47").style.background='rgb(243, 209, 165)';
    document.getElementById("cell49").style.background='rgb(243, 209, 165)';
    
    document.getElementById("cell51").style.background='rgb(243, 209, 165)';
    document.getElementById("cell53").style.background='rgb(243, 209, 165)';
    document.getElementById("cell55").style.background='rgb(243, 209, 165)';
    document.getElementById("cell57").style.background='rgb(243, 209, 165)';
    document.getElementById("cell59").style.background='rgb(243, 209, 165)';

    document.getElementById("cell61").style.background='rgb(243, 209, 165)';
    document.getElementById("cell62").style.background='rgb(243, 209, 165)';
    document.getElementById("cell63").style.background='rgb(243, 209, 165)';
    document.getElementById("cell64").style.background='rgb(243, 209, 165)';
    document.getElementById("cell68").style.background='rgb(243, 209, 165)';
    document.getElementById("cell69").style.background='rgb(243, 209, 165)';

    document.getElementById("cell73").style.background='rgb(243, 209, 165)';
    document.getElementById("cell74").style.background='rgb(243, 209, 165)';
    document.getElementById("cell75").style.background='rgb(243, 209, 165)';
    document.getElementById("cell77").style.background='rgb(243, 209, 165)';
    document.getElementById("cell78").style.background='rgb(243, 209, 165)';

    document.getElementById("cell82").style.background='rgb(243, 209, 165)';
    document.getElementById("cell85").style.background='rgb(243, 209, 165)';
    document.getElementById("cell86").style.background='rgb(243, 209, 165)';
    document.getElementById("cell88").style.background='rgb(243, 209, 165)';
    document.getElementById("cell89").style.background='rgb(243, 209, 165)';

    document.getElementById("cell94").style.background='rgb(243, 209, 165)';
    document.getElementById("cell99").style.background='rgb(243, 209, 165)';
  }

 if(cell11=='')
 {
  document.getElementById("cell11").style.background='red';
 /* document.getElementById("cell15").style.background='white';
  document.getElementById("cell16").style.background='white';
  document.getElementById("cell19").style.background='white';

  document.getElementById("cell21").style.background='white';
  document.getElementById("cell22").style.background='white';
  document.getElementById("cell24").style.background='white';
  document.getElementById("cell25").style.background='white';
  document.getElementById("cell28").style.background='white';

  document.getElementById("cell32").style.background='white';
  document.getElementById("cell33").style.background='white';
  document.getElementById("cell34").style.background='white';
  document.getElementById("cell35").style.background='white';
  document.getElementById("cell36").style.background='white';
  document.getElementById("cell37").style.background='white';
  document.getElementById("cell38").style.background='white';

  document.getElementById("cell42").style.background='white';
  document.getElementById("cell45").style.background='white';
  document.getElementById("cell46").style.background='white';
  document.getElementById("cell47").style.background='white';
  document.getElementById("cell49").style.background='white';
  
  document.getElementById("cell51").style.background='white';
  document.getElementById("cell53").style.background='white';
  document.getElementById("cell55").style.background='white';
  document.getElementById("cell57").style.background='white';
  document.getElementById("cell59").style.background='white';

  document.getElementById("cell61").style.background='white';
  document.getElementById("cell62").style.background='white';
  document.getElementById("cell63").style.background='white';
  document.getElementById("cell64").style.background='white';
  document.getElementById("cell68").style.background='white';
  document.getElementById("cell69").style.background='white';

  document.getElementById("cell73").style.background='white';
  document.getElementById("cell74").style.background='white';
  document.getElementById("cell75").style.background='white';
  document.getElementById("cell77").style.background='white';
  document.getElementById("cell78").style.background='white';

  document.getElementById("cell82").style.background='white';
  document.getElementById("cell85").style.background='white';
  document.getElementById("cell86").style.background='white';
  document.getElementById("cell88").style.background='white';
  document.getElementById("cell89").style.background='white';

  document.getElementById("cell94").style.background='white';
  document.getElementById("cell99").style.background='white';*/
 }
}

