// Problem 3: Print a box patterns using *

for (i = 0; i < 20; i++) {
  let bag = "";
  for (j = 0; j < 10; j++) {
    if ((i % 2 == 0) && (j == 0 || j == 9)) {
      bag += "*";
    }
    else if (i == 0 || i == 18) {
      bag += "*";
    }

    else {
      bag += " "
    }
  }
  console.log(bag)
}