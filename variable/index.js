let n = 4;
for (let i = 0; i < n; i++) {
  let bag = "";
  let bag1 = "";
  for (let j = 0; j < n; j++) {
    if (i + j == n - 1) {
      bag += "/";
    }
    else {
      bag += " ";
    }
  }
  for (let k = 0; k < n; k++) {
    if (i - k == 0) {
      bag += "\\";
    }
    else {
      bag += " ";
    }
  }
  console.log(bag)
}

for (let i = 0; i < n; i++) {
  let bag1 = "";

  for (let k = 0; k < n; k++) {
    if (i - k == 0) {
      bag1 += "\\";
    }
    else {
      bag1 += " ";
    }
  }
  for (let j = 0; j < n; j++) {
    if (i + j == n - 1) {
      bag1 += "/";
    }
    else {
      bag1 += " ";
    }
  }
  console.log(bag1)
}

