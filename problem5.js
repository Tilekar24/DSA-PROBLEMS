// Factorial Calculation: Calculate the factorial of a given non-negative integer.




function fact(n){
    if(n < 0){
        return "factorial not";
    }


    if(n===0|| n===1){

        return 1;
       
    }
    return n*fact(n-1);
}


console.log(fact(63));