$(document).ready(function(){


	//Setting the number for the user to guess
	var numberToGuess = 0;


	// Storing the numbers on the crystals as an array
	var numbersOnCrystals = [];


	// Setting a counter that will be added to by the user
	var counter = 0;

	
	var picArray = ['assets/img/637719.jpg', 'assets/img/385616.jpg', 'assets/img/713909.jpg', 'assets/img/380510.jpg'];



	// Setting a function that resets the counters at the start and end of the game.

	function numberReset(){

		numberToGuess = 0;
		numbersOnCrystals = [];

		// Creating 4 random numbers between 1-12, and pushing them into the array.

		for(i=0; i<4;i++){
		var numberToArray = Math.floor(Math.random() * 12) + 1;
		numbersOnCrystals.push(numberToArray);}

		// Creating a number that the user has to guess
		numberToGuess = Math.floor(Math.random() * 120) + 19;


		// Putting the number that the user needs to guess on the page in html
		$('#number').text(numberToGuess)

		// Reseting the counter number
		counter = 0;

		// Placing the counter number as text into the #yourNumber span section of panel-body 2

		$('#yourNumber').text(counter);

	}


		// Runs this fuction at the start of the game to begin the game.
		numberReset()



		for (var i=0; i<numbersOnCrystals.length; i++){


			// variable imageCrystal equals anything with an image tag.
			var imageCrystal = $('<img>');

			// below we are setting attributes to the img tags. Though we could have done this in the html. why do it here? annoying as f.

			// Maybe because we don't know the attributes yet, we need to add them in using Javscript, so must be done within the Javascript/jQuery file, to be add with the changing Javascript FOR loop.

			// doublecheck to see what attr() event method does.


			imageCrystal.attr('data-num', numbersOnCrystals[i]);

			imageCrystal.attr('src', picArray[i]);

			imageCrystal.attr('alt', 'crystals');

			imageCrystal.addClass('img-responsive');

			$('#crystals').append(imageCrystal);


		}



















// STEP 1


$('.img-responsive').on("click", function(){
		
	counter = counter + parseInt($(this).data('num'));

		$('#yourNumber').text(counter);

		if(counter == numberToGuess) {
			alert('You Won!!!!');
			numberReset();}

			else if(counter>numberToGuess){
				alert('You lost!');
				numberReset();
				}


});

		
	


	





});