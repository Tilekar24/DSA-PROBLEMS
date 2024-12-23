// Move Zeroes: Move all zeroes in an array to the end while maintaining the order of non-zero elements.

function zero(arr) {
    const res = [];
    let zeroCount = 0;
}


for (let num of arr) {
    if (num != 0) {
        res.push(num);
    } else {
        zeroCount++;
    }
}

    for (let i = 0; i < zeroCount; i++) {
        res.push(0);
    }
    return res;


const arrays = [2,4,6,0,7,0,2];
const first = zero(arrays);
console.log(first);

