// Find Maximum in Array: Identify the largest number in an unsorted array.


function Maximumm(num) {
    if (num.length === 0) {
        return "empty";
    }

    return Math.max(...num);
}


const arr = [3, 7, 4, 7, 9];
console.log(Maximumm(arr));