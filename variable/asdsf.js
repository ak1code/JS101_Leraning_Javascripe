
let N = 5
let str = "malam"

let bag1 = "";


for (i = str.length - 1; i >= 0; i++) {

  bag1 = bag1 + str[i];
}
console.log(str)



// let my_name=("Akshay");
// console.log(my_name);
// console.log(typeof(my_name));

// let my_age=27;
// console.log(my_age);
// console.log(typeof(my_age));

// let arr=[5,7,6,9,8,10];
// let str={};
// count=0;
// bag=0;
// for(i=1;i<arr.length-1;i++){
//   if((arr[i]>arr[i-1] && arr[i]>arr[i+1])){
//     count++;
//   str=arr[i]

// }
// }
// console.log(str,count)



// let str="luffy";
// let obj={};


// for(i=0;i<str.length;i++){

//   let key= str[i];
//   if(obj[key]== undefined){
//     obj[key]=1
//   }
//   else{
//     obj[key]++;
//   }
// }
// console.log(obj)

// let arr=[1,2,1,2,3,2];

// let obj={};
// sum=0;
// for(i=0;i<arr.length;i++){
//   let key=arr[i];
//   if(obj[key]==undefined){
//     obj[key]=1;
//   }
//   else{
//     obj[key]++;

//   }
// }
// for(let key in obj){
//   if(obj[key]>=2){
//     sum=sum+Number(key)
//   }
// }console.log(sum)
// arr=[12,43,56,1,4,66,8,9,23,1];

// function print(number){

//   if(number%2==0){
//     return true
//   }
//   else{
//     return false
//   }
//   }

// let count=0;
// for(i=0;i<arr.length;i++){
//   let ans= print(arr[i])

//   if(ans==true){
//     count++;
//   }
// }
// console.log(count)

// let arr=["luffy","mom","dad","goku"]

// function rev(arr[1]){
// let bag="";
// for(let i=arr.length-1;i>=0;i--){
//   bag=bag+arr[i]
// }
//   return bag;

// }
// let ans=rev(arr[1])
// if(ans==arr){
//   console.log("it is paladromlic")
// }
// else{
//   console.log("it is not paradromic")
// }



// let IndPoints=550;
// let AusPoints=550;
// let IndMatches=12;
// let AusMatches=12;



// if(IndPoints>AusPoints){
//       console.log("India")
//   }
//   if(IndPoints<AusPoints){
//       console.log("Austalia")
//   }
//   if(IndPoints==AusPoints && IndMatches<AusMatches){
//       console.log("India")
//   }
//   if(IndPoints==AusPoints && IndMatches>AusMatches){
//       console.log("Austalia")
//   }
//   if(IndPoints==AusPoints && IndMatches==AusMatches){
//       console.log("Play another game!")
//   }



// let arr1=["akshay","jay","akash","shyam","manan"];

// //console.log(arr.join())
//  function join(abc){
// let str="";
//   for(i=0;i<abc;i++){
//     str+=abc[i];
//     return str;
//   }

// }
// let ans=join(arr1);
// console.log(ans)


function join(arr) {
  let newstr = "";
  for (i = 0; i < arr.length; i++) {
    newstr += arr[i] + ",";
  }
  return newstr;

}
let array = ["akshay", "jay", "akash", "shyam", "manan"];
let ans = join(array)
console.log(ans)




//console.log(array.includes(2));
// expected output: true
// function finds(abc){

// find = "";
// for (i = 0; i < abc.length; i++) {
//   if (find == abc[i]) {
//     true;
//   }
//   else {
//     false;
//   }
// }
// }
// let array = [1, 2, 3];
// let ans=finds(array)
// console.log(ans)
// function arr(a) {
//   let sum = "";
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i] + "-";
//   }
//   console.log(sum);
// }

// arr(["Hello", "World", "!"]);
// //////////////////////////////////////////////////////
// function join(arr) {
//   let newstr = "";
//   for (i = 0; i < arr.length; i++) {
//     newstr += arr[i] + ",";
//   }
//   return newstr;

// }
// let array = ["akshay", "jay", "akash", "shyam", "manan"];
// let ans = join(array)
// console.log(ans)



// for(i=2;i<=13;i++){
//   count=0;
//   for(j=2;j<=13;j++){
//     if(j%13==0){
//       count++
//     }
//   }
//   if(count==1){
//     console.log()
//   }
// }


function prime(number) {
  count = 0;
  for (i = 1; i <=number; i++) {
    if (number % i == 0) {
      count++
    }
  }
  if (count == 2) {
    return true;
  }
  else {
    return false;
  }
}
let ans = prime(4);
if (ans == true) {
  console.log("Prime")
}
else {
  console.log("not prime")
}



//console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

// function find(arr,number1,number2){
//   let new_arr=[];
//   for(i=0;i<arr.length;i++){
//     if(i>=number1 && i<number2){
//       new_arr.push(arr[i]);
//     }
//   }
//   return new_arr;
// }
// let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// let ans=find(animals,2,4)
// console.log(ans)


//const str = 'Mozilla';

//console.log(str.substring(1, 3));
// expected output: "oz"


// function find(substring,number1,number2){
//   let substr="\"";
//   for(i=0;i<substring.length;i++){
//     if(i>=number1 && i<number2){
//       substr+=substring[i];
//     }
//   }
//   substr+="\"";
//   return substr;
// }
// let str="Akshay";
// let ans=find(str,1,5);
// console.log(ans)

// st array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // expected output: true


//console.log(pets.includes('cat'));
// expected output: true


// function find(array,name){

//   for(i=0;i<array.length;i++){
//     if(array[i]==name){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
// }
// let pets = ["cat", "dog", "bat"];
// let ans=find(pets,"dog");
// console.log(ans)









