import "@picocss/pico";
import App from "./App.svelte";
import "./app.css";
import importedTransactions from "./data/transactions";
import { createTransactionStore } from "./lib/stores";

const transactionStore = createTransactionStore(importedTransactions);

const app = new App({
  target: document.getElementById("app"),
  context: new Map([["transactions", transactionStore]]),
});

export default app;
