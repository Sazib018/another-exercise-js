// class-4 
//task-1

function foo() {console.log("foo");bar ();} 
function bar() {console.log("bar");};

bar('foo')
foo()

//task-2

function even(x) {
    return x % 2 ==0;
}

function obb(x) {
    return x % 2 ==1;
}
console.log();


//task-4

var color ="green"

switch (color) {
    case 'red': console.log('stop don,t move');
        break;
    case 'yellow': console.log('wait for green signal');
        break;
    case 'green': console.log('crose rode');
        break;

    default: console.log('please maintain signal. those "red", "yellow", "green";');
}