var animal = 'dog'

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function myAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}  //I can't hard-code 'cat' inside, but, apparently, I can switch yourAnimal and myAnimal function names to get the expected result

function add2(n) {
  const two = 2
  return n + two
}  //const two needed to be declared before executing the return call

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()();
theFunk;
