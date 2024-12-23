// Find All Subsets: Generate all possible subsets of a given set of numbers.

function generateSubsetsIterative(nums) {
    const result = [[]]; 
    for (const num of nums) {
       
        const newSubsets = result.map(subset => [...subset, num]);
        result.push(...newSubsets); 
    }

    return result;
}


const numsIterative = [1, 2, 3];
const subsetsIterative = generateSubsetsIterative(numsIterative);
console.log(subsetsIterative);