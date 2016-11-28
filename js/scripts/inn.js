function createSoldiers (numSoldiers){
        for(i=0 ; i < numSoldiers ; i++){
        army.push(new soldier());
    }
    return army;
}
var soldier = function(){
    this.name = "soldier " + ( i + 1 ),
    this.health = Math.floor((Math.random() * 10) + 3),
    this.strength = Math.floor((Math.random() * 3) + 1),
    this.attack = function(){
        return this.strength;
    },
    this.heal = function(){
        return this.health;
    }
};
var army = [];

function innAction(numSoldiers){
    if (army = []) {
        createSoldiers(numSoldiers);
    }     
}