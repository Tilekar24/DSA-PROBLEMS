// Valid Parentheses: Check if a string containing parentheses is valid (properly closed and nested).


function parathen(s) {
    const st = [];

    for (let char of s) {
        if (char === '(') {
            st.push(char);
        } else if (char === ')') {
            if (st.length === 0) {
                return  ;
            }

            st.pop();
        }
    }

    return st.length === 0
}




console.log(parathen(")"));
console.log(parathen("(()())"));
console.log(parathen(")("));
console.log(parathen("((())")); 