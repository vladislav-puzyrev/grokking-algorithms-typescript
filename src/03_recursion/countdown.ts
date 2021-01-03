function countdown(i: number) {
  if (i >= 1) {
    console.log(i);
    countdown(i - 1);
  }

  return;
}

countdown(5);
