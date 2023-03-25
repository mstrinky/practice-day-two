// palindrome number -----------
// Write a function that takes in a string and returns true if it's a palindrome, and false otherwise.----------

function getPalindrome(str){
    let palindrome = ' ';
    for (let i=str.length-1; i>=0; i--){
        const element = str[i];
        palindrome = palindrome + element;
        
        
       
    }
    return palindrome;
}

const string = 'mom';
const palindromeNumber = getPalindrome(string);
console.log(palindromeNumber);
