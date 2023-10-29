"use strict";

// task 1
function sum(...numbers) {
  let sum = 0;
  for (let item of numbers) {
    sum += item;
  }
  return sum;
}
let sumResult = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(sumResult);

// task 2
let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

function userStatus(object) {
  if (object.isloggedin) {
    return `${object.firstname} ${object.lastname}`;
  }
  {
    return "false";
  }
}

let theResult1 = userStatus(user);
console.log(theResult1);

// task 3
function maxNumber(numbers2) {
  let maxValue = 0;
  for (let element of numbers2) {
    if (element > maxValue) {
      maxValue = element;
    }
  }
  return maxValue;
}
let result3 = maxNumber([2, 6, 10, 100, 9, -1, -15]);
console.log(result3);

// task 4
function oddOrEven(x) {
  if (x % 2 == 1) {
    return "this number is odd";
  }
  return "this number is even";
}

console.log(oddOrEven(5));

// task 5
let array = [1, 2, 3, 4, 5];
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// task 6
let userAgefunc = (birthYear, yearNow) => {
  let userAge = yearNow - birthYear;
  let resultOfAge = userAge > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
  return resultOfAge;
};

let logResult = userAgefunc(2000, 2023);
console.log(logResult);
