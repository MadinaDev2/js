
// function 

// function func() {
//       console.log("hi");
//       return "hello"
// }

// 


// function func() {
//     if (5 ===5) {
//         return true
//     }else {
//         return false
//     }
// }

// console.log(func());



// function func(a, b, c) {
// return a + b + c
// console.log(func("Welcome!","to", "Bishek"));


// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// function task1(str) {
//     return (str.slice(0, 5).lenght)
// }
// console.log(task1("Nevis ITDB TECH"));
// console.log("sadf". toUpperCase);

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
// function task(str) {
//     return str.slice(12,18)
// }
// console.log(task("максимально УЖАСНО"));

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально,
// только верхним регистром.
// function task(str){
//     return str.slice(o,12).toUpperCase();
// }
// console.log(task("максимально УЖАСНО"));

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',
// используя метод slice.
// function task(str) {
//     return str.slice(5, 18);
// }
// console.log(task("Максимально Ужасно"));
// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
// charAt.
// function task(str) {
//         return str.charAt(12)
// }
//  console.log(task("Максимально Ужасно"));

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// строки, используя метод concat.
// function task(str, str2) {
//     return str.concat(str2)
// }
//  console.log("Максимально", "Ужасно");

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1
// раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// let str = "Максимально Ужасно"
// function task(str) {
//     return str.slice (2)
// }
// console.log(task("Максимально", "Ужасно"));

// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// function task(str) {
//     return str [0].toUpperCase()+ str.slice(1) .toLowerCase
// }
//  console.log(task("макСИМАЛЬНО ужаСНО"));

// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// function task(str) {
//     return str.index0f(a)
// }
// console.log(task("Максимально Ужасно"));
 
// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// function task(str) {
//     return str.lastIndex0f("o")
// }
// console.log(task("Максимально Ужасно")); 

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// function task(str) {
//     return str.substring(4,8)
// }
// console.log(task("aaa bbb ccc"));



// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. 
// function task1(a){ 
//     if(a === 10) { 
//         return true 
//     } else { 
//         return false 
//     } 
// } 
// console.log(task(10)); 
 
// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'. 
// function task2(a,b){ 
//     if(a > b){ 
//         return 'a больше b' 
//     }else{ 
//         return 'a меньше b' 
//     } 
// } 
// console.log(task1(a=50,b=100)); 
 
// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0. 
// function task3(a){ 
//     if(a > 0){ 
//         return 'positive' 
//     }else if ( a === 0){ 
//         return 'равно'  
//     }else if(a < 0){ 
//         return "negative" 
//     }else{ 
//         return 'NO' 
//     } 
// } 
// console.log(task2(a=-2));

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число". 
// function task4(number){ 
//     if (number % 2 === 0){ 
//         return "Четное число" 
//     }else{ 
//         return "Нечетное число" 
//     } 
// } 
// console.log(task4(number=45)); 

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число". 
// function task5(a,b){ 
//     if(a % b === 0){ 
//         return "Четное число" 
//     }else{ 
//         return "Нечетное число" 
//     } 
// } 
// console.log(task5(a=10,b=2)); 
 
// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string". 
// function task6(s){ 
//     if(typeof s === "boolean"){ 
//         return 'Boolean' 
//     }else if ( typeof s === "number"){ 
//         return 'number' 
//     }else if ( typeof s === "string"){ 
//         return 'String' 
//     }else{ 
//         return "not" 
//     } 
// } 
// console.log(task6("boolean", "number", "string"));



// Напишите функцию, которая проверяет, является ли заданное число четным и делится ли оно на 3 без остатка.
//   function isEvenAndDivisibleByThree(number) {
//     return number % 2 === 0 && number % 3 === 0;
// }

//  console.log(isEvenAndDivisibleByThree(6)); 
//   console.log(isEvenAndDivisibleByThree(7));


// Напишите функцию, которая проверяет, является ли заданное число одновременно кратным 2, 3 и 5.
// function isDivisibleByTwoThreeFive(number) {
//     return number % 2 === 0 && number % 3 === 0 && number % 5 === 0;
// }

// console.log(isDivisibleByTwoThreeFive(30)); 
// console.log(isDivisibleByTwoThreeFive(15));

