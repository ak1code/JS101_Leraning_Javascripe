// Problem 1 : Given a string count the number of words in that string

let str = "This is a my car";
let count = 0;

for (i = 0; i < str.length; i++) {
  if (str[i] == " ")

    count++;
}
console.log(count + 1)