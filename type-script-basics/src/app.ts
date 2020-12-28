// Code goes here!
// const userName = 'bvalerio';
// // userName = 'Valerio';
// let age = 30;
// age = 29; 


// var result;

// function add(a: number, n: number) {
//     result = a + n;
//     return result;    
// }

// console.log(result);


const add1 = (a: number, b: number) => {
    return a + b;
}

const add2 = (a: number, b: number) => a + b;

console.log(add1(2,5));
console.log(add2(2,5));

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if(button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(add1(5,5));