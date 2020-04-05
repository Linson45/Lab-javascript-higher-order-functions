// const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

// const modifiedFood = foods.slice(1, 4);

// console.log(modifiedFood);

// const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

// var modifiedFood = foods.splice(2, 0,"icecream","fingerShips");

// console.log(foods);

 const numberArray = [12,324,213,4,2,3,45,4234];

// let Even=numberArray.filter(function Iseven(num){
//     return num%2==0;
// });
// console.log(Even);

// let Prime = numberArray.filter((number) => {
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) return false;
//     }
//     return true;
//   });
  const isPrime = num => (num > 2 && num % 2 == 0) ? false : num > 1;
  console.log(numberArray.filter(isPrime));

  //LAMBDA
const numberArray = [12,324,213,4,2,3,45,4234];
isEven(numberArray);
function isEven(evens){
var evens = evens.filter(x => x % 2 === 0);
console.log(evens);
}


console.log(evens);

//square
const numberArray = [12,324,213,4,2,3,45,4234];
findSquareofnumbers(numberArray);
function square(numberArray){
 
 numberArray= numberArray.map(x=>x**2);

console.log(numberArray);
}

//product
const numberArray = [12,324,213,4,2,3,45,4234];
multiply(numberArray);
function multiply(numberArray){
 
 numberArray= numberArray.reduce(function(total,amnt){
   return(total*amnt);
   
 });
console.log(numberArray);
}
  