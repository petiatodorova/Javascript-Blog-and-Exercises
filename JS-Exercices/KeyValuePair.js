function keyValuePair(arr) {
    let theKey = arr.pop();
    let result = {};
    for (let obj of arr) {
        let current = obj.split(' ');
        let curKey = current[0];
        let curValue = current[1];
        if(result[curKey] === undefined){
            result[curKey] = null;
        }
        result[curKey] = curValue;
    }
    if(theKey in result){
        console.log(result[theKey]);
    }else {
        console.log("None");
    }
}

keyValuePair([
    '3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '4'
]);

keyValuePair([
    '3 bla',
    '3 alb',
    '2'
]);

