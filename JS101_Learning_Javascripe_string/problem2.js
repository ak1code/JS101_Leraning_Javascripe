// Problem 2 : Given an array of string count the overall total number of characters

let arr = ["You", "are", "good", "person"];

let count = 0;

for (i = 0; i < arr.length; i++) {
  count += arr[i].length;
}
console.log(count)