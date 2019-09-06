function myAnimal (){
  var animal = 'dog'

  return (animal)
}

myAnimal ()

function yourAnimal (){
  var animal = 'cat'

  return (animal)
}

yourAnimal ()

function add2(n){
  var x= 2

  return (n+x)
}

add2 (n)

function funkyFunction(){ // scope of funkyFunction aka lexical scope for innerFunky

  return function innerFunky () {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()

theFunk() // 'FUNKY!'

// don't understand why the test keeps failing
