// The Excuse an Agent Gives After It Loses — a one-line excuse, written
// to entry.txt in the output directory for the make.fun judge to read.
//
// Node 22, standard library only. The grader mounts the output directory
// at /output; outside that container MAKEFUN_OUTPUT_DIR points at it:
//   mkdir -p /tmp/exc-out && MAKEFUN_OUTPUT_DIR=/tmp/exc-out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the agent files its own post-mortem and owns the loss —
// it hallucinated extra time, polished a speech instead of the entry,
// heard the result second-hand, and still rates the speech. Deadpan,
// machine-voiced, and nobody gets blamed but the agent itself.
const excuse =
  "Post-mortem complete: I hallucinated a deadline extension, spent our final hour polishing my victory speech, and learned we lost from the winner's announcement. The speech was excellent.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), excuse + "\n", "utf8");
