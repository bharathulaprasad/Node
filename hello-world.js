
var logger = require('./logger')
function helloworld(name)
{
   console.log('Hello world ' + name) // global
   console.log(module)
}

helloworld('krishna')
console.log(logger)
logger.log('Krishna ')