function turnObjIntoJsonString(arr) {
    let person = {};
    for (let obj of arr) {
        let current = obj.split(" -> ");
        let key = current[0];
        let val = current[1];
        if (!isNaN(val)) {
            val = Number(val);
        }
        person[key] = val;
    }
    console.log(JSON.stringify(person));
}

turnObjIntoJsonString([
    'name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'
]);