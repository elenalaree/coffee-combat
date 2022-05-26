/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/

//variables
var body = document.body;
var header = document.querySelector("header");
var highEl = document.createElement("div");
var timerEl = document.createElement("div");

var main = document.querySelector("main");
var sectionEl = document.createElement("section");
var cardEl = document.createElement("div");
var wrong = document.createElement("p");
var correct = document.createElement("p");
var finalCard = document.createElement("div")

//Intro Card
var buttonEl = document.createElement("button");
var timeLeft = 60;
var timerId = "";

//Save High Score
var highScoresPage = document.createElement("div");
highScoresPage.innerHTML = "<h2>High Scores</h2> ";

var scoreListSet = document.createElement("ol");


var buttonKeeper = document.createElement("div");
buttonKeeper.className = "keeper";

//Go back to beginning button
var goBack = document.createElement("button");
goBack.className = "btn";
goBack.textContent = "Start over";


//clear scores button

var clearScores = document.createElement("button");
clearScores.className = "btn";
clearScores.textContent = "Clear high scores.";

//restart


//timer
var updateDisplayedTime = function(){  
  timerEl.textContent = 'Time: ' + timeLeft ;
};

var startTime = function(){ 
  timeLeft = 60; 
   timerId = setInterval(countdown, 1000); 
   
  function countdown() {
      if (timeLeft < 0) {
        clearTimeout(timerId);

        
      } else {
        updateDisplayedTime();
        timeLeft--;
      }
  }
};


var stopTime = function(){
  clearInterval(timerId);
};

//functions
var answerClickFactory = function(isCorrectAnswer, nextQuestion, listContainer){
  var answerClick = function(){
    if(isCorrectAnswer){
      listContainer.appendChild(correct);
      timeLeft = timeLeft + 10;
    } else{
      listContainer.appendChild(wrong);
      timeLeft = timeLeft - 10;
    }
    setTimeout(nextQuestion, 500);
  }
  return answerClick;
};


//Question cards

//card 1
var cardQ1 = document.createElement("div");
cardQ1.innerHTML = "<p>Which is not a correct data type?</p>";
var list1 = document.createElement("ol");


var aList1 = document.createElement("li");
aList1.textContent = "true";
aList1.onclick = answerClickFactory(false, answer1, list1);

var aList2 = document.createElement("li");
aList2.textContent = "append";
aList2.onclick = answerClickFactory(true, answer1, list1);

var aList3 = document.createElement("li");
aList3.textContent = "string";
aList3.onclick = answerClickFactory(false, answer1, list1);

var aList4 = document.createElement("li");
aList4.textContent = "Boolean";
aList4.onclick = answerClickFactory(false, answer1, list1);

//card 2
var cardQ2 = document.createElement("div");
cardQ2.innerHTML = "<p>Which can only be declared once and can't change?</p>";
var list2 = document.createElement("ol");


var bList1 = document.createElement("li");
bList1.textContent = "var";
bList1.onclick = answerClickFactory(false, answer2, list2);

var bList2 = document.createElement("li");
bList2.textContent = "const";
bList2.onclick = answerClickFactory(true, answer2, list2);

var bList3 = document.createElement("li");
bList3.textContent = "let";
bList3.onclick = answerClickFactory(false, answer2, list2);

var bList4 = document.createElement("li");
bList4.textContent = "get";
bList4.onclick = answerClickFactory(false, answer2, list2);

//card 3
var cardQ3 = document.createElement("div");
cardQ3.innerHTML = "<p>An Array in Javascript can be used to store ____.</p>";
var list3 = document.createElement("ol");


var cList1 = document.createElement("li");
cList1.textContent = "Strings";
cList1.onclick = answerClickFactory(false, answer3, list3);

var cList2 = document.createElement("li");
cList2.textContent = "Other arrays";
cList2.onclick = answerClickFactory(false, answer3, list3);

var cList3 = document.createElement("li");
cList3.textContent = "Boolean";
cList3.onclick = answerClickFactory(false, answer3, list3);

var cList4 = document.createElement("li");
cList4.textContent = "All of the Above";
cList4.onclick = answerClickFactory(true, answer3, list3);

//card 4
var cardQ4 = document.createElement("div");
cardQ4.innerHTML = "<p>What is passed into a function?</p>";
var list4 = document.createElement("ol");


var dList1 = document.createElement("li");
dList1.textContent = "Parameters";
dList1.onclick = answerClickFactory(false, endGame, list4);

var dList2 = document.createElement("li");
dList2.textContent = "String";
dList2.onclick = answerClickFactory(false, endGame, list4);

var dList3 = document.createElement("li");
dList3.textContent = "Ar";
dList3.onclick = answerClickFactory(true, endGame, list4);

var dList4 = document.createElement("li");
dList4.textContent = "Boolean";
dList4.onclick = answerClickFactory(false, endGame, list4);

//var info
highEl.textContent = "View High Scores";
highEl.className = "highScore"
timerEl.textContent = "Timer: 60";

