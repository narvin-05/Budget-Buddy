// Budgeting
let budget = 0;
let expenses = 0;

function updateBudget() {
  const budgetInput = document.getElementById("budgetInput").value;
  const expenseInput = document.getElementById("expenseInput").value;

  budget = parseFloat(budgetInput) || 0;
  expenses = parseFloat(expenseInput) || 0;

  document.getElementById("remainingBudget").innerText = `Remaining Budget: $${budget - expenses}`;
}

// Expense Tracking
let transactions = [];

function addTransaction() {
  const description = document.getElementById("expenseDescription").value;
  const amount = parseFloat(document.getElementById("expenseAmount").value);

  if (description && amount) {
    transactions.push({ description, amount });
    updateTransactionsList();
  }
}

function updateTransactionsList() {
  const list = document.getElementById("transactionsList");
  list.innerHTML = "";
  
  transactions.forEach((transaction, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${transaction.description}: $${transaction.amount}`;
    list.appendChild(listItem);
  });
}

// Goal Setting
let goals = [];

function addGoal() {
  const goal = document.getElementById("goalInput").value;

  if (goal) {
    goals.push(goal);
    updateGoalsList();
  }
}

function updateGoalsList() {
  const list = document.getElementById("goalsList");
  list.innerHTML = "";

  goals.forEach((goal, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = goal;
    list.appendChild(listItem);
  });
}
