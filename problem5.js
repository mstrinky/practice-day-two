// Write a function that takes in an array of integers and returns the second smallest number in the array.------

function findSecondSmallestNumber(arr){
    arr.sort((a,b)=> a-b);
    return arr[1];
}
console.log(findSecondSmallestNumber([4,5,6,7,67,45,]));