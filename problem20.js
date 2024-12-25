// Find All Prime Numbers up to N: Generate all prime numbers less than or equal to N.


function primes(str){
    if(str<=1)
        return false;
    for(let i=2; i<=Math.sqrt(str); i++){
        if(str % i ===0)
            return false;
    }
    return true;

}

function findPrime(N){
    const num = [];
    for(let i = 2; i<=N;i++){
        if(primes(i)){
            num.push(i);
        }
    }
    return num;
}

const N = 100;
console.log(findPrime(N));