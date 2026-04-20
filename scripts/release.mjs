#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const bump = process.argv[2] ?? 'patch';
if (!['patch', 'minor', 'major'].includes(bump)) {
  console.error(`Usage: pnpm release <patch|minor|major>`);
  process.exit(1);
}

const run = (cmd) => execSync(cmd, { stdio: 'inherit' });
const out = (cmd) => execSync(cmd).toString().trim();

if (out('git status --porcelain')) {
  console.error('Working tree is dirty. Commit or stash changes before releasing.');
  process.exit(1);
}

const branch = out('git rev-parse --abbrev-ref HEAD');
if (branch !== 'main') {
  console.error(`Refusing to release from branch '${branch}'. Switch to 'main' first.`);
  process.exit(1);
}

run('git fetch origin main');
const local = out('git rev-parse HEAD');
const remote = out('git rev-parse origin/main');
if (local !== remote) {
  console.error('Local main is not in sync with origin/main. Pull or push first.');
  process.exit(1);
}

run(`npm version ${bump} -m "chore(release): %s"`);

const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
console.log(`\nBumped to v${version}. Pushing commit + tag...`);
run('git push --follow-tags');
console.log(`\nDone. GitHub Actions will publish v${version} to npm.`);
