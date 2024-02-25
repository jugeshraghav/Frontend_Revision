const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// console.log(user);

let schedule = {};
function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}

// console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum = sum + salaries[key];
}
// console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
// for (let key in menu) {
//   typeof menu[key] === "number"
//     ? (menu[key] = 2 * menu[key])
//     : (menu[key] = menu[key]);
// }

// console.log(menu);

////copying or cloning objects
//the object variables hold the address where the actual object is stored. so if we try assigning an object ot another ,we copy the reference to the object in the new object. Thus if the object is updated through one variable then those changes are reflected in other variable as well.
const myObj = {
  name: "jugesh",
  age: "24",
};
const clone = myObj;

//if we want to clone an object we have three methods:
//1.loop through the object and copy the properties
//2. Object.assign(destination, ....objects_or_properties) --drawbacks- it can't clone nested objects properly
//3.spread syntax
//so we use const clone= structuredClone(object)-----------deep cloning - cloning objects to nested levels
//-----can't clone objects containing functions then we need to use - custom cloning methods or libraris

let salariesNew = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
const sumSalaries = (object) => {
  let sum = 0;
  let arrayOfSalaries = Object.values(object);
  for (let sal of arrayOfSalaries) {
    sum = sum + sal;
  }
  return sum;
};
// console.log(sumSalaries(salariesNew));

const countNumberOfProperties = (object) => {
  const arrayOfProperties = Object.keys(object);
  return arrayOfProperties.length;
};

// console.log(countNumberOfProperties(salariesNew));

const arr = [1, 2, 3, 4];
// console.log(Object.entries(arr));
