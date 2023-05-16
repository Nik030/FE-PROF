// forEach      - метод, позволяющий задать итерации к каждомоу элементу маасива с указанным телом в виде кодбека (возвращает undefined)
// filter       - метод, возвращающий новый массив, элементы которого удовлетворяют условию колбека
// map          - метод, возвращающий новый массив, элементы которого будут изменены на значение, указанного в теле колбека.
// find         - метод возвращает первый найденный элемент по указанному условию колбека. Если элемент не будет найден - вернет undefined
// findIndex    - метод возвращает первый найденный ИНДЕКС элемента по указанному условию колбека. Если индекс элемента не будет найден - вернет -1

// sort
// reduce


// ------------------------------------------
// sort
// Метод сортирует массив
// Возращает новый массив (Мутирует ихсодный массив)

// let b = ["Яблоко", "Арбуз","Вишня", "Киви", "Банан"]

// let a = [10,4,5,6,1,2,3,9,8,7]

// Как сорт понимает, как нужно отсортировать массив
// 1
// -1
// 0

// a.sort((crElem, nxElem) => {
//     if (crElem > nxElem) return 1 // (любое положительное число)
//     if (crElem < nxElem) return -1  //(любое отрицательное число)
//     if (crElem === nxElem) return 0
// }) 

// Более короткая форма записи
// Сортировка числе по возрастанию
// a.sort((crElem, nxElem) => crElem - nxElem)

// // Сортировка числе по убыванию
// a.sort((crElem, nxElem) => nxElem - crElem)
                            
// console.log(a)


// --------------------------------
// Задача 1

// let employees = [
//     {id: 4, name: 'Steven'},
//     {id: 2, name: 'Neena'},
//     {id: 1, name: 'Johnie'},
//     {id: 3, name: 'Kingsman'},
//     {id: 5, name: 'Anna'},
// ]

// Отсортировать массив по id (возрастанию)
// Решение 1
// employees.sort((crElem, nxElem) => {
//     if (crElem.id > nxElem.id) return 1
//     if (crElem.id < nxElem.id) return -1
//     if (crElem.id === nxElem.id) return 0
// })

// Решение 2
// employees.sort((crElem, nxElem) => crElem.id - nxElem.id)

// ---------
// Доп. задание. Отсортировать по именам

// employees.sort((crElem, nxElem) => {
//     if (crElem.name > nxElem.name) return 1
//     if (crElem.name < nxElem.name) return -1
//     if (crElem.name === nxElem.name) return 0
// })
// console.log(employees)


// -----------------------
// Задача 2

// Отсортироуйте массив по длине строки

// employees.sort((crElem, nxElem) => {
//     if (crElem.name.length > nxElem.name.length) return 1
//     if (crElem.name.length < nxElem.name.length) return -1
//     if (crElem.name.length === nxElem.name.length) return 0
// })

// employees.sort((crElem, nxElem) => crElem.name.length - nxElem.name.length)
// console.log(employees)


// -------------------------------------------
// reduce - метод, который позволяет решать агрегационные задачи
// Возвращает итоговое значение акуумулятора

// Задача: посчитать сумму всех элементов

// let a = [10,50,30,40,50,10]

// ----
// let summ = 0
// for (let i = 0; i < a.length; i++){
//     summ = summ * a[i]
// }
// console.log(summ)

// ------
// решение этой же задачи через reduce

// let result = a.reduce((summ, elem) => summ * elem)

// console.log(result)

// ------------------------
// let goods = [
//     {id: 1, title: 'велосипед', price: 500},
//     {id: 2, title: 'самокат', price: 200},
//     {id: 3, title: 'ролики', price: 300},
//     {id: 4, title: 'ракетки', price: 900},
// ]

// ----
// let summ = 0
// for (let i = 0; i < goods.length; i++){
//     summ = summ + goods[i].price
// }
// console.log(summ)
// ----
// let result = goods.reduce((summ, elem) => summ + elem.price,0)
//-----

// console.log(result)

// -----------------------------
// Задача: найти среднее значение цены товаров массива goods

let goods = [
    {id: 3, title: 'ролики', price: 300},
    {id: 4, title: 'ракетки', price: 900},
    {id: 1, title: 'велосипед', price: 500},
    {id: 2, title: 'самокат', price: 200},
]

// среднее значение всех товаров
// let result = goods.reduce((avg, elem) => avg + elem.price / goods.length, 0)

// сумма товаров, которые начинаются на "р"
// let result = goods.reduce((sum, elem) => (elem.title[0] == 'р') ? sum + elem.price : sum, 0)

// console.log(result)

// elem.title[0]