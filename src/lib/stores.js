import { writable } from "svelte/store";

export function createTransactionStore(transactions = []) {
  const { subscribe, update } = writable(transactions);

  return {
    subscribe,
    add: (transaction) =>
      update((transactions) => [...transactions, transaction]),
    remove: (transaction) =>
      update((transactions) => transactions.filter((t) => t !== transaction)),
  };
}
