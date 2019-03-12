
var three = "3";  //Global variable

function alertNumber() {
	var one = "1";
	alert(one);

	function alertAnotherNumber () {
		var two = "2";
		alert(two);
		alert(three);
		alert(one);
	}

	alertAnotherNumber();
	alert(two);// this will not work as the two variable is placed in a local function
}


alertNumber(); //



