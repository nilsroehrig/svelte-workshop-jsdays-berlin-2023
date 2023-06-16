<script>
  import "@fontsource-variable/source-sans-3";
  import rawTransactions from "./data/transactions.js";
  import CreateTransaction from "./pages/CreateTransaction.svelte";
  import Overview from "./pages/Overview.svelte";
  import TransactionDetail from "./pages/TransactionDetail.svelte";

  let currentPage = "overview";
  let transaction;
  let transactions = rawTransactions;

  function removeTransaction(id) {
    transactions = transactions.filter((transaction) => transaction.id !== id);
    currentPage = "overview";
  }
</script>

<nav>
  <ul>
    <li><strong>Svexpensr</strong></li>
  </ul>
</nav>

<main>
  {#if currentPage === "create_transaction"}
    <CreateTransaction
      {transactions}
      on:goto:overview={() => (currentPage = "overview")}
    />
  {:else if currentPage === "transaction_detail"}
    <TransactionDetail
      {transaction}
      on:goto:overview={() => (currentPage = "overview")}
      on:transaction:remove={(event) => removeTransaction(event.detail.id)}
    />
  {:else}
    <Overview
      {transactions}
      on:goto:create_transaction={() => (currentPage = "create_transaction")}
      on:goto:transaction_detail={(event) => {
        currentPage = "transaction_detail";
        transaction = event.detail.transaction;
      }}
    />
  {/if}
</main>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: thin solid var(--muted-border-color);
    margin-bottom: 1rem;
  }
</style>
