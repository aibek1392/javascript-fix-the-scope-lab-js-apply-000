function myAnimal(){
  return "dog"
}
function yourAnimal(){
  return "cat"
}
function add2(n){
  return n+2
}
var funkyFunction = function() { // funkyFunction
  return function() { // funkyFunction()
    return "FUNKY!" // funkyFunction()()
  }
}
var theFunk = funkyFunction()()