<script>
  import { createEventDispatcher } from "svelte";
  import Headline from "../components/Headline.svelte";
  import { toISO8601Date } from "../lib/formatters";
  import { categories, mapCategoryToEmoji } from "../lib/mappers";
  export let transactions;

  const dispatch = createEventDispatcher();

  let typeValue;
  let categoryValue;

  function addTransaction(event) {
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const amount = Number(formData.get("amount"));
    const type = formData.get("type");
    const category = formData.get("category");
    const date = toISO8601Date(new Date(String(formData.get("date"))));

    transactions.push({
      id: crypto.randomUUID(),
      title,
      amount,
      type,
      category,
      date,
    });
    gotoOverview();
  }

  function gotoOverview() {
    dispatch("goto:overview");
  }
</script>

<Headline title="Add Transaction" backButtonCallback={gotoOverview} />

<form action="#" method="post" on:submit|preventDefault={addTransaction}>
  <label class="grid-column-all">
    <span class="visually-hidden">Title:</span>
    <input type="text" name="title" placeholder="Enter title..." required />
  </label>
  <label class="grid-column-all">
    <span class="visually-hidden">Amount:</span>
    <input type="text" name="amount" placeholder="Enter amount..." required />
  </label>
  <label>
    <span class="visually-hidden">Type:</span>
    <select
      name="type"
      required
      bind:value={typeValue}
      class:muted={!typeValue}
    >
      <option disabled selected value={null}>Choose type...</option>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
  </label>
  <label>
    <span class="visually-hidden">Category:</span>
    <select
      name="category"
      bind:value={categoryValue}
      class:muted={!categoryValue}
    >
      <option disabled selected value={null}>Choose category...</option>
      {#each categories as category}
        <option value={category}
          >{mapCategoryToEmoji(category)} {category}</option
        >
      {/each}
    </select>
  </label>
  <label class="grid-column-all">
    <span class="visually-hidden">Date:</span><input
      type="date"
      name="date"
      required
    />
  </label>
  <button type="submit" class="grid-column-all">Create transaction</button>
</form>

<style>
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
  }

  .muted {
    color: var(--muted-color);
  }
</style>
