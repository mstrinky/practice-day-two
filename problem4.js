// Write a function that takes in two arrays and returns a new array that contains all the elements that are in both arrays.-
function interSection(arr1,arr2){
    let result = [];
    for(let i = 0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){
            result.push(arr1[i]);
        }
    }
    return result;
}

console.log(interSection([2,3,4,5,6],[1,4,5,7,6,7,2]));
console.log(interSection([1,2,3,4,5],[6,7,8,9]));


// use of concat ----------------
var fruitName = ['apple','orange','banana','lichi'];
var flowerName = ['rose','waterlily','sunflower','marigold'];
var add = fruitName.concat(flowerName);
console.log(add);