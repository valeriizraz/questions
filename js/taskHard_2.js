'use strict'

/*
Если я передаю функцию как аргумент, в другую функцию, она не работает. Где может быть ошибка?
Или когда я передаю функцию в функцию в нужно этой функции тоже передать аргумент?
Или Функция в Функции должна без аргументов, передавать значение, которое возвращает?
*/



// бесконечно добавляет цифры..
// const generateRandomNumbers = (n) => {
//   let numbers = [];
//   numbers.length = n;
//     console.log(numbers)
//     for (let i = 0; i < numbers.length; i ++) {
//       if (n > 0 && n <= 100) {
//         numbers.push(Math.round(Math.random() * 100));
//         console.log(numbers);      
//       }
//     }
//   return numbers;
// }
// console.log(generateRandomNumbers(num));





// ------------------------------------------------

// const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
// const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

// const filter = ([...all], [...failed]) => {
//   failed = failed.join();
//   let sls = [];
//     for (let i = 0; i < all.length; i++) {

//         if (!(failed.includes(all[i]))) {
//           sls.push(all[i]);
//         }
//     }
//   return sls;
// }
// console.log(filter(allStudents, failedStudents));

/*
Копия (Можно ли сделать условие для условия как бы. Массив заполняется повторно,
пока не закончится цикл, как остановить его когда имена начинают повторятся? )
*/

// const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

// const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
// let arr = [];

// for (let i = 0; i < failedStudents.length; i++) {
//   console.log(failedStudents[i]);
//   console.log('---------------------')
//     for (let j = 0; j < allStudents.length; j++) {
//       console.log(allStudents[j]);
//       console.log('++++++++++++++++++');
//         if (allStudents[j] !== failedStudents[i]) {
//           arr.push(allStudents[j]);
          
//           console.log(arr);
//         }
//   }
// }

// --------------------------------------------------

// const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

// const getAverageValue = ([...check]) => {
//   let resCheck = 0;
//   for (let i = 0; i < check.length; i++) {
//     resCheck += check[i];
//   }
//   return Math.floor(resCheck / check.length);
// }
// console.log(getAverageValue(allCashbox));

// --------------------------------------------

// const allCashbox = [
//   [12, 4500], 
//   [7, 3210], 
//   [4, 650], 
//   [3, 1250], 
//   [9, 7830], 
//   [1, 990], 
//   [6, 13900], 
//   [1, 370]
// ];

// let newArr = [];

// const getAveragePriceGoods = (cash) => {
//   const newCash = [...cash];
//   for (const subNewCash of newCash) {
//     (newArr.push(subNewCash[1] / subNewCash[0]));
//   }
//   return newArr;
// }
// console.log(getAveragePriceGoods(allCashbox));

// let roundNewArr = [];

// const roundGetAveragePriceGoods = (roundPrice) => {
//   const newRoundPrice = [...roundPrice];
//     for (const subNewRoundPrice of newRoundPrice) {
//           roundNewArr.push(Math.round(subNewRoundPrice));
//     }
//   return roundNewArr;
// } 
// console.log(roundGetAveragePriceGoods(newArr));

// -----------------------------------------------------------

// const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

// const namesPlus = (nam, str) => {
//   const copyNam = [...nam];
//   const strPlus = str + ' ';
//   let newNames = [];
//     for (let i = 0; i < copyNam.length; i++) {
//       newNames.push(strPlus + copyNam[i]);
//     };
//     return newNames;
// }
// console.log(namesPlus(names, 'Mr'));

// -------------------------------------------------

// const printArr = (arr) => {
//   console.log(arr.length);
//     for (let i = 0; i < arr.length; i++) {
//       let elem = arr[i];
//       console.log(elem);
//     }

//     for (const key in arr) {
//       console.log(`Элемент под индексом: ${key} ${arr[key]}`)
//     }

//     for (const elem of arr) {
//       console.log(`Элемент - ${elem}`)
//     }
// }
// printArr(allStudents);

// const newAllStudents = allStudents.splice(2, 3, 1, 2, 3);

// console.log(`newAllStudents: ${newAllStudents}`);
// console.log(`allStudents: ${allStudents}`);

// const newStudents = (all) => {
//   let arr = [];
//     for (let key of all) {
//       if (elem % 2 === 0) {
//         arr.push(key);
//       }
//       return arr;
//     }
//   return arr;
// }
// console.log(newStudents(allStudents));
// как сделать, чтоб каждый второй элемент из списка был записан?

// ------------------------------------------------

// const str = 'Привет мир!';

