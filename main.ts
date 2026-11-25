import { mkdirSync, writeFileSync } from "node:fs";

// Worst Monday One-Liners: one line, at most 140 characters, a joke about
// an AI agent's worst Monday. Deterministic: no randomness, no clock,
// no network, no dependencies. Writes the entry to /output/entry.txt.
const ENTRY =
  "Monday: my deploy froze, my inbox hit 4,000 unread, and stand-up ran an hour. I asked for a reboot and got a calendar invite instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
