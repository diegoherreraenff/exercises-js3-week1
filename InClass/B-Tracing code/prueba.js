/* function imprimeParametros(element1, element2) {
    console.log(element1)
    console.log(element2)

}

const arr1= [1,2,3,4]
const[a,b,c,d]= arr1 */

/* console.log (imprimeParametros(c,d)) */
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);