
var building = function(id, name, level, cost, image, buildAction, param){
    this.id = id,
    this.name = name,
    this.level = level,
    this.cost = cost,
    this.image = image,
    this.buildAction = buildAction,
    this.param = param
};

var	castle1 = new building (0,"Castle",1,1000,"data/img/castle/castle1s.png",castle1heal),
	castle2 = new building (1,"Castle",2,2500,"data/img/castle/castle2.png",castle2heal),
	castle3 = new building (2,"Castle",3,5000,"data/img/castle/castle3.png",castle3heal),

	inn0 = new building (3,"Inn",0,300,"data/img/shadowxs.png",innAction, 0),
	inn1 = new building (4,"Inn",1,750,"data/img/inn/inn1s.png",innAction, 10),
	inn2 = new building (5,"Inn",2,1000,"data/img/inn/inn2s.png",innAction, 25),
	inn3 = new building (6,"Inn",3,1500,"data/img/inn/inn3s.png",innAction, 60),

	barracks0 = new building (7,"Barracks",0,600,"data/img/shadowxs.png",barracksAction, 0),
	barracks1 = new building (8,"Barracks",1,800,"data/img/barracks/barracks1.png",barracksAction, 0.1),
	barracks2 = new building (9,"Barracks",2,1000,"data/img/barracks/barracks2.png",barracksAction, 0.2),
	barracks3 = new building (10,"Barracks",3,1500,"data/img/barracks/barracks3.png",barracksAction, 0.5),

	smithy0 = new building (11,"Smithy",0,500,"data/img/shadowxs.png", smithyAction, 0),
	smithy1 = new building (12,"Smithy",1,500,"data/img/smithy/smithy1.png", smithyAction, 0.1),
	smithy2 = new building (13,"Smithy",2,700,"data/img/smithy/smithy2.png", smithyAction, 0.2),
	smithy3 = new building (14,"Smithy",3,1000,"data/img/smithy/smithy3.png", smithyAction, 0.5),

	mine0 = new building (15,"Mine",0,200,"data/img/shadowxs.png",mineAction, 50),
	mine1 = new building (16,"Mine",1,500,"data/img/mine/mine1.png",mineAction, 100),
	mine2 = new building (17,"Mine",2,700,"data/img/mine/mine2.png",mineAction, 200),
	mine3 = new building (18,"Mine",3,1000,"data/img/mine/mine3.png",mineAction, 500);

//Array de edificios
var build = [castle1, castle2, castle3, 
	inn0, inn1, inn2, inn3, 
	barracks0, barracks1, barracks2, barracks3, 
	smithy0, smithy1, smithy2, smithy3, 
	mine0, mine1, mine2, mine3
	],

	castle = [castle1, castle2, castle3],
	inn = [inn0, inn1, inn2, inn3],
	barracks = [barracks0, barracks1, barracks2, barracks3],
	smithy = [smithy0, smithy1, smithy2, smithy3],
	mine = [mine0, mine1, mine2, mine3];


//Variable que sea el edificio actual
var mineVal = 0,
	innVal = 0,
	barracksVal = 0,
	smithyVal = 0,
	castleVal = 0;

var actualCastle = castle[castleVal],
	actualInn = inn[innVal],
	actualBarracks = barracks[barracksVal],
	actualSmithy = smithy[smithyVal],
	actualMine = mine[mineVal];


// CONSTRUCCION DE CASTILLO 
function castleBtn(){
	if(gold >= actualCastle.cost && actualCastle.level < 3){
		document.getElementById('castleBtn').removeAttribute("hidden");
	}
	else if(gold < actualCastle.cost) {
		document.getElementById('castleBtn').setAttribute("hidden", "hidden");
	}
	else{
		console.log('Else de caslte')
	}
}

document.getElementById("castleBtn").onclick = function(){
	gold = gold - actualCastle.cost;
	document.getElementById('totalGold').innerHTML = gold;
	x = castleVal + 1;
	castleVal = x;
	actualCastle = castle[castleVal];
	document.getElementById('castleBtn').setAttribute("hidden", "hidden");
	document.getElementById('castleImg').setAttribute('src', actualCastle.image);
	hidden()
}



// CONSTRUCCION DE MINA
function mineBtn(){
	if(gold >= actualMine.cost && actualCastle.level > actualMine.level){
		document.getElementById('mineBtn').removeAttribute("hidden");
	} 
	else if(gold < actualMine.cost) {
		document.getElementById('mineBtn').setAttribute("hidden", "hidden");
	}
	else{
		console.log('Else de mina')
	}
}

document.getElementById("mineBtn").onclick = function(){
	gold = gold - actualMine.cost;
	document.getElementById('totalGold').innerHTML = gold;
	x = mineVal + 1;
	mineVal = x;
	actualMine = mine[mineVal];
	document.getElementById('mineBtn').setAttribute("hidden", "hidden");
	document.getElementById('mineImg').setAttribute('src', actualMine.image);
	hidden()
}


// CONSTRUCCION DE INN
function innBtn(){
	if(gold >= actualInn.cost && actualCastle.level > actualInn.level){
		document.getElementById('innBtn').removeAttribute("hidden");
	} 
	else if(gold < actualInn.cost) {
		document.getElementById('innBtn').setAttribute("hidden", "hidden");
	}
	else{
		console.log('Else de Inn')
	}
}

document.getElementById("innBtn").onclick = function(){
	gold = gold - actualInn.cost;
	document.getElementById('totalGold').innerHTML = gold;
	x = innVal + 1;
	innVal = x;
	actualInn = inn[innVal];
	document.getElementById('innBtn').setAttribute("hidden", "hidden");
	document.getElementById('innImg').setAttribute('src', actualInn.image);
	hidden()
}


// CONSTRUCCION DE BARRACKS

function barracksBtn(){
	if(gold >= actualBarracks.cost && actualCastle.level > actualBarracks.level){
		document.getElementById('barracksBtn').removeAttribute("hidden");
	} 
	else if(gold < actualBarracks.cost) {
		document.getElementById('barracksBtn').setAttribute("hidden", "hidden");
	}
	else{
		console.log('Else de Barracks')
	}
}

document.getElementById("barracksBtn").onclick = function(){
	gold = gold - actualBarracks.cost;
	document.getElementById('totalGold').innerHTML = gold;
	x = barracksVal + 1;
	barracksVal = x;
	actualBarracks = barracks[barracksVal];
	document.getElementById('barracksBtn').setAttribute("hidden", "hidden");
	document.getElementById('barracksImg').setAttribute('src', actualBarracks.image);
	hidden()
}

// CONSTRUCCION DE SMITHY

function smithyBtn(){
	if(gold >= actualSmithy.cost && actualCastle.level > actualSmithy.level){
		document.getElementById('smithyBtn').removeAttribute("hidden");
	} 
	else if(gold < actualSmithy.cost) {
		document.getElementById('smithyBtn').setAttribute("hidden", "hidden");
	}
	else{
		console.log('Else de smithy')
	}
}

document.getElementById("smithyBtn").onclick = function(){
	gold = gold - actualSmithy.cost;
	document.getElementById('totalGold').innerHTML = gold;
	x = smithyVal + 1;
	smithyVal = x;
	actualSmithy = smithy[smithyVal];
	document.getElementById('smithyBtn').setAttribute("hidden", "hidden");
	document.getElementById('smithyImg').setAttribute('src', actualSmithy.image);
	hidden()
}

function hidden(){
	var y = document.getElementsByClassName('updateBtn')
	for( i = 0; i < y.length; i++){
		y[i].setAttribute("hidden", "hidden");
	}
}



