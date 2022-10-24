const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let half = Number(arr.length / 2);
  let left = mergeSort(arr.slice(0, half));
  let right = mergeSort(arr.slice(half, arr.length));
  return merged(left, right);
};

mergeSort([2, 5, 564, 3, 45, 12, 90, 8]);

//[2,3,5,8,12,45,90,564]

function merged(arr1, arr2) {
  let result = [];
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[p1] === undefined) {
      result.push(arr2[p2++]);
    } else if (arr2[p2] === undefined) {
      result.push(arr1[p1++]);
    } else if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1++]);
    } else {
      result.push(arr2[p2++]);
    }
  }
  return result;
}

merged([1, 2, 8], [5, 6, 7]);
