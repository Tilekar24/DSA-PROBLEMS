// Merge Two Sorted Arrays: Combine two sorted arrays into a single sorted array.



function numbers(obj1,obj2)
{
    return [...obj1,...obj2];
}


const obj1 = [2,3,0];
const obj2= [1,7,8];
const first = numbers(obj1,obj2);
console.log(first);