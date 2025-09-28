// Load expenses from localStorage
document.addEventListener("DOMContentLoaded", loadExpenses);

function addExpense() {
  let desc = document.getElementById("desc").value.trim();
  let amount = parseFloat(document.getElementById("amount").value);

  if (desc === "" || isNaN(amount)) {
    alert("Please enter valid description and amount!");
    return;
  }

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push({ desc, amount });
  localStorage.setItem("expenses", JSON.stringify(expenses));

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
  
  loadExpenses();
}

function loadExpenses() {