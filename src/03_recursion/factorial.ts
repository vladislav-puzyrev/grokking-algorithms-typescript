function factorial(i: number): number {
  if (i === 1) {
    return 1;
  }

  return i * factorial(i - 1);
}

console.log(factorial(5));
