const givenArr = [9, 8, 6 ,11, 5, 2, 3, 1] // length = 8

// two pointer to reverse array
const reverseArr = (arr) => {
    let left = 0
    let right = arr.length -1

    while (left < right) {
    
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr;
}

// reverse array by last index to first index using for-loop
const reverseArrayByIndex = (arr) => {
    const resultArr = []
    for(let i = arr.length -1; i >= 0; i--) {
        resultArr.push(arr[i])
    }
    return resultArr
}

// reverse array using reduce right
const reverseReduceRight = (arr) => {
    const result = []
    arr.reduceRight((acc, curr) => {
        result.push(curr)
    }, [])
    return result
    
}

// reverse array using recursive function with mutating the origin array (givenArr)
const reverseRecursive = (arr, left = 0, right = arr.length - 1) => {
    const newArr = [...arr];

    // a = array, l = left, r = right
    const helper = (a, l, r) => {
        if (l >= r) return a;
        [a[l], a[r]] = [a[r], a[l]];
        return helper(a, l + 1, r - 1);
    }

    return helper(newArr, left, right);
}

// stack reverse
const reverseStack = (arr) => {
    const stackArr = [...arr]
    const result = []
    while (stackArr.length) {
        result.push(stackArr.pop())
    }
    return result
}

const newArr = [...givenArr].reverse()

console.log("given arr: ", givenArr)
console.log("reverseArr: ", reverseArr([...givenArr]))
console.log("given arr: ", givenArr)
console.log("reverse method: ", newArr)
console.log("reverse array by last index to first index using for-loop: ", reverseArrayByIndex(givenArr))
console.log("reverse by reduce right method: ", reverseReduceRight(givenArr))
console.log("reverse array using recusive: ", reverseRecursive(givenArr))
console.log("given arr: ", givenArr)
console.log("stack array: ", reverseStack(givenArr))
