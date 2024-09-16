"use strict";
function invertedArray(arrayData) {
    return arrayData.slice().reverse();
}
const arrayNumbers = [1, 2, 3, 4, 5];
const invertedArrayNumbers = invertedArray(arrayNumbers);
console.log(invertedArrayNumbers);
console.log(arrayNumbers);
const arrayStrings = ["Teste1", "Teste2", "Teste3", "Teste4"];
const invertedArrayStrings = invertedArray(arrayStrings);
console.log(invertedArrayStrings);
console.log(arrayStrings);
