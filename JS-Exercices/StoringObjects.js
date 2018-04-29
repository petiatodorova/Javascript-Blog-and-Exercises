function storingObjects(arr) {
    let result = [];
    for (let obj of arr) {
        let current = obj.split(" -> ");
        let curObj = {};
        curObj['name'] = current[0];
        curObj['age'] = current[1];
        curObj['grade'] = current[2];
        
        result.push(curObj);
    }
    for (let obj of result) {
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Grade: ${obj.grade}`);
    }
}

storingObjects([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90'
]);