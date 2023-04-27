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