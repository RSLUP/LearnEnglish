/*Highlighting*/

function nounHighlight()
    {
        document.getElementById("noun1").style.color='yellow';
        document.getElementById("noun2").style.color='yellow'; 
        document.getElementById("noun3").style.color='yellow';    
    }
    function pronounHighlight()
    {
        document.getElementById("pro1").style.color='salmon';
        document.getElementById("pro2").style.color='salmon';
    }
   function verbsHighlight()
    {
        document.getElementById("ver1").style.color='tan';
        document.getElementById("ver2").style.color='tan';
    }
    function adjectiveHighlight()
    {
        document.getElementById("ad1").style.color='violet';   
        document.getElementById("ad2").style.color='violet';  
    }
    function adverbsHighlight()
    {
        document.getElementById("adv1").style.color='pink';  
        document.getElementById("adv2").style.color='pink'; 
        document.getElementById("adv3").style.color='pink';  
    }
    function prepositionsHighlight()
    {
        document.getElementById("prepo1").style.color='springgreen';   
    }
    function conjunctionsHighlight()
    {
        document.getElementById("con1").style.color='teal';   
    }
    function interjectionsHighlight()
    {
        document.getElementById("in1").style.color='yellowgreen';   
    }

    /*example pop-ups*/
    function nounExamples()
    {
        alert(" Anna goes to school \n\n Sun shines \n This is a very big garden \n\n Cat drinks milk ");
    }
    function pronounExamples()
    {
        alert(" Anna is hungry. So she want to eat something \n\n  John wants to buy some goods. He went to supermarket \n\n You sing beautifully \n\n It runs fast");
    }
    function verbsExamples()
    {
        alert(" The dog and cat are running \n\n she is singing an English song \n\n He swims fast \n\n Student try to understand the alogarithms ");
    }
    function adjectiveExamples()
    {
        alert("Good dog\n\n  Pretty lady \n\n Comfortable bed \n\n Healthy man ");
    }
    function adverbsExamples()
    {
        alert(" He drives her to home carefully\n \n  students participates to the competition actively \n\n It eats very slowly\n\n She understood it very well");
    }
    function prepositionsExamples()
    {
        alert(" There is a book on the table \n\n There is a car accident near the school \n\n  That dog is always with the boy \n\n I received a call from her");
    }
    function conjunctionsExamples()
    {
        alert("she was sick, so she went to the hospital \n\n She failed the test,but she studied harder. \n\n He bought milk and biscuits from the stole \n\n Eat breakfast daily before you go to the school  ");
    }
    function interjectionsExamples()
    {
        alert(" Hey! How are you? \n\n aha !I knew it. \n\n What a beautiful shot! \n\n Thank god! you survived.");
    }

    /*grammar*/

    function displaySPrTFullex()  /*display simple present tense full verbs examples*/
    {
        document.getElementById("SPrTF").innerHTML = "We learn English at our college <br/> The earth rotates round the sun <br/>Light travel at speed of 180,000 miles per hour in 10s <br/> People die in their old age";       
    }
    function displaySPrTBEex()
    {
        document.getElementById("SPrTBE").innerHTML = "My pet is a cat <br/> These buildings are very high <br/> It is a cloudy day <br/> There are many handouts in the table";
    }
    function displaySPTFullex()
    {
        document.getElementById("SPTF").innerHTML = "I came to home very happily <br/> I wanted to follow an English tutorials <br/> We waited in the lobby for some time <br/> I was born in Sri Lanka";
    }