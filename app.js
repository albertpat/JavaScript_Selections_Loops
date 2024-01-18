console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  } 
}

let x = 0;
while (x <= 100) {
  if (x % 2 !== 0) {
    console.log(x);
  }
  x++;
}

let j = 0;
do {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
} while (j <= 100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log(i);
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log(i);
    console.log("BUZZ");
  }
}

while (x <= 100) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log(x);
    console.log("FIZZBUZZ");
  } else if (x % 3 === 0) {
    console.log(x);
    console.log("FIZZ");
  } else if (x % 5 === 0) {
    console.log(x);
    console.log("BUZZ");
  }
  x++;
}

do {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log(j);
    console.log("FIZZBUZZ");
  } else if (j % 3 === 0) {
    console.log(i);
    console.log("FIZZ");
  } else if (j % 5 === 0) {
    console.log(j);
    console.log("BUZZ");
  }
  j++;
} while (j <= 100);

let value = Math.floor(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.floor(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (i = 0; i <= n; i++) {
  if (i == value) {
    console.log(i, "Found value!");
    break;
  } else if (i == n) {
    console.log("Did not find value");
    break;
  }
}

let fizzDivisor = Math.floor(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.floor(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.floor(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.floor(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (i = start; i <= end; i++) {
  if (i % fizzDivisor === 0) {
    console.log(i, "FIZZ");
  } else if (i % buzzDivisor === 0) {
    console.log(i, "BUZZ");
  }
}
