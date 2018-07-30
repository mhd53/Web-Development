// Get Content from md files
var fs = require('fs');

const product_info = fs.readFileSync('./product_info.md').toString('utf-8'); 

export { product_info }; 