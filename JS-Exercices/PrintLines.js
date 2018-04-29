function printLines(lines) {
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] != "Stop") {
            console.log(lines[i]);
        } else {
            break;
        }
    }
}
printLines([
    "Line 1",
    "Line 2",
    "Line 3",
    "Stop"
]);

printLines([
    3,
    6,
    5,
    4,
    "Stop",
    10,
    12
]);