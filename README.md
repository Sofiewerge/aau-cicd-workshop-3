# Launch night: CI/CD starter

The starter repo for the guest lecture **CI/CD in the age of AI agents** (AAU CPH, October 2026).

A one-page ticket shop. Small on purpose: the site isn't the point, the pipeline around it is.

## Session 1: launch it with continuous delivery (15 min)

Goal: a push to `main` puts the site live.

1. Click **Use this template** > **Create a new repository**. Make it public, under your own account.
2. Go to [vercel.com](https://vercel.com), sign up with GitHub (Hobby is free) and **Add New > Project**. Import your
   new repository and click **Deploy**. No settings to change.
3. Open your repository on GitHub and press `.` to open the editor in your browser. In `src/content.ts`, put your own
   name and event. Commit to `main`.
4. Watch Vercel build and deploy it. Open the URL. That's continuous delivery.

No Node on your laptop? Everything above works in the browser. Want to work locally:

```sh
npm install
npm run dev
```

## Workshop 3: add at least one CI step (30 min)

Pick a step from [`docs/ci-steps.md`](docs/ci-steps.md), the same list as on the slide.

1. Make a branch, copy a recipe from `recipes/` into `.github/workflows/`, and push.
2. Open a pull request. Watch the **Checks** tab. Vercel also deploys a preview of your branch.
3. Red? Good: this repo has problems planted in it. Fix the problem (not the step) and push again until it's green.
4. Make it a gate: protect `main` so the check has to pass before you can merge (see the bottom of `docs/ci-steps.md`).
5. Merge. CI let it in, CD put it live.

Add as many steps as you like. One deterministic and one probabilistic is a good half hour.

## Show and tell

Post your repository and a link to a pull request that went from red to green in the pinned issue
**Show and tell** on the starter repo.

## What's in here

| Path                             | What it is                                                                                    |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| `src/`                           | The site: `content.ts` (your text), `main.ts`, `lib/price.ts` (the price logic) and its tests |
| `tests/e2e/`                     | Playwright tests of the page                                                                  |
| `tests/a11y/`                    | An axe-core accessibility scan of the page                                                    |
| `recipes/`                       | Ready-made CI steps. Not active until you copy one into `.github/workflows/`                  |
| `recipes/probabilistic/prompts/` | The prompts the AI steps use                                                                  |
| `docs/spec.md`                   | What the site should do, used by the spec check                                               |
| `scripts/`                       | The bundle budget check and the script the AI steps use to ask a model                        |

| Script                                                        | What it does                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- |
| `npm run dev`                                                 | Run the site on your machine                                  |
| `npm run build`                                               | Build it like Vercel does                                     |
| `npm run lint` · `npm run format:check` · `npm run typecheck` | Static checks                                                 |
| `npm test`                                                    | Unit tests                                                    |
| `npm run test:e2e` · `npm run a11y`                           | Browser tests (first time: `npx playwright install chromium`) |
| `npm run size` · `npm run audit`                              | Bundle budget and dependency audit                            |
