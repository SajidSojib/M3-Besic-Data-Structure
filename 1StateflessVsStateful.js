//* Stateless VS Stateful


//* stateless
/**
 * can not hold data for multiple iterations
 * function (must be pure)
 */

const counter = (amount) => {
  let count = 0;
  count += amount;
  return count;
};
// console.log(counter(2));
// console.log(counter(3));    //? output is not 5.


//* stateful
/**
 * can hold data for multiple iterations
 * class
 */

class Counter {
  constructor(count = 0) {
    this.count = count;
  }
  add(amount) {
    this.count += amount;
  }
  print() {
    console.log(this.count);
  }
}
const counter2 = new Counter();
counter2.add(2);
counter2.add(3);
// counter2.print();   //? output is 5


//* Clouser
/**
 * here function can be stateful
 * only possible with javascript
 * DSA must not depend on language
 */
const  createCounter =() => {
  let count = 0 ;
  return (amount) => {
    count += amount;
    return count;
  }
}
const counter3 = createCounter();   //? counter3 only has access to inner function
// console.log(counter3(2));   //? output is 2
// console.log(counter3(3));   //? output is 5

//! *************** Thats why we use Class for stateful ***************