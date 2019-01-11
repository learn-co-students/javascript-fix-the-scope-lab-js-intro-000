var animal = 'cat'

function myAnimal() {
  animal = 'dog';
  return animal;
}

myAnimal();
console.log(animal);

function yourAnimal() {
  animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

yourAnimal();
console.log(animal)

function add2(n) {
  return n + two

  // Feel free to move things around!
  const two = 2
  const n = 756
}

add2();


var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!"
