# Expense Tracker  

A simple **mini-project** to track daily expenses. This project demonstrates modular programming, file storage, and version control with GitHub.  

---

## 🚀 Features  
- Add new expense with date, category, and amount  
- View all saved expenses  
- Search expenses by category  
- Display total expenditure report  

---

## 🛠️ Tech Used  
- **Language:** C  
- **Storage:** Text File (expenses.txt)  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure  
- `src/main.c` → Entry point of the project  
- `src/expense.c` & `expense.h` → Expense-related functions  
- `src/storage.c` & `storage.h` → File handling functions  
- `data/expenses.txt` → Stores expense records  

---

## ⚙️ How to Run  

### Compile  
```bash
gcc src/main.c src/expense.c src/storage.c -o expense_tracker
