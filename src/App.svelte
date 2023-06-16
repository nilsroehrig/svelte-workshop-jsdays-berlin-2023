<script>
  import "@fontsource-variable/source-sans-3";
  import transactions from "./data/transactions.js";
  import CreateTransaction from "./pages/CreateTransaction.svelte";
  import Overview from "./pages/Overview.svelte";

  let currentPage = "overview";
</script>

<nav>
  <ul>
    <li><strong>Svexpensr</strong></li>
  </ul>
</nav>

<main>
  {#if currentPage === "create_transaction"}
    <CreateTransaction {transactions} on:goto:overview={() => currentPage = "overview" }/>
  {:else}
    <Overview
      {transactions}
      on:goto:create-transaction={() => (currentPage = "create_transaction")}
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
