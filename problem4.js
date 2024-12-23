// Fibonacci Sequence: Generate the first N numbers in the Fibonacci sequence.


function fibo(n){
    const fibona = [0,1];
    

    for (let i =2;i<n;i++){
        fibona[i] = fibona[i-1] + fibona[i-2];
    }
    return fibona.slice(0,n);


}

const n = 10;
const result = fibo(n);
console.log(result);
