const numbers = [];

  for (let i = 0; i < 101; i++) {
    numbers[i] = i;
  }

  const fizz = numbers.filter((i) => i % 3 === 0 && i !== 0);
  const buzz = numbers.filter((i) => i % 5 === 0 && i !== 0);
  const fizzbuzz = numbers.filter((i) => i % 15 === 0 && i !== 0);

  for (let i = 0; i < fizz.length; i++) {
    numbers[fizz[i]] = "fizz";
  }

  for (let i = 0; i < buzz.length; i++) {
    numbers[buzz[i]] = "buzz";
  }

  for (let i = 0; i < fizzbuzz.length; i++) {
    numbers[fizzbuzz[i]] = "fizzbuzz";
  }

  let result = "";

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] + " ";
  }

  console.log(result);
