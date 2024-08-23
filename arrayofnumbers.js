let numbers = [3,7,2,9,5];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}
console.log(largestNumber);
