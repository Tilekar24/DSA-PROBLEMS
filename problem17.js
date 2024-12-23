// Count Vowels in a String: Count the number of vowels in a given string.

function vowels1(str){
    const vowels = 'aeiouAEIOU';
    let Count = 0;


    for(let i =0; i<str.length;i++){
        if(vowels.includes(str[i])){
            Count++;
        }
    }
    return Count;
}
console.log(vowels1("hello world"));
