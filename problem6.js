// Write a function that takes in a number and returns true if it's a prime number, and false otherwise. ----------

function isPrime (number){
    for (let i=2; i<number; i++){
       if( number%i === 0){
       return false;
        }
       else{
        return true;
        }
    }
    
}
console.log(isPrime(4)); 