cardEl.innerHTML = "<p>Welcome to Coffee Combat! Test your knowledge!</p>";
buttonEl.textContent = "Start Combat";
buttonEl.className = "btn";

wrong.textContent = "Wrong!";
correct.textContent = "Correct!";




//header
body.appendChild(header);
header.append(highEl);
header.append(timerEl);





//intro card
body.appendChild(main);
main.appendChild(sectionEl);
sectionEl.appendChild(cardEl);
cardEl.appendChild(buttonEl);


buttonEl.setAttribute("onclick", "startTime(); changeCard();");
//question 1
function changeCard() {
    cardEl.remove();
    sectionEl.appendChild(cardQ1);
    cardQ1.appendChild(list1);
    list1.appendChild(aList1);
    list1.appendChild(aList2);
    list1.appendChild(aList3);
    list1.appendChild(aList4);
}


//question 2
function answer1() {
  cardQ1.remove();
  sectionEl.appendChild(cardQ2);
  cardQ2.appendChild(list2);
  list2.appendChild(bList1);
  list2.appendChild(bList2);
  list2.appendChild(bList3);
  list2.appendChild(bList4);      
};



//question 3

function answer2() {
  cardQ2.remove();
  sectionEl.appendChild(cardQ3);
  cardQ3.appendChild(list3);
  list3.appendChild(cList1);
  list3.appendChild(cList2);
  list3.appendChild(cList3);
  list3.appendChild(cList4);
}

//question 4
function answer3() {
  cardQ3.remove();
  sectionEl.appendChild(cardQ4);
  cardQ4.appendChild(list4);
  list4.appendChild(dList1);
  list4.appendChild(dList2);
  list4.appendChild(dList3);
  list4.appendChild(dList4);
}
//form information
var form = document.createElement("form");
var input = document.createElement("input");
input.setAttribute('type', "text");
input.setAttribute('name', "username");
input.setAttribute('placeholder', "User initials");
input.className = "nameSlot";

var submit = document.createElement("button");
submit.className = "btn";
submit.textContent = "Submit";
//high scores array
var highestScores = [].sort((a,b)=>b-a);

//delete Scores Function
function deleteScore(){
  localStorage.clear();
}
//save scores function
var saveScore = function() {
  var userScore = [timeLeft,  input.value];
  highestScores.push(userScore);
  localStorage.setItem("highestScores", JSON.stringify(highestScores));
  window.alert(JSON.stringify(highestScores));
};

//Game Over
function endGame() {
  cardQ4.remove();
  stopTime();
  updateDisplayedTime();
  finalCard.innerHTML = "<h1>All done!</h1><p>Your final score is " + timeLeft + ".</p>";
  sectionEl.appendChild(finalCard);
  finalCard.appendChild(form);
  form.appendChild(input);
  form.addEventListener("submit", scoreHigh);
  form.appendChild(submit);
};

//timed game over

function endGame() {
  sectionEl.innerHTML = "";
  updateDisplayedTime();
  finalCard.innerHTML = "<h1>All done!</h1><p>Your final score is " + timeLeft + ".</p>";
  sectionEl.appendChild(finalCard);
  finalCard.appendChild(form);
  form.appendChild(input);
  form.addEventListener("submit", scoreHigh);
  form.appendChild(submit);
};

//Save page
let retrieve = JSON.parse(localStorage.getItem('highestScore'));
clearScores.onclick = deleteScore();


//appends high scores on the high score page.
function highList(){
 let numberOfListItems = highestScores.length, scoreList, i;
for (i = 0; i < numberOfListItems; ++i) {
    // Create an item for each one
    scoreList = document.createElement('li');

    // Add the item text
    scoreList.innerHTML = highestScores[i];

    // Add listItem to the listElement
    scoreListSet.appendChild(scoreList);
  }
};

//delete high scores
function killList(){
  scoreListSet.innerHTML = "";
};

//High Score page

function scoreHigh(event) {
  event.preventDefault;
  saveScore();
  finalCard.remove();
  sectionEl.appendChild(highScoresPage);
  highScoresPage.appendChild(scoreListSet);
  highList();
  highScoresPage.appendChild(buttonKeeper);
  buttonKeeper.append(goBack);
  buttonKeeper.append(clearScores);
  
  
};

function onlyScoresPage() {
  sectionEl.appendChild(highScoresPage);
  highScoresPage.appendChild(scoreListSet);
  highList();
  highScoresPage.appendChild(buttonKeeper);
  buttonKeeper.append(goBack);
  buttonKeeper.append(clearScores);
};

var restartGame = function(){
  highScoresPage.remove();
  body.appendChild(main);
  main.appendChild(sectionEl);
  sectionEl.appendChild(cardEl);
  cardEl.appendChild(buttonEl);
  
};

goBack.setAttribute("onclick", "restartGame(); killList(); ");

var viewHighScores = function(){
  sectionEl.innerHTML = "";
  onlyScoresPage();

};
//go to heigh scores page
highEl.onclick = viewHighScores;

//High score page

//initializing everything

