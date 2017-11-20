$("#questPage").hide();
$("#closePage").hide();
$("timer").hide();
//variable to hold countdown for timer
 var number = 60;
 


    

    var intervalId;
$(document).ready(function(){

// click handler for start game
  $("#startGame").on("click", function() {

    	$("#openPage").hide();
    	$("#questPage").show();
    	$("#startGame").hide();
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

    function stop() {

      clearInterval(intervalId);

      $("#questPage").hide();
      $("#closePage").show();
    }
 run();
	
});
  $("#submit").on("click", function(){
		 $("#questPage").hide();
         $("#closePage").show();
		var corrAns = 0
		var wrongAns = 0
		for (var i; i < 8; i++){
		if ($("input[value='correct']").val(corrAns))
		{
			corrAns++;
			console.log(corrAns);
		}
		else if
			($("input[value='wrong']").val(wrongAns))
		{
			wrongAns++;
			console.log(wrongAns);
		}
		}
		 
		console.log(corrAns);
		console.log(wrongAns);
		$("#correctAnswers").append("<h2>" + corrAns + "</h2>");
		$("#wrongAnswers").append("<h2>" + wrongAns + "</h2>");
		
		
	});
 });
/*$("#submit").on("click", function(){

var corrAns = 0
var wrongAns = 0
for (var i; i < 8; i++){
	if ($("input[name=ans]").val(correct))
	{
		corrAns++
	}
	else{
		wrongAns++
	}
	console.log(corrAns);
	console.log(wrongAns);
	$("#correctAnswers").html(corrAns);
	$("#wrongAnswers").html(wrongAns);
}
});


//objects to hold question and answers for quiz

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


    