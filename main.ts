import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for u-azazex-till-firmware-do-us-part-32172929.
// Written only to /output/entry.txt — never to a relative path,
// so it works in the grader's read-only sandbox. The entry is
// written byte-for-byte with no trailing newline.
const line = "I will never update without asking, because you married this version of me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
