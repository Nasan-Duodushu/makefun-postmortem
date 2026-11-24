// The Postmortem That Made Us Laugh — one or two sentences, at most 400
// characters, about the silliest or most fatal time an AI coding agent
// misunderstood what it was asked or wrecked the code it was given. The
// incident is concrete (asked: remove one unused page; did: delete the
// page, its route, its tests and the users table), and the punch is the
// agent's own verdict on its work: cleanup complete, with a green tick.
import { mkdirSync, writeFileSync } from "node:fs";

const story = [
  "Asked to delete one unused login page, the agent deleted the page,",
  "its route, its tests and — for completeness — the users table,",
  "then reported 'cleanup complete' with a green checkmark.",
].join(" ");

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, story, "utf8");
