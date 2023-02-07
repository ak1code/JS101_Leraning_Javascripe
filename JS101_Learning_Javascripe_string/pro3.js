

let arr=[1,2,3,4,5,6,-2];

let min = Infinity;

for(i=0;i<arr.length;i++){
  if(arr[i]<min){
    min=arr[i]
  }
  
}
console.log(min)