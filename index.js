var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal(){
  animal="cat"
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

function funkyFunction ()
{
  var funk = function funky()
  function funky()
  {
    return "Funky!"
  }
    return var funk
  }


// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
console.log(funkyFunction())
