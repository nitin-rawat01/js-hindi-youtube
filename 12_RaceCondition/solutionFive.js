// 5. Mutex-like Structures (Conceptual):
// While JavaScript doesn't have built-in-mutexes, you can implement a conceptual "lock" usign flags or queues to ensure only one asynchronous operation modified the shared resources at a time.

let isProcessing = false;
let dataQueue = [];

async function processData(data){
    dataQueue.push(data);
    if(isProcessing){
        return; // Already processing, new Data will be hanlded in order
    }
    isProcessing = true;
    while (dataQueue.length > 0){
    console.log(dataQueue);
        let currentData = dataQueue.shift();
        console.log(`Processing Current Data ${currentData}`);
        await new Promise(resolve => setTimeout(resolve, 1000 ));
    }
    isProcessing = false;
    console.log('Finished processesing all data queue');

}


processData("item 1");
processData("item 2");
processData("item 3");


