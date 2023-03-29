// Write a function that takes in an array of integers and returns the product of all the numbers in the array. -----

function multiplyArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
  
  // Example usage:
  let numbers = [8, 4, 3, 5];
  console.log(multiplyArray(numbers));