function findSmallestIndex<T extends string | number>(array: T[]) {
  let minItem = array[0];
  let minIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minItem) {
      [minItem, minIndex] = [array[i], i];
    }
  }

  return minIndex;
}

function findBiggestIndex<T extends string | number>(array: T[]) {
  let maxItem = array[0];
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxItem) {
      [maxItem, maxIndex] = [array[i], i];
    }
  }

  return maxIndex;
}

function selectionSort<T extends string | number>(array: T[], sortOrder: 'ASC' | 'DESC' = 'ASC') {
  const sortedArray = [];
  const arrayCopy = [...array];

  while (arrayCopy.length) {
    const index = sortOrder === 'ASC'
      ? findSmallestIndex(arrayCopy)
      : findBiggestIndex(arrayCopy);

    sortedArray.push(arrayCopy[index]);
    arrayCopy.splice(index, 1);
  }

  return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10], 'ASC'));
console.log(selectionSort([5, 3, 6, 2, 10], 'DESC'));
