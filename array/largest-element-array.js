

// find the largest element in an array

/**
 * Finds the largest element in an array using reduce method.
 * If the array is empty, it returns -Infinity for numbers and an empty string for strings.
 * For strings, it compares their lengths to determine the largest one.
 * @param {string[] | number[] | []} arr 
 * @returns {string} | {number}
 */
function reduceLargest(arr) {
    if (arr.length === 0) {
        return -Infinity;
    }
    return arr.reduce((largest, current) => {
        if (typeof largest === "string") {
            return current.length > largest.length ? current : largest;
        }

        if (typeof largest === "number") {
            return current > largest ? current : largest;
        }

        return largest;
    });
}

// test cases
console.log(reduceLargest([1, 2, 3, 4, 5])); // 5
console.log(reduceLargest([-1, -2, -3, -4, -5])); // -1
console.log(reduceLargest([10, 20, 30, 40, 50])); // 50
console.log(reduceLargest([5])); // 5
console.log(reduceLargest([])); // -Infinity
console.log(reduceLargest(["apple", "banana", "cherry", "watermelon"])); // "watermelon"

// find the largest element in an array using Math.max and spread operator
const maxLargest = (arr) => {
    if (arr.length === 0) {
        return -Infinity;
    }
    return Math.max(...arr);
};

// test cases
console.log(maxLargest([1, 2, 3, 4, 5])); // 5
console.log(maxLargest([-1, -2, -3, -4, -5])); // -1
console.log(maxLargest([10, 20, 30, 40, 50])); // 50
console.log(maxLargest([5])); // 5
console.log(maxLargest([])); // -Infinity
console.log(maxLargest(["apple", "banana", "cherry", "watermelon"])); // NaN

// find the largest element in an array using a loop
const loopLargest = (arr) => {
    if (arr.length === 0) {
        return -Infinity;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof largest === "string") {
            if (arr[i].length > largest.length) {
                largest = arr[i];
            }
        } else if (typeof largest === "number") {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
    }
    return largest;
};

// test cases
console.log(loopLargest([1, 2, 3, 4, 5])); // 5
console.log(loopLargest([-1, -2, -3, -4, -5])); // -1
console.log(loopLargest([10, 20, 30, 40, 50])); // 50
console.log(loopLargest([5])); // 5
console.log(loopLargest([])); // -Infinity
console.log(loopLargest(["apple", "banana", "cherry", "watermelon"])); // "watermelon"

// find the largest element in an array using sort method
const sortLargest = (arr) => {
    if (arr.length === 0) {
        return -Infinity;
    }
    if (typeof arr[0] === "string") {
        return arr.sort((a, b) => b.length - a.length)[0];
    } else if (typeof arr[0] === "number") {
        return arr.sort((a, b) => b - a)[0];
    }
};

// test cases
console.log(sortLargest([1, 2, 3, 4, 5])); // 5
console.log(sortLargest([-1, -2, -3, -4, -5])); // -1
console.log(sortLargest([10, 20, 30, 40, 50])); // 50
console.log(sortLargest([5])); // 5
console.log(sortLargest([])); // -Infinity
console.log(sortLargest(["apple", "banana", "cherry", "watermelon"])); // "watermelon"

// find the largest element in an array using forEach method
const eachLargest = (arr) => {
    if (arr.length === 0) {
        return -Infinity;
    }
    let largest = arr[0];
    arr.forEach((current) => {
        if (typeof largest === "string") {
            if (current.length > largest.length) {
                largest = current;
            }
        } else if (typeof largest === "number") {
            if (current > largest) {
                largest = current;
            }
        }
    });
    return largest;
};

// test cases
console.log(eachLargest([1, 2, 3, 4, 5])); // 5
console.log(eachLargest([-1, -2, -3, -4, -5])); // -1
console.log(eachLargest([10, 20, 30, 40, 50])); // 50
console.log(eachLargest([5])); // 5
console.log(eachLargest([])); // -Infinity
console.log(eachLargest(["apple", "banana", "cherry", "watermelon"])); // "watermelon"

// find the largest element in an array using a for...of loop
const ofLargest = (arr) => {
    if (arr.length === 0) {
        return -Infinity;
    }
    let largest = arr[0];
    for (const current of arr) {
        if (typeof largest === "string") {
            if (current.length > largest.length) {
                largest = current;
            }
        } else if (typeof largest === "number") {
            if (current > largest) {
                largest = current;
            }
        }
    }
    return largest;
};

// test cases
console.log(ofLargest([1, 2, 3, 4, 5])); // 5
console.log(ofLargest([-1, -2, -3, -4, -5])); // -1
console.log(ofLargest([10, 20, 30, 40, 50])); // 50
console.log(ofLargest([5])); // 5
console.log(ofLargest([])); // -Infinity
console.log(ofLargest(["apple", "banana", "cherry", "watermelon"])); // "watermelon"