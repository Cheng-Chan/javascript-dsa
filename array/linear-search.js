

/**
 * Performs a linear search on the given array to find the target element.
 * The function iterates through the array and compares each element with the target.
 * If the target element is found, it returns the index of the element.
 * If the target element is not found after iterating through the entire array, it returns -1.
 * Best case time complexity: O(1) - when the target element is at the first position.
 * Worst case time complexity: O(n) - when the target element is at the last position or not present in the array.
 * Average case time complexity: O(n) - when the target element is somewhere in the middle of the array.
 * Advantages: Simple to implement and does not require the array to be sorted.
 * Disadvantages: Inefficient for large arrays compared to more advanced search algorithms like binary search.
 * @param {array} arr 
 * @param {number} target 
 * @returns {number}
 */
const linearSearch = (arr, target) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            result.push(i); // Return the index of the target element
        }
    }
    return result; // Return -1 if the target element is not found
    };

// Example usage:
const inputArray = [5, 3, 8, 1, 2, 3];
const targetElement = 5;

const resultIndex = linearSearch(inputArray, targetElement);
if (resultIndex.length >= 1) {
    console.log(`Element ${targetElement} found at index: ${resultIndex.join(", ")}`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}