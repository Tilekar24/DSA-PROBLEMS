// Find Duplicate Characters: Identify all duplicate characters in a string.

function dupli(str){
    const charConst = {};
    const duplicate = [];


    for(const char of str){
        if(char != ' '){
            charConst[char] = (charConst[char] || 0)+1;
        }
    }


    for(const char in charConst){
        if(charConst[char]> 1){
            duplicate.push(char);
        }
    }

    return duplicate;
}


console.log(dupli("hello world"));