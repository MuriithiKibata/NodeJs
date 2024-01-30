const { log } = require('console');
const path = require('path');

const filePath = path.join('/content', 'subfolder', 'text.txt')

console.log(filePath)

const base = path.basename(filePath)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')

console.log(absolute)