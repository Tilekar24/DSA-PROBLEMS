
// Find the Longest Word in a Sentence: Identify the longest word in a given sentence.

 function longestt(sentence){
    const word = sentence.split('');
    let words = word[0];

    for(let i =1; i<word.length; i++){
        if(word[i].length >words.length){
            words = word[i];
        } 
    }
    return words;
 }

 const sentence = "i am vaishnavi";
 const words = longestt(sentence);
 console.log(`the longest words: "${words}`);