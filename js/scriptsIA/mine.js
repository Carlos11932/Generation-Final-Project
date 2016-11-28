var iaGold = 100;
var iaIng = 50;

function totalIaGold(){
    iaGold += iaIng
}

function mineIaAction(numIaIng){
     iaIng = numIaIng;
     totalIaGold();
}
