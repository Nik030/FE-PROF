// Function declaration
// Функция как самостоятельная конструкция

// function double(num){
//     return num ** 2;
// }

// ----------------------------------
// Function expression
// функция как часть выражения

// --------------------
// Анонимная функция (безымянная функция)

// let double = function(num){
//     return num ** 2;
// }

// -------------------------------
// Стрелочаня функция

// Режим работы без {}
// let double = (num) => num ** 2

// Режим работы с {}
// let double = (num) => {
//     return num ** 2
// }

// console.log(double(5))
// console.log(double(15))

// Разница стрелочной от анонимной функции
// 1) Синтаксис
// 2) Контекст this
// 3) Технически немного отличаются

// ----------------------------------
// Задача 1 
// 1) Напишите функцию getLastFirstChar(string), которая получает 
// строковый тип и возвращает конкатенацию первой и последней буквы
// 2) Переписать эту функцию используя все 3 вида функции (обычная, анонимная, стрелочная)

// function getLastFirstChar(string){
//     return string[0] + string[string.length-1]
// }

// Анонимная функция 
// let getLastFirstChar = function(string){
//     return string[0] + string[string.length-1]
// }

// Стрелочная функция
// let getLastFirstChar = (string) => string[0] + string[string.length-1]

// -------------------
// Задача 2 
// Напишите функцию getAvg(num1,num2), которая вернет среднее значение двух параметров
// Реализовать функцию используя все три подхода

// function getAvg(num1,num2){
//     return (num1 + num2) / 2
// }

// let getAvg = function(num1,num2){
//     return (num1 + num2) / 2
// }

// let getAvg = (num1,num2) => (num1 + num2) / 2

// console.log(getAvg(10,20))

// ------------------------------------------
// Создать анонимную функцию, которая будет вызвана не через ее имя

// вариант 1
// (function(){
//     console.log(123)
// })()

// вариант 2
// (() => console.log(333))()

// ---------------------------
// Тернарный оператор
// сформировать значение по условию


// let b = 5
// let a = (b === 5) ? 10 : 50

// console.log(a)
