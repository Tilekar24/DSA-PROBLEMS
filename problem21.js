
// Check if a Number is Prime: Determine whether a given number is a prime number.

function primes(num){
    if(num <=1)
        return false;
    for(let i= 2; i<=num; i++){
        if(num %i===0)
            return false;
    }
    return true;

}
const number = 34;
if(primes(number)){
    console.log(`${number} is a prime Number`);
}else{
    console.log(`${number} is not a prime number`);
}