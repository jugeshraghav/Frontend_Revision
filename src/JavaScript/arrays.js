let arr = [5, 3, 8, 1];
// const filterRange = (arr, a, b) => {
//   const newArr = arr.filter((element) => element >= a && element < b);
//   return newArr;
// };

// const filterRange = (arr, a, b) => {
//   const newArr = [];
//   arr.forEach((item, index, array) => {
//     if (array[index] >= a && array[index] < b) {
//       newArr.push(item);
//     }
//   });
//   return newArr;
// };

// console.log(filterRange(arr, 1, 4));

// console.log(arr);

const filterRange = (arr, a, b) => {
  arr.forEach((item, index, array) => {
    if (array[index] >= a && array[index] < b) {
      //   newArr.push(item);
    } else {
      array.splice(index, 1);
    }
  });
  //   arr.filter((item) => item >= a && item < b);
};
filterRange(arr, 1, 4);
// console.log(arr);

let arr1 = [5, 2, 1, -10, 8];

const sortedArr = [...arr1].sort((a, b) => b - a);
// console.log(arr1);
// console.log(sortedArr);

////
const myArr = [1, 2, 3, 4];
myArr[3] = { age: 24 };
myArr[4] = function sum(a, b) {
  return a + b;
};
// console.log("myArray" + myArr);
// console.log(myArr[3]);
// console.log(myArr[4]);
// console.log(myArr[4](2, 3));

let arr2 = ["a", "b"];

arr2.push(function () {
  console.log(this);
});

// arr2[2]();

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function camelize(str) {
  const strArr = str.split("-");
  const newStrArr = [];
  for (let ele of strArr) {
    newStrArr.push(ucFirst(ele));
  }
  return newStrArr.join("");
}

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

const filterRangeInPlace = (arr, a, b) => {
  console.log(arr);
  arr.forEach((item, i, arr) => {
    if (a > item || b < item) {
      arr.splice(i, 1);
    }
  });
};

let arr3 = [5, 3, 8, 1];

filterRangeInPlace(arr3, 1, 4);
console.log(arr3);
