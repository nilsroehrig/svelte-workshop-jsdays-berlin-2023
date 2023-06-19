import { writeFile } from "fs/promises";
import transactions from "./src/data/transactions.js";

await writeFile("./db.json", JSON.stringify({transactions}));
