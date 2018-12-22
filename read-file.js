const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf-8');
console.log(fileContent.split('\n').length);

// async read file

fileContent = fs.readFile('input.txt', 'utf-8',(err, data) => {
    if (err) throw new Error(err); 
    console.log(data.split('\n').length);
});

console.log(process.argv);