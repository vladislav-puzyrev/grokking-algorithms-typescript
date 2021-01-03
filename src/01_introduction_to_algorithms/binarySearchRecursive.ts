// Возвращает не индекс, а само значение поиска
function binarySearchRecursive<T extends string | number>(array: T[], target: T): T | null {
  if (array.length === 1) {
    if (array[0] === target) {
      return target;
    }
    return null;
  }

  const start = 0;
  const end = array.length;
  const mid = Math.floor((start + end) / 2);

  if (target > array[mid]) {
    return binarySearchRecursive(array.slice(mid, end), target);
  }

  if (target < array[mid]) {
    return binarySearchRecursive(array.slice(0, mid), target);
  }

  return target;
}

console.log(binarySearchRecursive<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
