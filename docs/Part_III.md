# Part III

## Move Transactions to Writable Store

1. Import transactions and writable factory in **main.js**
2. Create new writable store with transactions as initial value
3. Add transaction store to context with key `transactions`
4. In **App.svelte**, get transactions from context instead of import
5. Change occurrences of transactions to $transactions because it is a store now
6. Remove transactions prop from Overview component
7. In **pages/Overview.svelte** change transaction prop to context usage
8. Change all occurrences of transactions to $transactions because it is a store now
9. In **App.svelte**, remove transactions prop from CreateTransaction component
10. In **pages/CreateTransactions.svelte**, get transactions from store instead of prop
11. Change all occurrences of transactions to $transactions because it is a store now

## Use a Custom Store

1. Create new file **lib/stores.js**
2. Add `createTransactionStore` factory
3. Declare `add` and `remove` methods on transaction store
4. In **main.js**, create transaction store and put it in context
5. In **pages/CreateTransaction.svelte**, use `add` method instead of pushing to store
6. In **pages/TransactionDetail.svelte**, get transactions from context
7. Use `remove` method instead of `transaction:remove` event
8. Dispatch additional `goto:overview` event
9. In **App.svelte**, remove traces of event based transaction removal

## Exercise

Build a mechanic that takes care of synchronising the transactions to the browsers local storage.

Remember that stores can be subscribed to.