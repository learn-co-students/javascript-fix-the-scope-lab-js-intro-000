var animal = 'dog'

function myAnimal() {
  return animal;
}
myAnimal();
function yourAnimal() { var animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}
yourAnimal();
function add2(n) {
  parseInt(n,10); // Need to parse the input, make sure its a number.
  const two = 2  // why do const here? Is it needed?
  return (n + two); // now we add the two items.
  // Feel free to move things around!
}
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()();
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
// funkyFunction; theFunk(); solution is adding ()() to the variable to call the function within.
// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?

