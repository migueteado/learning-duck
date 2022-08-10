function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  if (!array1.length) return array2;
  if (!array2.length) return array1;

  const length = array1.length + array2.length;

  let i = 0;
  let j = 0;

  while (mergedArray.length < length) {
    if (i > array1.length - 1 && j > array2.length - 1) {
      break;
    } else if (i > array1.length - 1 || array1[i] > array2[j]) {
      mergedArray.push(array2[j]);
      j++;
    } else if (j > array2.length - 1 || array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array1[i], array2[j]);
      i++;
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // [ 0, 3, 4, 4, 6, 30, 31 ]
