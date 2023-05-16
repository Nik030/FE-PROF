// Замыкание 
// Некая функция которая ссылается на свободные переменные в своей области видимости


// ---------
// Функция, которая возвращает другую функцию


// function handle(){
//     return function(){
//         console.log(123)
//     }
// }

// let result = handle()
// result()

// let test = handle()  
// test()            

// ---------------------------------------
// Пример 1

// function createName(){
//     let name = 'Steven'
//     return function(){
//         name += ' TEST'
//         console.log(name)
//     }
// }

// let name1 = createName()
// name1()
// name1()

// -------------------
// Пример 2

// function getCounter(){
//     let counter = 0
//     return function(){
//         counter += 1
//         console.log(counter)
//     }
// }

// console.log('count1')
// let count1 = getCounter()
// count1()
// count1()
// count1()
// count1()
// count1()
// count1()

// console.log('count2')
// let count2 = getCounter()
// count2()
// count2()
// count2()
// count2()
// count2()


// -----------------------------------
// Пример 3

// function createUrl(domen){
//     return function(url){
//         console.log(`www.${url}.${domen}`)
//     }
// }

// let getCom = createUrl('com')

// getCom('google')
// getCom('home')
// getCom('facebook')


// let getNet = createUrl('net')

// getNet('phone')

// ------------------------

// Напишите функцию power, которая будет 
// возращать функцию с математическим вычислением 
// power(n) должен в качестве аргумента указывать степень возвоедения, 
// а анонимная функция должна получить число,
// которое необходимо возвести в n степень 


// let math1 = power(2)
// console.log(math1(5))    => 25


// let math2 = power(3)
// console.log(math1(2))    => 8

// -----------------------------------

// function power(arg){
//     return function(num){
//         console.log(num ** arg)
//     }
// }

// let double = power(2)
// double(2)
// double(4)


// let quadro = power(4)
// quadro(2)

// -----------------------------------------

// Напишите функцию createPassword(pass), которая в качестве аргумента будет получать значение нового пароля
// Функция должна вернуть функцию, которая будет проверять, совпадет ли аргумент pass с тем аргмуентом.
// который будет указан в возвращаемой функции. Если пароль совпадает - возвращаемая функция должна вывести
// в консоль true, в противном случае false

// Решение без тернарного опреатора
// function createPassword(pass){
//     return function(checkPass){
//         if (pass === checkPass){
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }
// }

// Решение с тернарным оператором
// function createPassword(pass){
//     return function(checkPass){
//         console.log((pass === checkPass) ? true : false)
//     }
// }

// Решение еще проще 
// function createPassword(pass){
//     return function(checkPass){
//         console.log(pass === checkPass)
//     }
// }

// let pass1 = createPassword('tigran')

// pass1('tigrn')
// pass1('tigran')

// let pass2 = createPassword('солнце')
// pass2('луна')
// pass2('солнце')