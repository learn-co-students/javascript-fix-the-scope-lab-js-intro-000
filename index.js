var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'  // returns local variable 'cat' and not global variable 'dog'
  return animal
}

function add2(n) {
  const two = 2  // defined variable before addition
  return n + two
}

var funkyFunction = function() {  // theFunk or funkyFunction - returns outer function
  return function() {  // theFunk or funkyFunction() - returns inner function
    return "FUNKY!"  // theFunk of funkyFunction()() - returns "FUNKY!"
  }
}

// How can we return "FUNKY!"?
// var theFunk = funkyFunction  <-- this returns function without running it
// var theFunk = funkyFunction()  <-- this runs function but only returns the second function "function()"
var theFunk = funkyFunction()()  // this returns "FUNKY!"
