//hide questions until startgame clicked
$("#questPage").hide();
$("#closePage").hide();
$("timer").hide();
//variable to hold countdown for timer
 var number = 20;
 var intervalId;



$(document).ready(function(){

// click handler for start game
  $("#startGame").on("click", function() {
  		//hides initial elements and shows questions
    	$("#openPage").hide();
    	$("#questPage").show();
    	$("#startGame").hide();
    	
    		//calls timer function
    	function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#show-number").html("<h2>" + number + "</h2>");

      if (number === 0) {

        stop();
        alert("Time Up!");
      }
    }
    // function to stop game if time runs out or submit button pressed
    function stop() {

      clearInterval(intervalId);
      	
      $("#questPage").hide();
      $("#closePage").show();
      // if statement to hold values from answers and show which ones were correct and wrong
		if ($("input[value='correct']").val())
		{
			corrAns++;
			
			
		}
		 if
			($("input[value='wrong']").val())
		{
			wrongAns++;
			
		}
		$("#correctAnswers").append("<h2>" + corrAns + "</h2>");
		$("#wrongAnswers").append("<h2>" + wrongAns + "</h2>");
		
    }
 run();
	
});
  $("#submit").on("click", function(){
		 // hides questions and shows answers when submit clicked
		 $("#questPage").hide();
         $("#closePage").show();
         //calls stop function when submit clicked
         stop();
		
	});
 });



//objects to hold question and answers for quiz
// could not get radio buttons to cooperate as classes and objects

/*var questions = {
	q1: ["What did Happy say to the ball when it wouldnt go in the hole?",
	a = "go home ball!! Are you too good for your home",// correct answer
	b = "why ball???? why!!!???",
	c = "I'm gonna stick that alligator on you",
	d = "nothing, the ball always went in the hole"],
	
	q2: ["What is the name of Billy's favorite teacher?",
		a = "mr. smith",
		b = "the revolting blob",
		c ="ms. Vaughn",// correct answer
		d = "mrs. Libby"],
	
	q3: ["what did Happy say to the clown because he couldn't get passed it in put-put?",
			a = "i quit",
			b = "im gonna rip those teeth out of your mouth",
			c = "i should have stuck with hockey!",
			d = "hahaha laugh it up chuckles"],   // correct answer

		q4: ["How did Happy accidently kill his mentor?",
			a = "pushed him in front of an 18-wheeler",
			b = "brought him the head of the alligator that took his hand",   // correct answer
			c = "knocked over a film tower on top of him",
			d = "his mentor never died"],
		
		q5: ["when bobby bouche is asked why alligators are so angry what was his answer?",
			a = "because of their medulla oblongata",
			b = "because their hungry and low on food",
			c = "alligators are peacefull creatures",
			d = "because they have all those teeth and no toothbrush to brush them"],   //correct answer

		q6: ["what does sunny scream at the McDonalds when he finds out he was too late for breakfast?",
			a =  "Would somebody get the kid a happy meal??!!",   //correct answer
			b = "it wasn't mcDonalds it was Burger king",
			c =  "he punches the clerk",
			d = "make us hashbrowns now!!"],
		
		q7: ["What light does sunny give julian when he asks for a night light?",
			a = "ninja turtle night light",
			b = "neon budlight sign",
			c = "gives him a flashlight",
			d = "neon live nudes sign"],      // correct answer
		
		q8: ["What does billy say when he beats a child in a spelling bee?",
			a = "not so smart now are you?",
			b = "I am the smartest man alive!!!",    //crrect answer
			c = "to-to-to-today junior",
			d = "Odoyle Rules!!"]
		
}*/


    