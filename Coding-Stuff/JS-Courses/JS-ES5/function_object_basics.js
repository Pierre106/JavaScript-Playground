var process = {  // here we have decleared a variable called process. all the code inside the curley brackets have been assigned to the variable.
	fullName: 'Mark Pierre',
	displayName : function () {    //here we have given this property the value of a function
		
		console.log (this.fullName) //this means this object 
		
	},
	

	
	
	
}

//process.displayName();

// here is another way we can call the function.

console.log (process.fullName);   // we can access the properties and functions with a dot notation outside the object