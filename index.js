var animaldog = 'dog'

function myAnimal() {
  return animaldog
}

function yourAnimal() { var animalcat = "cat"
  return animalcat
}

function add2(n) {
  var two = 2
  return n + two
}


var funkyFunction = function(){
   return function() {
    return "FUNKY!"
  }
}


var theFunk = funkyFunction()()
