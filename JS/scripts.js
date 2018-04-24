 a = prompt('Podaj a');
 b = prompt('Podaj b');
value = (a * a) - (2 * a * b) - (b * b);
console.log('a = ' + a);
console.log('b = ' + b);

if (value > 0) {
  console.log('wynik dodatni');
} else if (value === 0) {
  console.log('zero');
} else {
  console.log('wynik ujemny');
}

console.log(value);
