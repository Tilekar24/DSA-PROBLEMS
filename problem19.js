// Check for Balanced Brackets: Ensure that all types of brackets are balanced in an expression.

function balance(str) {
    const num = [];


    const bracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };



    for (let char of str) {

        if (char === '(' || char === '{' || char === '[') {
            num.push(char);
        }
        else if (char === ')' || char === '}', char === ']') {
            if (num.length === 0 || num.pop() != bracket[char]) {
                return false;
            }


        }

    }

    return num.length === 0;

}


const example = "{}";
console.log(balance(example));