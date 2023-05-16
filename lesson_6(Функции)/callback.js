// Callback
// это функция, которая используется в качестве аргумента другой функции

// function double(){
//     return 'hello!'
// }

// function handle(callback){
//     // Отличие callback от других аргументов заключается в том, что callback в теле функции в какой-то момент вызывается
//     // Сам callback (тело его функции) будет указываться в момент вызова функции handle
//     let a = callback()
//     // переменная a будет хранить рузельтат работы callback'a
    
//     console.log(a)
// }


// // handle(double)
// handle(() => 'test')
// handle(() => '234')
// handle(() => 'pop')

// -------------------------------
// Передача аргументов в callback

// function handle(callback){
//     let a = callback(10)
//     console.log(a)
// }


// handle((num) => num ** 2)


// ---------------------------------------
// Написать функцию calc(arg1, arg2, sign), которая в зависимости от знака sign применять соответсвующие 
// вычисления для arg1 и arg2


// function calc(a, b, sign){
//     if (sign === '+'){
//         console.log(a + b)
//     } else if (sign === '-'){
//         console.log(a - b)
//     } else if (sign === '*'){
//         console.log(a * b)
//     } else if (sign === '/'){
//         console.log(a / b)
//     } else {
//         console.log('Неизвестный знак')
//     }
// }

// function calc(callback){
//     let a = callback()
//     console.log(a)
// }

// calc(() => 50 - 50)
// calc(() => 50 ** 2)
// calc(() => 50 ** 2 - 10 + 40)


// -----------------------------------
// Плохое решение 

// function getCondition(a,b,sign){
//     if (sign === '==='){
//         console.log( (a === b) ? 'Правда' : 'Ложь')
//     } else if (sign === '==') {
//         console.log( (a == b) ? 'Правда' : 'Ложь')
//     } else if (sign === '>') {
//         console.log( (a > b) ? 'Правда' : 'Ложь')
//     } else if (sign === '<') {
//         console.log( (a < b) ? 'Правда' : 'Ложь')
//     } else if (sign === '>=') {
//         console.log( (a >= b) ? 'Правда' : 'Ложь')
//     } else if (sign === '<=') {
//         console.log( (a <= b) ? 'Правда' : 'Ложь')
//     } else if (sign === '!=') {
//         console.log( (a != b) ? 'Правда' : 'Ложь')
//     }
// }

// Хорошее решение
// function getCondition(callback){
//     if (callback()){
//         console.log('Правда')
//     } else {
//         console.log('Ложь')
//     }
// }

// Более короткое решение 
// function getCondition(callback){
//     console.log((callback()) ? 'Правда': 'Ложь')
// }

// getCondition(() => 'vn' < 20)
// getCondition(() => [1,2,3].includes(10))
// getCondition(() => 10 === 20)
// getCondition(() => 10 === 20 || 1 !== 0)



// -----------------------------------------
// Повторить метод filter

// let a = [1,2,3,4,5,6]

// function filter2(array, callback){
//     let newArray = []
//     for (let i = 0; i < array.length; i++){
//         if (callback(array[i])){
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }

// console.log(a.filter((elem) => elem > 3))

// console.log(filter2(a, (elem) => elem > 3))


