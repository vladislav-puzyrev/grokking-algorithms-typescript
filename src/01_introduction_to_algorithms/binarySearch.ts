function binarySearch<T extends string | number>(array: T[], item: T) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const guess = array[mid];

    if (guess === item) {
      return mid;
    }

    if (array[mid] > item) {
      end = mid - 1;
    } else if (array[mid] < item) {
      start = mid + 1;
    }
  }

  return null;
}

export default binarySearch;
