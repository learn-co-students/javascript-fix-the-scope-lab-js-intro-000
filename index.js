var animal = 'dog'

function myAnimal() {
  return animal
}
myAnimal();

function yourAnimal() {
  var animal = "cat";
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}
yourAnimal();

function add2(n) {
  return 2 + n;
  const two = 2;
  add2();


  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
funkyFunction();

// We want this to return a function that returns "FUNKY!" -- how can we accomplish
var theFunk = "FUNKY!";
