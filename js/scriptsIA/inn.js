function createIaSoldiers (numIaSoldiers){
        for(i=0 ; i < numIaSoldiers ; i++){
        iaArmy.push(new iaSoldier());
    }
    return iaArmy;
}
var iaSoldier = function(){
    this.iaName = "IA soldier " + ( i + 1 ),
    this.iaHealth = Math.floor((Math.random() * 10) + 3),
    this.iaStrength = Math.floor((Math.random() * 3) + 1),
    this.iaAttack = function(){
        return this.iaStrength;
    },
    this.iaHeal = function(){
        return this.iaHealth;
    }
};
var iaArmy = [];

function iaInnAction(numIaSoldiers){
    if (iaArmy = []) {
        createIaSoldiers(numIaSoldiers);
    }     
}