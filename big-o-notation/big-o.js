/**

Big O Notation is a way to describe the performance or complexity of an algorithm. 
It gives us an upper bound on the time or space complexity of an algorithm, 
allowing us to compare different algorithms and understand how they will perform 
as the input size grows.

*/

// Here are some common Big O notations and their meanings:

/**

O(1) - Constant Time: The algorithm takes the same amount of time regardless of the input size. 
For example, accessing an element in an array by index is O(1).

*/

const data = [1, 2, 3, 4, 5];
console.log(data[2]); // O(1) - Accessing the element at index 2

/**
 * 
 * This function demonstrates O(1) time complexity because it always returns the first element of the data array,
 * regardless of the size of the array.
 * no matter how large the data array grows, the time it takes to execute this function remains constant.
 * @param {*} data 
 * @returns {number} The first element of the data array
 */
function constantTimeExample(data) {
    return data[0];
}

/**

O(n) - Linear Time: The algorithm's time increases linearly with the input size. 
For example, iterating through an array is O(n).

*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * This function demonstrates O(n) time complexity because it iterates through each element of the input array and prints it.
 * The time it takes to execute this function increases linearly with the size of the input array. 
 * If the array has 10 elements, it will take approximately 10 steps to complete; if it has 100 elements, 
 * it will take approximately 100 steps, and so on.  
 * Therefore, the time complexity of this function is O(n) because it grows linearly with the size of the input array.
 * If size of the input array doubles, the time it takes to execute this function also doubles, which is characteristic of linear time complexity.
 * @param {*} arr 
 */
function linearTimeExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // O(n) - Iterating through the array
    }
}

/** 

O(n^2) - Quadratic Time: The algorithm's time increases quadratically with the input size. 
For example, nested loops that iterate over the same data set are O(n^2).

*/

/**
 * This function demonstrates O(n^2) time complexity because it contains nested loops that iterate over the input array.
 * The outer loop runs n times, and for each iteration of the outer loop, the inner loop also runs n times. 
 * Therefore, the total number of iterations is n * n, which is n^2.
 * As the size of the input array increases, the time it takes to execute this function grows quadratically. 
 * For example, if the input array has 10 elements, it will take approximately 100 steps to complete; if it has 100 elements, it will take approximately 10,000 steps, and so on. 
 * This exponential growth in time complexity is characteristic of O(n^2).
 * If the size of the input array doubles, the time it takes to execute this function increases by a factor of four (2^2), which is characteristic of quadratic time complexity.    
 * @param {*} arr 
 */
function quadraticTimeExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log("============\n", arr[i], arr[j]); // O(n^2) - Nested loops
        }
    }
}
quadraticTimeExample(arr); // O(n^2) - Quadratic time complexity

/**

O(log n) - Logarithmic Time: The algorithm's time increases logarithmically as the input size increases. 
For example, binary search is O(log n).

*/

/**
 * Performs a binary search on a sorted array to find the index of a target value.
 * This function demonstrates O(log n) time complexity because it repeatedly divides the search interval in half.
 * The number of comparisons needed to find the target value grows logarithmically with the size of the input array. 
 * For example, if the input array has 16 elements, it will take at most 4 comparisons to find the target value; if it has 1,024 elements, it will take at most 10 comparisons, and so on. 
 * This logarithmic growth in time complexity is characteristic of O(log n).
 * If the size of the input array doubles, the time it takes to execute this function increases by a constant amount (one additional comparison), which is characteristic of logarithmic time complexity.
 * @param {*} arr - The sorted array to search.
 * @param {*} target - The value to search for.
 * @returns {number} The index of the target value if found, otherwise -1.
 */
function logarithmicTimeExample(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log(`Target found at index: ${mid}`);
            return mid; // O(log n) - Binary search
        } else if (arr[mid] < target) {
            console.log(`Target is greater than middle element. Searching in the right half.`);
            left = mid + 1;
        } else {
            console.log(`Target is less than middle element. Searching in the left half.`);
            right = mid - 1;
        }
    }
    console.log(`Target not found in the array.`);
    return -1; // Target not found
}

logarithmicTimeExample(arr, 10);

// another example of logarithmic time complexity. cutting size of the input in half

function logarithmicTimeExample2(n) {
    let count = 0;

    while (n > 1) {
        n = Math.floor(n / 2);
        count++;
    }

    console.log(`Number of iterations: ${count}`);
}

logarithmicTimeExample2(1024); // O(log n) - Cutting the input size in half each iteration

/**

O(n log n) - Linearithmic Time: The algorithm's time increases as n log n. 
For example, efficient sorting algorithms like mergesort and heapsort are O(n log n).

*/

