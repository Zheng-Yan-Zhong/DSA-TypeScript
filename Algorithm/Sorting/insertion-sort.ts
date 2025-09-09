const arr: number[] = [1, 3, 0, 6, 2, -1];

function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let index = null;
    for (let j = i - 1; j > 0; j--) {
      if (arr[j] > arr[i]) {
        index = j;
      }
    }

    if (index != null) {
      // swap
      const temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
}

console.log(insertionSort(arr));
