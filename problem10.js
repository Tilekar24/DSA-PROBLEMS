// Single Number: In an array where every element appears twice except for one, find the single one.

function myNum(n) {
    return [...new Set(n)];
}


const arr1= [1, 1, 2, 2, 3];
const numberr= myNum(arr1);
console.log(numberr);

