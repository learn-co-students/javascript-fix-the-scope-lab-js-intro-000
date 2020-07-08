var animal = 'dog'

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal='cat';
  return animal;
}

function add2(n) {
  const two = 2
  return n + two
}
function funkyFunction(){
  return function Y() {
    return "FUNKY!"
  }
}
var T = funkyFunction();
var theFunk = T();
