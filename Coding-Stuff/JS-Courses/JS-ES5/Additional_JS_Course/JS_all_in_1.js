
    /*_____________________________________FUNCTIONS_____________________________________*/

    /*
    function calc () {

    var stringVar = "I'm inside a function"; //<--- we pass in a value to the variable
        return stringVar //<--- here we return things inside a funtion

    };

    var returned  = calc();
    console.log (returned);


    */

    /*
    function calc (number1, number2) {
        return number1 + number2;  // here we were adding to undefined numbers and printing it, that's why the output was: NaN (not a number)  
    };

    var returned = calc ();
    console.log (returned);
    */

    /*
    function calc (number1, number2) {
        return number1 + number2;  // here 
    };

    var returned = calc (10, 8); //here we added the numbers  to the function then printing it
    console.log (returned);
    */


    /*_____________________________________IF STATEMENTS_____________________________________*/

    /*
    var condition = true;


    if (condition) {
        console.log ('Correct answers');
    }  else {

        console.log ('Not the right anwsers');
    }
    /*

    /*var condition = false;
    var another = false ;

    if (condition) {
        console.log ('Correct answers');
    }  else if  (another) {
         console.log ('Not the right anwsers');
    } else {
        console.log ("winner chicken dinner¡¡");
    }

    */

    /*_____________________________________SWITCHES_____________________________________*/



    /* 
    The switch statement is used to perform different actions based on different ... Use the switch statement to select one of many blocks of code to be execute.

    The switch expression is evaluated once.
    The value of the expression is compared with the values of each case.
    If there is a match, the associated block of code is executed.

    This is the same as an is else statement but much more structured.

    */

    /*
    var luckyNumber = 1;

    switch (luckyNumber) {
        case 1: 
          console.log ('Is 1');
            break;  <------ prevents the code from running any further (break)
        case 8:
          console.log('Is 8');
            break;
        default:
            console.log ('default');
            break;

        }


    */


    /*_____________________________________FOR LOOPS_____________________________________*/

    /*
    for (var i = 0; i < 5; i++) {

        console.log (i);
    }

      */


    /*_____________________________________NESTED LOOPS_____________________________________*/

    /* The inner must finish before the outer loop continues
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 2; j ++) {
                 console.log (i * j);
              }
     }

    */

    /*______________________________CONTROLLING LOOPS WITH BREAKS_____________________________________*/

    /*

    for (var i = 0; i < 5; i++ ) {
        if (i == 1) {
         break;   <---breaks the loop at one
        }
          console.log (i);
    }
     */

    /*

    for (var i = 0; i < 5; i++ ) {
        if (i == 1) {
         break;   <--- one will not be displayed
        }
          console.log (i);
    }
     */



    /*______________________________LOOPS FOR VARIATIONS_____________________________________*/

