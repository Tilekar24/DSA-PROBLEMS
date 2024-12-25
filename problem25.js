 
 	
// Find All Divisors of a Number: List all divisors of a given integer.

function divisors(num){
    const division = [];

    for(let i =1; i<=num;i++){
        if(num  %i===0){
            division.push(i);
        }
    }
    return division;
}


const number = 78;
const division = divisors(number);
console.log(`the divisors is   ${division.join(', ')}`);