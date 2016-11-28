
var iaBuilding = function(iaId, iaName, iaLevel, iaCost, iaImage, iaBuildAction, iaParam){
    this.iaId = iaId,
    this.iaName = iaName,
    this.iaLevel = iaLevel,
    this.iaCost = iaCost,
    this.iaImage = iaImage,
    this.iaBuildAction = iaBuildAction
    this. iaParam = iaParam
};

var	iaCastle1 = new iaBuilding (0,"Castle",1,1000,"data/img/castle1.png",iaCastle1),
	iaCastle2 = new iaBuilding (1,"Castle",2,2500,"data/img/castle2.png",iaCastle2),
	iaCastle3 = new iaBuilding (2,"Castle",3,5000,"data/img/castle3.png",iaCastle3),

	iaInn0 = new iaBuilding (3,"iaInn",0,300,"data/img/Red_cross_tick.png",iaInnAction, 0),
	iaInn1 = new iaBuilding (4,"iaInn",1,750,"data/img/inn1.png",iaInnAction, 10),
	iaInn2 = new iaBuilding (5,"iaInn",2,1000,"data/img/inn2.png",iaInnAction, 25),
	iaInn3 = new iaBuilding (6,"iaInn",3,1500,"data/img/inn3.png",iaInnAction, 60),

	iaBarracks0 = new iaBuilding (7,"iaBarracks",0,600,"data/img/Red_cross_tick.png",barracksIaAction, 0),
	iaBarracks1 = new iaBuilding (8,"iaBarracks",1,800,"data/img/barracks1.png",barracksIaAction, 0.1),
	iaBarracks2 = new iaBuilding (9,"iaBarracks",2,1000,"data/img/barracks2.png",barracksIaAction, 0.2),
	iaBarracks3 = new iaBuilding (10,"iaBarracks",3,1500,"data/img/barracks3.png",barracksIaAction, 0.5),

	iaSmithy0 = new iaBuilding (11,"iaSmithy",0,500,"data/img/Red_cross_tick.png", smithyIaAction, 0),
	iaSmithy1 = new iaBuilding (12,"iaSmithy",1,500,"data/img/smithy1.png", smithyIaAction, 0.1),
	iaSmithy2 = new iaBuilding (13,"iaSmithy",2,700,"data/img/smithy2.png", smithyIaAction, 0.2),
	iaSmithy3 = new iaBuilding (14,"iaSmithy",3,1000,"data/img/smithy3.png", smithyIaAction, 0.5),

	iaMine0 = new iaBuilding (15,"iaMine",0,200,"data/img/Red_cross_tick.png",mineIaAction, 50),
	iaMine1 = new iaBuilding (16,"iaMine",1,500,"data/img/mine1.png",mineIaAction, 100),
	iaMine2 = new iaBuilding (17,"iaMine",2,700,"data/img/mine2.png",mineIaAction, 200),
	iaMine3 = new iaBuilding (18,"iaMine",3,1000,"data/img/mine3.png",mineIaAction, 500);

//Array de edificios
var iaBuild = [iaCastle1, iaCastle2, iaCastle3, 
	iaInn0, iaInn1, iaInn2, iaInn3, 
	iaBarracks0, iaBarracks1, iaBarracks2, iaBarracks3, 
	iaSmithy0, iaSmithy1, iaSmithy2, iaSmithy3, 
	iaMine0, iaMine1, iaMine2, iaMine3
	],

	iaCastle = [iaCastle1, iaCastle2, iaCastle3],
	iaInn = [iaInn0, iaInn1, iaInn2, iaInn3],
	iaBarracks = [iaBarracks0, iaBarracks1, iaBarracks2, iaBarracks3],
	iaSmithy = [iaSmithy0, iaSmithy1, iaSmithy2, iaSmithy3],
	iaMine = [iaMine0, iaMine1, iaMine2, iaMine3];


//Variable que sea el edificio actual
var iaMineVal = 0,
	iaInnVal = 0,
	iaBarracksVal = 0,
	iaSmithyVal = 0,
	iaCastleVal = 0;

var actualIaCastle = iaCastle[0],
	actualIaInn = iaInn[0],
	actualIaBarracks = iaBarracks[0],
	actualIaSmithy = iaSmithy[0],
	actualIaMine = iaMine[iaMineVal];



function buildIaCastle(){
	iaGold = iaGold - actualIaCastle.iaCost;
	x = iaCastleVal + 1;
	iaCastleVal = x;
	actualIaCastle = iaCastle[iaCastleVal];
	
}


function buildIaMine(){
	iaGold = iaGold - actualIaMine.iaCost;
	x = iaMineVal + 1;
	iaMineVal = x;
	actualIaMine = iaMine[iaMineVal];
	
}


function buildIaInn(){
	iaGold = iaGold - actualIaInn.iaCost;
	x = iaInnVal + 1;
	iaInnVal = x;
	actualIaInn = iaInn[iaInnVal];

}


function buildIaBarracks(){
	iaGold = iaGold - actualIaBarracks.iaCost;
	x = iaBarracksVal + 1;
	iaBarracksVal = x;
	actualIaBarracks = iaBarracks[iaBarracksVal];
}


function buildIaSmithy(){
	iaGold = iaGold - actualIaSmithy.iaCost;
	x = iaSmithyVal + 1;
	iaSmithyVal = x;
	actualIaSmithy = iaSmithy[iaSmithyVal];
	
}
