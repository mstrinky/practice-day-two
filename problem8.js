// Write a function that takes in a string and returns the reverse of the string.-----

function reverseString (str){
    let reversed = '';
    for (let i=str.length-1; i>=0; i--){
        const element = str[i];
        // console.log(element);
        reversed = reversed + element;
    }
    return reversed;
}

const myName = 'my name is rinky';
const reverseOfString = reverseString(myName);
console.log(reverseOfString);