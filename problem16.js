// Find the Second Largest Element: Identify the second largest element in an array.
function numbers1(arr){
    if(arr.length < 2){
        return "empty";
    }

    let largest = null;
    let secondLarger = null;


    for (const num of arr){
        if(largest ===null || num> largest){
            secondLarger = largest;
            largest = num;

        }else if(num != largest && (secondLarger ===null || num>secondLarger)){
           secondLarger = num; 
        }
    }


    return secondLarger != null ? secondLarger : "there is no";
}

console.log(numbers1([3,5,7,3,6]));
console.log(numbers1([7,7,7,7]));