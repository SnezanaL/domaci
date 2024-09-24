function total(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers[0] + total(numbers.slice(1));
  }
}
console.log(total([6, 2, 100, 5, 10]));
