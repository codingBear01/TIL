const fs = require('fs');

const contents = 'hello\nbye\nėë';
fs.writeFile('./message.txt', contents);