/**
 * 
 * @param {*} arr 
 * @returns {array} A sorted array
 * This function demonstrates O(n log n) time complexity because it uses the merge sort algorithm to sort the input array.
 * The merge sort algorithm divides the input array into halves recursively (log n) and then merges the sorted halves (n).
 * The overall time complexity of this function is O(n log n) because it combines the logarithmic time of dividing the array with the linear time of merging.
 * As the size of the input array increases, the time it takes to execute this function grows as n log n. 
 * For example, if the input array has 1,000 elements, it will take approximately 10,000 steps to complete; if it has 10,000 elements, it will take approximately 100,000 steps, and so on. 
 * This growth in time complexity is characteristic of O(n log n).
 * If the size of the input array doubles, the time it takes to execute this function increases by a factor of approximately 2 log n, which is characteristic of linearithmic time complexity.
 */
function linearithmicTimeExample(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: an array of length 0 or 1 is already sorted
    }

    const mid = Math.floor(arr.length / 2);
    const left = linearithmicTimeExample(arr.slice(0, mid)); // O(n log n) - Recursive call on the left half
    const right = linearithmicTimeExample(arr.slice(mid)); // O(n log n) - Recursive call on the right half

    return merge(left, right); // O(n) - Merging two halves
}

/**
 * Merges two sorted arrays into a single sorted array.
 * This function demonstrates O(n) time complexity because it merges two sorted arrays (left and right) into a single sorted array.
 * The merging process involves iterating through both arrays and comparing their elements, which takes linear time relative to the total number of elements in both arrays.
 * As the size of the input arrays increases, the time it takes to execute this function grows linearly. 
 * For example, if the left array has 5 elements and the right array has 5 elements, it will take approximately 10 steps to merge them; if they each have 50 elements, it will take approximately 100 steps, and so on. 
 * This linear growth in time complexity is characteristic of O(n).
 * If the total number of elements in both arrays doubles, the time it takes to execute this function also doubles, which is characteristic of linear time complexity.
 * @param {*} left - The first sorted array.
 * @param {*} right - The second sorted array.
 * @returns {array} A merged and sorted array containing all elements from both input arrays.
 */
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j)); // O(n) - Merging remaining elements
}

const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = linearithmicTimeExample(unsortedArray);
console.log(`Sorted array: ${sortedArray}`);

/**

O(2^n) - Exponential Time: The algorithm's time doubles with each additional element in the input. 
For example, the naive recursive solution to the Fibonacci sequence is O(2^n).

*/

function exponentialTimeExample(n) {
    if (n <= 1) {
        return n; // Base case: F(0) = 0, F(1) = 1
    }
    return exponentialTimeExample(n - 1) + exponentialTimeExample(n - 2); // O(2^n) - Naive recursive Fibonacci
}

console.log(exponentialTimeExample(3)); // O(2^n) - Exponential time complexity

/**

O(n!) - Factorial Time: The algorithm's time increases factorially with the input size. For example, generating all permutations of a set is O(n!).

*/

/**
 * Generates all permutations of the numbers from 0 to n-1.
 * This function demonstrates O(n!) time complexity because it generates all possible permutations of the input set, which grows factorially with the size of the input.
 * The number of permutations of n distinct elements is n!, which means that as n increases, the time it takes to execute this function grows factorially. 
 * For example, if n = 3, there are 6 permutations; if n = 4, there are 24 permutations; if n = 5, there are 120 permutations, and so on. 
 * This growth in time complexity is characteristic of O(n!).
 * If the size of the input increases by one (from n to n+1), the time it takes to execute this function multiplies by (n+1), which is characteristic of factorial time complexity.
 * @param {number} n - The number of elements to permute.
 * @returns {array} An array of all permutations of the numbers from 0 to n-1.
 */
function factorialTimeExample(n) {
    if (n === 0) {
        return [[]]; // Base case: the only permutation of an empty set is an empty set
    }

    const permutations = [];
    const smallerPermutations = factorialTimeExample(n - 1); // O(n!) - Recursive call for smaller input

    for (const perm of smallerPermutations) {
        for (let i = 0; i <= perm.length; i++) {
            const newPerm = [...perm.slice(0, i), n - 1, ...perm.slice(i)];
            permutations.push(newPerm); // O(n) - Inserting the new element into each position
        }
    }

    return permutations; // O(n!) - Total permutations generated
}

console.log(factorialTimeExample(7)); // O(n!) - Factorial time complexity

// Understanding Big O Notation helps us analyze and compare algorithms, allowing us to choose the most efficient one for a given problem.