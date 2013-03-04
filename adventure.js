function room1(){
	var answer = prompt("Which is a colour? Red, Obama, Hat");
	return answer.toLowerCase() === "red";

}

function room2(){
	var answer = prompt("Draw a happy face");
	return answer===":)" || answer==="(:" || answer===":D" || answer==="^__^";

}

function room3(){
	var answer = prompt("Say hello in spanish")
	return answer.toLowerCase() === "hola";

}

function lose(where){
	alert("You lost " + where + "! Loser.")

}

function win(){
	alert("You won! Congratulations!")

}

function play(){
	if(room1()===false) { 
		return lose("in room 1");
	}
	if(room2()===false) {
		return lose("in the room of doom");
	}

	if(room3()===false) { 
		return lose("in the final BOSS ROOM!");
	}
	win();

};

play();
