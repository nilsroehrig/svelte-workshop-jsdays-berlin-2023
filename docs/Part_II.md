# Part II

## Component Extraction

1. Extract Overview Page into **lib/pages/Overview.svelte**
2. Extract stat cards StatCard into **lib/components/StatCard.svelte**
3. Talk about alternatives to style single stat card
   - provide inline styles
   - provide class via :global modifier
   - use global (utility) class
4. Add utility class `.grid-column-all` to **app.css**
5. Use $$restProps.class on StatCard root element
6. Apply `.grid-column-all` to first StatCard
7. Extract money icon svg into **lib/components/icons/Money.svelte** as en example

## Add New Transaction

1. Add **pages/CreateTransaction.svelte** component
2. Add `{#if}{:else}{/if}` branches for overview and create transaction pages to **App.svelte**
3. Add variable `currentPage="create_transaction"`
4. Add `<form>` for creation of new transactions:
   - title -> text input
   - amount -> text input
   - type -> select (income, expense)
   - category -> select (import categories)
   - date -> date input
   - submit button
5. Add function `createTransaction`
   - read FormData from `<form>` element
   - create new transaction object with data from form and id: `crypto.randomUUID()`
   - push to transactions
   - dispatch `goto:overview` event
6. React to event in **App.svelte** by setting `currentPage="overview"`
7. In **pages/Overview.svelte**, add action bar
   - add button to change to creation page
   - dispatch `goto:create_transaction`
   - React to event in **App.svelte**
8. In **App.svelte**, set initialization of `currentPage` to `overview`

## Exercise

Create a detail page for transactions. It should display all Information that is available on a transaction with the exception of the ID. Clicking on a transaction in the transaction table on the overview page should lead to said detail page. The detail page should provide an option to delete the transactions entirely.