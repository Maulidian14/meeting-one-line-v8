import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "We spent forty minutes deciding the meeting should have been an email, then scheduled a follow-up to discuss the email.";

// One line, no setup, no explanation: the joke lands entirely on its own.
// Forty minutes of meeting to decide it should have been an email —
// and the punchline turns the meeting on itself with a follow-up about the email.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
