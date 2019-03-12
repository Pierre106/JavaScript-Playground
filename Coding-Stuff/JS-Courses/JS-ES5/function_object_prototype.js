function speed (miles) {
	console.log (miles)
}



function Car (model, year) {  
	

	this.carModel =  model; 
	this.year = year;
	
}

Car.prototype.speed = speed;
var bmw = new Car ('5 Series, 2017');
		
bmw.speed ('900');


//here we have used the keyword prototype to add a function to our object. Here we have called a function that's outside the function.