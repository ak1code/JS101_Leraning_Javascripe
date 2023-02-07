// Problem 2: Print Prime Numbers from 1 to given limit

for (i = 1; i <= 10; i++) {
  let count = 0;
  for (j = 1; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(i, "prime number")
  }

}

