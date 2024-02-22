const factorial = (n) => {
  let result = 1;
  for (let index = 2; index <= n; index++) {
    result = result * index;
  }
  console.log(result);
};

factorial(5);
