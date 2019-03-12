// Modules are reusable code across applications,many javascript frameworks use modules

var run = (function () {  
	
	var DEFAULTS = {
		topSpeed: '250 miles per hour',
		topHorsePower: '508 horse power hour'
	   
	};
	
	return {   
		speed: function () {
			
			var allArguments = arguments [0] || "";  
			var myStatements = allArguments.topSpeed || DEFAULTS.topSpeed;
		    console.log (myStatements ); 
			
			return this;
			
		},
		
		horsePower: function () {
			
			var myallArguments = arguments [0] || "";  
			var topHorsePowerChecking = myallArguments.topHorsePower || DEFAULTS.topHorsePower;
		    console.log (topHorsePowerChecking ); 
			
			return this;
			
		}   
	};
	
})();