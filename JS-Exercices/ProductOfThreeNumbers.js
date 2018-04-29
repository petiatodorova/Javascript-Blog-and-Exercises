function isPositiveOrNegative (arr) {
    let numbers = arr.map(Number);
    let countNegative = 0;
    for (let i = 0; i < 3; i++) {
        if (numbers[i] < 0) {
            countNegative++;
        }
    }
    if(countNegative % 2 === 0) {
        console.log("Positive");
    }
    else {
        console.log("Negative");
    }
}
isPositiveOrNegative([2, 3, -1]);
isPositiveOrNegative([5, 4, 3]);
isPositiveOrNegative([-3, -4, 5]);