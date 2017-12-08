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



// holds x or o's
var character = "O";





//handles x and o turns
function turn(location){
   if (document.getElementById(location).innerHTML == "") {
    
       if(character == "X") {
       	  character = "O";
       	  }
        else{
        	character="X";
        }

	document.getElementById(location).innerHTML= character; 
    }
    checkwinner();
}



// clears X's and O'x

function clearAll(){
document.getElementById("r1c1").innerHTML = "";
document.getElementById("r1c2").innerHTML = "";
document.getElementById("r1c3").innerHTML = "";
document.getElementById("r2c1").innerHTML = "";
document.getElementById("r2c2").innerHTML = "";
document.getElementById("r2c3").innerHTML = "";
document.getElementById("r3c1").innerHTML = "";
document.getElementById("r3c2").innerHTML = "";
document.getElementById("r3c3").innerHTML = "";
}

function checkwinner(){
var r1c1 = document.getElementById("r1c1").innerHTML;
var r1c2 = document.getElementById("r1c2").innerHTML;
var r1c3 = document.getElementById("r1c3").innerHTML;
var r2c1 = document.getElementById("r2c1").innerHTML;
var r2c2 = document.getElementById("r2c2").innerHTML;
var r2c3 = document.getElementById("r2c3").innerHTML;
var r3c1 = document.getElementById("r3c1").innerHTML;
var r3c2 = document.getElementById("r3c2").innerHTML;
var r3c3 = document.getElementById("r3c3").innerHTML;

	if(r1c1 == r1c2 && r1c1 == r1c3 && r1c1 != ""||
	    r2c1 == r2c2 && r2c1 == r2c3 && r2c1 != ""||
	    r3c1 == r3c2 && r3c1 == r3c3 && r3c1 != ""||
	    r1c1 == r2c1 && r1c1 == r3c1 && r1c1 != ""||
	    r1c2 == r2c2 && r1c2 == r3c2 && r1c2 != ""||
	    r1c3 == r2c3 && r1c3 == r3c3 && r1c3 != ""||
	    r3c1 == r2c2 && r3c1 == r1c3 && r3c1 != ""||
	    r1c1 == r2c2 && r1c1 == r3c3 && r1c1 != ""){

	alert("winner!");	
	}




}








