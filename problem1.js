// palindrome number -----------

function getReverseString (str){
    var reverseString = " ";
    for(let i=str.length-1; i>=0; i--){
        reverseString += str[i];
        if (reverseString === string){
            console.log('palindrome');
        }
        else{
            console.log('not palindrome');
        }
    }
    return reverseString;
}
const string =getReverseString('mom');
// console.log(string);
