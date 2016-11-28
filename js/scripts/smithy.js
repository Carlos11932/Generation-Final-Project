function smithyAction(numHp){
	for(i=0; i < army.length; i++){
		army[i].health += (army[i].health * numHp) 
	}
}