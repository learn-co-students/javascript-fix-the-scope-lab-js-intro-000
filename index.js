var animal = 'dog'

function myAnimal() {

  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal
}
yourAnimal();





function add2(n) {
const two = 2;

return n + two;
}





var theFunk = "FUNKY!";
var funkyFunction = function() {

 return function inner() {

  return theFunk;

  }
}
