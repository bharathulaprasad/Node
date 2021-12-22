
const logger=require('./logger');
function helloworld(name)
{
   console.log('Hello world ' + name); // global
   console.log(module);
}

helloworld('krishna ');
logger.log('Krishna ');

logger.memoryPrint();