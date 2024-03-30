function proceed(){
    let balance = 1000;
    let amount = parseFloat(document.getElementById("account").value);
    let transaction = document.getElementById("transaction-type").value;

    if (transaction === "withdraw") {
        if (amount > balance) {
            alert("Error: Insufficient funds");
        }
        else {
            balance -= amount;
            // alert("$" + amount + "withdrawn successfully");
        }
    }
    else if (transaction === "deposit") {
        balance += amount;
        // alert("$" + amount + "Deposited successfully");
    }
    document.querySelector("h3").textContent = "Bank balance: $" + balance;
}


//Another solution to credit/debit app

// let accountBalance = 1000; // global scope
// function performTransaction() {
//   const transactionAmount = parseInt(document.getElementById("amount").value);
//   const transactionType = document.getElementById("transaction-type").value;

//   if (transactionAmount > accountBalance && transactionType == "withdraw") {
//     alert("Insufficient balance");
//     //return;
//   } else if (transactionType === "withdraw") {
//     accountBalance -= transactionAmount;
    // document.getElementById("acc-bal").innerText = `$${accountBalance}`;
//     document.getElementById("amount").value = "";
//   } else {
//     accountBalance += transactionAmount;
//     document.getElementById("acc-bal").innerText = $${accountBalance};
//     document.getElementById("amount").value = "";
//   }
// }
