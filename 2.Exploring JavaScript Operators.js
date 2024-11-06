// Task 1
let num1;
let num2;

// Task 2
num1 = 10;
num2 = 5;

// Task 3
console.log("Sum:", num1 + num2);          // 15
console.log("Difference:", num1 - num2);   // 5
console.log("Product:", num1 * num2);      // 50
console.log("Quotient:", num1 / num2);     // 2


// Task 4
num1 += 1;  // Equivalent to num1 = num1 + 1
num2 *= 2;  // Equivalent to num2 = num2 * 2

console.log("Updated num1:", num1);        // 11
console.log("Updated num2:", num2);        // 10

// Task 5
console.log("Is num1 equal to num2?", num1 === num2);            // false
console.log("Is num1 greater than num2?", num1 > num2);          // true
console.log("Is num1 not equal to num2?", num1 !== num2);        // true

// Task 6
let isPositive = (num1 > 0) && (num2 > 0);                        // true
let isEven = (num1 % 2 === 0) || (num2 % 2 === 0);                // true

console.log("Are both numbers positive?", isPositive);            // true
console.log("Is at least one number even?", isEven);              // true
