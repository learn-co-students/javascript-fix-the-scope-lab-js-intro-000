var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  var internal = "cat"; // isn't this hard-coding?..
  var animal = internal;
  return animal;
}

function add2(n) {
  const two = 2;
  var internal = n;
  return internal + two;
  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
// var theFunk = funkyFunction()();
  // this does not make any sense.
  // line 27 can be changed to "function funkyFunction(){" with no change..
  // ..then what's the point in declaring a variable of a function?
    // "var greeting will equal inner(name)"
    // "why"
    // "Because that's what outer is returning"
    // "oh i see.
    // but why is greeting a var and not a function
    // you can pass arguments into vars now?"
    // "because you can store functions in varaiables"
    // "what the fuck
    // why"
    // "javascript is a nightmare
    // It's due to the asynchronous functionality of javascript"
var internal = funkyFunction();
var theFunk = internal();
  // that's vaguely better. still unclear though.
  // better in the sense that it's more generalized for closed functions that have names.
