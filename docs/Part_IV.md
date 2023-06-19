# Part IV

# Replace Store with JSON Server

1. Run init script
2. In **main.js**, remove local storage logic, store initialization and context setting
3. In **pages/Overview.svelte**, remove store from Overview
   1. Write function to fetch transactions
   2. Create funtcion `calculateSums(transactions)` and move sums calculation into it
   3. Change `applyFilter` to take transactions as an argument
   4. Replace reactive statements with local constants and `{#await}` block
   5. Use `applyFilter` with local constant
4. In **pages/CreateTransaction.svelte**, replace call of `add` method with `fetch`
   - Remember setting `Content-Type: application/json`
5. In **pages/TransactionDetail.svelte**, replace call of `remove` method with `fetch`

# Transitions

1. In **pages/Overview.svelte**, Increase the width of the title column in the table to 100%
2. Import `fade` from **svelte/motion**
3. Apply fade to table rows

# Exercise

Add a visualization of income and expenses using Chart.js, which is already added as a dependency. Try to make use of Svelte Actions to apply Chart.js to it's container element. Other than that, it's up to you. Feel free to use any Chart type you like and figure out where to put your visualization by yourself.
