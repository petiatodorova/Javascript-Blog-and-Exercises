function printReverse(arr) {
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printReverse([
    10,
    15,
    20
]);

printReverse([
    5,
    5.5,
    24,
    -3
]);