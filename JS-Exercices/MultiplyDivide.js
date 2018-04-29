function multiplyDivide(arr) {
    let numbers = arr.map(Number);
    let n = numbers[0];
    let x = numbers[1];
    if(x >= n && (x != 0)){
        console.log(n * x);
    } else {
        console.log(n / x);
    }
}

multiplyDivide([2,3]);
multiplyDivide([13,13]);
multiplyDivide([3,2]);
multiplyDivide([144,12]);