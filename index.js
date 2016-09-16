var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two

}

function funkyFunction()() {
  return function theFunk() {
    var funk = 'FUNKY!'
    return funk
  }
}




// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
