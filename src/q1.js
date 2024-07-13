/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    [x, y] = [y, x];
    console.log(`Swapped values: x = ${x}, y = ${y}`);
  } else {
    return -1;
  }
}

// Task 2: Add code here
let result1 = swap('Apple', 10);
if (result1 === -1) {
  console.log('Scenario 1: Invalid input');
}

let result2 = swap(9, 17);
if (result2 === -1) {
  console.log('Scenario 2: Invalid input');
}
