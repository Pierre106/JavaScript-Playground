function Car (model, year) {  // HERE WE HAVE PASSED THE PARAMETERS
	

	this.carModel =  model; // HERE WE HAVE USED THE DOT NOTATION TO MAKE IT A PROPERTY ON THE FLY
	this.year = year;
	
}

var bmw = new Car ('5 Series, 2017');
		console.log (bmw.carModel);


audi = new Car ('A5, 2014');
		console.log (audi.carModel);



//HERE WE HAVE DEFINED SOME VALUES IN THE FUNCTION ADN THEN PASSED ON PARAMETERS WHEN CALLING.