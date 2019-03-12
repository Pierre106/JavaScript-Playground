


//lOCAL VARIABLE

function jog ()  {
	
	var fast = '90 miles';  // this is a local variable which can only be used within the function
		console.log(fast); // as it's a local variable we have console the speed within the function
	return fast;
}

jog ();







//GLOBAL VARIABLE


function run ()  {
	
	 speed = '200 miles';  // var has been removed so now it's a Global variable, thsi is dangerous as it could be called anywhere in your code.
	return speed;
}


run ();

console.log(speed); 

