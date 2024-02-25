const myString = "guest:1.John";
console.log(myString);

function ucFirst(str) {
  if (!str) return str;
  return (str = str[0].toUpperCase() + str.slice(1));
}

console.log(ucFirst("john"));

function checkSpam(str) {
  str = str.toLowerCase();
  //   console.log(str);
  return str.includes("viagra") || str.includes("XXX".toLowerCase());
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else {
    let newStr = str.slice(0, maxLength - 1) + "...";
    console.log(str);
    console.log(newStr);
    return newStr;
  }
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
