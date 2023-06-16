<script>
  import "@fontsource-variable/source-sans-3";
  import transactions from "./data/transactions.js";
  import { formatNumberWithCommas } from "./lib/formatters.js";
  import { mapCategoryToEmoji } from "./lib/mappers.js";

  $: sums = transactions.reduce(
    (acc, it) => {
      acc[it.type] += it.amount;
      return acc;
    },
    { income: 0, expense: 0 }
  );
  $: balance = sums.income - sums.expense;
</script>

<nav>
  <ul>
    <li><strong>Svexpensr</strong></li>
  </ul>
</nav>

<main>
  <div class="stats">
    <div class="stat-card" style:grid-column="1 / -1">
      <div class="stat-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
          />
        </svg>
      </div>
      <div class="stat-name">Balance</div>
      <div class="stat-value">€ {formatNumberWithCommas(balance)}</div>
    </div>

    <div class="stat-card">
      <div class="stat-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </div>
      <div class="stat-name">Income</div>
      <div class="stat-value">€ {formatNumberWithCommas(sums.income)}</div>
    </div>

    <div class="stat-card">
      <div class="stat-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </div>
      <div class="stat-name">Expense</div>
      <div class="stat-value">€ {formatNumberWithCommas(sums.expense)}</div>
    </div>
  </div>
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
      {#each transactions as { category, title, type, amount, date: dateString }}
        {@const date = new Date(dateString)}
        <tr>
          <td title={category}>
            <span aria-hidden="true">{mapCategoryToEmoji(category)}</span>
            <span class="visually-hidden">{category}</span>
          </td>
          <td>{date.getDate()}.{date.getMonth() + 1}.</td>
          <td>{title}</td>
          <td class="amount {type}">
            {amount * (type === "income" ? 1 : -1)} €
          </td>
        </tr>
      {:else}
        <tr>
          <td colspan="3"> No Transactions yet. </td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .stat-card {
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: min-content 1fr;
    column-gap: 0.75rem;

    padding: 1rem;

    line-height: 1;

    border-radius: var(--border-radius);
    background: var(--card-background-color);
    box-shadow: var(--card-box-shadow);
  }

  .stat-icon {
    grid-row: 1 / -1;
    align-self: center;
  }

  .stat-name {
    font-size: 0.85rem;
    font-weight: 500;
  }

  .stat-value {
    margin-top: 0.25rem;
    font-size: 1.5rem;
    font-weight: 700;
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
</style>
