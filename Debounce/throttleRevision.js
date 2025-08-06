function throttle(fn, delay){
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        // this will not true for first call
        if(now - lastCall < delay){
            return;
        }
        // if lastcall is more than delay now
        lastCall = now;
        return fn(...args);
    }
}

function sendChatMessage(message){
    console.log('Sending Message ', message);
}

// sendChatMessage('Hi');
// sendChatMessage('Hello');
// sendChatMessage('Hello ji');
// sendChatMessage('sir ji next cohort kab hoga');
// sendChatMessage('sir ji discount on course');

// enabling slow mode
const sendChatMessageWithSlowMode =  throttle(sendChatMessage, 2 * 1000);
// throttle returns the throttle verison of sendChatMessage


sendChatMessageWithSlowMode('Hi');
sendChatMessageWithSlowMode('Hello');
sendChatMessageWithSlowMode('Hello ji');
sendChatMessageWithSlowMode('sir ji next cohort kab hoga');
sendChatMessageWithSlowMode('sir ji discount on course');
