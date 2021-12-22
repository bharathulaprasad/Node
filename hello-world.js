
const log=require('./logger');
function helloworld(name)
{
   console.log('Hello world ' + name); // global
   console.log(module);
}

helloworld('krishna ');
log('Krishna ');

