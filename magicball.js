var list=["We shall see!",
          "Yes!", 
          "No!",
          "Maybe",
          "Certainly",
          "Ask again later",
          "doubtfull",
          "Try again later",
          "As i see it, yes",
          "Signs point to yes"];

function randomnumber() { 
	return Math.floor(Math.random() * 10) ;

}

function testjs() {
      alert("test");

}

function shakeeightball() {
	document.getElementById('eightball').src="magiceightball.jpe";
	

	document.getElementById("results").innerHTML=list[randomnumber()];

}

/* below is code for tic tac toe*/

//handles x and o turns
function turn(location){
	document.getElementById(location).innerHTML= "x" ;
}