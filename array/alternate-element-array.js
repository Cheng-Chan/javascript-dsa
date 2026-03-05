
// access elements of an array by iterating through it

const getAlternateElements = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6];
const alternateElements = getAlternateElements(inputArray);
console.log(alternateElements.join(" ")); // Output: [1, 2, 3, 4, 5, 6]

// access elements of an array by recursively iterating through it

const getAlternateElementsRecursive = (arr, index = 0, result = []) => {
  if (index >= arr.length) {
    return result;
  }
  result.push(arr[index]);
  return getAlternateElementsRecursive(arr, ++index, result);
};

// Example usage:
const alternateElementsRecursive = getAlternateElementsRecursive(inputArray);
console.log(alternateElementsRecursive.join(" ")); // Output: [1, 2, 3, 4, 5, 6]