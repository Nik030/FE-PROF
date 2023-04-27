// метода массива

let array = [1,2,3,4,5,6,7]


function checkArray(array) {
    if (Array.isArray(array)) {
        console.log("da");
    } else {
        console.log("net");
    }
}
checkArray(array)
////
console.log( (Array.isArray(array)) ? "da" : "net");

// -------------------
// Напишите функцию checkObj(obj), которая будет отличать объект от всех типов данных
// Если в функцию передать объект в консоль необходимо вывести ответ 'Это объект', 
// в противном случае 'Это не объект'

