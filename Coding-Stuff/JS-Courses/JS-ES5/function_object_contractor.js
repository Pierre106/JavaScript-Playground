var Car = function () {  // this is a function literal that is used to create an object
	
	var model, year;
	return console.log (this);
	
}

audi = new Car; // this becomes a new instance of the car object
audi.model = 'A5';
console.log (audi.model);



bmw = new Car; // this becomes a new instance of the car object
bmw.model = '3 series ';
console.log (bmw.model);