// slow mode enabled
function throttle(fn, delay){
    let lastCall = 0;

    return function(...args){
        const now = Date.now();
        if(now - lastCall < delay){
            return;
        }
        lastCall = now;
        return fn(...args); 
    }

}
function sendChatMessage(message){
    console.log('Sending message', message);
}
// sendChatMessage('Hi');
// sendChatMessage('Hello');
// sendChatMessage('Hello ji');
// sendChatMessage('sir ji next cohort kab hoga');
// sendChatMessage('sir ji discount on course');

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

sendChatMessageWithSlowMode('Hi');// only this get executed
sendChatMessageWithSlowMode('Hello'); // ignored all other messages
sendChatMessageWithSlowMode('Hello ji');
sendChatMessageWithSlowMode('sir ji next cohort kab hoga');
sendChatMessageWithSlowMode('sir ji discount on couse'); 

