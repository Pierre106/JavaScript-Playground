//The argument Object



var add = function () {
	
	
	var sum = 0;
	for (var i = 0; i < arguments.length;  i++ ) {
		
		sum += arguments [i]
	
		
	}
	
	
	return sum;
	
}

console.log (add(70, 10, 250, 9, 628, 838, 2929, 37372, 19) );