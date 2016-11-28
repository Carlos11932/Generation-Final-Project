var turn = 1;
console.log(turn)

document.getElementById("turnBtn").onclick = function(){
	turn++;
	
	actualMine.buildAction(actualMine.param);
	actualInn.buildAction(actualInn.param);
	actualBarracks.buildAction(actualBarracks.param);
	actualSmithy.buildAction(actualSmithy.param);
	mineBtn();
	castleBtn();
	innBtn();
	smithyBtn();
	barracksBtn();	
	iaTurn();
	printConsole();
		
	console.log('++++' + turn)
	console.log('gold:' + gold)
	console.log('Ingresos' + ing)
	atacked = true;

	//Actualizar Oro total
document.getElementById('totalGold').innerHTML = gold;
document.getElementById('goldEntry').innerHTML = ing;
document.getElementById('turnControl').innerHTML = turn;
document.getElementById('totalArmy').innerHTML = army.length;
document.getElementById('healBar').innerHTML = actualCastle.buildAction.toFixed();

}


function printConsole(){

consoleIa();
consolePlayer();
consoleNewTurn();

}

function consolePlayer(){
	var consolePrint = document.getElementById('consolePrint');
	var createP = document.createElement("p");
	var createDiv = document.createElement("div")
	var ref = consolePrint.firstChild
	var consolePlayer =document.createTextNode(
		"Oro: " 
		+ gold
		+", Ingresos: "
		+ ing
		+", Ejercito: "
		+ army.length
	);
	
	(createP).appendChild(consolePlayer);
	(createDiv).appendChild(createP);
	(consolePrint).insertBefore(createDiv, ref)
}
function consoleIa(){
	var consolePrint = document.getElementById('consolePrint');
	var createP = document.createElement("p");
	var createDiv = document.createElement("div");
	var ref = consolePrint.firstChild
	var consoleIa = document.createTextNode(
		"Oro IA: " 
		+ iaGold
		+ ", Ingresos IA: "
		+ iaIng
		+ ", Ejercito IA: "
		+ iaArmy.length
	);

	(createP).appendChild(consoleIa);
	(createDiv).appendChild(createP);
	(consolePrint).insertBefore(createDiv, ref)

}
function consoleNewTurn(){
	var consolePrint = document.getElementById('consolePrint');
	var createP = document.createElement("p");
	var createDiv = document.createElement("div")
	var ref = consolePrint.firstChild
	var consoleTurn = document.createTextNode("------------Turn: " + turn + "------------");

	(createP).appendChild(consoleTurn);
	(createDiv).appendChild(createP);
	(consolePrint).insertBefore(createDiv, ref)

}
var consolePrint = document.getElementById('consolePrint');