/*    
for (var i = 2; i < 5; i++ ) {
        console.log(i);
    }

*/
    /*_______________________________LOOPING THROUGH ARRAYS_____________________________________*/
     //remember arrays are a object

    /*var array = [1, 2, 3];

    for (var i = 0; i < array.length; i ++) { //give me the lenght of the array. Loops as long as
                                              // i is smaller then the lengh off the array
    console.log ( array [i]);
    }

    */

    /*_______________________________LOOPING THROUGH ARRAYS_____________________________________*/

    /*var number = 5;

    while (number < 7) {
        console.log (number);
        number ++;
    }
    */

    /*
    var condition = true;
    var i = 2;

    while (condition) {
        if (i ==3)
        condition = false;
    }
    console.log (i);
    i++;
    } */

    /*
    var condition = false; //although it's set to false it will still be executed because of the do

    do {
        console.log ('Executed')
    }
    while (condition);  */



    /*_______________________________Operators Addition_____________________________________*/

    /*
    var a = 13
    a++ //adds one to variable a 

    console.log(a);

    */
    /*_______________________________Boolean Operators _____________________________________*/

    /*
    if ((1 == 3) && (3 ==  2)) {
        console.log ('true'); //both one condition must be true
    } else {

    console.log ('false');
    }




    if ((1 == 3) || (3 ==  2) || ( 1 == 1 )) {
        console.log ('true'); //only one condition must be true
    } else {

    console.log ('false');
    }


    console.log ((1 == 1) || (2 == 3 ) && (4 == 5));
    *?

    /*_______________________________Global vs Local Scoope _____________________________________*/


    //1

    /*
    var test = 'Global';
    function localScope () {
        var test = 'Local Scoope';
        console.log (test);
    }

    localScope();
    console.log(test);


    //2


    function localScope () {
        var test = 'Local Scoope';
        console.log (test);
    }

    localScope();   // will produce an error as test is not defined.
    console.log(test);

    */


    /*_____________________________________ARRAYS PART 2_____________________________________*/

    /*
    var array = [1,2,3];
    array [1] = 100; // changes the value to 100
    console.log (array);


    var array = [1,2,3];
    array [3] = 100; // adds 100 to the array
    console.log (array);


    var array = [1,2,3];
    array [5] = 100; // leaves out two elements and adds 100 to index 6
    console.log (array);


    var array = [1, 2, 3, 4];

    array.forEach(function(element) {
        console.log (element);  // this can be used to do something with the indivdual elements.
        });


    var array = [1,2,3,4];
    array.push(5); // push adds to the end of an array even if you don't know the length of elements
    console.log(array);

    var array = [1,2,3,4,5];
    array.pop ()  // removes the last number
    console.log (array);

    var array = [1,2,3,4,5];
    console.log (array.shift());  // removes the first number
    console.log(array);



    var array = [1,2,3,4,5];
    array.unshift('new');  // add new element to the start
    console.log(array);

    */


    /*_____________________________________ARRAYS PART 3_____________________________________*/


    /*
    var array = [1,2,3,4]
     array.unshift('new');
    console.log (array.indexOf ('new')) //new is index 0

    var array = [1,2,3,4,5,6];
    array.unshift ('new');
    array[array.indexOf('new')] = 'old'; //changes the value to 0
    console.log (array);

    var array = [1,2,3,4];
    array.unshift ('new');
    array[array.indexOf('new')] = 'old'; 
    var newArray = array.splice(3)
    console.log (newArray);

    var array = [1,2,3,4];
    array.unshift ('new');
    array[array.indexOf('new')] = 'old'; 
    var newArray = array.splice(2, 2) // takes to elements
    console.log (newArray);
    console.log (array);


    var array = [1,2,3,4];
    array.unshift ('new');
    array[array.indexOf('new')] = 'old'; 
    console.log (array.map (function (value) {  //map creates a new array
        return value *2
    }));
    console.log(array); // array is untouched.


    var array = [1,2,3,4];
    array.unshift ('new');
    array[array.indexOf('new')] = 'old'; 

    var newArray = ['join', 'me'];

    console.log (array.concat (newArray));
    console.log(array);
    console.log(newArray); // conbines elements in new array */




/*___________________________________OBJECT BASICS & LIERAL NOTATION________________________________________*/

  /*  var person = {
        name:'Mark',
        age: '26',  // objects can hold all the types that can be assigned to variables. no equals sign required
        likes: {
        hobbies: ['basketball', 'cooking', 'travelling'],
        location: 'Grenada'    
    },
        greet: function () {
            console.log ('hello, i"m attached to an object called person!!!')
        }
    };

    console.log (person.likes.hobbies); //here we can access properties by the DOT notation.
    person.greet();
*/




/*______________________________________OBJECTS , PROPERTIES & THIS_____________________________________________ */

/*
var person = {
    name: 'Max',
    age: 27,
    details: {
    hobbies: ['footbal', 'basketball', 'music'],
    location: 'London'
    },
        greet: function () {
            console.log ('Hello, I am ' + this.age + ' years old');
        }
};

person.greet();

//we use the 'this' key to let JS know that we are referring to the age of THIS object.

*/
/*________________________________________________PROTOTYPE 1_____________________________________ */

//ALL OBJECTS IN JAVASCRIPT HAVE A PROTOTYPE

/*
var person = {
    name: 'Max',
    age: 27,
};

Object.prototype.greet = function () {
    console.log ('Hello There');
};

var max = Object.create(person); 

max.greet();

// this object doesnt have greet it works it way up to get it from any other prototpyes. */




/*________________________________________________PROTOTYPE_____________________________________ */

//Prototypes are like blue prints where you can build different items from.

/*
var age = 30;

var person = {
    name: 'Max',
    age: 27,
};

Object.prototype.greet = function () {
    console.log ('Hello there, I am'  + this.name + '!');
};

var max = Object.create(person);
var anna = Object.create(person);
anna.name = 'Anna';

max.greet();
anna.greet();

*/

/*________________________________________________PROTOTYPES 2_____________________________________ */



// prototypes are blue prints for you to extend your objects and to benefit from methoods or fields that
// you might not have built into your project but into the prototype of a hiher level from which your inherting.

/*
var age = 30;

var person = {
    name: 'Max',
    age: 27,
};

Object.prototype.greet = function () {
    console.log ('Hello there, I am'  + this. name + '!');
};

var max = Object.create(person);
var anna = Object.create(person);

max.greet();
anna.greet();

*/
/*_______________________________________________CONTRUCTOR FUNCTIONS PART __________________________________________ */


