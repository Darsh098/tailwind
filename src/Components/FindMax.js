function findMax(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }
  return Math.max(...arr);
}

export default findMax;

// Example usage:
// console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
