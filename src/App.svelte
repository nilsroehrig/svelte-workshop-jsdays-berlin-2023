<script>
  import "@fontsource-variable/source-sans-3";
  import CreateTransaction from "./pages/CreateTransaction.svelte";
  import Overview from "./pages/Overview.svelte";
  import TransactionDetail from "./pages/TransactionDetail.svelte";

  let currentPage = "overview";
  let transaction;
</script>

<nav>
  <ul>
    <li><strong>Svexpensr</strong></li>
  </ul>
</nav>

<main>
  {#if currentPage === "create_transaction"}
    <CreateTransaction on:goto:overview={() => (currentPage = "overview")} />
  {:else if currentPage === "transaction_detail"}
    <TransactionDetail
      {transaction}
      on:goto:overview={() => (currentPage = "overview")}
    />
  {:else}
    <Overview
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
