document.getElementById("warBtn").onclick = function() {
  combat(army, iaArmy);
}
var atacked = true;

function combat(army, iaArmy) {

  var rand = Math.floor(Math.random() * (iaArmy.length - 1))
  var rand2 = Math.floor(Math.random() * (army.length - 1))
  var maxTurn = Math.floor((Math.random() * 3) + 5);
  this.turn2 = 0;
  while (army.length !== 0 && iaArmy.length !== 0) {

    if (army[rand2].health > 0 && iaArmy[rand].iaHealth > 0) {


      army[rand2].health = army[rand2].health - iaArmy[rand].iaStrength;
      iaArmy[rand].iaHealth = iaArmy[rand].iaHealth - army[rand2].attack();

    } else if (iaArmy[rand].iaHealth <= 0) {

      iaArmy.splice(rand, 1);
      this.turn2 = 0;

      rand = Math.floor(Math.random() * (iaArmy.length - 1));


    } else if (army[rand2].health <= 0) {


      army.splice(rand2, 1);
      this.turn2 = 0;

      rand2 = Math.floor(Math.random() * (army.length - 1))

    }



  };
  if (army.length > iaArmy.length && atacked == true) {

    atacked = false


    for (var i = 0; i < army.length; i++) {

      actualIaCastle.iaBuildAction = actualIaCastle.iaBuildAction - army[i].strength;


      if (actualIaCastle.iaBuildAction <= 0) {

      } else {
        console.log("control else user combat")
      }
    }
    var consolePrint = document.getElementById('consolePrint');
    var createP = document.createElement("p");
    var ref = consolePrint.firstChild
    var fightWin = document.createTextNode("Has vencido a Rosi. " + army.length + " soldados han llegado a atacar su ciudad. Aun le quedan " + actualIaCastle.iaBuildAction.toFixed() + " HP. ");
    (createP).appendChild(fightWin);
    (ref).appendChild(createP);
    goldSteal = army.length * 50;
    gold = gold + goldSteal;


  } else if (army.length < iaArmy.length) {

    for (var i = 0; i < iaArmy.length; i++) {

      actualCastle.buildAction -= iaArmy[i].iaStrength;

      document.getElementById('healBar').innerHTML = actualCastle.buildAction.toFixed();
      if (actualCastle.buildAction <= 0) {

      } else {
        console.log("control else ia combat")
      }
    }
    var consolePrint = document.getElementById('consolePrint');
    var createP = document.createElement("p");
    var ref = consolePrint.firstChild
    var fightLose = document.createTextNode("Has perdido la batalla contra Rosi y " + iaArmy.length + " soldados han llegado a atacar tu ciudad. Aun nos quedan " + actualCastle.buildAction.toFixed() + " HP. ");
    (createP).appendChild(fightLose);
    (ref).appendChild(createP);
    iaGoldSteal = iaArmy.length * 50;
    iaGold = iaGold + iaGoldSteal;

  } else {
    console.log("else de combat")
  }
};

document.getElementById("infoBtn").onclick = function() {
  training(army)
}

function training(army) {
  if (army.length == 10 && gold >= 500) {

    for (i = 0; i < army.length; i++) {
      army[i].strength = army[i].strength + 1
      army[i].health = army[i].health + 3
    }
    gold -= 500;
    document.getElementById('totalGold').innerHTML = gold;

  } else if (army.length == 25 && gold >= 1000) {
    for (i = 0; i < army.length; i++) {
      army[i].strength = army[i].strength + 1
      army[i].health = army[i].health + 3
    }
    gold = gold - 1000;
    document.getElementById('totalGold').innerHTML = gold;

  } else if (army.length == 60 && gold >= 2000) {
    for (i = 0; i < army.length; i++) {
      army[i].strength = army[i].strength + 1
      army[i].health = army[i].health + 3
    }
    gold = gold - 2000;
    document.getElementById('totalGold').innerHTML = gold;

  } else {
    console.log("else de training")
  }
}

function iaTraining(iaArmy) {
  if (iaArmy.length == 10 && iaGold >= 500 && turn > 15) {

    for (i = 0; i < iaArmy.length; i++) {
      iaArmy[i].strength = iaArmy[i].strength + 1
      iaArmy[i].health = iaArmy[i].health + 3
    }
    iaGold -= 500;
   

  } else if (iaArmy.length == 25 && iaGold >= 1000 && turn > 25) {
    for (i = 0; i < iaArmy.length; i++) {
      iaArmy[i].strength = iaArmy[i].strength + 1
      iaArmy[i].health = iaArmy[i].health + 3
    }
    iaGold = iaGold - 1000;
    

  } else if (iaArmy.length == 60 && iaGold >= 2000 && turn > 35) {
    for (i = 0; i < iaArmy.length; i++) {
      iaArmy[i].strength = iaArmy[i].strength + 1
      iaArmy[i].health = iaArmy[i].health + 3
    }
    iaGold = iaGold - 2000;
    
  } else {
    console.log("else de training")
  }
}