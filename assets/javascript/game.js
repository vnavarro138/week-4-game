//Crystals Collector
//assign global variables
//assign a random number for player to shoot for between 19-120
//assign each of the four crystals a random value betweer 1-12
//display as buttons on page
//reveal random number for player to shoot for on page
//when crystal is clicked add the value to the total score
//display total score on page
//determine wins (if total score === random number)
//determine losses
//display wins and losses
//restart game with the following:
//select random number
//assign random values to crystals again
//set total score to zero
//-----------------------------------------------------------
//assign global variables
//counter will add up total score
var counter = 0;
var wins = 0;
var losses =0;
var randomNumber = 0;
var crystal1Value = 0;
var crystal2Value = 0;
var crystal3Value = 0;
var crystal4Value = 0;

startGame();
//ISSUE crystal value is retaining from previous rounds, counter is starting at some value when playing more than 2 rounds 
//(so if it was 2 in round 1, and 10 in round 2, it will multiply 2 and 10 for a new value of 20)
function startGame() {
	//set counter back to zero
	counter = 0;
	console.log("counter at start of game: " + counter)
	//clear the counter on page
	$("#counter").empty();
	//clear the random number on page
	$("#randomNumber").empty();


	//generate a random number between 19 and 120
	randomNumber = Math.floor(Math.random() * 102) + 19;
	console.log("Target Score: " + randomNumber);
	$("#random-number").text(randomNumber);
	//assigns value to each crystal
	crystal1Value = Math.floor(Math.random() *  12) + 1;
	console.log("First Crystal Value: " + crystal1Value);

	crystal2Value = Math.floor(Math.random() *  12) + 1;
	console.log("Second Crystal Value: " + crystal2Value);

	crystal3Value = Math.floor(Math.random() *  12) + 1;
	console.log("Third Crystal Value: " + crystal3Value);

	crystal4Value = Math.floor(Math.random() *  12) + 1;
	console.log("Fourth Crystal Value: " + crystal4Value);
	
};

//start adding up values every time a crystal is clicked
	
	$("#crystal-1").on("click", function(){
		counter = counter + crystal1Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined()
	});

	$("#crystal-2").on("click", function(){
		counter = counter + crystal2Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined()
	});

	$("#crystal-3").on("click", function(){
		counter = counter + crystal3Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined()
	});

	$("#crystal-4").on("click", function(){
		counter = counter + crystal4Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined()
	});

//write a function to determine win vs loss, and be sure to check if 
//user has won or lost after every click they make
 function winsDetermined() {
 	 if(counter > randomNumber) {
 	 	alert("You lose!");
 	 	losses++;
 	 	document.getElementById("losses-count").innerHTML = losses;		
 	 	console.log ("You lose " + losses + " games lost");
 	 	startGame();
 	 }

 	else if(counter === randomNumber) {
 		alert("ChaChing-YOU WIN!");
 		wins++;
 		document.getElementById("wins-count").innerHTML = wins;
 		console.log ("You win " + wins + " games won");
 		startGame();
 	}
};
