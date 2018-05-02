var a=4,
	b=6,
	value;

value = (a * a) - (2 * a * b) + (b * b);

console.log(value);

if (value >0) {
	console.log('wynik dodatni');
} else if (value <0) {
	colnsole.log('wynik ujemny');
}
else {
	console.log('zero');
}