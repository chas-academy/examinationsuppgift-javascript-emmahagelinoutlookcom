

const desc = document.querySelector("#desc");
const amount = document.querySelector("#amount")

const addIncome = document.querySelector("#incomeBtn");
const addExpense = document.querySelector("#expenseBtn")

const incomeList = document.querySelector("#incomeList");
const expenseList = document.querySelector("#expenseList")

const balanceSum = document.querySelector("#balance")

let balance = 0;

function updateBalance() {
    balanceSum.textContent = balance
}

addIncome.addEventListener("click", () => {
    const description = desc.value;
    const money = amount.value;

    // Om fältet är tomt, visa ett felmeddelande
    if (description === "" || money === "") {
        console.log("Fältet är tomt. Vänligen fyll i alla fält.");
        return;
    }

    // Om beloppet inte är ett nummer, visa ett felmeddelande
 if (isNaN(money)) {
    return console.log("Beloppet måste vara ett nummer.");
 }
 
const incomeLi = document.createElement("li");
incomeLi.textContent = description + " - " + money + " kr \(Inkomst\)/";
incomeList.appendChild(incomeLi);

balance = balance + Number(money); // Ni kanske skrev fel i instruktionerna, det står minus för båda men det blir fel
updateBalance();

desc.value = "";
amount.value = "";

})

// Uppdatera listor

addExpense.addEventListener("click", () => {
    const description = desc.value;
    const money = amount.value;

    // Om fältet är tomt, visa ett felmeddelande
    if (description === "" || money === "") {
        console.log("Fältet är tomt. Vänligen fyll i alla fält.");
        return;
    }

    // Om beloppet inte är ett nummer, visa ett felmeddelande
 if (isNaN(money)) {
    return console.log("Beloppet måste vara ett nummer.");
 }

const expenseLi = document.createElement("li");

expenseLi.textContent = description + " - " + money + " kr \(Utgift\)/";
expenseList.appendChild(expenseLi);

balance = balance - Number(money);
updateBalance();

desc.value = "";
amount.value = "";

})



