function setValuesToIndexes(arr) {
    let theLength = Number(arr[0]);
    let arrNumbers = new Array(theLength).fill(0);
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i].toString().split(new RegExp(" - ")).map(Number);
        let index = current[0];
        if (index >= 0 && index < theLength) {
            arrNumbers[index] = current[1];
        }
    }

    for (let j = 0; j < arrNumbers.length; j++) {
        console.log(arrNumbers[j]);
    }
}


setValuesToIndexes(["3",
    "0 - 5",
    "1 - 6",
    "2 - 7"
]);

setValuesToIndexes([
    "2",
    "0 - 5",
    "0 - 6",
    "0 - 7"
]);

setValuesToIndexes([
    "5",
    "0 - 3",
    "3 - -1",
    "4 - 2"
]);