/*
function Person () {
this.name = 'Mark';     // contructor functions allow us to create objects with default fields and values.
this.greet = function () {              // these are blue prints that we can reuse
    console.log ('Hello, I am' + this.name );
}
}

Person.prototype.greet = function () {  //<---prototypes alloow us to inherit from objects. prototypes are second                                              //level (greet get inherited from the object constructor)
    console.log ('Hello');
};

var person = new Person()
person.name = 'Tasha';

var anotherPerson = new Person();

person.greet();
anotherPerson.greet();




console.log(person instanceof Person); //<---checks to see whether it's an instance of Person contructor function


*/

/*_______________________________________CONTRUCTOR FUNCTIONS PART 2_____________________________________________ */

//this contructor allows you to pass the name and age upon creation. This is a generic blue print which we can fill it with //different objects with different values based on that blue print.

/*

function Person (name, age) {
    this.name = name;
    this.age = 29;
}

var person = new Person('mark', 29);

var person = new Person('tas', 27);


console.log (person);
console.log(person);

*/


/*_________________________OBJECT CREATION AND PROTOTYPE SUMMARY_____________________________________________ */

//Contruction are blue prints of your object that you can create instance of your constructor function.

//Prototypes allwos you to implement inheritance which sit of a higher level and provide a fallback mechanism to //find missing functions/fields.

//There are four ways to creating objects.

//1 literal notation
//2. new Object
//3. object.create
//4. contructor function <----allows you to create your own blue print of which you create an object. //(object.prototype) is used as an high level fallback 




/*________________________________________________________this______________________________________________________ */

//General rule of thumb could be this refers to left part of the DOT which executes something where this is //included.

//also refer to notes in main notes book.

/*
console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();


*/

/*____________________________CREATING PROPRTIES WITH DEFINE PROPERTY________________________________________________ */



/*
var account = {
    cash: 10000,
    withdraw: function (amount) {
    this.cash -= amount;
    console.log ('Withdrew ' + amount +', new casb balance is ' + this.cash);
  }
};


Object.defineProperty (account, 'deposit', {
    value: function (amount) {
        
        this.cash += amount;
    }
} );


account.deposit (5000);
account.withdraw (2000);

// look up further examples

*/


/*____________________________DELETING PROPERTIES FROM  OBJECTS________________________________________________ */


/*

var person = {
    name:'Max',
    age: 29
    
}

delete  person.name;
console.log (person.name);



var person = {
    name:'Max',
    age: 29
    
}

delete  person.name;
console.log ('name' in person);

*/



/*_____________________________________ADVANCE FUNCTIONS PART (1) CLOUSURES______________________________________________ */

//NEED TO RE-STUDY 





/*______________________ADVANCE FUNCTIONS PART (2) IMMEDIATLEY INVOKED FUNCTIONS_______________________________________ */


//get immediatley executed when the code runs


/*

( function calc () {
    var number = 10;
    console.log(number);
}) ();
 
 
console.log (number);

*/


// Advantage of using IFF'S is that it get's excuted in the local scope  of the function and not on global. 

// ensures that the variable is only available in the local scope and not everywhere.

// It's good to use to advoid overwritting any global scope variables or third party packages.




// we can also pass values into them as shown below.


/*
( function calc (input) {
    var number = 10;
    console.log(number);
}) (10);
 



var obj = {}; // created the object on the global scope 

( function calc (input) {
    obj.name = 'Mark'; //creates an object property.

}) (obj);

console.log (obj); call //object


*/

/*_____________________________________TIMERS AND INTERVALS_______________________________________ */

// Intervals are timers are good for when you want to excute code based on some timing. (i.e, animations, fetching data)


/*
setTimeout (function () {
    console.log ('Hi there');   //delays the code from being run
}, 5000);
*/
 
/*

setInterval (function () {
  console.log ('your winning');  // runs code every 5 seconds
    }, 5000 );
*/

/*

var interval = setInterval (function () {
  console.log ('Stops after five seconds');  // 
    }, 500 );

setTimeout (function () {
  clearInterval (interval);    // after 2.5 sec it will clear the interval
}, 2500 );
           
*/




/*_____________________________________STRING FUNCTIONS_______________________________________ */

/*
var string = 'Any text';
console.log(string.length); // display the lengh




var string = 'Any text';
console.log(string [2]); // you can use a string as an array




var string = 'Any text';
console.log(string.concat(' add a new string')); // add a new string



var string = 'Any text';
console.log(string.toUpperCase(' add a new string')); // add a new string


var string = '   ANY TEXT   ';
console.log(string.trim());


*/




/*_____________________________________DATE OBJECT_______________________________________ */


console.log (innerWidth); // displays the size of window.




