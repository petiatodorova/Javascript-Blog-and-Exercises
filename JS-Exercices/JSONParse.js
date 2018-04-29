function JsonParse(arr) {
    let result = [];
    for (let obj of arr) {
        let current = JSON.parse(obj);
        result.push(current);
    }
    for (let person of result) {
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Date: ${person.date}`);
    }
}
JsonParse([
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
]);