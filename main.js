function check() {
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;

     if (question1 == "five") {
     	correct++;
   }
     if (question2 == "smell") {
     	correct++;
   }
     if (question3 == "Xmen") {
     	correct++;
   }
     if (question4 == "cowboys") {
     	correct++;
     }

  var messages = ["You are a genius!", "You are doing alright", "You really need to study"];
  var pictures = ["images/win.gif", "images/almost.gif", "images/fail.gif"];

  var range;
  
    if (correct < 1) {
    	range = 2;
    }

    if (correct > 0 && 3) {
    	range = 1;
    }

    if (correct > 2) {
    	range = 0;
    }

	
	document.getElementById("afterSubmit").style.visibility = "visible";
	
  document.getElementById("message").innerHTML = messages[range];
	document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[range];
}
