 
 	
// Check if a String Contains Only Unique Characters: Determine if a string has all unique characters.


function sort(num){
    const  sortedStr = num.split('').sort().join('');

    for(let i =0;i<sortedStr.length-1;i++){
        if(sortedStr[i]=== sortedStr[i+1]){
            return false;
        }
    }

    return true;
    
}

console.log(sort("afihfsfw"));