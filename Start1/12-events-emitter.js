const EventsEmitter = require('events');

const customEmitter = new EventsEmitter();

customEmitter.on('response', () => {
    console.log('Response received');
})

customEmitter.emit('response');