let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey it my first promise");
  }, 5000);
});
console.log("hello");
const output = promise.then((res) => console.log(res));
console.log(output);
