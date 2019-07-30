var animal = 'dog'
function myAnimal(){
  return animal
}
function yourAnimal(){
  var animal = 'cat';
  return animal
}


function add2(n) {
  var two = 2
  return n + two;
}

var funkyFunction = function outsideFunction(){
  return function insideFunction(){
    return "FUNKY!"
  }
}
console.log(funkyFunction()())

var theFunk = funkyFunction()()
theFunk();
