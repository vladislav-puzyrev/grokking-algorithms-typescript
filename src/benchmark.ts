function benchmark(fn: Function, args: any[]) {
  const timestamp = Date.now();

  const result = fn(...args);

  console.log(`==========${fn.name}==========`);
  console.log(`Результат - ${result}`);
  console.log(`Время - ${Date.now() - timestamp}мс`);
}

export default benchmark;
