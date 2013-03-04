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
	[1,2,3,4,5,6,7,8,9,10].forEach(function(){
		$("body").append("<span class='horse'>Horse</span>");
	});

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
		if(horsesLeftOver > 0) lose();
	}
	//if 15 seconds elapses ans some horses remain, lose
	setTimeout(checkIfAnyHorsesRemain,15000);//15 sec
	

	alert("lots of horses nibble you!");
	return false;

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
