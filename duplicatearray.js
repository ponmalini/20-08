let arr = [1,2,2,3,4,4,5,6,6,7];
let uniqueArr = [];
arr.forEach(number => {
  if (!uniqueArr.includes(number)) {
    uniqueArr.push(number);
  }
});
console.log(uniqueArr.join(',')); 
