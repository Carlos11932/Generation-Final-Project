function smithyIaAction(numIaHp){
	for(i=0; i < army.length; i++){
		army[i].health += (army[i].health * numIaHp) 
	}
}