import "@picocss/pico";
import App from "./App.svelte";
import "./app.css";
import importedTransactions from "./data/transactions";
import { createTransactionStore } from "./lib/stores";

const TRANSACTION_STORAGE_KEY = "svexpensr:transactions";

const storageItem = localStorage.getItem(TRANSACTION_STORAGE_KEY);
const storedTransactions = storageItem
  ? JSON.parse(storageItem)
  : importedTransactions;

const transactionStore = createTransactionStore(storedTransactions);

transactionStore.subscribe((estimations) => {
  localStorage.setItem(TRANSACTION_STORAGE_KEY, JSON.stringify(estimations));
});

const app = new App({
  target: document.getElementById("app"),
  context: new Map([["transactions", transactionStore]]),
});

export default app;
