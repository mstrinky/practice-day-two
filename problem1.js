// palindrome number -----------
// Write a function that takes in a string and returns true if it's a palindrome, and false otherwise.----------

function getPalindrome(str){
    let lowercaseStr = str.toLowerCase();
    let reverseString = lowercaseStr.split('').reverse().join('');
  
    return (lowercaseStr === reverseString);
}


console.log(getPalindrome('madam'));
console.log(getPalindrome('teacher'));
