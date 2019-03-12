var example = "value";   //global Variable

function alertExample () {
	alert(example); // local scoope can access code outside function (global variable)

	var anotherExample ="?";  //this is a local variable as it created inside a function


// alert(anotherExample);
}

alertExample();
alert(anotherExample);  // does not have access to the local variable as each new function creates a function scoope


