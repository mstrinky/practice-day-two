// Write a function that takes in an array of integers and returns the sum of all the odd numbers in the array.----------

function getSumOfArray(numbers){
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(element);
        sum = sum + element;
        // console.log(sum);
    }
    return sum;
}

function getOddNumbers(numbers){
    let oddNumbers = [];
    for(let i = 0; i<numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        
        if( element%2 !== 0){
            oddNumbers.push(element);
            // console.log(element,index);
        }
    }
    return oddNumbers;
}


const myNumbers = [21,43,35,45,56,65,47,78,58,49,49];
// getSumOfArray(myNumbers);
const oddNumbers = getOddNumbers(myNumbers);
// console.log(oddNumbers);
const oddNumberSum = getSumOfArray(oddNumbers);
console.log(oddNumberSum);