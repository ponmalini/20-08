let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = sum / numbers.length;

console.log(average);
