// условие - шарт - if elce

// true - 1, 213, "adesfg"
// false - 0, ""

// = значение берет
// let a = 5;
// == - обычный равно жон эле бири  бирине салыштырып койот
// === - строгий равно тип данных га чейин текшерет

// let a = 5;
// console.log("5" == 5);
// console.log("5" == 5);

// >
// console.log(4 > 5);
// <
// console.log(5 < 5);
// >=
//console.log(4.4 > 4.09);
// <=

// if {} {
// console.log();
// } else
// console.log();
// }

// let num = 5

// if (num > 100) {

// if (5 === 5) {
// console.log("tuura 5 menen 5 barabar");
// } else {
// console.log("tuura emes");
// }

// if (color === "red") {
//     console.log("Kutup tur!");
// } else if (color === "green") {
//     console.log("Otober!");
// } else {

// }
// typeof
// console.log(typeof true);

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = 10;

// if (a === 10) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться
// 'a больше b', 'a меньше b'.

// let a = 50;
// let b = 100;

// if (a > b) {
//   console.log("a больше b");
// } else {
//   console.log("a меньше b");
// }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive'
//  - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.

// let a = -2;

// if (a > 0) {
//   console.log("positive");
// } else if (a === 0) {
//   console.log("равно");
// } else if (a < 0) {
//   console.log("negative");
// }

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль
// "Четное число", "Нечетное число".

// let number = 44;

// if (number % 2 === 0){
//     console.log("Четное число");
// } else{
//     console.log("Нечетное число");
// }

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b,
// будет выводиться консоль "Четное число", "Нечетное число".

// let a = 10;
// let b = 2;
// if (a % b === 0) {
//   console.log("Четное число");
// } else {
//   console.log("Нечетное число");
// }

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой
// переменной - "boolean", "number", "string".

// let s = "undefined";
// if (typeof s === "boolean") {
//     console.log("boolean");
// } else if (typeof s === "Number") {
//     console.log("Number");
// }else if (typeof s === "String") {
//     console.log("String");
// } else {
//     console.log(404);
// }
// let a = Math.random() * 100
// console.log(Math.floor((a)));

// ? - if
// : - else

// if (5 === 5) {
//     console.log(true);
// }else {
//     console.log(false);
// }

// console.log(5 >= 4 ? true : false);

// логическая сумма - || -true издейт
// логическая умножение - && - false издейт
// || - или - же
// && - и - жана

// console.log(true || true || true  || true || true);
// console.log(false|| false|| false || false|| false);
// console.log(true && true && true  && false);

// let num = 200

// if (num >= || num <= 40){
//     console.log(true);
// }

// if (num >= 50 && num  <= 100) {
// console.log(true);
// }else {
//     console.log(false);
// }
// Напишите функцию, которая проверяет, является ли заданное число четным и делится ли оно на 3 без остатка.
// let num = 33;
// if (num % 2 === 0 && num % 3 === 0) {
// console.log("Tuura");
// }else{
// console.log("Tuura emes");
// }
// Напишите функцию, которая проверяет, является ли заданное число одновременно кратным 2, 3 и 5.
// let num = 33;

// if (num % 2 === 0 && num % 3 === 0) {
//   console.log("Tuura");
// } else {
//   console.log("Tuura emes");
// }

// let res = number % 2 === 0 ? "Четное число" : "Нечетное число";

// тернарный оператор
//10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'
// let a = 6;
// let b = 12;

// if ((a > 4 && a < 10) || (b >= 7 && b < 17)) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от
// 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
// весна, осень).
//if (month >= 3 && month <= 5) {
//     season = 'весна';
// } else if (month >= 6 && month <= 8) {
//     season = 'лето';
// } else if (month >= 9 && month <= 11) {
//     season = 'осень';
// } else {
//     season = 'зима';
// }

// console.log(`Месяц ${month} попадает в сезон ${season}.`);

// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1
// до 31. Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).
// let day = 20;
// let decade;

// if (day <= 10) {
//     decade = 'первую';
// } else if (day <= 20) {
//     decade = 'вторую';
// } else {
//     decade = 'третью';
// }

// console.log(`Число ${day} попадает в ${decade} декаду месяца.`);

//13.  Вам дана переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в
// противном случае выведите ‘нет’.
// let a = '12345'
// if (a [0] === '1'  a [0] === '2'  a [0] === '3'){
// console.log("да");
// }else{
// console.log("нет");
// }else{

//1. Напишите функцию, которая проверяет, является ли заданное число четным и делится ли оно на 3 без остатка.
// let num = 33;
// if (num % 2 === 0 && num % 3 === 0) {
// console.log("Tuura");
// }else{
// console.log("Tuura emes");
// }
//2. Напишите функцию, которая проверяет, является ли заданное число одновременно кратным 2, 3 и 5.
// let num = 33;

// if (num % 2 === 0 && num % 3 === 0) {
//   console.log("Tuura");
// } else {
//   console.log("Tuura emes");
// }
// console.log(sum);
// let num = 10
// function tack(){
//   return num === 10 ? true: false
// }
// console.log(tack());




// let num = 1;
// while (num < 6) { //false
//   console.log("this is ", num); 
//   num++; // num = num + 1
// }
// console.log('End');


// let yourNome; 

// while (true) {
//     yourNome = prompt('who are you');

//     if (yourNome !== '' && yourNome !== null){
//         alert('hello' +  yourNome);
//         break;
//     }

// }
// let i = 0;
// label1; while (i < 10) {
//     if (i === 5) {
//         i++
//        // continue label1;
//     }
// }
// let sun = 0;
// for(let i = 5; i >= 1; i-- ){
//     console.log(i);

// }

// let numbers = [2,5,7,10]
// let max = numbers[0]
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > max){
//         max = numbers[i]
//     }
// }
// console.log(max);

// for(let i = 0; i < 5; i++){
//     console.log('привет мир');
// }

  //              0       1       2          3       4
// const colors = ["red", "blue", "yellow", "black", "while"] 
// for(const index in colors){
//     if(index !== 1)
//     console.log('Today color is' + colors[index]);
// } 
    


// const person = {
//     name: 'john',
//     age: 23,
//     surname: 'Goe',
// }

// for(let key in person) {
//     console.log(`${rey} : ${person{key}}`)
// }

   // key + ':' + person[key];
