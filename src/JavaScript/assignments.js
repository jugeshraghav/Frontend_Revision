//1
// Your ES6 code here
const getOddNumbers = (arr) => {
  const res = [];
  for (let item of arr) {
    if (item % 2 !== 0) {
      res.push(item);
    }
  }
  return res;
};
// console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); // [7, 3, 9, 13]

//2
// Your ES6 code here
const sumDigitsAtOddIndices = (arr) => {
  let sum = 0;
  arr.forEach((item, index) => {
    if (index % 2 !== 0) {
      sum = sum + item;
    }
  });
  return sum;
};
// console.log(sumDigitsAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 20

//3
// Your ES6 code here
const reverseString = (string) => {
  let reverse = "";
  let i = string.length - 1;
  for (i; i >= 0; i--) {
    reverse = reverse + string[i];
  }
  return reverse;
};
// console.log(reverseString("file")); // elif

//4
// Your ES6 code here
const getShortestString = (arr) => {
  let shortestString = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i].length < shortestString.length) {
      shortestString = arr[i];
    }
  }
  return shortestString;
};
// console.log(getShortestString(["primary", "secondary", "education", "exams"]));
// exams

//5
// Your ES6 code here
const sumArrays = (arr1, arr2) => {
  const res = [];
  if (arr1.length < arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      res.push(arr1[i] + arr2[i]);
    }
    res.push(...arr2.slice(arr1.length));
  } else if (arr2.length < arr1.length) {
    for (let i = 0; i < arr2.length; i++) {
      res.push(arr2[i] + arr1[i]);
    }
    res.push(...arr1.slice(arr2.length));
  } else {
    for (let i = 0; i < arr2.length; i++) {
      res.push(arr2[i] + arr1[i]);
    }
  }
  return res;
};
// console.log(sumArrays([], [])); // [2, 4, 6, 9]

//6
// Your ES6 code here
const getCoordinates = (object) => {
  return Object.values(object);
};
const point = { x: 5, y: 10 };
// console.log(getCoordinates(point)); // [5, 10]

//7
// Your ES6 code here
const getCarDetails = (obj) => {
  const { make, model, year, color } = obj;
  return `Make:${make}, Model:${model},Year:${year},Color:${color}`;
};
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
  color: "gray",
};
// getCarDetails(car); // "Make: Toyota, Model: Corolla, Year: 2015"

//8
// Your ES6 code here
const areStringsEqual = (str1, str2) => str1 === str2;
// console.log(areStringsEqual("Apple", "Apple")); // true
// console.log(areStringsEqual("Apple", "apple")); // false
// console.log(areStringsEqual("Papaya", "Watermelon")); // false

//9
// Your ES6 code here
const getNamesOfAdults = (arr) => {
  const res = [];
  for (let obj of arr) {
    if (obj["age"] >= 60) {
      res.push(obj.name);
    }
  }
  return res;
};
const people = [
  { name: "Alice", age: 69 },
  { name: "Bob", age: 47 },
  { name: "Charlie", age: 70 },
];
// console.log(getNamesOfAdults(people)); // Output: ["Alice", "Charlie"]
