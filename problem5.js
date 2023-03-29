// Write a function that takes in an array of integers and returns the second smallest number in the array.------

function secondSmallest(arr) {
    // sort array in ascending order
    arr.sort((a, b) => a - b);
    // return second element in array
    return arr[1];
  }
  
  console.log(secondSmallest([1, 2, 3])); // 2
  console.log(secondSmallest([5, 4, 3, 2, 1])); // 2