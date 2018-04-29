function addRemove (args) {
    let arr = [];
    for (let obj of args) {
        let current = obj.split(' ');
        let command = current[0];
        let num = Number(current[1]);
        switch (command){
            case "add":
                arr.push(num);
                break;
            case "remove":
                arr.splice(num, 1);
                break;
        }
    }
    console.log(arr.join('\n'));
}

addRemove([
    'add 3',
    'add 5',
    'remove 2',
    'remove 0',
    'add 7'
]);