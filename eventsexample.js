const EventEmitter = require('events'); // EventEmitter class

const emitter = new EventEmitter();

//addListener has alias called on.
emitter.on('messageLogged', function(){
    console.log('Listener is called');
})
//Emit means something like noise, and raise an alarm.
emitter.emit('messageLogged') ;

