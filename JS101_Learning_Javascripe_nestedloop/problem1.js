// Problem 1: Print the Calendar date in the below format
let bag = "";

for (i = 1; i <= 12; i++) {
  if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
    for (j = 1; j <= 31; j++) {
      console.log(i + "-" + j);
    }
  }
  else if (i == 4 || i == 6 || i == 9 || i == 11) {
    for (k = 1; k <= 30; k++) {
      console.log(i + "-" + k);
    }
  }
  else {
    for (h = 1; h <= 28; h++) {
      console.log(i + "-" + h);
    }
  }
}