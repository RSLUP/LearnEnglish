
function wrong()
{
  var score = 100;

  var cell11 = document.getElementById("cell11").value,
      cell15 = document.getElementById("cell15").value,
      cell16 = document.getElementById("cell16").value,
      cell19 = document.getElementById("cell19").value;

var   cell21 = document.getElementById("cell21").value,
      cell22 = document.getElementById("cell22").value,
      cell24 = document.getElementById("cell24").value,
      cell25 = document.getElementById("cell25").value,
      cell28 = document.getElementById("cell28").value;  

var   cell32 = document.getElementById("cell32").value,
      cell33 = document.getElementById("cell33").value,
      cell34 = document.getElementById("cell34").value,
      cell35 = document.getElementById("cell35").value,
      cell36 = document.getElementById("cell36").value,
      cell37 = document.getElementById("cell37").value,
      cell38 = document.getElementById("cell38").value;

var   cell42 = document.getElementById("cell42").value,
      cell45 = document.getElementById("cell45").value,
      cell46 = document.getElementById("cell46").value,
      cell47 = document.getElementById("cell47").value,
      cell49 = document.getElementById("cell49").value;

var   cell51 = document.getElementById("cell51").value,
      cell53 = document.getElementById("cell53").value,
      cell55 = document.getElementById("cell55").value,
      cell57 = document.getElementById("cell57").value,
      cell59 = document.getElementById("cell59").value;

var   cell61 = document.getElementById("cell61").value,
      cell63 = document.getElementById("cell63").value,
      cell64 = document.getElementById("cell64").value,
      cell65 = document.getElementById("cell65").value,
      cell68 = document.getElementById("cell68").value,
      cell69 = document.getElementById("cell69").value;  
      
  var cell73 = document.getElementById("cell73").value,  
      cell74 = document.getElementById("cell74").value,
      cell75 = document.getElementById("cell75").value,
      cell77 = document.getElementById("cell77").value,
      cell78 = document.getElementById("cell78").value;
   
  var cell82 = document.getElementById("cell82").value,  
      cell85 = document.getElementById("cell85").value,
      cell86 = document.getElementById("cell86").value,
      cell88 = document.getElementById("cell88").value,
      cell89 = document.getElementById("cell89").value;  
      
  var  cell94 = document.getElementById("cell94").value,
       cell99 = document.getElementById("cell99").value;
 
  // first row first column
  if(cell11 !== 2 || cell11 !== 3 || cell11 !== 7 || cell11 !== 9)
  { document.getElementById("cell11").style.background = 'red';
      score = score-1 ;  }
  if (cell11 == 2 || cell11 == 3 || cell11 == 7 || cell11 == 9)
  {document.getElementById("cell11").style.background='rgb(243, 209, 165)';
    score = score+2;}
  if (cell11=='')
  {   document.getElementById("cell11").style.background = 'white';
    score=score+0;}



  if(cell15 != 2 ||  cell15 != 4 ||  cell15 != 6 ||  cell15 != 7 || cell15 !=='')
  { document.getElementById("cell15").style.background = 'red';
     score = score-1;}
  if(cell15 == 2 ||  cell15 == 4 ||  cell15 == 6 ||  cell15 == 7)
  {document.getElementById("cell15").style.background='rgb(243, 209, 165)';
    score = score+2;}
  if(cell15=='')
  {   document.getElementById("cell15").style.background = 'white';
  score=score+0; }


  if (cell16 != 6 ||  cell16 != 7 ||  cell16 != 9 || cell16 !== '')
  { document.getElementById("cell16").style.background = 'red';
  score = score-1;}
  if (cell16 == 6 ||  cell16 == 7 ||  cell16 == 9 )
  {document.getElementById("cell16").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell16=='')
  {   document.getElementById("cell16").style.background = 'white';
  score=score+0; }

  if (cell19 != 1 ||  cell19 != 2  || cell19 !=='')
  { document.getElementById("cell19").style.background = 'red';
  score = score-1;}
  if (cell19 == 1 ||  cell19 == 2 )
  {document.getElementById("cell19").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell19=='')
  {   document.getElementById("cell19").style.background = 'white';
  score=score+0; }
 
  //first row second column
  if (cell21 != 4 ||  cell21 != 6 ||  cell21 != 8 ||  cell21 != 9 || cell21 !=='')
  { document.getElementById("cell21").style.background = 'red';
  score = score-1;}
  if (cell21 == 4 ||  cell21 == 6 ||  cell21 == 8 ||  cell21 == 9) 
  {document.getElementById("cell21").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell21=='')
  {   document.getElementById("cell21").style.background = 'white'; 
  score=score+0;}

  if (cell22 != 5 ||  cell22 != 7 || cell22 !=='')
  { document.getElementById("cell22").style.background = 'red';
  score = score-1;}
  if (cell22 == 5 ||  cell22 == 7 ) 
  {document.getElementById("cell22").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell22=='')
  {   document.getElementById("cell22").style.background = 'white'; 
  score=score+0;}

  if (cell24 != 1 ||  cell24 != 6 ||  cell24 != 7 || cell24 !=='')
  { document.getElementById("cell24").style.background = 'red';
  score = score-1;}
  if(cell24 == 1 ||  cell24 == 6 ||  cell24 == 7) 
  {document.getElementById("cell24").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell24=='')
  {   document.getElementById("cell24").style.background = 'white';
  score=score+0; }

  if (cell25 != 6 ||  cell25 != 7 ||  cell25 != 9 || cell25 !=='')
  { document.getElementById("cell25").style.background = 'red';
  score = score-1;}
  if(cell25 == 6 ||  cell25 == 7 ||  cell25 == 9) 
  {document.getElementById("cell25").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell25=='')
  {   document.getElementById("cell25").style.background = 'white'; 
  score=score+0;}

  if  (cell28 != 2 ||  cell28 != 3 ||  cell28 != 5 ||  cell28 != 7 || cell28 !=='')
  { document.getElementById("cell28").style.background = 'red';
  score = score-1;}
  if (cell28 == 2 ||  cell28 == 3 ||  cell28 == 5 ||  cell28 == 7) 
  {document.getElementById("cell28").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell28=='')
  {   document.getElementById("cell28").style.background = 'white';
  score=score+0; }

  //first row third column
  
  if (cell32 != 2 ||  cell32 != 3 ||  cell32 != 4 ||  cell32 != 6 || cell32 !=='')
  { document.getElementById("cell32").style.background = 'red';
  score = score-1;}
  if (cell32 == 2 ||  cell32 == 3 ||  cell32 == 4 ||  cell32 == 6) 
  {document.getElementById("cell32").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell32=='')
  {   document.getElementById("cell32").style.background = 'white';
  score=score+0; }

  if (cell33 != 1 ||  cell33 != 2 ||  cell33 != 4 ||  cell33 != 6 || cell33 !=='')
  { document.getElementById("cell33").style.background = 'red';
  score = score-1;}
  if(cell33 == 1 ||  cell33 == 2 ||  cell33 == 4 ||  cell33 == 6) 
  {document.getElementById("cell33").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell33=='')
  {   document.getElementById("cell33").style.background = 'white';
  score=score+0; }

  if (cell34 != 2 ||  cell34 != 4 ||  cell34 != 6 ||  cell34 != 9  || cell34 !=='')
  { document.getElementById("cell34").style.background = 'red';
  score = score-1;}
  if(cell34 == 2 ||  cell34 == 4 ||  cell34 == 6 ||  cell34 == 9) 
  {document.getElementById("cell34").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell34=='')
  {   document.getElementById("cell34").style.background = 'white'; 
  score=score+0;}

  if (cell35 != 5 ||  cell35 != 7 ||  cell35 != 8  || cell35 !=='')
  { document.getElementById("cell35").style.background = 'red';
  score = score-1;}
  if (cell35 == 5 ||  cell35 == 7 ||  cell35 == 8) 
  {document.getElementById("cell35").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell35=='')
  {   document.getElementById("cell35").style.background = 'white';
  score=score+0; }

  if  (cell36 != 1 ||  cell36 != 2 ||  cell36 != 3 ||  cell36 != 5  || cell36 !=='')
  { document.getElementById("cell36").style.background = 'red';
  score = score-1;}
  if (cell36 == 1 ||  cell36 == 2 ||  cell36 == 3 ||  cell36 == 5) 
  {document.getElementById("cell36").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell36=='')
  {   document.getElementById("cell36").style.background = 'white';
  score=score+0; }

  if  (cell37 != 3 ||  cell37 != 4 ||  cell37 != 6 ||  cell37 != 9  || cell37 !=='')
  { document.getElementById("cell37").style.background = 'red';
  score = score-1;}
  if(cell37 == 3 ||  cell37 == 4 ||  cell37 == 6 ||  cell37 == 9) 
  {document.getElementById("cell37").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell37=='')
  {   document.getElementById("cell37").style.background = 'white';
  score=score+0; }

  if  (cell38 !=3 ||  cell38 != 4 ||  cell38 != 6 ||  cell38 != 9 || cell38 !=='')
  { document.getElementById("cell38").style.background = 'red';
  score = score-1;}
  if (cell38 ==3 ||  cell38 == 4 ||  cell38 == 6 ||  cell38 == 9)
  {document.getElementById("cell38").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell38=='')
  {   document.getElementById("cell38").style.background = 'white';
  score=score+0; }

  //second row first column
  if (cell42 != 2 ||  cell42 != 3 ||  cell42 != 6 ||  cell42 != 8  || cell42 !=='')
  { document.getElementById("cell42").style.background = 'red';
  score = score-1;}
  if  (cell42 == 2 ||  cell42 == 3 ||  cell42 == 6 ||  cell42 == 8)
  {document.getElementById("cell42").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell42=='')
  {   document.getElementById("cell42").style.background = 'white';
  score=score+0; }

  if (cell45 != 3 ||  cell45 != 5 ||  cell45 != 6 ||  cell45 != 7 || cell45 !=='')
  { document.getElementById("cell45").style.background = 'red';
  score = score-1;}
  if (cell45 == 3 ||  cell45 == 5 ||  cell45 == 6 ||  cell45 == 7)
  {document.getElementById("cell45").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell45=='')
  {   document.getElementById("cell45").style.background = 'white'; 
  score=score+0;}

  if  (cell46 != 3 ||  cell46 != 4 ||  cell46 != 6 ||  cell46 != 8 || cell46 !=='')
  { document.getElementById("cell46").style.background = 'red';
  score = score-1;}
  if (cell46 == 3 ||  cell46 == 4 ||  cell46 == 6 ||  cell46 == 8)
  {document.getElementById("cell46").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell46=='')
  {   document.getElementById("cell46").style.background = 'white'; 
  score=score+0;}

  if (cell47 != 1 ||  cell47 != 3 ||  cell47 != 6 ||  cell47 != 7 || cell47 !=='')
  { document.getElementById("cell47").style.background = 'red';
  score = score-1;}
  if (cell47 == 1 ||  cell47 == 3 ||  cell47 == 6 ||  cell47 == 7)
  {document.getElementById("cell47").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell47=='')
  {   document.getElementById("cell47").style.background = 'white'; 
  score=score+0;}

  if  (cell49 != 3 ||  cell49 != 5 ||  cell49 != 6 ||  cell49 != 7 || cell49 !=='')
  { document.getElementById("cell49").style.background = 'red';
  score = score-1;}
  if  (cell49 == 3 ||  cell49 == 5 ||  cell49 == 6 ||  cell49 == 7) 
  {document.getElementById("cell49").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell49=='')
  {   document.getElementById("cell49").style.background = 'white';
  score=score+0; }
  

  //second row second column
  if  (cell51 != 2 ||  cell51 != 3 ||  cell51 != 5 ||  cell51 != 8 || cell51 !=='')
  { document.getElementById("cell51").style.background = 'red';
  score = score-1;}
  if  (cell51 == 2 ||  cell51 == 3 ||  cell51 == 5 ||  cell51 == 8)
  {document.getElementById("cell51").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell51=='')
  {   document.getElementById("cell51").style.background = 'white';
  score=score+0;}

  if  (cell53 != 4 ||  cell53 != 7 ||  cell53 != 8 ||  cell53 != 9 || cell53 !=='')
  { document.getElementById("cell53").style.background = 'red';
  score = score-1;}
  if (cell53 == 4 ||  cell53== 7 ||  cell53 == 8 ||  cell53 == 9)
  {document.getElementById("cell53").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell53=='')
  {   document.getElementById("cell53").style.background = 'white';
  score=score+0; }

  if  (cell55 != 3 ||  cell55 != 6 ||  cell55 != 8 ||  cell55 != 9 || cell55 !=='')
  { document.getElementById("cell55").style.background = 'red';
  score = score-1;}
  if  (cell55 == 3 ||  cell55 == 6 ||  cell55 == 8 ||  cell55 == 9)
  {document.getElementById("cell55").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell55=='')
  {   document.getElementById("cell55").style.background = 'white';
  score=score+0; }

  if(cell57 != 1 ||  cell57 != 3 ||  cell57 != 6 ||  cell57 != 7 || cell57 !=='')
  { document.getElementById("cell57").style.background = 'red';
  score = score-1;}
  if(cell57 == 1 ||  cell57 == 3 ||  cell57 == 6 ||  cell57 == 7)
  {document.getElementById("cell57").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell57=='')
  {   document.getElementById("cell57").style.background = 'white'; 
  score=score+0;}

  if  (cell59 != 1 ||  cell59 != 2 ||  cell59 != 3 ||  cell59 != 4 || cell59 !=='')
  { document.getElementById("cell59").style.background = 'red';
  score = score-1;}
  if  (cell59 == 1 ||  cell59 == 2 ||  cell59 == 3 ||  cell59 == 4) 
  {document.getElementById("cell59").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell59=='')
  {   document.getElementById("cell59").style.background = 'white'; 
  score=score+0;}

  //second row third column
  if (cell61 != 2 ||  cell61 != 3 ||  cell61 != 4 ||  cell61 != 6 || cell61 !=='')
  { document.getElementById("cell61").style.background = 'red';
  score = score-1;}
  if (cell61 == 2 ||  cell61 == 3 ||  cell61 == 4 ||  cell61 == 6) 
  {document.getElementById("cell61").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell61=='')
  {   document.getElementById("cell61").style.background = 'white'; 
  score=score+0;}


  if (cell63 != 2 ||  cell63 != 4 ||  cell63 != 6 ||  cell63 != 8 || cell63 !=='')
  { document.getElementById("cell63").style.background = 'red';
  score = score-1;}
  if  (cell63 == 2 ||  cell63 == 4 ||  cell63 == 6 ||  cell63 == 8) 
  {document.getElementById("cell63").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell63=='')
  {   document.getElementById("cell63").style.background = 'white'; 
  score=score+0;}

  if (cell64 != 1 ||  cell64 != 2 ||  cell64 != 3 ||  cell64 != 8 || cell64 !=='')
  { document.getElementById("cell64").style.background = 'red';
  score = score-1;}
  if (cell64 == 1 ||  cell64 == 2 ||  cell64 == 3 ||  cell64 == 8)  
  {document.getElementById("cell64").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell64=='')
  {   document.getElementById("cell64").style.background = 'white';
  score=score+0; }

  if (cell65 != 2 ||  cell65 != 3 ||  cell65 != 5 ||  cell65 != 6 || cell65 !=='')
  { document.getElementById("cell65").style.background = 'red';
  score = score-1;}
  if (cell65 == 2 ||  cell65 == 3 ||  cell65 == 5 ||  cell65 == 6)  
  {document.getElementById("cell65").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell65=='')
  {   document.getElementById("cell65").style.background = 'white';
  score=score+0; }

  if(cell68 != 3 ||  cell68 != 4 ||  cell68 != 7 ||  cell68 != 9 || cell68 !=='')
  { document.getElementById("cell68").style.background = 'red';
  score = score-1;}
  if (cell68 == 3 ||  cell68 == 4 ||  cell68 == 7 ||  cell68 == 9)
  {document.getElementById("cell68").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell68=='')
  {   document.getElementById("cell68").style.background = 'white'; 
  score=score+0;}

  if  (cell69 != 4 ||  cell69 != 2 ||  cell69 != 7 ||  cell69 != 8 || cell69 !=='')
  { document.getElementById("cell69").style.background = 'red';
  score = score-1;}
  if  (cell69 == 4 ||  cell69 == 2 ||  cell69 == 7 ||  cell69 == 8)
  {document.getElementById("cell69").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell69=='')
  {   document.getElementById("cell69").style.background = 'white'; 
  score=score+0;}

  //third row first column
  if(cell73 != 6 ||  cell73 != 8 ||  cell73 != 9 || cell73 !=='')
  { document.getElementById("cell73").style.background = 'red';
  score = score-1;}
  if (cell73 == 6 ||  cell73 == 8 ||  cell73 == 9)
  {document.getElementById("cell73").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell73=='')
  {   document.getElementById("cell73").style.background = 'white';
  score=score+0;}

  if(cell74 != 1 ||  cell74 != 3 ||  cell74 != 4 ||  cell74 != 7 ||  cell74 != 9 || cell74 !=='')
  { document.getElementById("cell74").style.background = 'red';
  score = score-1;}
  if(cell74 == 1 ||  cell74 == 3 ||  cell74 == 4 ||  cell74 == 7 ||  cell74 == 9)
  {document.getElementById("cell74").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell74=='')
  {   document.getElementById("cell74").style.background = 'white'; 
  score=score+0;}

  if (cell75 != 3 ||  cell75 != 4 ||  cell75 != 6 ||  cell75 != 7 || cell75 !=='')
  { document.getElementById("cell75").style.background = 'red';
  score = score-1;}
  if  (cell75 == 3 ||  cell75 == 4 ||  cell75 == 6 ||  cell75 == 7)
  {document.getElementById("cell75").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell75=='')
  {   document.getElementById("cell75").style.background = 'white'; 
  score=score+0;}

  if(cell77 != 1 ||  cell77 != 3 ||  cell77 != 6 ||  cell77 != 8  || cell77 !=='')
  { document.getElementById("cell77").style.background = 'red';
  score = score-1;}
  if(cell77 == 1 ||  cell77 == 3 ||  cell77 == 6 ||  cell77 == 8) 
  {document.getElementById("cell77").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell77=='')
  {   document.getElementById("cell77").style.background = 'white';
  score=score+0; }

  if (cell78 != 1 ||  cell78 != 3 ||  cell78 != 6 ||  cell78 != 8  || cell78 !=='')
  { document.getElementById("cell78").style.background = 'red';
  score = score-1;}
  if  (cell78 == 1 ||  cell78 == 3 ||  cell78 == 6 ||  cell78 == 8)  
  {document.getElementById("cell78").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell78=='')
  {   document.getElementById("cell78").style.background = 'white';
  score=score+0; }
  

  //third row second column
  if (cell82 != 6 ||  cell82 != 8 ||  cell82 != 4 || cell82 !=='')
  { document.getElementById("cell82").style.background = 'red';
  score = score-1;}
  if (cell82 == 6 ||  cell82 == 8 ||  cell82 == 4)
  {document.getElementById("cell82").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell82=='')
  {   document.getElementById("cell82").style.background = 'white';
  score=score+0; }

  if (cell85 != 1 ||  cell85 != 3 || cell85 !=='')
  { document.getElementById("cell85").style.background = 'red';
  score = score-1;}
  if  (cell85 == 1 ||  cell85 == 3) 
  {document.getElementById("cell85").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell85=='')
  {   document.getElementById("cell85").style.background = 'white';
  score=score+0;}

  if  (cell86 != 5 ||  cell86 != 8 ||  cell86 != 6 ||  cell86 != 9 || cell86 !=='')
  { document.getElementById("cell86").style.background = 'red';
  score = score-1;}
  if  (cell86 == 5 ||  cell86 == 8 ||  cell86 == 6 ||  cell86 == 9)
  {document.getElementById("cell86").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell86=='')
  {   document.getElementById("cell86").style.background = 'white'; 
  score=score+0;}

  if  (cell88 != 2 ||  cell88 != 4  || cell88 !=='')
  { document.getElementById("cell88").style.background = 'red';
  score = score-1;}
  if  (cell88 == 2 ||  cell88 == 4) 
  {document.getElementById("cell88").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell88=='')
  {   document.getElementById("cell88").style.background = 'white';
  score=score+0; }

  
  if  (cell89 != 2 ||  cell89 != 5 ||  cell89 != 6 ||  cell89 != 8 || cell89 !=='')
  { document.getElementById("cell89").style.background = 'red';
  score = score-1;}
  if  (cell89 == 2 ||  cell89 == 5 ||  cell89 == 6 ||  cell89 == 8)
  {document.getElementById("cell89").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell89=='')
  {   document.getElementById("cell89").style.background = 'white';
  score=score+0; }

  //third row third column
  if (cell94 != 4  ||  cell94 != 5 ||  cell94 != 6 ||  cell94 != 8 || cell94 !=='')
  { document.getElementById("cell94").style.background = 'red';
  score = score-1;}
  if  (cell94 == 4  ||  cell94 == 5 ||  cell94 == 6 ||  cell94 == 8) 
  {document.getElementById("cell94").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell94=='')
  {   document.getElementById("cell94").style.background = 'white'; 
  score=score+0;}

  
  if(cell99 != 8 ||  cell99 != 9 || cell99 !=='')
  { document.getElementById("cell99").style.background = 'red';
  score = score-1;}
  if  (cell99 == 8 ||  cell99 == 9)
  {document.getElementById("cell99").style.background='rgb(243, 209, 165)';
  score = score+2;}
  if(cell99=='')
  {   document.getElementById("cell99").style.background = 'white'; 
  score=score+0;}

  console.log(score);

  var ommit = localStorage.getItem("decrease");
  var final = score - ommit;
  document.getElementById("my-score").innerHTML = final;

}
function timeStart()
{
  var mins = 1;
  var interval1 = setInterval(function(){
    document.getElementById('mins').innerHTML=mins;
    mins++;
    if (mins === 15){
      clearInterval(interval1);
     // document.getElementById('mins').innerHTML='Done';
      // or...
      alert("You're out of time!");
    }
  }, 60000);

}
