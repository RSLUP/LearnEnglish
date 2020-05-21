<?php
    require_once('./components/loginprocess.php');
    if(!isset($_SESSION['uname'])){
        header("location:index.php");
    }
 ?>
 
<!doctype html>
<html>

    <head>

        <title>Tenses</title>
        <link rel="stylesheet" type="text/css" href="css/style02.css">
        
    </head>

    <body >
        <div class="wrapper">

            <?php include('./components/navigation.php')?>

            <div class="mainbody">
                <div class="userlog">
                    <p id="loggeduser"><b>
                        Logged as : 
                        <?php echo $_SESSION['uname'];?> </b>
                    </p>
                </div>
    
                <div class="intro">
                    <div class="introtext">
                        <h1>Twelve Basic<br>English Tenses</h1>
                        <hr width="615px" align ="right">
                        <p>English Tenses are verb forms used  to tell you when a person did something or when something existed or happened (eg : went, go, will go) In English, there are three main tenses: the <b>Present</b>, the <b>Past</b>, and the <b>Future</b>. There are twelve tense forms in English. For English learners, knowing how to use English tenses can be quite a challenge. But never fear, this tutorial will teach you to think like a native speaker.</p>
                    </div>
    
                    <div class="introimage">
                        <img src="img/intro02.png" width="320px" alt="Male Teacher">
                    </div>
                </div>
    
                <div class="main-chart clearfix">
                    <hr class="hr2" width="1050px">
                    <div class="tense"><button class="tense-btn">Tenses</button></div>
                    <img class="lines" src="img/flowchart.png" height="260px">
                    <div class="flow">
                        <div class="present-flow">
                            <button class="present-btn"><a href="#present">Present</a></button>
                            <div class="present-sub">
                                <a href="#presentS">Simple Present</a>
                                <a href="#presentC">Present Continuous</a>
                                <a href="#presentP">Present Perfect</a>
                                <a href="#presentPC">Present Perfect Continuous</a>
                             </div>
                        </div>
                        
                        <div class="past-flow">
                            <button class="present-btn"><a href="#past">Past</a></button>
                            <div class="past-sub">
                                <a href="#pastS">Simple Past</a>
                                <a href="#pastC">Past Continuous</a>
                                <a href="#pastP">Past Perfect</a>
                                <a href="#pastPC">Past Perfect Continuous</a>
                             </div>
                        </div>
            
                        <div class="future-flow">
                            <button class="present-btn"><a href="#future">Future</a></button>
                            <div class="future-sub">
                                <a href="#futureS">Simple Future</a>
                                <a href="#futureC">Future Continuous</a>
                                <a href="#futureP">Future Perfect</a>
                                <a href="#futurePC">Future Perfect Continuous</a>
                             </div>
                        </div>
                    </div>
        
                </div> <!--main-chart-->
                <hr class="hr2" width="1050px">
                <div class="bar-type2" id="present" ><h2>Present</h2></div>
    
                <div class="content clearfix"> <!--Present-->
                    
                    <div class="col1" id="presentS"><!--simple-->
                        <h3>Simple Present</h3>
                        <hr class="hr3">
                        <p>The simple present is a verb tense with two main uses. We use the simple present tense when an action is happening right now, or when it happens regularly.</p>
                        <p><b>Example:<br> &nbsp He goes out every Saturday night.
                            <br>&nbsp The bus arrives in London at 6 p.m.</b>
                        </p>
    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc1()" >Learn More</button>
                        <div id="Modal1" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Simple Present</h2>
                                <hr>
                                <h3>(hI/e/she/it) + infinitive + -s</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>every day</li>
                                                <li>sometimes</li>
                                                <li>always</li>
                                                <li>often</li>
                                                <li>usually</li>
                                                <li>seldom</li>
                                                <li>never</li>
                                                <li>first ...</li>
                                                 <li>then</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4"> 
                                            <ul>
                                                <li>something happens repeatedly</li>
                                                <li>how often something happens</li>
                                                <li>things in general</li>
                                                <li>one action follows another</li>
                                                <li>with the following verbs (to love, to hate, to think, etc.)</li>
                                                <li>future meaning: timetables, programmes</li>
                                            </ul>
                                        </td>
    
                                        <td>I work.</td>
                                        <td>I din't work.</td>
                                        <td>Do I work?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He works.</td>
                                        <td>He doesn't work.</td>
                                        <td>Does he work?</td>
                                    </tr>
                                    <tr>
                                        <td>I go.</td>
                                        <td>I don't go.</td>
                                        <td>Do I go?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He goes.</td>
                                        <td>He doesn't go.</td>
                                        <td>Does he go?</td>
                                    </tr>
                                    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="sprQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalspr"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Simple Present</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/questions)</h3>
                                <div class="clearfix">
                                    <p class="q">1. He <input type="text" class="inputQ" id="spr-q1"> (work) in a Software Company.</p>
                                    <p class="r" id="spr-r1"></p>
                                    <p class="q">2. I know sara is very busy, so I <input type="text" class="inputQ" id="spr-q2"> (not/disturb) her.</p>
                                    <p class="r" id="spr-r2"></p>
                                    <p class="q">3. When children become teenagers, they <input type="text" class="inputQ" id="spr-q3"> (spend) more time with their friends.</p>
                                    <p class="r" id="spr-r3"></p>
                                    <p class="q">4. What I really like about Mellisa is that she <input type="text" class="inputQ" id="spr-q4"> (make) amazing cakes.</p>
                                    <p class="r" id="spr-r4"></p>
                                    <p class="q">5. <input type="text" class="inputQ" id="spr-q5"> (you/listen) to the radio every day?</p>
                                    <p class="r" id="spr-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="spr_Submit('works','do not disturb','spend','makes','Do you listen')">Submit</button>
                                </div>
                                <h4 class="caHead" id="spr-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="spr-ca1"></p>
                                    <p class="correct-answer" id="spr-ca2"></p>
                                    <p class="correct-answer" id="spr-ca3"></p>
                                       <p class="correct-answer" id="spr-ca4"></p>
                                    <p class="correct-answer" id="spr-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
    
                    </div>
    
                    <div class="col2" id="presentC"> <!--continuous-->
                        <h3>Present Continuous</h3>
                        <hr class="hr3">
                        <p>The present continuous verb tense indicates that an action or condition is happening now, frequently, and may continue into the future.</p>
                        <p><b>Example:<br> &nbsp Aunt Christine is warming up the car.
                            <br>&nbsp The waiter is standing behind the counter.</b>
                        </p>
                        
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc2()" >Learn More</button>
                        <div id="Modal2" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Present Continuous</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + (am/are/is) + infinitive + -ing</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>now</li>
                                                <li>at the moment</li>
                                                <li>Look!</li>
                                                <li>Listen!</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>something is happening at the same time of speaking or around it</li>
                                                <li>future meaning: when you have already decided and arranged to do it (a fixed plan, date)</li>
                                            </ul>
                                        </td>
    
                                        <td>I'm working.</td>
                                        <td>I'm not working.</td>
                                        <td>Am I working?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He's working.</td>
                                        <td>He isn't working.</td>
                                        <td>Is he working?</td>
                                    </tr>
                                    <tr>
                                        <td>I'm going.</td>
                                        <td>I'm not going.</td>
                                        <td>Am I going?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He's going.</td>
                                        <td>He isn't going.</td>
                                        <td>Is he going?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="prcQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalprc"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Present Continuous</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. Rick admires those girls who <input type="text" class="inputQ" id="prc-q1"> (wear) red dresses. </p>
                                    <p class="r" id="prc-r1"></p>
                                    <p class="q">2. I don't know what or who she <input type="text" class="inputQ" id="prc-q2"> (laugh) at. I don't think there is anything funny.</p>
                                    <p class="r" id="prc-r2"></p>
                                    <p class="q">3. The kids <input type="text" class="inputQ" id="prc-q3"> (get) along well with each other now, but they may start to quarrel anytime.</p>
                                    <p class="r" id="prc-r3"></p>
                                    <p class="q">4.  Let's go out. It is not raining <input type="text" class="inputQ" id="prc-q4">  (not/rain) now.</p>
                                    <p class="r" id="prc-r4"></p>
                                    <p class="q">5. <input type="text" class="inputQ" id="prc-q5"> (you/watching) the television? - No, you can turn it off.</p>
                                    <p class="r" id="prc-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="prc_Submit('are wearing','is laughing','are getting','is not raining','Are you watching')">Submit</button>
                                </div>
                                <h4 class="caHead" id="prc-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="prc-ca1"></p>
                                    <p class="correct-answer" id="prc-ca2"></p>
                                    <p class="correct-answer" id="prc-ca3"></p>
                                       <p class="correct-answer" id="prc-ca4"></p>
                                    <p class="correct-answer" id="prc-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
    
                    </div>
    
                    <div class="col3" id="presentP"><!--perfect-->
                        <h3>Present Perfect</h3>
                        <hr class="hr3">
                        <p>The present perfect tense refers to an action or state that either occurred at an indefinite time in the past or began in the past and continued to the present time.</p>
                        <p><b>Example:<br> &nbsp We have talked before.
                            <br>&nbsp He has grown impatient over the last hour.</b>
                        </p>
    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc3()" >Learn More</button>
                        <div id="Modal3" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Present Perfect</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + have/has + past participle</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>just</li>
                                                <li>yet</li>
                                                <li>never</li>
                                                <li>ever</li>
                                                <li>already</li>
                                                <li>so far</li>
                                                <li>up to now</li>
                                                <li>since</li>
                                                <li>for</li>
                                                <li>recently</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>you say that sth. has happened or is finished in the past and it has a connection to the present</li>
                                                <li>action started in the past and continues up to the present</li>
                                            </ul>
                                        </td>
    
                                        <td>I have worked.</td>
                                        <td>I haven't worked.</td>
                                        <td>Have I worked?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He has worked.</td>
                                        <td>He hasn't worked.</td>
                                        <td>Has he worked?</td>
                                    </tr>
                                    <tr>
                                        <td>I have gone.</td>
                                        <td>I haven't gone.</td>
                                        <td>Have I gone?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He has gone.</td>
                                        <td>He hasn't gone.</td>
                                        <td>Has he gone?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="prpQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalprp"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Present Perfect</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. He <input type="text" class="inputQ" id="prp-q1"> (not/smoke) for two weeks. He is trying to give it up.</p>
                                    <p class="r" id="prp-r1"></p>
                                    <p class="q">2. I <input type="text" class="inputQ" id="prp-q2"> (never/drink) whiskey.</p>
                                    <p class="r" id="prp-r2"></p>
                                    <p class="q">3. Here are your shoes, I <input type="text" class="inputQ" id="prp-q3"> (just/clean) them.</p>
                                    <p class="r" id="prp-r3"></p>
                                    <p class="q">4. The clock is slow. - It isn't slow, it <input type="text" class="inputQ" id="prp-q4">. (stop)</p>
                                    <p class="r" id="prp-r4"></p>
                                    <p class="q">5. Where <input type="text" class="inputQ" id="prp-q5"> (you/be) in the past 3 hours?</p>
                                    <p class="r" id="prp-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="prp_Submit('has not smoked','have never drunk','have just cleaned',' has stopped','have you been')">Submit</button>
                                </div>
                                <h4 class="caHead" id="prp-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="prp-ca1"></p>
                                    <p class="correct-answer" id="prp-ca2"></p>
                                    <p class="correct-answer" id="prp-ca3"></p>
                                       <p class="correct-answer" id="prp-ca4"></p>
                                    <p class="correct-answer" id="prp-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
                    </div>
    
                    <div class="col4" id="presentPC"><!--perf-cont-->
                        <h3>Present Perfect Continuous</h3>
                        <hr class="hr3">
                        <p>The present perfect continuous tense present perfect progressive tense) shows that something started in the past and is continuing at the present time.</p>
                        <p><b>Example:<br> &nbsp I have been reading that book for a month now.
                            <br>&nbsp Mia has been competing in dancing recently.</b>
                        </p>
    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc4()" >Learn More</button>
                        <div id="Modal4" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Present Perfect Continuous</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + have/has + been + infinitive + -ing</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>all day</li>
                                                <li>the whole day</li>
                                                <li>how long</li>
                                                <li>since</li>
                                                <li>for</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>action began in the past and has just stopped</li>
                                                <li>how long the action has been happening</li>
                                                <li><b>emphasis: length of time of an action</b></li>
                                            </ul>
                                        </td>
    
                                        <td>I have been working.</td>
                                        <td>I haven't been working.</td>
                                        <td>Have I been working?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He has been working.</td>
                                        <td>He hasn't been working.</td>
                                        <td>Has he been working?</td>
                                    </tr>
                                    <tr>
                                        <td>I have been going.</td>
                                        <td>I haven't been going.</td>
                                        <td>Have I been going?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He has been going.</td>
                                        <td>He hasn't been going.</td>
                                        <td>Has he been going?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="prpcQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalprpc"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Present Perfect Continuous</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. Those children <input type="text" class="inputQ" id="prpc-q1"> (eat) chocolate all day. That's why they feel sick!</p>
                                    <p class="r" id="prpc-r1"></p>
                                    <p class="q">2. Josh <input type="text" class="inputQ" id="prpc-q2"> (do/homework) for four hours and he still has a lot more to do.</p>
                                    <p class="r" id="prpc-r2"></p>
                                    <p class="q">3. <input type="text" class="inputQ" id="prpc-q3"> (they/swim) in the lake? </p>
                                    <p class="r" id="prpc-r3"></p>
                                    <p class="q">4. She <input type="text" class="inputQ" id="prpc-q4"> (not/do) very well in school lately.</p>
                                    <p class="r" id="prpc-r4"></p>
                                    <p class="q">5. He <input type="text" class="inputQ" id="prpc-q5"> (wait) on the bus for an hour. </p>
                                    <p class="r" id="prpc-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="prpc_Submit('have been eating','has been doing','Have they been swimming',' has not been doing',' has been waiting')">Submit</button>
                                </div>
                                <h4 class="caHead" id="prpc-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="prpc-ca1"></p>
                                    <p class="correct-answer" id="prpc-ca2"></p>
                                    <p class="correct-answer" id="prpc-ca3"></p>
                                       <p class="correct-answer" id="prpc-ca4"></p>
                                    <p class="correct-answer" id="prpc-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
                        
                    </div>
                </div> <!--Present-->
    
                <div class="bar-type2" id="past" ><h2>Past</h2></div>
    
                <div class="content clearfix"> <!--Past-->
                    
                    <div class="col1" id="pastS"><!--simple-->
                        <h3>Simple Past</h3>
                        <hr class="hr3">
                        <p>The simple past is a verb tense use to talk about things or situations which happened in the past, that is, before the present time of speaking.</p>
                        <p><b>Example:<br> &nbsp I met Lisa yesterday.
                            <br>&nbsp I phoned him three times today.</b>
                        </p>
    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc5()" >Learn More</button>
                        <div id="Modal5" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Simple Past</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + infinitive + -ed</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>last ...</li>
                                                <li>... ago</li>
                                                <li>in 1990</li>
                                                <li>yesterday</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>action finished in the past, mostly connected with an expression of time (no connection to the present)</li>
                                            </ul>
                                        </td>
    
                                        <td>I worked.</td>
                                        <td>I didn't work.</td>
                                        <td>Did I work?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He worked.</td>
                                        <td>He didn't work.</td>
                                        <td>Did he work?</td>
                                    </tr>
                                    <tr>
                                        <td>I went.</td>
                                        <td>I didn't go.</td>
                                        <td>Did I go?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He went.</td>
                                        <td>He didn't go.</td>
                                        <td>Did he go?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="spaQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalspa"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Simple Past</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. Shakespeare <input type="text" class="inputQ" id="spa-q1"> (write) a lot of plays. </p>
                                    <p class="r" id="spa-r1"></p>
                                    <p class="q">2. When <input type="text" class="inputQ" id="spa-q2">? (he/arrive) </p>
                                    <p class="r" id="spa-r2"></p>
                                    <p class="q">3.  <input type="text" class="inputQ" id="spa-q3"> (you/lock) the door before you left the house? </p>
                                    <p class="r" id="spa-r3"></p>
                                    <p class="q">4. I <input type="text" class="inputQ" id="spa-q4"> (read) his books when I was at school.</p>
                                    <p class="r" id="spa-r4"></p>
                                    <p class="q">5. He <input type="text" class="inputQ" id="spa-q5"> (not/cut) his hair when he was a child. </p>
                                    <p class="r" id="spa-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="spa_Submit('wrote','did he arrive','Did you lock','read','did not cut')">Submit</button>
                                </div>
                                <h4 class="caHead" id="spa-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="spa-ca1"></p>
                                    <p class="correct-answer" id="spa-ca2"></p>
                                    <p class="correct-answer" id="spa-ca3"></p>
                                       <p class="correct-answer" id="spa-ca4"></p>
                                    <p class="correct-answer" id="spa-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
                    </div>
    
                    <div class="col2" id="pastC"><!--continuous-->
                        <h3>Past Continuous</h3>
                        <hr class="hr3">
                        <p>The past continuous tense, also known as the past progressive tense, refers to a continuing action or state that was happening at some point in the past. </p>
                        <p><b>Example:<br> &nbsp The sun was shining every day that summer.
                            <br>&nbsp The children were laughing at my cleverness.</b>
                        </p>
    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc6()" >Learn More</button>
                        <div id="Modal6" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Past Continuous</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + was/were + infinitive + -ing</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>while</li>
                                                <li>as long as</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>an action happened in the middle of another action</li>
                                                <li>someone was doing sth. at a certain time (in the past) - you do not know whether it was finished or not</li>
                                            </ul>
                                        </td>
    
                                        <td>I was working.</td>
                                        <td>I wasn't working.</td>
                                        <td>Was I working?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He was working.</td>
                                        <td>He wasn't working.</td>
                                        <td>Was he working?</td>
                                    </tr>
                                    <tr>
                                        <td>I was going.</td>
                                        <td>I wasn't going.</td>
                                        <td>Was I going?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He was going.</td>
                                        <td>He wasn't going.</td>
                                        <td>Was he going?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="pacQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalpac"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Past Continuous</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. James <input type="text" class="inputQ" id="pac-q1"> (fall) off the stairs yesterday </p>
                                    <p class="r" id="pac-r1"></p>
                                    <p class="q">2. I <input type="text" class="inputQ" id="pac-q2"> (watch) her while she was singing. </p>
                                    <p class="r" id="pac-r2"></p>
                                    <p class="q">3. When you first to this country, I <input type="text" class="inputQ" id="pac-q3"> (work) as a cashier.</p>
                                    <p class="r" id="pac-r3"></p>
                                    <p class="q">4.  <input type="text" class="inputQ" id="pac-q4"> (you/dance)? when while I was cooking </p>
                                    <p class="r" id="pac-r4"></p>
                                    <p class="q">5. I <input type="text" class="inputQ" id="pac-q5"> (not/wear) a hat, I never wear hats. </p>
                                    <p class="r" id="pac-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="pac_Submit('was falling','was watching','was working','Were you dancing','was not wearing')">Submit</button>
                                </div>
                                <h4 class="caHead" id="pac-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="pac-ca1"></p>
                                    <p class="correct-answer" id="pac-ca2"></p>
                                    <p class="correct-answer" id="pac-ca3"></p>
                                       <p class="correct-answer" id="pac-ca4"></p>
                                    <p class="correct-answer" id="pac-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
    
                    </div>
    
                    <div class="col3" id="pastP"><!--perfect-->
                        <h3>Past Perfect</h3>
                        <hr class="hr3">
                        <p>The past perfect, is a verb tense used to talk about actions that were completed before some point in the past (something that happened before something else).</p>
                        <p><b>Example:<br> &nbsp We were shocked to discover that someone had graffitied “Tootles was here” on our front door.</b></p>
                    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc7()" >Learn More</button>
                        <div id="Modal7" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Past Perfect</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + had + past participle</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>already</li>
                                                <li>just</li>
                                                <li>never</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>mostly when two actions in a story are related to each other: the action which had already happened is put into Past Perfect, the other action into Simple Past</li>
                                                <li>the past of Present Perfect</li>
                                            </ul>
                                        </td>
    
                                        <td>I had worked.</td>
                                        <td>I hadn't worked.</td>
                                        <td>Had I worked?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He had worked.</td>
                                        <td>He hadn't worked.</td>
                                        <td>Had he worked?</td>
                                    </tr>
                                    <tr>
                                        <td>I had gone.</td>
                                        <td>I hadn't gone.</td>
                                        <td>Had I gone?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He had gone.</td>
                                        <td>He hadn't gone.</td>
                                        <td>Had he gone?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="papQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalpap"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Past Perfect</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. I <input type="text" class="inputQ" id="pap-q1"> (not/hear) the song for years.</p>
                                    <p class="r" id="pap-r1"></p>
                                    <p class="q">2. When I entered the room, I didn't recognize him because <input type="text" class="inputQ" id="pap-q2"> (grow) a beard.</p>
                                    <p class="r" id="pap-r2"></p>
                                    <p class="q">3. Several senior employees <input type="text" class="inputQ" id="pap-q3"> (leave) the company within last week.</p>
                                    <p class="r" id="pap-r3"></p>
                                    <p class="q">4. The staff <input type="text" class="inputQ" id="pap-q4"> (struggle) to keep the accounts up to date. </p>
                                    <p class="r" id="pap-r4"></p>
                                    <p class="q">5. Jane  <input type="text" class="inputQ" id="pap-q5"> (prepare) a beautiful candlelight dinner. </p>
                                    <p class="r" id="pap-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="pap_Submit('had not heard','had grown','had left','had struggled','had prepared')">Submit</button>
                                </div>
                                <h4 class="caHead" id="pap-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="pap-ca1"></p>
                                    <p class="correct-answer" id="pap-ca2"></p>
                                    <p class="correct-answer" id="pap-ca3"></p>
                                       <p class="correct-answer" id="pap-ca4"></p>
                                    <p class="correct-answer" id="pap-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
                    </div>
    
                    <div class="col4" id="pastPC"><!--perf-cont-->
                        <h3>Past Perfect Continuous</h3>
                        <hr class="hr3">
                        <p>The past perfect continuous tense shows that an action that started in the past continued up until another time in the past.</p>
                        <p><b>Example:<br> &nbsp He had been drinking milk out the carton when Mom walked into the kitchen.</b>
                        </p>
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc8()" >Learn More</button>
                        <div id="Modal8" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Past Perfect Continuous</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + had + been + infinitive + ing</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>how long</li>
                                                <li>since</li>
                                                <li>for</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>how long something had been happening before something else happened</li>
                                            </ul>
                                        </td>
    
                                        <td>I had been working.</td>
                                        <td>I hadn't been working.</td>
                                        <td>Had I been working?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He had been working.</td>
                                        <td>He hadn't been working..</td>
                                        <td>Had he been working?</td>
                                    </tr>
                                    <tr>
                                        <td>I had been going.</td>
                                        <td>I hadn't been going.</td>
                                        <td>Had I been going?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He had been going.</td>
                                        <td>He hadn't been going.</td>
                                        <td>Had he been going?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="papcQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalpapc"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Past Perfect Continuous</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. Jill knew that her friend Sasha <input type="text" class="inputQ" id="papc-q1"> (feel) sad lately.</p>
                                    <p class="r" id="papc-r1"></p>
                                    <p class="q">2. For some time before Mom died, she <input type="text" class="inputQ" id="papc-q2"> (make) three scrapbooks.</p>
                                    <p class="r" id="papc-r2"></p>
                                    <p class="q">3.  Sara guessed that Dan <input type="text" class="inputQ" id="papc-q3"> (bake) cookies all day. </p>
                                    <p class="r" id="papc-r3"></p>
                                    <p class="q">4. How long <input type="text" class="inputQ" id="papc-q4"> (you/work) there before join here? </p>
                                    <p class="r" id="papc-r4"></p>
                                    <p class="q">5. She <input type="text" class="inputQ" id="papc-q5"> (never/ski) before her family moved to the mountains </p>
                                    <p class="r" id="papc-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="papc_Submit('had been feeling','had been making','had been baking','had you been woking','had never been skiing ')">Submit</button>
                                </div>
                                <h4 class="caHead" id="papc-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="papc-ca1"></p>
                                    <p class="correct-answer" id="papc-ca2"></p>
                                    <p class="correct-answer" id="papc-ca3"></p>
                                       <p class="correct-answer" id="papc-ca4"></p>
                                    <p class="correct-answer" id="papc-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
    
                    </div>
                </div> <!--Past-->
    
                <div class="bar-type2" id="future" ><h2>Future</h2></div>
    
                <div class="content clearfix"> <!--Future-->
                    
                    <div class="col1" id="futureS"><!--simple-->
                        <h3>Simple Future</h3>
                        <hr class="hr3">
                        <p>The simple present is a verb tense with two main uses. We use the simple present tense when an action is happening right now, or when it happens regularly.</p>
                        <p><b>Example:<br> &nbsp He goes out every Saturday night.
                            <br>&nbsp The bus arrives in London at 6 p.m.</b>
                        </p>
    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc9()" >Learn More</button>
                        <div id="Modal9" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Simple Future</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + will + infinitive</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>in a year</li>
                                                <li>next …</li>
                                                <li>tomorrow</li>
                                                <li>I think</li>
                                                <li>probably</li>
                                                <li>perhaps</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>action in the future that cannot be influenced</li>
                                                <li>spontaneous decision</li>
                                                <li>assumption with regard to the future</li>
                                              </ul>
                                        </td>
    
                                        <td>I'll work.</td>
                                        <td>I won't work.</td>
                                        <td>Will I work?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He'll work.</td>
                                        <td>He won't work.</td>
                                        <td>Will he work?</td>
                                    </tr>
                                    <tr>
                                        <td>I'll go.</td>
                                        <td>I won't go.</td>
                                        <td>Will I go?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He'll go.</td>
                                        <td>He won't go.</td>
                                        <td>Will he go?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="sfQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalsf"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Simple Future</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. I <input type="text" class="inputQ" id="sf-q1"> (get) you a ticket too. </p>
                                    <p class="r" id="sf-r1"></p>
                                    <p class="q">2. I <input type="text" class="inputQ" id="sf-q2"> (be) there around 8.30.</p>
                                    <p class="r" id="sf-r2"></p>
                                    <p class="q">3. I guess that I <input type="text" class="inputQ" id="sf-q3"> (not/take) a walk now.</p>
                                    <p class="r" id="sf-r3"></p>
                                    <p class="q">4.<input type="text" class="inputQ" id="sf-q4"> (you/drive) on Sunday? </p>
                                    <p class="r" id="sf-r4"></p>
                                    <p class="q">5. I <input type="text" class="inputQ" id="sf-q5"> (probably/wash) the car on tuesday.</p>
                                    <p class="r" id="sf-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="sf_Submit('will get','will be','will not take','will you drive','will probably wash')">Submit</button>
                                </div>
                                <h4 class="caHead" id="sf-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="sf-ca1"></p>
                                    <p class="correct-answer" id="sf-ca2"></p>
                                    <p class="correct-answer" id="sf-ca3"></p>
                                       <p class="correct-answer" id="sf-ca4"></p>
                                    <p class="correct-answer" id="sf-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
                    </div>
    
                    <div class="col2" id="futureC"><!--continuous-->
                        <h3>Future Continuous</h3>
                        <hr class="hr3">
                        <p>The future continuous tense, is a verb tense that indicates that something will occur in the future and continue for an expected length of time.</p>
                        <p><b>Example:<br> &nbsp I will be watching Michael and Eric race.
                            <br>&nbsp I will arrive at five o’clock.</b>
                        </p>
    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc10()" >Learn More</button>
                        <div id="Modal10" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Future Continuous</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + will + be + infinitive + -ing</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>in one year</li>
                                                <li>next week</li>
                                                <li>tomorrow</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>action that is going on at a certain time in the future</li>
                                                <li>action that is sure to happen in the near future</li>
                                              </ul>
                                        </td>
    
                                        <td>I'll be working.</td>
                                        <td>I won't be working.</td>
                                        <td>Will I be working?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He'll be working.</td>
                                        <td>He won't be working.</td>
                                        <td>Will he be working?</td>
                                    </tr>
                                    <tr>
                                        <td>I'll be going.</td>
                                        <td>I won't be going.</td>
                                        <td>Will I be going?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He'll be going.</td>
                                        <td>He won't be going.</td>
                                        <td>Will he be going?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="fcQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalfc"> <!--Modal Box-->
                            <div class="content-quiz">
                                <fcn class="close" onclick="quizClose()">&times;</fcn>
                                <h2>Quiz - Future Continuous</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. Sarah <input type="text" class="inputQ" id="fc-q1"> (run) a marathon Saturday.</p>
                                    <p class="r" id="fc-r1"></p>
                                    <p class="q">2. <input type="text" class="inputQ" id="fc-q2"> (you/shopping) tomorrow?</p>
                                    <p class="r" id="fc-r2"></p>
                                    <p class="q">3. She <input type="text" class="inputQ" id="fc-q3"> (not/participate) to the competition tomorrow.</p>
                                    <p class="r" id="fc-r3"></p>
                                    <p class="q">4. Professor Baker <input type="text" class="inputQ" id="fc-q4"> (tech) American history next semester.</p>
                                    <p class="r" id="fc-r4"></p>
                                    <p class="q">5. Grandma <input type="text" class="inputQ" id="fc-q5"> (smile) when she answers the door.</p>
                                    <p class="r" id="fc-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="fc_Submit('will be running','Will you be shopping','will not be participating','will be teaching','will be smiling')">Submit</button>
                                </div>
                                <h4 class="caHead" id="fc-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="fc-ca1"></p>
                                    <p class="correct-answer" id="fc-ca2"></p>
                                    <p class="correct-answer" id="fc-ca3"></p>
                                       <p class="correct-answer" id="fc-ca4"></p>
                                    <p class="correct-answer" id="fc-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
                    </div>
    
                    <div class="col3" id="futureP"><!--perfect-->
                        <h3>Future Perfect</h3>
                        <hr class="hr3">
                        <p>The future perfect tense is for talking about an action that will be completed between now and some point in the future.</p>
                        <p><b>Example:<br> &nbsp The parade will have ended by the time Chester gets out of bed. At eight o’clock I will have left.</b>
                        </p>
    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc11()" >Learn More</button>
                        <div id="Modal11" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Future Perfect</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + will + have + past participle</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4">
                                            <ul>
                                                <li>by Monday</li>
                                                <li>in a week</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="250px"> 
                                            <ul>
                                                <li>action that will be finished at a certain time in the future</li>
                                            </ul>
                                        </td>
    
                                        <td>I'll have worked.</td>
                                        <td>I won't have worked.</td>
                                        <td>Will I have worked?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He'll have worked.</td>
                                        <td>He won't have worked.</td>
                                        <td>Will he have worked?</td>
                                    </tr>
                                    <tr>
                                        <td>I'll have gone.</td>
                                        <td>I won't have gone.</td>
                                        <td>Will I have gone?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He'll have gone.</td>
                                        <td>He won't have gone.</td>
                                        <td>Will he have gone?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="fpQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalfp"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Future Perfect</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="clearfix">
                                    <p class="q">1. By this time next year, I <input type="text" class="inputQ" id="fp-q1"> (work) </p>
                                    <p class="r" id="fp-r1"></p>
                                    <p class="q">2. By the end of next week, They <input type="text" class="inputQ" id="fp-q2"> (get married) from high school. </p>
                                    <p class="r" id="fp-r2"></p>
                                    <p class="q">3. The mountaineers <input type="text" class="inputQ" id="fp-q3"> (reach) the top by noon.</p>
                                    <p class="r" id="fp-r3"></p>
                                    <p class="q">4. I hope your mind <input type="text" class="inputQ" id="fp-q4"> (not/changed) by this time next year. </p>
                                    <p class="r" id="fp-r4"></p>
                                    <p class="q">5. <input type="text" class="inputQ" id="fp-q5"> (he/hand in) the project by this Friday?</p>
                                    <p class="r" id="fp-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="fp_Submit('will have graduated','will have got married','will have reached','will not have changed','Will he have handed in')">Submit</button>
                                </div>
                                <h4 class="caHead" id="fp-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="fp-ca1"></p>
                                    <p class="correct-answer" id="fp-ca2"></p>
                                    <p class="correct-answer" id="fp-ca3"></p>
                                       <p class="correct-answer" id="fp-ca4"></p>
                                    <p class="correct-answer" id="fp-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
                    </div>
    
                    <div class="col4" id="futurePC"> <!--perf-cont-->
                        <h3>Future Perfect Continuous</h3>
                        <hr class="hr3">
                        <p>The future perfect continuous (future perfect progressive), is a verb tense that describes actions that will continue up until a point in the future.</p>
                        <p><b>Example:<br> &nbsp  I will have been waiting for thirty minutes.
                            <br>&nbsp  I will have been playing piano for twenty years.</b>
                        </p>
    
                        <!--Modal Box Elements-->
                        <button class="modal-btn" id="Modalbtn" onclick="clickfunc12()" >Learn More</button>
                        <div id="Modal12" class="modal"> <!--Modal Box-->
                            <div class="modal-content">
                                <span class="close" onclick="closefunc()">&times;</span>
                                <h2>Future Perfect Continuous</h2>
                                <hr>
                                <h3>Form : (I/he/she/it) + will + have + been + infinitive + ing</h3>
                                <table class="table">
    
                                    <tr>
                                        <th>Signal Words</th>
                                        <th>Use</th>
                                        <th>Examples Affirmative</th>
                                        <th>Examples Negative</th>
                                        <th>Examples Interrogative</th>
                                    </tr>
    
                                    <tr >
                                        <td rowspan="4" width="100px" >
                                            <ul>
                                                <li>for …</li>
                                                <li>the last couple of hours</li>
                                                <li>all day long</li>
                                            </ul>
                                        </td>
    
                                        <td rowspan="4" width="200px"> 
                                            <ul>
                                                <li>action that will be finished at a certain time in the future</li>
                                                <li>putting emphasis on the course of an action</li>
                                            </ul>
                                        </td>
    
                                        
                                        <td>I'll have been working.</td>
                                        <td>I won't have been working.</td>
                                        <td>Will I have been working?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He'll have been working.</td>
                                        <td>He won't have been working.</td>
                                        <td>Will he have been working?</td>
                                    </tr>
                                    <tr>
                                        <td>I'll have been going.</td>
                                        <td>I won't have been going.</td>
                                        <td>Will I have been going?</td>
                                    </tr>
                                    <tr class="special-row">
                                        <td>He'll have been going.</td>
                                        <td>He won't have been going.</td>
                                        <td>Will he have been going?</td>
                                    </tr>
    
                                </table>
                            </div>
                        </div> <!--Modal Box Elements-->
    
                        <!--Quiz Modal Box Elements-->
                        <button class="modal-btn" onclick="fpcQuiz()">Quiz</button>
                        <div class="modal-quiz" id="modalfpc"> <!--Modal Box-->
                            <div class="content-quiz">
                                <span class="close" onclick="quizClose()">&times;</span>
                                <h2>Quiz - Future Perfect Continuous</h2>
                                <hr>
                                <h3>Complete the sentences, put the verb into the correct form (positive/negative/question)</h3>
                                <div class="qu clearfix">
                                    <p class="q">1. By this time next week, my wife <input type="text" class="inputQ" id="fpc-q1"> (fast) for exactly 24 days. </p>
                                    <p class="r" id="fpc-r1"></p>
                                    <p class="q">2. By this time tomorrow, he <input type="text" class="inputQ" id="fpc-q2"> (work) at his job for one week. </p>
                                    <p class="r" id="fpc-r2"></p>
                                    <p class="q">3.  <input type="text" class="inputQ" id="fpc-q3"> (you/drive) to Canada tomorrow around 5 o'clock? </p>
                                    <p class="r" id="fpc-r3"></p>
                                    <p class="q">4. This summer, Nadal <input type="text" class="inputQ" id="fpc-q4"> (reside) in Detroit for 25 years. </p>
                                    <p class="r" id="fpc-r4"></p>
                                    <p class="q">5. By next week, I  <input type="text" class="inputQ" id="fpc-q5"> (not/see) my girlfriend for 1 year. </p>
                                    <p class="r" id="fpc-r5"></p>
                                </div>
                                <hr>
                                <div>
                                    <button class="submit" onclick="fpc_Submit('will have been fasting','will have been working','Will you be driving','will have been residing','will not have been seeing')">Submit</button>
                                </div>
                                <h4 class="caHead" id="fpc-caHead" style="display: none;">Correct answers for the questions done wrong</h3>
                                <div class="clearfix">
                                    <p class="correct-answer" id="fpc-ca1"></p>
                                    <p class="correct-answer" id="fpc-ca2"></p>
                                    <p class="correct-answer" id="fpc-ca3"></p>
                                       <p class="correct-answer" id="fpc-ca4"></p>
                                    <p class="correct-answer" id="fpc-ca5"></p>
                                </div>
                            </div>
                        </div> <!--Quiz Modal Box Elements-->
                    </div>
                </div> <!--Future-->
    
                <?php include('components/footer.php')?>

            </div>

        </div> <!--wrapper-->

        <!--Model Box Scripts-->
     
            <script type="text/javascript" src="js/index02quiz-script.js"></script>
            <script type="text/javascript" src="js/index02more-script.js"></script>
    </body>

</html>