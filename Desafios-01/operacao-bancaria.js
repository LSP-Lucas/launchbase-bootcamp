const user = {
    name: "Lucas",
    transactions: [],
    balance: 0,
};

// Criar novas transações e atualizar o atributo 'balance'.

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if(transaction.type === "credit") {
        user.balance += transaction.value;

    } else {
        user.balance -= transaction.value;

    }
}

// Retorna as transações de maior valor credit/debit.

function getHigherTransactionByType(type) {

    let higherTransaction;
    let higherValue = 0;

    for(let transaction of user.transactions) {

        if(transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value;
            higherTransaction = transaction;
        }
    }

    return higherTransaction;
}

// Média de transações realizadas.

function getAverageTransactionValue() {

    let sum = 0;

    for(let transaction of user.transactions) {
        sum += transaction.value;

    }

    return sum / user.transactions.length;
}

// Retorna um objeto contendo o total de transações credit/debit

function getTransactionsCount() {

    let creditCont = 0;
    let debitCont = 0;

    for(let transaction of user.transactions) {

        if(transaction.type == "credit") {
            creditCont += 1;
        }

        if(transaction.type == "debit") {
            debitCont += 1;
        }

    }

    return(user.occurrence = {credit: creditCont, debit: debitCont});
}


createTransaction({type: "credit", value: 50});
createTransaction({type: "credit", value: 100});
createTransaction({type: "credit", value: 50});
createTransaction({type: "debit", value: 50});
createTransaction({type: "debit", value: 60});



console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());

console.log(user);