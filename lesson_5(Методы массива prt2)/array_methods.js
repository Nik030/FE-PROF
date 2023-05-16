//  Методы массивов

// let array = [10,20,30,40,50]

// forEach создает итерации по элементу массива одной строкой
// Возвращает undefined

// array.forEach((elem) => console.log(elem))

// console.log(array, newArray)

// ------------------------
// Метод filter - метод, который фильтрует элементы массива по указанному колбеку
// Возвращает новый массив

// let array = [10,20,30,40,50]

// let result = array.filter(elem => elem > 25)

// Метод filter подкапотно
// function filter(array){
//     let newArray = []
//     for (let elem of array){
//         if (elem > 25){
//             newArray.push(elem)
//         }
//     }
//     return newArray
// }

// let result2 = filter(array)

// console.log(result, result2)

// --------------------
// Задача: отфильтруйте массив таким образом, чтобы остались только числовые элементы 
// результат сохраните в result

// let a = [10,'string', true, 101, 50, '10l']

// // решение 1
// let array = []
// for(let elem of a){
//     if(typeof(elem) === 'number'){
//         array.push(elem)
//     }
// }

// // решение 2
// let result = a.filter(elem => typeof(elem) === 'number')


// console.log(array, result)


// --------------------
// Задача: отфильтруйте массив таким образом,  чтобы остались только те элементы, которые начинаются на букву В
// let products = ['Велосипед', 'Самокат', "Тренажер", "Велотренажер", "Ворота", "Ракетки"]

// let result = products.filter(elem => elem[0] === 'В')
// let result = products.filter(elem => elem.startsWith('В'))
// let result = products.filter(elem => elem.charAt(0) === 'В')

// console.log(result)

// --------------------
// Отфильтруйте массив таким образом, чтобы в новом массиве оказались элементы, у которых без
// остатка вычисляется квадратный корень

// let numbers = [4,16,10,15,25,29,100]

// let result = numbers.filter(elem => Math.sqrt(elem) % 1 === 0)
// let result = numbers.filter(elem => elem ** 0.5 % 1 === 0)
// let result = numbers.filter(elem => Number.isInteger(elem ** 0.5))
// console.log(result)

// ----------------------------------
// метод Map - его задача циклично изменить каждый элемента массива
// Возвращает новый массив

// Увеличить значение каждого элемента на 50
// let prices = [100,200,300,400,500]
// let result = prices.map(elem => elem + 50)

// console.log(result)

// Добавить в конце имени точку
// let names = ['Steven', 'Alex', 'Neena', 'John']
// let result = names.map(elem => elem + '.')
// console.log(result)

// ------------
// Задача 1
// Магазин объявил скидки. Необходимо уменьшить цены на 20% в массиве prices
// let prices = [100,200,300,400,500]

// let result = prices.map(elem => elem * 0.8)
// console.log(result)


// -----------
// Задача 2

// Задача: необходимо изменить строки таким образом, чтобы первая буква была заглавной
// let words = ['волесипед', 'самокат',"ролики", "ракетки"]

// let result = words.map(elem => elem[0].toUpperCase()+elem.slice(1))
// let result = words.map(elem => elem.replace(elem[0], elem[0].toUpperCase()))

// console.log(result)
// --------
// оффтоп
// Функция replace заменяет найденную подстроку на другую подстроку
// let string = 'word'

// let result2 = string.replace('wo', '12345')
// console.log(result2)
// --------

// --------------------------
// Метод Find - задача найти элемент массива по условию
// Возвращает первое найденое значение элемента

// let names = ['Steven', 'Alex', 'Neena', 'Nancy']

// let result = names.find(elem => elem[0] === 'N')
// console.log(result)

// -------
// Оптимизировать задачу таким образом, чтобы учитывался и маленький и большой регистр без лог. операторов
// let names = ['Steven', 'Alex', 'Neena', 'Nancy']

// let result = names.find(elem => elem[0].toUpperCase() === 'N')
// console.log(result)

// --------------
// Задача 
// Найти элемент, у которого в конце будет буква 'а'

// let names = ['Steven', 'Alex', 'Neena', 'John']

// let result = names.find(elem => elem[elem.length - 1] === 'a')
// let result = names.find(elem => elem.endsWith('a'))
// console.log(result)


// ------------------------------
// Метод findIndex 
// Абсолютно также работает как и find, только возвращает индекс найденного элемента
// Если элемент не будет найден - возращает уже -1

let a = ['велосипед', "самокат", "ролики"]

// indexOf ищет индекс элемента по его значению
// findIndex ищет индекс элемента по условию

// let result = a.findIndex((elem) => elem[0] === 'с')      //  1
// let result = a.findIndex((elem) => elem[0] === 'э')      // -1

// Задача: найдите индекс элемента массива, который заканчивается на букву "и"
let result = a.findIndex(elem => elem[elem.length - 1] === 'и')
console.log(result)


// МИНИ-ДЗ
// let array = [
//     {id: 1},
//     {id: 2},
//     {id: 3}
// ]

// Найдите индекс элемента, id которого будет равен 3