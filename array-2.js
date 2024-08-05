// SORT - REVERSE

// Метод SORT() на месте сортирует элементы массива и возвращает отсортированный массив.
// Необязательным параметром можно указать собственную функцию для сортировки.
// Синтаксис  : массив.sort([функция]);

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers); // [1, 2, 3, 4, 5]

// Давайте посортируем массив:  ['a', 'b', 'c', 'd']
// let arr = ['d', 'b', 'a', 'c'];
// console.log(arr.sort());

// Сортировка чисел в порядке возрастания:Создайте функцию, которая принимает массив чисел и возвращает новый массив, отсортированный в порядке возрастания
// const numbers = [5, 2, 8, 1, 3];
// console.log( numbers.sort((a,b) => a - b));

// Сортировка строк в алфавитном порядке:Напишите функцию, которая сортирует массив строк в алфавитном порядке.
// const fruits = ["banana", "apple", "orange", "grape"];
// function task(arr){
//     return arr.slice().sort()
// }
// console.log(task(fruits));

// Сортировка строк по их длине:Напишите функцию, которая сортирует массив строк по их длине. ["kiwi", "apple", "grape", "banana"]
// const words = ["apple", "banana", "grape", "kiwi"];
// function task (arr){
//     return arr.slice().sort((a,b) => a.length - b.length)
// }
// console.log(task(words));

// Сортировка строк в обратном алфавитном порядке:Напишите функцию, которая сортирует массив строк в обратном алфавитном порядке.  ["orange", "grape", "banana", "apple"]
// const fruits = ["banana", "apple", "orange", "grape"];
// function sortReverseAlphabetically(arr) {
//     return arr.slice().sort((a, b) => b.localeCompare(a));
// }
// console.log(sortReverseAlphabetically(fruits));

// Сортировка массива случайным образом:Напишите функцию, которая сортирует массив случайным образом. [3, 1, 2, 4, 5] (пример вывода может быть другим)
// const numbers = [1, 2, 3, 4, 5];
// function sortRandomly(arr) {
//     return arr.slice().sort(() => Math.random() - 0.5);
// }
// console.log(sortRandomly(numbers));

// Сортировка строк с учетом регистра:Напишите функцию, которая сортирует массив строк с учетом регистра. ["Apple", "Orange", "banana", "grape"]
// const words = ["Apple", "banana", "Orange", "grape"];
// function sortCaseSensitive(arr) {
//     return arr.slice().sort();
// }
// console.log(sortCaseSensitive(words));

// REVERSE
// Метод reverse() обращает порядок элементов в массиве в обратном направлении, то есть
// делает первый элемент последним, а последний — первым.

// При вызове reverse() для массива [1, 2, 3] он превратится в [3, 2, 1].
// const array = [1, 2, 3]
// array.reverse()
// console.log(array)

// sort()
// let arr = [2,84,83,5,1,2]
// console.log(
//     arr.sort((a,b) => {
//         return b - a
//     })
// );

// let arr = ['f','g','a','r','w']
// console.log(
//     arr.sort((a,b) => {
//         return a.localeCompare(b)
//     })
// );

// Сортировка массива чисел:
// Напишите функцию, которая принимает массив чисел и сортирует его по возрастанию.

// Сортировка строк по длине:
// Напишите функцию, которая принимает массив строк и сортирует их по длине.
// let arr = ['apple','kiwi','banana']
// console.log(
//     arr.sort((a,b) => {
//         return a.length - b.length
//     })
// );

// Сортировка массива строк в обратном порядке:
// Напишите функцию, которая принимает массив строк и сортирует их в обратном алфавитном порядке.
// let arr = ['a','g','h','r','q','p','o']
// console.log(
//     arr.sort((a,b) => {
//         return b.localeCompare(a)
//     })
// );

// Реверс строки:
// Напишите функцию, которая принимает строку и возвращает ее в обратном порядке.
// let arr = ['apple','kiwi','banana','orange']
// console.log(arr.reverse());

// Реверс массива:
// Напишите функцию, которая принимает массив и возвращает его в обратном порядке.
// let arr = [3,4,9,6,2]
// console.log(arr.reverse((a,b) => a - b));

// Реверс слов в строке:
// Напишите функцию, которая

// принимает строку и возвращает ее с словами в обратном порядке.
// let arr = ['sweet','spicy','cake']
// console.log(arr.reverse((a,b) => b.localeCompare(a)));

// 1. Фильтрация массива чисел:
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.
// let arr = [2,4,9,5,7,-3,-4,-6]
// console.log(
//     arr.filter((el) => {
//           return el > 0
//     })
// );

// Преобразование массива строк в массив их длин:
// Напишите функцию, которая принимает массив строк и возвращает массив их длин.
// let arr = ['apple','banana','orange']
// console.log(
//     arr.map((el) => {
//         return el.length
//     })
// );

// Преобразование массива чисел в массив их квадратов:
// Напишите функцию, которая принимает массив чисел и возвращает массив, содержащий квадраты этих чисел.
// let arr = [3,5,2,6]
// console.log(
//     arr.map((el) => {
//         return el ** 2
//     })
// );

// Удвоение элементов массива: Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// в котором каждый элемент умножен на 2, используя метод map.
// let arr = [2,3,4,5,6,7]
// console.log(arr.map((el) => el * 2));

