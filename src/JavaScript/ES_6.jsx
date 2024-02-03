export const ES_6 = () => {
  //let const and var
  //all the three are used to declare variables. let and const are the concepts of latest javascript updates the ES6.
  //these are different from each other in terms of scope, redeclaration
  //scope
  //let and const are block scoped while var is function scoped
  //   let c = 10;
  //   if (c === 10) {
  //     let a = 10;
  //     console.log(a, "inside while block");
  //     var b = 20;
  //     console.log(b, "b inside while block.");
  //   }
  //   console.log(b, "b outside while block.");
  //   console.log(a, "a outside while block");
  //   let a = 42;
  //   {
  //     let a = 100;
  //   }
  //   console.log(a);

  //   let a = 100;
  //   function App() {
  //     console.log("1", a);
  //     let a = 42;
  //     console.log("2", a);
  //     {
  //       let a = 100;
  //     }
  //     console.log("3", a);
  //   }
  let a = 100;
  function App() {
    a = 42;
    console.log("1", a);
  }
  App();

  return (
    <>
      <h1>Hi We will learn JavaScript basic concepts today.</h1>
    </>
  );
};
