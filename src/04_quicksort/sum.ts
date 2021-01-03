function sum(array: number[]): number {
  if (array.length === 1) {
    return array[0];
  }

  const lastElem = array[array.length - 1];
  return lastElem + sum(array.slice(0, array.length - 1));
}

console.log(sum([1, 2, 3, 4, 5]));
