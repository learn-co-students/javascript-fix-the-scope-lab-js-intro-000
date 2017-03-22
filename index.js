/* Original Code with issues:
var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  return n + two

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction */

var animal = 'dog'

function myAnimal() {
  return animal
}

//Fix the Scope yourAnimal() returns your animal
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  var animal = 'cat'
  return animal
}

// Fix the Scope add2(n) adds two to n:
function add2(n) {
  const two = 2
  return n + two
  // I defined const two before return
}

// Fix the Scope theFunk is "FUNKY!"
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()()
