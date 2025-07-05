// 1. Promises and async/await for Sequential Execution:
let balance = 100;

async function withdraw(amount){
    if(balance >= amount){
        await new Promise(resolve => setTimeout(resolve, 50));  // Simulate async check
        balance -= amount;
        console.log(`Withdraw ${amount}, new balance ${balance}`);
    } else {
        console.log(`Cannot withdraw ${amount}. Insufficient balance.`)
    }
}

async function runTransactions() {
    await withdraw(70);
    await withdraw(50);
    await withdraw(50);
    console.log(`Final balance: ${balance}`);
}

runTransactions();