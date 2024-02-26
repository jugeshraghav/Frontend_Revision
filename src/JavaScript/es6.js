function isEligibleToVote(age) {
  return age >= 18 ? "Is Eligible to vote" : "Is not eligible to vote";
}

// console.log(isEligibleToVote(18));

function isGreater(a, b) {
  return a > b ? `${a} is greater.` : `${b} is greater.`;
}

// console.log(isGreater(10, 5));

function checkNum(num) {
  return num > 0 ? "Positive" : "Negetive";
}

// console.log(checkNum(-16));

function isEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// console.log(isEvenOdd(10));

function checkForAlphabetA(string) {
  for (let char of string) {
    if (char === "a" || char === "A") return "includes a";
  }
  return "does not include a";
}

// console.log(checkForAlphabetA("Jane"));

function checkLength(string) {
  let noOfCharacters = 0;
  for (let char of string) {
    noOfCharacters = noOfCharacters + 1;
  }
  return noOfCharacters > 5
    ? "More than 5 characters"
    : "Less than 5 characters";
}

// function checkLength(string) {
//   return string.length > 5
//     ? "More than 5 characters"
//     : "Less than 5 characters";
// }

// console.log(checkLength("Jeep"));

function isBetweenOneAndTen(num) {
  return 1 < num && num < 10; ///correct way
  //   return 10 > num > 1;////always returns false
  // return 1<num<10;  always returns true
}

// console.log(isBetweenOneAndTen(5));

function isHelloPresent(string) {}

function isMultipleOfThree(num) {
  return num % 3 === 0;
}

// console.log(isMultipleOfThree(5));
// console.log(isMultipleOfThree(9));

function multiplyByTen(num) {
  return num * 10;
}

const num = 20;
// console.log(multiplyByTen(num));
// console.log(num);///primitives are immutable

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

// Your ES6 code here
const { title, price, description } = product;

// console.log(title); // iPhone
// console.log(price); // 5999
// console.log(description);

const book = {
  title: "My Story",
  author: "Jugesh Raghav",
  pages: 200,
};

function getBookDetails(bookObject) {
  return bookObject.pages > 100;
}

// console.log(getBookDetails(book));
const person = { name: "Amit", age: 25, occupation: "Software Engineer" };
function changeOccupation(personObject, newOccupation) {
  personObject.occupation = newOccupation;
}
// console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, "Product Manager");
// console.log(person);

const numbers = [1, 2, 3];
// Your ES6 code here
const [a, b, c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

const defaultParamsFunc = (a, b, c = 4) => a * b * c;

// console.log(defaultParamsFunc(3, 1));

//set 2
//1
const person1 = {
  name: "Ajay",
  age: 30,
};
person1["age"] = 35;

// console.log(person1["age"]);

//2

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };
const isSportsCar = (car) => car.horsepower >= 300;
// console.log(isSportsCar(car1));
// console.log(isSportsCar(car2));

//3

const person2 = { name: "Ajay", age: 20 };
const isEligible = (person, num) => person.age + num > 21;
// console.log(isEligible(person2, 1));
// console.log(isEligible(person2, 2));

//4
const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430,
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500,
};
const getViews = (blog) => blog.views > 1000;
// console.log(getViews(blog1));
// console.log(getViews(blog2));

//5
let d = 1;
let e = 2;
// Your ES6 Code here
[e, d] = [d, e];
// console.log(d); // 2
// console.log(e); // 1

//6
// function add(a = 30, b = 0) {
//   return a + b;
// }

const add = (a = 30, b = 0) => a + b;

// console.log(add(2, 3));

//7
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combineObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
const combinedObj = combineObjects(obj1, obj2);
// console.log(combinedObj);

//8
// function getData(person) {
//   const name = person.name;
//   const address = person.address.city;
//   console.log(name); // John Doe
//   console.log(address); // New York
// }

const getData = (person) => {
  let {
    name,
    address: { city: address },
  } = person;
  console.log(name); // John Doe
  console.log(address); // New York
};

const person3 = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
// getData(person3);

//9
const stringToUpperCase = (string) => string.toUpperCase();
// console.log(stringToUpperCase("hello"));

//10
// Your ES6 code here
const concatenateStrings = (str1, str2) => str1.concat(str2);
// console.log(concatenateStrings("hello", "world")); // "helloworld"

//11
// Your ES6 code here
const lastElement = (arr) => arr[arr.length - 1];
// console.log(lastElement([1, 2, 3, 4, 5])); // 5

//12

// Your ES6 code here
const firstElement = (arr) => arr[0];
// console.log(firstElement([1, 2, 3, 4, 5])); // 1

//13
// Your ES6 code here
const sumFirstElement = (arr, num) => arr[0] + num;
// console.log(sumFirstElement([1, 2, 3], 5)); // 6

//14
// Your ES6 code here
const sumFirstAndLast = (arr) => arr[0] + arr[arr.length - 1];
// console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

//15

// Your ES6 code here
const personInfo = (person) => `${person.name} is ${person.age} years old`;

const person4 = { name: "John", age: 25, occupation: "Software Engineer" };
const person5 = { name: "Jane", age: 45, occupation: "Data Analyst" };
// console.log(personInfo(person4)); // Expected output: "John is 25 years old."
// console.log(personInfo(person5)); // Expected output: "Jane is 45 years old."
