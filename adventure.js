$ = jQuery;

function room1(){
	var answer = prompt("Would you prefer to fight 1 horse sized duck or 100 duck sized horses?");
	answer= answer.toLowerCase();

	if (answer === "duck") {
		theDucksLair();
	}else if(answer == "horses") {
		roomOfHorses();
	}else{
		alert("You can't get out of it! Choose!");
		room1();
	}

}

function roomOfHorses(){

	//display 100 horses


	var horsesToDisplay = 100;
	while(horsesToDisplay > $(".horse").length){ //esto a veces causa loops que atascan la página

		$("body").append("<span class='horse'>Horse</span>");
	};



	var removeHorse = function(event) {
		$(event.target).remove();
		//if all horses are removed, win
		console.log($(".horse").length);
		if($(".horse").length === 0) {
			win();
		}
	};
	//when a horse is clicked remove from screen
	//.horse= span class
	$(".horse").on("click",removeHorse);
	var checkIfAnyHorsesRemain = function() {
		var horsesLeftOver = $(".horse").length;
		if(horsesLeftOver > 0) {
			lose();
		}else{
			win();
		}
	}

	//if 15 seconds elapses ans some horses remain, lose
	setTimeout(checkIfAnyHorsesRemain,15000);//15 sec

	//$clock --> $ significa jquery object
	var $clock = $("<span class='clock'>0.00</span>");
	$("body").prepend($clock);

	var seconds = 0;
	var tick = function() {
		seconds += 1;
		$clock.text(seconds.toFixed(2));
		if(seconds>=15){
			clearInterval(ticker);
		}
	};

	//start off the tick, and store the interval so we can stop it
	var ticker = setInterval(tick, 1000);
	//give us our first tick immediately
	tick();

}

function theDucksLair(){
	alert("a terrifyingly huge duck appproaches!");
	return false;

}

function lose(where){
	alert("You lost " + where + "! Loser.")

}

function win(){
	alert("You won! Congratulations!")

}

function play(firstRoom){
	firstRoom();
	};


play(roomOfHorses);
