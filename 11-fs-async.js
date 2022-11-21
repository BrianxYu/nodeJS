// asynchronous file access

const { readFile, writeFile } = require('fs');
console.log('start');

let first = '';
let second = '';

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    };
    first = result;
});

readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    };
    second = result;
});

writeFile(
    './content/result-async.txt',
    `Here is the result : ${first}, ${second}\n`,
    (err, result) => {
        if (err) {
            console.log(err);
            return;
        };
        console.log("done with this task")
    }
)

console.log('starting next task');