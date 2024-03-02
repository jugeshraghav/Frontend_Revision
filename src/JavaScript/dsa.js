// max and min in an array

function findMaxMin(arr) {
  let min = arr[0];
  let max = arr[0];
  let i = 1;
  for (i; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { min, max };
}

// console.log(findMaxMin([1, 2, 3, 4, 5]));

//reverse array
function reverseArray(arr) {
  const reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}
consolr.log(reverseArray([1, 2, 3, 4]));
