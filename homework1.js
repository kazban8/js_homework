//  'number' + 3 + 3
// result: number33
// оскільки перший операнд це рядок, все інше перетворюється в рядки
console.log('number' + 3 + 3);  // number33

//  null + 3
// result: 3
// null перетворюється в 0, тому результат буде 0 + 3 = 3
console.log(null + 3);  // 3

//  5 && "qwerty"
// result: qwerty
// оператор && повертає другий операнд, якщо перший істинний. 5 є істинним значенням, тому повертається "qwerty"
console.log(5 && "qwerty");  // "qwerty"

//  +'40' + +'2' + "hillel"
// result: 42hillel
// '+' перетворює рядок на число, тому '40' стає числом 40, а '2' — числом 2. потім числа додаються, і до результату додається рядок "hillel"
console.log(+'40' + +'2' + "hillel");  // "42hillel"

//  '10' - 5 === 6
// result: true
// '10' перетворюється на число 10, і виконано 10 - 5, що дає 5, порівняння з 6 (5 === 6) дасть false
console.log('10' - 5 === 6);  // false

//  true + false
// result: 1
// true перевторюється на 1, а false — на 0, тому результат буде 1 + 0 = 1
console.log(true + false);  // 1

//  '4px' - 3
// result: NaN
// оскільки '4px' — це рядок з буквами, операція віднімання не можлива, тому результат NaN
console.log('4px' - 3);  // NaN

//  '4' - 3
// result: 1
// '4' перетворюється на число 4, і виконується 4 - 3 = 1
console.log('4' - 3);  // 1

//  '6' + 3 ** 0
// result: 61
// 3 ** 0 дає 1, а '6' + 1 — це конкатенація рядків, отже результат '61'
console.log('6' + 3 ** 0);  // '61'

//  12 / '6'
// result: 2
// '6' перетворюється на число 6, і виконується 12 / 6 = 2
console.log(12 /'6');  // 2

//  '10' + (5 === 6)
// result: '10false'
// 5 === 6 дає false, а потім додається до рядка '10' з false як текст,  отже результат '10false'
console.log('10' + (5 === 6));  // '10false'

//  null == ''
// result: false
// null і '' не є рівними в js, тому результат буде false
console.log(null == '');  // false

//  3 ** (9 / 3)
// result: 27
// 9 / 3 дає 3, і 3 ** 3 дає 27.
console.log(3 ** (9 / 3));  // 27

//  !!'false' == !!'true'
// result: true
// обидва рядки 'false' і 'true' є істинними значеннями, тому !!'false' і !!'true' обидва дають true
console.log(!!'false' == !!'true');  // true

//  0 || '0' && 1
// result: 1
// оператор && має вищий пріоритет, тому '0' && 1 дає 1. Потім 0 || 1 дає 1
console.log(0 || '0' && 1);  // 1

//  (+null == false) < 1
// result: true
// +null дає 0, і 0 == false дає true. Тому true < 1 — це true
console.log((+null == false) < 1);  // true

//  false && true || true
// result: true
// false && true дає false, а потім false || true дає true
console.log(false && true || true);  // true

//  false && (false || true)
// result: false
// false && (false || true) дає false, оскільки перше значення false
console.log(false && (false || true));  // false

//  (+null == false) < 1 ** 5
// result: true
// +null дає 0, і 0 == false дає true. 1 ** 5 дає 1, тому true < 1 — це true
console.log((+null == false) < 1 ** 5);  // true