// Преобразование массива строк в массив длин строк: Напишите функцию, которая принимает массив строк и
// возвращает новый массив, содержащий длины каждой строки, используя метод map.
// let arr = ['butter','run','home',]
// console.log(arr.map((el) => el.length));

// Преобразование массива строк в массив строк в верхнем регистре: Напишите функцию, которая принимает массив
// строк и возвращает новый массив, содержащий каждую строку в верхнем регистре, используя метод map.
// let arr = ['blue','yellow']
// console.log(
//     arr.map((el) => {
//         return el.toLocaleUpperCase()
//     })
// );

// Преобразование массива чисел в массив строк: Напишите функцию, которая принимает массив чисел и возвращает
// новый массив, содержащий строки, представляющие эти числа в виде текста, используя метод map.
// let arr = [3,5,7]
// console.log(arr.map((el) => el.toString()));

// Обрезка строк: Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий каждую строку,
// обрезанную до определенной длины, используя метод map.
// let arr = ['friends','slowdancing','forus','blue']
// console.log(arr.map((el) => el.slice( 0, 3)));

// reduse:4
// ass
// el
// inx
// Arr
// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// let arr = [5,15,315,2,13,20,9]
// console.log(arr.reduse((ass, el) => ass + el));

// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
// let arr = [5,12,314,2,13,20,9]
// console.log(
//     arr.reduse((ass, el, idx, arr) =>{
//         if (el % 2 === 0) {
//             return ass + el;
//         }else{
//            return
//         }
//     })
// );

// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
// let arr = [5,15,315,2,13,20,9]
// console.log(

// );

// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// let arr = [3,13,54,15,335, 39]
// console.log(
//     arr.reduce((ass, el, idx, arr) =>{
//        if( el > 10){
//         return ass - el
//        }else{
//         return acc
//        }
//     }
// );
// )

// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// let arr = ['Аскар', 'Баяман', 'Калмамат']
// console.log(
//     arr.reduce((acc, el, idx, arr) => {
//         return acc + el. length
//     },0)
// );

// Создайте массив из чисел и найдите сумму всех элементов.

// const array = [1, 2, 3, 4, 5];
// const result = array.reduce((acc, el) => acc + el);
// console.log(result);

// Создайте массив строк и объедините их в одну строку, разделяя запятой.

// const array = ["bill","ben", "sultan"]
// const string = array.join()
// console.log(string);

// Создайте массив чисел и найдите среднее значение.

// const array = [10, 20, 30, 40, 50];
// const sum = array.reduce((acc, el) => acc + el, 0);
// const resault = sum / array.length;
// console.log(resault);

// Создайте массив чисел и умножьте каждый элемент на определенное число.
// const array = [1, 2, 3, 4, 5];
// const num = 2;
// const resault = array.map((el) => el * num);
// console.log(resault);

// Создайте массив строк и отфильтруйте только те, которые начинаются с определенной буквы.
// const array = ["apple", "banana", "orange", "kiwi"];
// const strFil = "b";
// const resault = array.filter(el => el.startsWith(strFil));
// console.log(resault);

// Создайте массив чисел и удалите из него все отрицательные значения.
// const array = [1, -2, 3, -4, 5];
// const resault = array.filter(el => el >= 0);
// console.log(resault);

// Создайте массив строк и преобразуйте каждую строку в верхний регистр.
// const array = ["hello", "world", "javascript"];
// const resault = array.map(el => el.toUpperCase());
// console.log(resault);

// Создайте массив чисел и найдите индекс определенного элемента.
// const array = [10, 20, 30, 40, 50];
// const search = 30;
// const index = array.indexOf(search);
// console.log(index);

// Создайте массив строк и удалите из него все элементы с определенной длиной.
// const array = ["apple", "banana", "orange", "kiwi"];
// const numLength = 6;
// const resault = array.filter(el => el.length !== numLength);
// console.log(resault);

// Создайте массив чисел и отфильтруйте только четные значения.
// const array = [1, 2, 3, 4, 5];
// const resault = array.filter(el => el % 2 === 0);
// console.log(resault);

// Создайте массив строк и отсортируйте его в обратном порядке.
// const array = ["apple", "banana", "orange", "kiwi"];
// const resault = array.reverse();
// console.log(resault);
 
// Создайте массив чисел и преобразуйте каждый элемент в строку.
// const array = [1, 2, 3, 4, 5];
// const resault = array.map(el => el.toString());
// console.log(resault);

// Создайте массив строк и найдите самое длинное слово.
// const array = ["apple", "banana", "orange", "kiwi"];
// const resault = array.reduce((acc, el) => acc.length > el.length ? acc : el);
// console.log(resault);

// Создайте массив чисел и найдите сумму только положительных значений.
// const array = [1, -2, 3, -4, 5];
// const resault = array.reduce((acc, el) => el > 0 ? acc + el : acc, 0);
// console.log(resault);

// Создайте массив строк и удалите из него все элементы, длина которых меньше заданной.
// const array = ["apple", "banana", "orange", "kiwi"];
// const myLength = 6;
// const resault = array.filter(str => str.length >= myLength);

// Создайте массив строк и объедините их с использованием определенного разделителя.
// const array = ["apple", "banana", "orange", "kiwi"];
// const separator = "-";
// const resault = array.join(separator);

// Создайте массив чисел и найдите сумму элементов на четных позициях.
// const array = [1, 2, 3, 4, 5];
// const res = array.filter((el, index) => index % 2 === 0).reduce((acc, el) => acc + el, 0);
