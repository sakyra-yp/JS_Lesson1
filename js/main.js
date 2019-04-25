var first = 1; // читается в любом месте кода

{

	let second = 2; // читается, только тогда, когда дойдет очередь до этой строки + за пределами скобок не работает

}

const pi = 3.14; // фиг знает

// типы данных:

// var number = 5; // число
// var string = 'Hello!'; // строка
// var sym = Symbol(); // символ
// var boolean = true; // логическое значение или буллиновое 
// null;
// undefined;
// var obj = {}; // объект

// console.log(4/0); // вызываем в консоле infinity
// console.log('string' * 9); // умножем не число = получаем NaN(not a number)
// console.log(n1); // выводим не существующию переменную = получаем null
// var und;
// console.log(und); // выводим переменную, которая не имеет значения = получаем undefined

// obj = {
// 	name: 'John',
// 	age: 25,
// 	isMarried: false
// }
// console.log(obj.['name']);

var arr = ['plum', 'orange', 'apple'];
console.log(arr[2]);

// alert('hello!');
// confirm('Are you here?');
// var answer = prompt('How old are you?', '18');

// console.log(typeof(arr));

// console.log('arr' + '- object');
// console.log( 4 + '- object'); 


// var answer = +prompt('How old are you?', '18');

// console.log(typeof(answer));

// Операторы
var incr = 10,
	decr = 10;

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);

console.log(5%2);
console.log(incr == 10);

var isChecked = true;
var isClose = true;

// console.log(isChecked && !isClose); // и
console.log(isChecked || !isClose); // или
