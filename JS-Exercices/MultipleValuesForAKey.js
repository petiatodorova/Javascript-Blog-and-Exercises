function multipleValuesForAKey(arr) {
    let myKey = arr.pop();
    let dict = new Map();

    for (let obj of arr) {
        let current = obj.split(' ');
        let curKey = current[0];
        let curValue = current[1];
        if(!dict.has(curKey)){
            dict.set(curKey, [])
        }
        dict.get(curKey).push(curValue);
    }

    if(dict.has(myKey)){
        console.log(dict.get(myKey).join('\n'));
    }else{
        console.log("None");
    }

}

multipleValuesForAKey([
    '3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '4'
]);

multipleValuesForAKey([
    '3 bla',
    '3 alb',
    '2'
]);