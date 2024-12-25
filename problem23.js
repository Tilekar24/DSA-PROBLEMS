// Find the GCD of Two Numbers: Compute the greatest common divisor of two integers.

function gcd(a,b){
    a= Math.abs(a);
    b = Math.abs(b);



    while(b != 0){
        let num =b;
        b = a % b;
        a = num;
    }
    return a;
}

const num1 = 24;
const num2 = 34;
const result = gcd(num1,num2);
console.log(`the GCD of ${num1} and ${num2} is : ${result}`);