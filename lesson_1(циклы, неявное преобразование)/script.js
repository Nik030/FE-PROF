// Неявное преобразование
// string
// Все что мы попытаемся прибавить к строке - итоговый ответ будет СТРОКА
    
// let a = 'test' + 10
//          - test10

// let a = 'test' + false
//          - testfalse

// let a = 'test' + NaN
//          - testNaN

// let a = 'test' + undefined
//          - testundefined

// ---------------------------
// boolean
// Булевый тип

// При попытке сложить булевый тип с числом - булевое значение проеобразуется в бинарный тип (0 false и 1 true)
// И далее будет рассчитано математическое выражение

// let a = false + 10
//          10

// let a = true + 10
//          11

// ------------------------

// let a = false + 10 + 'test'
//             10test

// let a = false + 'test' + 10
//             falsetest10

// ------------------------
// Преобразование строки в число

// 1) Вариант
// let a = Number('100')
//          число 100

// let a = Number('100g')
//          NaN

// 2) Вариант
// let a = +'100'
//      100

// let a = +'100g'
//      NaN


// -------------------
// Преобразование числа в строку

// 1 Вариант
// let a = String(100)
//          '100'

// 2 Вариант
// let a = '' + 100
//          '100'

// let a = 100

// console.log(typeof a)
// console.log(a)


