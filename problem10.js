// Write a function that takes in an array of integers and returns a new array with all the duplicates removed.-------

function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  
  // Example usage:
  let numbersWithDuplicates = [1, 2, 3, 4, 3, 2, 1];
  console.log(removeDuplicates(numbersWithDuplicates)); 