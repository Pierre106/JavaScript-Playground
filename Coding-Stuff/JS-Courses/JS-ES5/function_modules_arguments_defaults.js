// Modules are reusable code across applications,many javascript frameworks use modules

var run = (function () {   //this is called an anonymoue clousre 
	
	var DEFAULTS = {
		topSpeed: '250 miles per hour'
	};
	
	return {    // return an object
		
		speed: function () {
			
			var allArguments = arguments [0] || "";  //assign allArguments to arguments then try and find these arguments if the user is passing it or put an empty space there. (arguments or empty space)
			var myStatements = allArguments.topSpeed || DEFAULTS.topSpeed;
			//try and find these arguments if the user is passing it or display these values.
		    console.log (myStatements );  // has a method
			
		}   
	};
	
})();