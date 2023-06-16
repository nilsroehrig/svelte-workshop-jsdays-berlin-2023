<script lang="ts">
  import ArrowLeft from "./icons/ArrowLeft.svelte";

  export let backButtonCallback;
  export let title;
</script>

<div class="headline">
  {#if backButtonCallback}
    <button
      class="outline secondary back"
      type="button"
      on:click={backButtonCallback}
    >
      <span class="visually-hidden">Zurück</span>
      <ArrowLeft width={16} height={16} />
    </button>
  {/if}
  <h1>{title}</h1>
</div>

<style>
  h1 {
    font-size: 1.25rem;
    margin: 0;
    align-self: center;
  }

  .headline {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
  }

  .back {
    border: none;
    width: min-content;
    margin: 0;
  }
</style>
