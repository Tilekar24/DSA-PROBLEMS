// Palindrome Check: Determine whether a given string is a palindrome.

function numbers(str){
    return str.split('').reverse().join('');
}



const first = "fsdfho";
const result = numbers(first);
console.log(result);