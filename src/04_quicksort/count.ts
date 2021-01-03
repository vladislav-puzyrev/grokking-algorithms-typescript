function count<T>(array: T[]): number {
  if (array.length === 0) {
    return 0;
  }

  const shortedArray = array.slice(0, array.length - 1);
  return 1 + count(shortedArray);
}

console.log(count([5]));
