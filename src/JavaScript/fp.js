//set1
//1
// Your ES6 function here
const incrementNumbers = (arr) => {
  return arr.map((item) => item + 3);
};
const numbers = [1, 2, 3, 4, 5];
// console.log(incrementNumbers(numbers));
// console.log(numbers);

//2
// Your ES6 function here
const capitalizeArray = (arr) => arr.map((item) => item.toUpperCase());
const myArray = ["apple", "banana", "cherry"];
// console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]

//3
// Your ES6 function here
const getAges = (peopleArray) => peopleArray.map((person) => person.age);
const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];
const ages = getAges(people);
// console.log(ages); // Output: [25, 24, 29]

//4
// Your ES6 function here
const getProductNamesInLowerCase = (productsArr) =>
  productsArr.map((product) => product.name.toLowerCase());
const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];
// console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]

//5
// Your ES6 function here
const getCityNames = (citiesArr) => citiesArr.map((city) => city.name);
const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

// console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]

//6
// Your ES6 function here
const filterLongStrings = (fruitsArr) =>
  fruitsArr.filter((fruit) => fruit.length > 5);
const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
// console.log(filterLongStrings(fruits));
// Output: ["banana", "cherry", "watermelon", "pineapple"]

//7
// Your ES6 code here
const isDivisibleBy3and5 = (numbersArr) =>
  numbersArr.filter((num) => num % 3 === 0 && num % 5 === 0);
const numbers1 = [1, 2, 30, 4, 15];
// console.log(isDivisibleBy3and5(numbers1));
// Output: [30, 15]

//8
// Your ES6 code here
const filterByAge = (peopleArr) =>
  peopleArr.filter((person) => person.age > 30);
const people1 = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

// console.log(filterByAge(people1));
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

//9
// Your ES6 code here
const filterByScore = (studentsArr) =>
  studentsArr.filter((student) => student.score > 80);
const students = [
  { name: "Aditya", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];

console.log(filterByScore(students));
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]
