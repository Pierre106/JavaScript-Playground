//Theses are called object literals
// Here we see DRY as the code is repeated 



var mark = {
	name: "Mark",
	tshirtColor: "white"
};


var natasha = {
	name: "Natasha",
	tshirtColor: "Pink"
};



// Object Constructor

// This is a function that will create our objects with properties each time we call it.
// Here we have a function that will expect a name and tshirt color as argunments, then it 
// will create an object and set the properties to the vaules you pass through the function

function Friend (name, tshirtColor) {
this.name = name;
this.tshirtColor = tshirtColor;
};


// The below code is an example of how we can create an object constructor by using the new keyword
// to create an instance of our Friend contructor. By creating an constructor we reduce all the repition above.

var nahum = new Friend ("Nahum", "green");

var nahum = new Friend ("Sudi", "pink");


	//alert(nahum.name);
	//alert(nahum.tshirtColor);
	//
	//
