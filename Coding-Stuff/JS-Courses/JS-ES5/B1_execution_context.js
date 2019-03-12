b();

console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}


// when b in invoked it logs "called b!" then pops off the stack. line 3 will be logged as undefined.
