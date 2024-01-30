const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


console.log(first, second)
writeFileSync('./content/result-sync.txt', `This is the result of the first file ${first} and this is the result of the second file ${second}`);