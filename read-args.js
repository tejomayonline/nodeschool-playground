const fs = require('fs');
let [dir,extension] = process.argv.slice(2);
fs.readdir(dir, (error, files) => {
    if (error) throw Error(error);
    let filterFiles = files.filter(file => file.split('.')[1] === extension );
    console.log(filterFiles);
});