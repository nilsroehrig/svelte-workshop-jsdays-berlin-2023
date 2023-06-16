<script>
  import { createEventDispatcher, getContext } from "svelte";
  import StatCard from "../components/StatCard.svelte";
  import ArrowRectLeft from "../components/icons/ArrowRectLeft.svelte";
  import ArrowRectRight from "../components/icons/ArrowRectRight.svelte";
  import Money from "../components/icons/Money.svelte";
  import Plus from "../components/icons/Plus.svelte";
  import {
    byMonth,
    byWeek,
    getCalendarWeek,
    sortByDateDesc,
  } from "../lib/dates.js";
  import { formatNumberWithCommas } from "../lib/formatters";
  import { mapCategoryToEmoji } from "../lib/mappers.js";

  const dispatch = createEventDispatcher();
  const transactions = getContext("transactions");

  let filter = "alltime";

  $: filteredTransactions = applyFilter(filter).sort(sortByDateDesc);
  $: sums = filteredTransactions.reduce(
    (acc, it) => {
      acc[it.type] += it.amount;
      return acc;
    },
    { income: 0, expense: 0 }
  );
  $: balance = sums.income - sums.expense;

  function applyFilter(filter) {
    if (filter === "month") {
      return $transactions.filter(byMonth(new Date().getMonth()));
    }

    if (filter === "week") {
      return $transactions.filter(byWeek(getCalendarWeek(new Date())));
    }

    return $transactions;
  }
</script>

<div class="stats">
  <ul class="stat-filters">
    <li>
      <button
        type="button"
        class:outline={filter !== "alltime"}
        class="secondary"
        on:click={() => (filter = "alltime")}>All time</button
      >
    </li>
    <li>
      <button
        type="button"
        class:outline={filter !== "month"}
        class="secondary"
        on:click={() => (filter = "month")}>Monthly</button
      >
    </li>
    <li>
      <button
        type="button"
        class:outline={filter !== "week"}
        class="outline secondary"
        on:click={() => (filter = "week")}>Weekly</button
      >
    </li>
  </ul>
  <StatCard
    name="Balance"
    value="€ {formatNumberWithCommas(balance)}"
    class="grid-column-all"
  >
    <Money />
  </StatCard>
  <StatCard name="Income" value="€ {formatNumberWithCommas(sums.income)}">
    <ArrowRectLeft />
  </StatCard>

  <StatCard name="Expenses" value="€ {formatNumberWithCommas(sums.expense)}">
    <ArrowRectRight />
  </StatCard>
</div>
<div class="transaction-container">
  <table class="transactions">
    <thead>
      <tr>
        <th>Cat.</th>
        <td>Date</td>
        <th>Title</th>
        <th class="amount">Amount</th>
      </tr>
    </thead>
    <tbody>
      {#each filteredTransactions as transaction}
        {@const date = new Date(transaction.date)}
        <tr
          on:click={() => dispatch("goto:transaction_detail", { transaction })}
        >
          <td title={transaction.date}>
            <span aria-hidden="true"
              >{mapCategoryToEmoji(transaction.category)}</span
            >
            <span class="visually-hidden">{transaction.category}</span>
          </td>
          <td>{date.getDate()}.{date.getMonth() + 1}.</td>
          <td>{transaction.title}</td>
          <td class="amount {transaction.type}">
            {transaction.amount * (transaction.type === "income" ? 1 : -1)} €
          </td>
        </tr>
      {:else}
        <tr>
          <td colspan="3"> No Transactions yet. </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div class="action-bar">
  <button type="button" on:click={() => dispatch("goto:create_transaction")}>
    <Plus />
  </button>
</div>

<style>
  tbody td {
    cursor: pointer;
  }
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .stat-filters {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.75rem;
    grid-column: 1 / -1;
  }

  .stat-filters li {
    list-style: none;
    flex: 1;
    margin: 0;
  }

  .transaction-container {
    padding-bottom: 6.5rem;
  }
  .transactions {
    margin-top: 1rem;
  }

  .amount {
    text-align: right;
  }

  .income {
    color: var(--ins-color);
  }

  .expense {
    color: var(--del-color);
  }

  .action-bar {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem 0;
    backdrop-filter: blur(1rem);
    box-shadow: var(--card-box-shadow);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .action-bar button {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
  }
</style>
