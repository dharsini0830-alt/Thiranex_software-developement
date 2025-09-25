//expense tracker
#include <stdio.h>
#include <stdlib.h>
#include "expense.h"

int main() {
    int choice;

    while (1) {
        printf("\n====== Expense Tracker ======\n");
        printf("1. Add Expense\n");
        printf("2. View Expenses\n");
        printf("3. Search by Category\n");
        printf("4. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                addExpense();
                break;
            case 2:
                viewExpenses();
                break;
            case 3:
                searchExpense();
                break;
            case 4:
                printf("👋 Exiting... Goodbye!\n");
                exit(0);
            default:
                printf("❌ Invalid choice! Try again.\n");
        }
    }
    return 0;
}
//expense.h
#ifndef EXPENSE_H
#define EXPENSE_H

typedef struct {
    char date[20];
    char category[30];
    float amount;
} Expense;

void addExpense();
void viewExpenses();
void searchExpense();

#endif
#ifndef STORAGE_H
#define STORAGE_H

#include "expense.h"

void saveExpense(Expense e);
void loadExpenses();

#endif
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "expense.h"
#include "storage.h"

void addExpense() {
    Expense e;
    printf("\nEnter Date (DD/MM/YYYY): ");
    scanf("%s", e.date);
    printf("Enter Category: ");
    scanf("%s", e.category);
    printf("Enter Amount: ");
    scanf("%f", &e.amount);

    saveExpense(e);
    printf("✅ Expense added successfully!\n");
}

void viewExpenses() {
    FILE *file = fopen("data/expenses.txt", "r");
    if (!file) {
        printf("⚠️ No expenses found!\n");
        return;
    }

    Expense e;
    printf("\n📋 Expense Records:\n");
    printf("----------------------------------------\n");
    while (fscanf(file, "%s %s %f", e.date, e.category, &e.amount) != EOF) {
        printf("Date: %s | Category: %s | Amount: %.2f\n", e.date, e.category, e.amount);
    }
    fclose(file);
}

void searchExpense() {
    char searchCategory[30];
    printf("\nEnter category to search: ");
    scanf("%s", searchCategory);

    FILE *file = fopen("data/expenses.txt", "r");
    if (!file) {
        printf("⚠️ No expenses found!\n");
        return;
    }

    Expense e;
    int found = 0;
    while (fscanf(file, "%s %s %f", e.date, e.category, &e.amount) != EOF) {
        if (strcmp(e.category, searchCategory) == 0) {
            printf("Date: %s | Category: %s | Amount: %.2f\n", e.date, e.category, e.amount);
            found = 1;
        }
    }

    if (!found)
        printf("❌ No expenses found for category: %s\n", searchCategory);

    fclose(file);
}
#include <stdio.h>
#include "storage.h"

void saveExpense(Expense e) {
    FILE *file = fopen("data/expenses.txt", "a");
    if (!file) {
        printf("❌ Error opening file!\n");
        return;
    }
    fprintf(file, "%s %s %.2f\n", e.date, e.category, e.amount);
    fclose(file);
}

void loadExpenses() {
    FILE *file = fopen("data/expenses.txt", "r");
    if (!file) {
        printf("⚠️ No expenses found!\n");
        return;
    }

    Expense e;
    printf("\n📋 All Expenses:\n");
    while (fscanf(file, "%s %s %f", e.date, e.category, &e.amount) != EOF) {
        printf("Date: %s | Category: %s | Amount: %.2f\n", e.date, e.category, e.amount);
    }
    fclose(file);
}
