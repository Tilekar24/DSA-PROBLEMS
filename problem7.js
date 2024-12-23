// Remove Duplicates from Array: Remove duplicate elements from an array, ensuring each element appears only once.

function numberss(n){
    return [...new Set(n)];

}


const arr = [3,5,5,6,3,3];
const numbers =  numberss(arr);
console.log(numbers);