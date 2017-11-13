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
var randomNumber = [];

startGame();

function startGame () {
	//set counter back to zero
	counter = 0;
	console.log("counter at start of game: " + counter)
	//clear the counter on page
	$("#counter").empty();
	//clear the random number on page
	$("#randomNumber").empty();


	//generate a random number between 19 and 120
	var randomNumber = Math.floor(Math.random() * 102) + 19;
	console.log("Target Score: " + randomNumber);
	$("#random-number").text(randomNumber);
	//assigns value to each crystal
	var crystal1Value = Math.floor(Math.random() *  12) + 1;
	console.log("First Crystal Value: " + crystal1Value);

	var crystal2Value = Math.floor(Math.random() *  12) + 1;
	console.log("Second Crystal Value: " + crystal2Value);

	var crystal3Value = Math.floor(Math.random() *  12) + 1;
	console.log("Third Crystal Value: " + crystal3Value);

	var crystal4Value = Math.floor(Math.random() *  12) + 1;
	console.log("Fourth Crystal Value: " + crystal4Value);
	


//start adding up values every time a crystal is clicked
	$("#crystal-1").on("click", function(){
		counter = counter + crystal1Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined ()
	});

	$("#crystal-2").on("click", function(){
		counter = counter + crystal2Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined ()
	});

	$("#crystal-3").on("click", function(){
		counter = counter + crystal3Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined ()
	});

	$("#crystal-4").on("click", function(){
		counter = counter + crystal4Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined ()
	});

//not working...

// function winsDetermined () {
 	// if(counter > randomNumber) {
 	// 	losses++;
 	// 	document.getElementById("losses-count").innerHTML = losses;		
 	// 	alert("You lose!");
 	// 	console.log ("You lose");
 	// 	console.log(losses);
 	// 	startGame();
 	// }

// 	else if(counter === randomNumber) {
// 		wins++;
// 		document.getElementById("wins-count").innerHTML = wins;
// 		alert("ChaChing-YOU WIN!");
// 		console.log ("You win");
// 		console.log(wins);
// 		startGame();
// 	}
};
// };