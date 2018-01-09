function check(){

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var correct = 0;


  if (question1 == "b") {
    correct++;
}
  if (question2 == "a") {
    correct++;
} 
  if (question3 == "c") {
    correct++;
}
  if (question4 == "a") {
    correct++;
}
  if (question5 == "d") {
    correct++;
}
  if (question6 == "b") {
    correct++;
}
  if (question7 == "c") {
    correct++;
}
  if (question8 == "d") {
    correct++;
}
  if (question9 == "a") {
    correct++;
}
  if (question10 == "d") {
    correct++;
}


  
  var pictures = ["greatjob.webp", "itsokay.gif", "better.gif"];
  var messages = ["Great job!", "That's just okay", "You really need to do better"];
  var range;

  if (correct >= 8) {
    range = 0;
  }

  if (correct <= 7 && correct >= 5) {
    range = 1;
  }

  if (correct <= 4) {
    range = 2;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[range];
}
