// Intersection of Two Arrays: Find the common elements between two arrays.


function myNum(obj1,obj2){
    return obj1.filter(element=> obj2.includes(element));
}


const obje1 = [2,3,4,4];
const obje2 = [6,7,4,9];
const first = myNum(obje1,obje2);
console.log(first);
