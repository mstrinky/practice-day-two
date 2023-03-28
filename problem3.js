// Write a function that takes in a string and returns the number of vowels in the string.----------

function countVowels(str) {
    // convert string to lowercase
    str = str.toLowerCase();
    let count = 0;
    // loop through string and count vowels
    for (let i = 0; i < str.length; i++) {
      if (['a', 'e', 'i', 'o', 'u'].includes(str[i])) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels("hello")); // 2
  console.log(countVowels("javascript")); // 3
  