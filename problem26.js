
// Find the Nth Fibonacci Number: Compute the Nth number in the Fibonacci sequence.

function fibo(n){
    if(n<0){
    throw new Error("input is invalid");
    } else if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }

    let a = 0, b=1;
    for(let i =2; i<=n;i++){
        let temp = a+b;
        a=b;
        b=temp;
    } return b;

    
}


const N = 45;
console.log(`the ${N}th fibonacci number is: ${fibo(N)}`);