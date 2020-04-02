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
        document.getElementById("SPTF").innerHTML = "I came home very happily <br/> I wanted to follow an English tutorials <br/> We waited in the lobby for some time <br/> I was born in Sri Lanka";
    }
    function displaySPTBeEx()
    {
        document.getElementById("SPTB").innerHTML = "She wasn't at the lecture <br/> The girls were so pretty <br/> There were lot of things at the bookshop <br/> I was at a meeting";
    }
    function displaySFTEx()
    {
        document.getElementById("SFT").innerHTML = "I am going to go for a bath <br/> I will have my parcel this evening <br/> We are going to have a party next weekend<br/> I will give your book tomorror";
    }
    function displayPrCTEx()
    {
        document.getElementById("PrCT").innerHTML = "Some students are dancing in the class  <br/> I can see a boy reading a book<br/> We are listening to the radio now<br/> She is looking at something";
    }
    function displayPCTEx()
    {
        document.getElementById("PCT").innerHTML = "I was cutting vegetables <br/>They were working in the garden<br/> She was watering plants<br/> It was playing with its' toy";
    }
    function displayFCTEx()
    {
        document.getElementById("FCT").innerHTML = "I will be going Colombo tomorrow<br/>She will be doing a job at that time<br/>They will be studying at a university<br/> They will be singing at the contest";
    }
    function displayPrPTEx()
    {
        document.getElementById("PrPT").innerHTML = "I have started watching an English film<br/>She has passed the exam well <br/> I have done my assignment today morning <br/>It has clouded afternoon today morning";
    }
    function displayPPTEx()
    {
        document.getElementById("PPT").innerHTML = "He had revealed the secret to the police before the thief dead<br/>When I came to the exam hall, the exam had already started <br/> Mother had tasted the food before she served it <br/>We couldn't go to the concert becoause we had not bought tickets";
    }
    function displayFPTEx()
    {
        document.getElementById("FPT").innerHTML = "I will have finished my studies by then<br/>I won't have found a partner by then<br/>I will have finished my grammar assignment by dinner time, but I will not have done my writing assignment.<br/>We will have arrived to India by tomorrow evening" ;
    }
    function displayPrPCT()
    {
        document.getElementById("PrPCT").innerHTML = "I have been driving for the past seven hours<br/>They have been painting the house for New Year<br/> You have not been exercising on the machine <br/> It has been running fast in the ground";
    }
   function displayPPCT()
    {
        document.getElementById("PPCT").innerHTML = "He had been walking along the road for about 20 minutes<br/>When I came home they had been eating <br/> She had been waiting for me for 2 hours<br/>It hd been raining the whole day";
    }
    function displayFPCT()
    {
        document.getElementById("FPCT").innerHTML = "They will have been playing football in that field before you reach<br/>April will have been gossiping in the coffee shop before she comes here <br/> Bob will have been studying in the library before he comes to the class <br/>They will have been getting ready for the exam";
    }