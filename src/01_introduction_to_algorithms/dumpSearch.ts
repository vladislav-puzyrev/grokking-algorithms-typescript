function dumpSearch<T extends string | number>(array: T[], item: T) {
  const index = array.findIndex(elem => elem === item);
  return index === -1 ? null : index;
}

export default dumpSearch;
