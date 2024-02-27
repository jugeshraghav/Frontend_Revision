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

//10
// Your ES6 code here
const filterByCityAndAge = (peopleArray) =>
  peopleArray.filter((person) => person.age > 70 && person.city == "Indore");

const people2 = [
  { name: "Ridhima", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" },
];
const filteredPeople = filterByCityAndAge(people2);
// console.log(filteredPeople);
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

//11
// Your ES6 code here
const filterByGenre = (booksArr) =>
  booksArr.filter((book) => book.genre.toLowerCase() === "science fiction");
const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
  },
  { title: "1984", author: "George Orwell", genre: "Science Fiction" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
];

const filteredBooks = filterByGenre(books, "Science Fiction");
// console.log(filteredBooks);
// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

//12
// Your ES6 code here
const filterBySalary = (employeesArr) =>
  employeesArr.filter(
    (employee) => employee.salary > 22000 && employee.age > 25
  );
const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
];

const filteredEmployees = filterBySalary(employees, 22000, 25);
// console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]

/////////Set 2
//1
const people3 = [
  { name: "Raj", age: 28 },
  { name: "Swapnil", age: 42 },
  { name: "Anushka", age: 35 },
];

// Your code here
const getNames = (peopleArr) => peopleArr.map((person) => person.name);
const names = getNames(people3);
// console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

//2
const numbers2 = [1, 2, 3, 4];
// Your code here
const multiplyByFive = (arr) => arr.map((item) => item * 5);
// console.log(multiplyByFive(numbers2)); // Output: [5, 10, 15, 20]

//3
const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];

// Your code here
const greetEmployeeMessages = (arr) =>
  arr.map(
    (item) => `Hi ${item.name}, we are glad to have you as a ${item.dept}.`
  );
// console.log(greetEmployeeMessages(employeeData));
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']

//4
const books1 = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

// Your code here
const getBookTitles = (arr) => arr.map((item) => item.title);
const titles = getBookTitles(books1);
// console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

//5
const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
// Your code here
const firstLetterA = (arr) => arr.filter((name) => name[0] === "A");
const studentNames = firstLetterA(studentName);
// console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]

//6
const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];
// Your code here
const getProducts = (arr, price) => arr.filter((item) => item.price > price);
// console.log(getProducts(productData, 40));
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]

//7
const numbers3 = [1, 2, 3, 21, 14, 7];
// Your code here
const isDivisibleBy7 = (arr) => arr.find((num) => num % 7 === 0);
// console.log(isDivisibleBy7(numbers3));
// Output: 21

//8
const names2 = [
  "Mohan",
  "Anjali",
  "Geetanjali",
  "Ankit",
  "Bhanu Kumar",
  "Ramakrishnan",
  "shayam",
];
// Your code here
const isNamesGreaterThan8 = (arr) => arr.find((name) => name.length > 8);
// console.log(isNamesGreaterThan8(names2));
// Output: "Geetanjali"

//9
const students1 = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

// Your code here
const findStudentWithGradeA = (arr) =>
  arr.find((student) => student.grade === "A");
const studentWithGradeA = findStudentWithGradeA(students1);
// console.log(studentWithGradeA);
// Output: { name: "Mary", grade: "A" }

//10
const students3 = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];

// Your code here
const findStudent = (arr) =>
  arr.find((student) => student.grade === "A" || student.scholarship);
const student = findStudent(students3);
// console.log(student);
// Output: { name: "Mary", grade: "B", scholarship: true }

//11
const students4 = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];
const findStudentB = (arr) =>
  arr.find((stu) => stu.grade === "B" && stu.scholarship);
const student1 = findStudentB(students4);
// console.log(student1);

//12
const bollywoodMovies = [
  { title: "Sholay", director: "Ramesh Sippy", year: 1975, rating: 8.2 },
  {
    title: "Amar Akbar Anthony",
    director: "Manmohan Desai",
    year: 1977,
    rating: 7.6,
  },
  { title: "Namak Halaal", director: "Prakash Mehra", year: 1982, rating: 7.4 },
  { title: "Mr. India", director: "Shekhar Kapur", year: 1987, rating: 7.8 },
  {
    title: "Qayamat Se Qayamat Tak",
    director: "Mansoor Khan",
    year: 1988,
    rating: 7.6,
  },
  { title: "Parinda", director: "Vidhu Vinod Chopra", year: 1989, rating: 8.1 },
  { title: "Dil", director: "Indra Kumar", year: 1990, rating: 7.8 },
];

// Your code here
const getBestOldBollywoodMovies = (arr) =>
  arr
    .filter((movie) => movie.year < 1990 && movie.rating > 8.0)
    .map((movie) => movie.title);
const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
// console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']

//////set 3
//1
const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here
const findToyotaCar = (arr) =>
  arr.find((item) => item.make === "Toyota" && item.year > 2010);
const toyotaCar = findToyotaCar(cars);
// console.log(toyotaCar);
// Output: { make: "Toyota", model: "Camry", year: 2015 }

//2
const getCarDetails = (arr) => arr.filter((item) => item.year > 2012);
const getCars = getCarDetails(cars);
// console.log(getCars);

