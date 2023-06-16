<script>
  import { formatNumberWithCommas } from "../lib/formatters.js";

  export let name;
  export let value;
</script>

<div class="stat-card {$$restProps.class}">
  <div class="stat-icon">
    <slot />
  </div>
  <div class="stat-name">{name}</div>
  <div class="stat-value">{value}</div>
</div>

<style>
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
</style>
