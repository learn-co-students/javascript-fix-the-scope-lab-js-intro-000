var a = 'dog', b = 'cat'

function myAnimal() {
  return a
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return b
}

function add2(n) {
  const two = 2
  return n + two
}

var theFunk = "FUNKY!"

function funkyFunction() {
  return function() {
    return theFunk
  }
}
