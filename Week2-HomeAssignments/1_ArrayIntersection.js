function intersection(arr1, arr2) {
    let result = [];
    let match = new Set();

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j] && !match.has(arr1[i])) {
                result.push(arr1[i]);
                match.add(arr1[i]);
            }

        }
    }

    return result;
}

// Typical case
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));


// No common elements
console.log(intersection([1, 2, 3], [4, 5, 6]));


// All elements common
console.log(intersection([1, 2, 3], [1, 2, 3]));


// Duplicate values in arrays
console.log(intersection([1, 2, 2, 3], [2, 2, 3, 3]));
