
function barracksAction(numStr){
	for(i=0; i < army.length; i++){
		army[i].strength += (army[i].strength * numStr)
	}
}