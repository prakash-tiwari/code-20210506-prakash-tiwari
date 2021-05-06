const fs = require('fs')
const path = './src/inputVal.json';

const content = fs.readFileSync(
    path,
    'utf-8', // return type=string
);

export const config = JSON.parse(
    content,
);
