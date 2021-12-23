const EventEmitter = require('events'); // EventEmitter class

const emitter = new EventEmitter();

//addListener has alias called on.
emitter.on('messageLogged', (arg) => {
    console.log('Listener is called', arg);
})
//Emit means something like noise, and raise an alarm.
emitter.emit('messageLogged',{id:1, url: 'http://google.com'}) ;

