# CLAUDE.md

Guidance for Claude when working in `@onauto/ui-components`.

## Releasing

**Always run the release script after a shippable commit lands on `main`.** A bug fix or feature that lands without a subsequent release stays unpublished — consumers don't see the change until a `v*` tag is pushed. After committing and pushing a fix/feature to `main`, immediately run the appropriate `pnpm release:<patch|minor|major>` so it ships to npm.

**Every release MUST bump the version in `package.json`.** Publishing is gated on a `v*` git tag — no bump, no publish.

Use SemVer:

- `patch` — bug fixes, internal changes, no API changes
- `minor` — new components, new props, additive non-breaking changes
- `major` — removed/renamed exports, changed prop signatures, peer-dep bumps, any breaking change

### How to release

Releases go through `scripts/release.mjs` (wired up as `pnpm release:*`). Do **not** hand-edit `package.json` version, run `npm publish` locally, or push tags manually.

1. Make sure the change is on `main`, working tree is clean, and local `main` matches `origin/main`. The script refuses to run otherwise.
2. Run the appropriate bump:
   ```sh
   pnpm release:patch   # 1.2.0 → 1.2.1
   pnpm release:minor   # 1.2.0 → 1.3.0
   pnpm release:major   # 1.2.0 → 2.0.0
   ```
3. The script will:
   - Run `npm version <bump>` (creates a `chore(release): vX.Y.Z` commit and a `vX.Y.Z` tag)
   - Push the commit and tag with `git push --follow-tags`
4. The `Publish to npm` GitHub Actions workflow (`.github/workflows/publish.yml`) picks up the `v*` tag, runs type-check + build, and publishes to npm with provenance.

### Before releasing

- Run `pnpm run type-check` and `pnpm test` locally — CI will fail the publish otherwise.
- Run `pnpm run build` and sanity-check `dist/` exports match `package.json` `exports`.
- For breaking changes, confirm with the user before picking `major`.

### Do not

- Don't bump `version` in a feature commit — the release script owns that commit.
- Don't release from a branch other than `main`.
- Don't run `npm publish` locally — publishing is GitHub Actions only (uses OIDC provenance).
