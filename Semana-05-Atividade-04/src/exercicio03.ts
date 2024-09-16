function invertedArray<Generic extends number | string>(arrayData: Generic[]): Generic[] {
    return arrayData.slice().reverse();
}

const arrayNumbers: number[] = [1,2,3,4,5];
const invertedArrayNumbers = invertedArray(arrayNumbers);

console.log(invertedArrayNumbers)
console.log(arrayNumbers)

const arrayStrings: string[] = ["Teste1", "Teste2", "Teste3", "Teste4"];
const invertedArrayStrings = invertedArray(arrayStrings);

console.log(invertedArrayStrings)
console.log(arrayStrings)