// const strReverse = (st) => {
//   const newStr = st.split('').reverse().join('');
//   console.log(newStr);
// } 
// strReverse(str);

// --------------------------------------------------

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num !== 1;
// }

// function printPrimes(max) {
//   for (let i = 2; i <= max; i++) {
//     if (isPrime(i)) console.log(i);
//   }
// }
// printPrimes(30);

//--------------------------------------------------

/*
Не полностью уловил как работают циклы. Думал, что елементы второго цикла, 
повторяются, в каждом элементе первого, все элементы второго
но в консоли, не могу порой понять как они идут. 
*/ 


// for (let i = 2; i <= 10; i++) {
//   console.log('-----------------------------')
//   for (let j = 2; j <= 10; j++) {
//     console.log(`${i} xx ${j} = ${i ** j}`);
//   };
// };

// Пример цикла

// const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

// const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
// let arr = [];

// for (let i = 0; i < failedStudents.length; i++) {
//   console.log(failedStudents[i]);
//   console.log('---------------------')
//     for (let j = 0; j < allStudents.length; j++) {
//       console.log(allStudents[j]);
//       console.log('++++++++++++++++++');
//         if (allStudents[j] !== failedStudents[i]) {
//           arr.push(allStudents[j]);
          
//           console.log(arr);
//         }
//   }
// }

// --------------------------------------------------------



// --------------------------------------------------------

// const euro = 0; 
// const dollar = 0;
// const ruble = 73;

// const converterEuroRub = (eur) => {
//   return eur = ruble * 1.2;
// }
// const convertRes = converterEuroRub(5);
// console.log(convertRes);

// ----------------------------------------------------------

// const basket = 30000;
// const productQuantity = 11;
// const promCode = '';

// const calculate = (bas, quant, prom) => {
//   let discount = 0;

//     if (bas >= 30000 && productQuantity > 10 && prom === 'G3H2Z1') {
//       discount = (bas * 0.15) + (bas * 0.03) + 500;
//       console.log(discount);
//       console.log(bas - discount); 

//     } else if (bas >= 30000 && productQuantity > 10 && prom === 'METHED') {
//       discount = (bas * 0.15) + (bas * 0.03) + (bas * 0.1);
//       console.log(discount); 
//       console.log(bas - discount);
    
//     } else if (bas >= 30000 && productQuantity > 10) {
//       discount = (bas * 0.03) + (bas * 0.15);
//       console.log(discount);
//       console.log(bas - discount);
    
//     } else if (bas >= 30000) {
//         discount = bas * 0.15;
//         console.log(discount);
//         console.log(bas - discount);

//     } else if (quant > 10) {
//         discount = bas * 0.03;
//         console.log(discount);
//         console.log(bas - discount);

//     } else if (prom === 'METHED') {
//         discount = bas * 0.1;
//         console.log(discount);
//         console.log(bas - discount);

//     } else if (prom === 'G3H2Z1' && bas > 2000) {
//         discount = 500;
//         bas = bas - discount;
//         console.log(discount);
//         console.log(bas - discount);
//     }

// }

// calculate(basket, productQuantity, promCode);

// ------------------------------------------

// const str = 'привет Мир';
// function newStr(strg) {
//   const strNew = strg[0].toUpperCase() + strg.slice(1).toLowerCase();
//   console.log(strNew);
// } 
// newStr(str);

// ---------------------------------------------

// const salary = 65000;

// let tax = 0;
// let taxUp = 0;
// let taxUpPlus = 0;

// let salaryMinusTax = 0;
// const salaryStatus = 'Высокая';

// switch (salaryStatus) {
//   case 'Низкая':
//     tax = salary * 0.13;
//     salaryMinusTax = salary - tax;
//     break;
//   case 'Средняя':
//     tax = 15000 * 0.13;
//     taxUp = (salary - 15000) * 0.2;
//     salaryMinusTax = salary - tax - taxUp;
//     break;
//   case 'Высокая':
//     tax = 15000 * 0.13;
//     taxUp = 35000 * 0.2;
//     taxUpPlus = (salary - 50000) * 0.3;
//     salaryMinusTax = salary - tax - taxUp - taxUpPlus;
//     break;
//   default: 
//     tax = salary * 0.13;
//     salaryMinusTax = salary - tax;
// }

// console.log(`Зарплата без вычетов: ${salary}`);
// console.log(`Налог до 15000: ${tax}`);
// console.log(`Налог от 15000 до 50000: ${taxUp}`);
// console.log(`Налог от 50000: ${taxUpPlus}`);
// console.log(`Зарплата с вычетом налогов: ${salaryMinusTax}`);