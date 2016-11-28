function iaTurn(){

	console.log(turn)
	actualIaMine.iaBuildAction(actualIaMine.iaParam);
	actualIaInn.iaBuildAction(actualIaInn.iaParam);
	actualIaBarracks.iaBuildAction(actualIaBarracks.iaParam);
	actualIaSmithy.iaBuildAction(actualIaSmithy.iaParam);
	posibilities()

	console.log("IAGold:"+  iaGold + ", IAIngresos:" + iaIng + ", IAArmy:" + iaArmy.length )

};

function posibilities(){

	if(iaGold >= actualIaMine.iaCost && actualIaCastle.iaLevel > actualIaMine.iaLevel){
		buildIaMine();
		console.log("actualIaMine")

	}else if(iaGold>=actualIaInn.iaCost && actualIaCastle.iaLevel > actualIaInn.iaLevel){
		buildIaInn();
		console.log("actualIaInn")
	}else if(iaGold>=actualIaCastle.iaCost && actualIaCastle.iaLevel<3){
		buildIaCastle();
		console.log("actualIaCastle")
	}else{
		var randomCase =Math.floor((Math.random() * 5) + 1);
		randomOptions(randomCase)
	}
}

function randomOptions (randomCase){
	switch(randomCase) {
    case 1:
	    if(iaGold >= actualIaSmithy.iaCost && actualIaCastle.iaLevel > actualIaSmithy.iaLevel){
			buildIaSmithy();
			console.log("actualIaSmithy")
		}
        break;
    case 2:
    	if(iaGold >= actualIaBarracks.iaCost && actualIaCastle.iaLevel > actualIaBarracks.iaLevel){
			buildIaBarracks();
			console.log("actualIaBarracks")
		}	
        break;
    case 3:
    	console.log("ahorrando")
    	break;
    case 4:
    	console.log("atacando")
    	combat(army,iaArmy);
    	break;
    case 5:
    	console.log("entrenando")
    	iaTraining(iaArmy);
    	break;		
    default:
        console.log("default control")
        break;
	}
}