//3
const products1 = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

// Your code here
const findElectronicsProduct = (arr) =>
  arr.find((item) => item.category === "electronics");
const electronicsProduct = findElectronicsProduct(products);
// console.log(electronicsProduct);
// Output: { name: "iPad", price: 799, category: "electronics" }

//4
const getAllElectronicProducts = (arr) =>
  arr.filter((item) => item.category === "electronics");
const electronicProducts = getAllElectronicProducts(products);
// console.log(electronicProducts);

//5
const studentsArr = [
  { name: "Alice", age: 16, grade: 90 },
  { name: "Bob", age: 17, grade: 80 },
  { name: "Charlie", age: 15, grade: 95 },
  { name: "David", age: 16, grade: 85 },
];
// Your code here
const filterStudentsByGrade = (arr, grade) =>
  arr.filter((stu) => stu.grade > grade);
const highGradeStudents = filterStudentsByGrade(studentsArr, 85);
// console.log(highGradeStudents);
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]

//6,7,8 skipped
//9
const getCarModel = (arr) =>
  arr.filter((car) => car.year > 2012).map((car) => car.model);
const carModels = getCarModel(cars);
// console.log(carModels);

//10 skipped

//11
const numArr = [12, 23, 4, 2, 11, 21];
// Your code here
const sumOfEvenNumbers = (arr) =>
  arr.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0);
// console.log(sumOfEvenNumbers(numArr));
// Output: 18

//12
const stuArr = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Alice", score: 85 },
];

// Your code here
const getAverageScore = (arr) =>
  arr.reduce((acc, curr) => acc + curr.score, 0) / arr.length;
// console.log(getAverageScore(stuArr));
// Output: 82.5

//13
const prodArr = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];

// Your code here
const getTotalCost = (arr) =>
  arr.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
// console.log(getTotalCost(prodArr));
// Output: 150

//14
const strings = ["Hello", " ", "world", "!"];
// Your code here
const concatenateStrings = (arr) =>
  arr.reduce((acc, curr) => acc.concat(curr), "");
// console.log(concatenateStrings(strings));
// Output: "Hello world!"

//15
const numbArr = [10, 5, 8, 3, 6];

// Your code here
const getMinimumNumber = (arr) =>
  arr.reduce((acc, curr) => (curr < acc ? (acc = curr) : acc));
// console.log(getMinimumNumber(numbArr));
// Output: 3

//////set 4
//1
const stringsArr = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here
const totalLength = (arr) => arr.reduce((acc, curr) => acc + curr.length, 0);
// console.log(totalLength(stringsArr));
// Output: 30

//2
const numberArr = [1, 2, 3, 4, 5];
// Your code here
const sumSquares = (arr) => arr.reduce((acc, curr) => acc + curr * curr, 0);
// console.log(sumSquares(numberArr));
// Output: 55

//3
const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];
// Your code here
const totalValue = (arr) => arr.reduce((acc, curr) => acc + curr.price, 0);
// console.log(totalValue(items));
// Output: 60

//4
// Your code here
const concatStrings = (arr) => arr.reduce((acc, curr) => acc + curr);
// console.log(concatStrings(["this", "is", "fun"])); // Output: 'thisisfun'

//5
const numArray = [1, 2, 3, 4, 5];
// Your code here
const product = (arr) => arr.reduce((acc, curr) => acc * curr);
// console.log(product(numArray));
// Output: 120

//6
const stringArr = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here
const longestString = (arr) =>
  arr.reduce((acc, curr) => (acc.length > curr.length ? acc : (acc = curr)));
// console.log(longestString(stringArr));
// Output: 'Haule Haule'

//7
const peopleArr = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];
// Your code here
const oldestPersonName = (arr) =>
  arr.reduce((acc, curr) => (acc.age < curr.age ? (acc = curr) : acc));

// console.log(oldestPersonName(peopleArr).name);
// Output: 'Naina'

//8
const peopleArray = [
  { name: "Alice", age: 100 },
  { name: "Bob", age: 105 },
  { name: "Charlie", age: 110 },
  { name: "David", age: 115 },
];
// Your code here
const getAverageAge = (arr) =>
  arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length;
// console.log(getAverageAge(peopleArray));
// Output: { averageAge: 32.5 }

//9
const productArr = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 },
];
// Your code here
const findMostExpensiveProduct = (arr) =>
  arr.reduce((acc, curr) => (acc.price > curr.price ? acc : (acc = curr)));
// console.log(findMostExpensiveProduct(productArr));
// { name: "Slipper", price: 40, quantity: 3 }

//10

const fruitsArr = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana",
];
// Your code here
const countStrings = (arr) =>
  arr.reduce(
    (acc, curr) =>
      curr in acc ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
    {}
  );
console.log(countStrings(fruitsArr));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }

// const obj = {
//   name: "Jugesh",
// };
// const key = "age";
// console.log(key in obj);
// console.log(obj[key]);
// obj.key = 15;
// let obj2 = { ...obj, [key]: 30 };
// obj2 = { ...obj2, [key]: obj2[key] + 1 };
// obj2[key] = obj2[key] + 50;
// console.log(obj);
// console.log(obj2);
