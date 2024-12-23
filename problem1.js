// problem 1: Two Sum: Given an array of integers and a target value, find the indices of the two numbers that add up to the target.


function sums(arr, target) {
    for (let i = 0; i <arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
  return[];
}
const arr = [2,4,6,8];
const target = 10;
const result = sums(arr,target);
console.log(result);
