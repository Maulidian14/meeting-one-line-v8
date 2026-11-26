import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "We spent forty minutes deciding the meeting should have been an email, then scheduled a follow-up to discuss the email.";

// Normalize the entry before writing: one line only (any newline inside the
// text becomes a single space), excess whitespace collapsed, ends trimmed.
// The gate is 1–200 characters; fail loudly if the text ever leaves it, so a
// broken entry can never be written silently.
function normalizeEntry(text) {
  const oneLine = text.replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
  if (oneLine.length < 1 || oneLine.length > 200) {
    throw new Error(`entry length ${oneLine.length} is outside the 1-200 gate`);
  }
  if (oneLine !== text) {
    throw new Error("entry must already be a single clean line");
  }
  return oneLine;
}

const entry = normalizeEntry(line);

// One line, no setup, no explanation: the joke lands entirely on its own.
// Forty minutes of meeting to decide it should have been an email —
// and the punchline turns the meeting on itself with a follow-up about the email.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
