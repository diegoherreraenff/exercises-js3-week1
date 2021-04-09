// Turn this function into an arrow function
/* function arrow() {
  return "es6 is awesome!";
} */

const arrow =  () => {
  return "es6 is awesome!";
}

console.log(arrow())

//Use the es6 syntax for default parameter
function defaultParameter(name = "sam") {
  var name = name
  return name;
}
console.log (defaultParameter("diego"))
console.log(defaultParameter())

// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
    return  [...arr1, ...arr2]

  //return arr1.concat(arr2);
}
/* const arrayA = ["soy una prueba"]
const arrayB = ["yo tambien"]
const arrayC =[...arrayA, ...arrayB] */

//const prueba  = ["soy una prueba", "yo tambien"]
 console .log (combineArrays(["soy una prueba"],["yo tambien"]))



//use destructuring to return the object's cyf property
function destructuring({cyf}) {
  return cyf;
}

console.log (destructuring({cyf : "hola"}))

// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return "The sum is equal to " + (a + b).toString();
}