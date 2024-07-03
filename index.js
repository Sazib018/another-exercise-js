// class-4 
//task-1

function foo() {console.log("foo");bar ();} 
function bar() {console.log("bar");};

bar('foo')
foo()

//task-2
function make_avg(num1, num2, num3) {
  var total = num1 + num2 + num3;
  var average = total /3;
  return average;  
}

const avg = make_avg (15, 20, 25);
console.log(avg);

//task-3
var arr = [1, 2, 3, 4, 5];
var average = arr.reduce((a, b) => a + b, 0) / arr.length;


console.log(average);

//task-4

function odd_even(number) {
    if (number % 2 === 0) {
        return 'even';   
    }
    else {
        return 'odd';
    }
}

var result = odd_even(29);
console.log(`the number is ${result}.`);
  
//task-5

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