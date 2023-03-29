// Write a function that takes in an array of strings and returns the longest string in the array. 

function findLongestString(str){
    let longestNumber =" ";
    for (let i=0; i<str.length; i++){
        if(str[i].length > longestNumber.length){
            longestNumber = str[i];
        }
    }
    return longestNumber;
}

console.log(findLongestString(['rinky','jesmin','salu']));
