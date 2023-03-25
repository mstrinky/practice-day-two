function patern (star){
    let reversed = ' ';
 for (let i=star.length-1; i>=0; i--){
    const element = star[i];
    reversed = reversed + element;
    console.log(reversed);
 }
 return reversed;
}
const star = '************'
const reverse = patern(star);
// console.log('reverse output:',reverse);
