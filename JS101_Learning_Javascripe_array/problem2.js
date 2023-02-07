// Problem 2 : Given a character in lower case print the upper case character

let num = "r";
let upper_case = ["A", "B", "C", "D", "E", "F", "J", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower_case = ["a", "b", "c", "d", "e", "f", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (i = 0; i < upper_case.length; i++) {
  if (num == lower_case[i])
    num = upper_case[i];

}
console.log(num)