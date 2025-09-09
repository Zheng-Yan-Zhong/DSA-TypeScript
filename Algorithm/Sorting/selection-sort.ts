const arr: number[] = [1, 3, 0, 6, 2, -1];
function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let index = i; //default
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    // swap
    const temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

console.log(selectionSort(arr)); //[ -1, 0, 1, 2, 3, 6 ]
