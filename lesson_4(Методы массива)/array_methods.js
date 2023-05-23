// Методы массива

// let array = [1,2,3,4,5,6,7]

// let obj = {
//     name: 'Alex'
// }

// console.log(typeof obj)


// Написать проверку, является ли массив массивом

// Напишите функцию, которая получает массив и выводит в косноль информацию, массив это или нет

// Array.isArray(array) - проверяет, является ли переданный аргумент массивом или нет. 
// Если массив - метод возвращает ответ true, в противном случае - false

// function checkArray(array){
//     if (Array.isArray(array)){
//         console.log('Да')
//     } else {
//         alert('Нет')
//     }
// }

// checkArray(array)


// -------------------
// Напишите функцию checkObj(obj), которая будет отличать объект от всех типов данных
// Если в функцию передать объект в коносль необходимо вывести ответ 'Это объект', 
// в противном случае 'Это не объект'


// function checlObj(obj){
//     if( !Array.isArray(obj) && typeof obj == 'object' ){
//         console.log('Это объект')
//     } else {
//         console.log('Не объект')

//     }
// }

// checlObj({name: 'Tigran'})
// checlObj([1,2,3])

// checlObj('string')
// checlObj(10)

// ----------------------------------
// Простые методы

// let array = [1,2,3]

// push(elem) - добалвяет новый элемент в конец массива
// unshift(elem) - добвляет элемент сначала массива
// pop() - удаляет элемент с конца массива
// shift() - удаляет эдемент сначала массива

// все этим методы мутируют массив

// методы pop() и shift() возвращают удаленные элементы
// методы push() и unshift() возвращают новый добавленный элемент

// let del = array.push(4)

// console.log(array)
// console.log(del)

// ----------------------------
// Метод splice()
// метод позволяет удалять/добавлять новые элементы куда угодно

// 1 аргумент - индекс старта
// 2 аргумент - количество удаляемых элементов
// 3 аргумент и более - новый[ые] элемент, который заменить удалеямые элемент

// let array = [1,2,3,4,5,6,7]

// array.splice(3,3,true, false, true)

// console.log(array)


// ------------------------
// Задача 1 
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let array = [1, 2, 3, 4, 5]

// function changeArr(arr){
//     arr.splice(3,0,'a','b','c')
//     console.log(arr)
// }

// changeArr(array)


// -------------------------------
// Метод slice() 
// метод возвращает отрезок массива, указав диапазон индексов (не трогая источник (не мутирует массив))

// let array = [1,2,3,4,5,6,7,8]

// Если мы не указываем аргументы - переменная result будет хранить копию массива array
// let result = array.slice()

// let result = array.slice(0,3)
// console.log(result, array)

// ----------------
// Задача 2
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let array = [1, 2, 3, 4, 5]

// let result = array.slice(3,5)
// let result = array.slice(3)
// let result = array.slice(-2)
// console.log(result)


// -----------------------
// Задано два массива

// let arr1 = [1,2,3,4]
// let arr2 = [1,2,3,4,5,6]

// Задача: написать универсальную команду, которая скопирует последние два элемента массива
// [3,4]
// [5,6]

// console.log(arr1.slice(-2))
// console.log(arr2.slice(-2))

// console.log(arr1[-1])
// undefined

// ----------------------------------
// includes() - метод, который ищет указанный внутри аргумента элемент в массиве
// возвращает булевый тип

// let array = [10,20,50,100,500]

// let result = array.includes(250)

// console.log(result)

// function includes2(arr, value){
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == value){
//             console.log(true)
//             return
//         }
//     }
//     console.log(false)
// }

// let array = [10,20,50,100,500]


// includes2(array, 150)

// ---------------------------------------
// Задан массив array и переменая value
// Напишите программу, которая будет добавлять значение переменной value в конец массива только в том случае,
// если этого значение нет в массиве. 
// Если элемент (занчение) уже существует в массиве - его добалвять не нужно

// let value = 200
// let array = [10,20,30,40,50,60]

// if (!array.includes(value)){
//     array.push(value)
// }

// console.log(array)


// --------------------
// reverse() - метод, который зеркалит значения элементов массива справа - налево
// пример [1,2,3,4,5] станет [5,4,3,2,1]

// let array = [1,2,3,4,5]
// array.reverse()

// console.log(array)


// function includes(arr, value){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == value){
//             return true
//         }
//     }
//     return false
// }


let arr5 = [10,30,40,50,60]


function includeinArr(arr,elem) {
    if (!arr.includes(elem)) {
        arr.push(elem)
    }
    console.log(arr)
}

includeinArr(arr5,20)