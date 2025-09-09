const arr: number[] = [1, 3, 0, 6, 2];

function mergeSort(arr: number[]): number[] {
  if (arr.length == 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[] = [], right: number[] = []): number[] {
  const arr: number[] = [];
  let l_index = 0;
  let r_index = 0;

  while (l_index < left.length && r_index < right.length) {
    if (left[l_index] < right[r_index]) {
      arr.push(left[l_index]);
      l_index++;
    } else {
      arr.push(right[r_index]);
      r_index++;
    }
  }

  while (l_index < left.length) {
    arr.push(left[l_index]);
    l_index++;
  }

  while (r_index < right.length) {
    arr.push(right[r_index]);
    r_index++;
  }
  console.log(arr);
  return arr;
}

console.log(mergeSort(arr));
/**
[ 1, 3 ]
[ 2, 6 ]
[ 0, 2, 6 ]
[ 0, 1, 2, 3, 6 ]
[ 0, 1, 2, 3, 6 ]
 */

/**
left [ 1 ] right [ 3 ] 
left [ 6 ] right [ 2 ]
left [ 0 ] right [ 2, 6 ]
left [ 1, 3 ] right [ 0, 2, 6 ]
[ 0, 1, 2, 3, 6 ]
 */
