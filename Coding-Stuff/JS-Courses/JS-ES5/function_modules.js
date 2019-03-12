// Modules are reusable code across applications,many javascript frameworks use modules



var run = (function () {   //this is called an anonymoue clousre 
	
	
	var speed = '92 miles an hour';
	
	return {    // return an object
		
		speed: function () {
			
			
			console.log (speed);  // has a method
			
		}   
	};
	
})();
