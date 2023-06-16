# Part 1

## Prepare Layout

1. Remove flex styles from main in **app.css**
2. Import transactions from **data/transactions.js** into **App.svelte**
3. Build sums of income and expenses from transactions
4. Style `.stats` with
   - grid
   - two columns
   - .75 gap

## Add Stat Cards

1. Add 3 `.stat-card>.stat-icon+.stat-name+.stat-value`
2. Use money icon, "Balance" as name and sum of income and expenses as value for first .stat-card
3. Repeat for
   - rect arrow left icon, "Income" as name and income as value
   - rect arrow right icon, "Expense" as name and expenses as value
4. Style `.stat-card` with
   - grid
   - columns min-content auto
   - rows min-content 1fr
   - gap .75
   - padding 1
   - line-height 1
   - --border-radius
   - --card-background-color
   - --card-box-shadow
5. Style `.stat-icon` with
   - row 1 / -1
   - align self center
6. Style `.stat-name` with
   - font size .85
   - weight 500
7. Style `.stat-value` with
   - margin top .25
   - font size 1.5
   - weight 700

## Add Stat Table

1. Add table with columns
   - Cat.
   - Date
   - Title
   - Amount
2. Iterate transactions in table
   - map category name to emoji via `mapCategoryToEmoji`
3. Add `.amount` class to amount column
4. Add `.income` or `.expense` to amount class depending on transaction type
5. Style:
   - `.amount` > text right
   - `.income` > color --ins-color
   - `.expense`> color --del-color

## Exercise

Add the following filters for the displayed transactions:

- **All Time**: Displays all transactions
- **Monthly**: Displays only transactions in the current month
- **Weekly**: Displays only transactions in the current calendar week

When the filter is applied, it should be reflected in the Stat Cards as well as in the Stat Table. You are free to use functions from the modules within **src/lib** or just roll your own. How you implement the filter is up to you. The example app uses simple buttons.