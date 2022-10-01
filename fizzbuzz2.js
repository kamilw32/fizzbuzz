let numbers = [];

for (let i = 0; i < 101; i++) {
  numbers[i] = i;
}

numbers = numbers.map((i) =>
  i === 0 || (i % 3 !== 0 && i % 5 !== 0)
    ? i
    : i % 3 === 0 && i % 5 === 0
    ? "fizzbuzz"
    : i % 3 === 0
    ? "fizz"
    : "buzz"
);

let result = "";

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i] + " ";
}

console.log(result);
