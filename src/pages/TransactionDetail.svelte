<script>
  import { createEventDispatcher } from "svelte";
  import Headline from "../components/Headline.svelte";
  import StatCard from "../components/StatCard.svelte";
  import Calendar from "../components/icons/Calendar.svelte";
  import Money from "../components/icons/Money.svelte";
  import Tag from "../components/icons/Tag.svelte";
  import Trash from "../components/icons/Trash.svelte";
  import { capitalize, formatNumberWithCommas, prettifyDate } from "../lib/formatters";
  import { mapCategoryToEmoji } from "../lib/mappers";

  const dispatch = createEventDispatcher();
  export let transaction;
</script>

<Headline
  title={transaction.title}
  backButtonCallback={() => dispatch("goto:overview")}
/>

<div class="stats">
  <StatCard
    name="Amount"
    value="€ {formatNumberWithCommas(transaction.amount)}"
  >
    <Money />
  </StatCard>
  <StatCard name="Type" value={capitalize(transaction.type)}>
    <Money />
  </StatCard>
  <StatCard
    name="Category"
    value="{transaction.category} {mapCategoryToEmoji(transaction.category)}"
    class="grid-column-all"
  >
    <Tag />
  </StatCard>
  <StatCard name="Date" value={prettifyDate(transaction.date)} class="grid-column-all">
    <Calendar />
  </StatCard>
</div>

<button
  type="button"
  on:click={() => dispatch("transaction:remove", { id: transaction.id })}
>
  <Trash />
  Remove Transaction
</button>

<style>
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-top: 2rem;
  }

  button {
    margin-top: 2rem;
  }
</style>
