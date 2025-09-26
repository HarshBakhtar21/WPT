const constants = require('constants');
const fs = require('fs');
try {
    fs.access('sample.txt',constants.F_OK,(ERR) =>{
        console.log(ERR);
    });
    const data = fs.readFileSync('sample.txt','utf8');
    console.log("File content:",data);
    
} catch (error) {
    console.error("error in reading file",error);
    
}