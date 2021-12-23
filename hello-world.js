
const logger=require('./logger');
const fs=require('fs');
const { Console } = require('console');
function helloworld(name)
{
   console.log('Hello world ' + name); // global
   console.log(module);
}

helloworld('krishna ');
logger.log('Krishna ');

logger.memoryPrint();

// read current directory in asynchronous way
fs.readdir('./', function(err,files) {
   if(err) console.log('Error',error);
   else console.log('Files', files);

});