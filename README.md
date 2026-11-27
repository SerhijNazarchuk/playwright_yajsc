# Playwright TypeScript tests for practicesoftwaretesting.com

End-to-end UI tests for [practicesoftwaretesting.com](https://practicesoftwaretesting.com), written with Playwright and TypeScript. Learning project built as part of the YAJSC course.

## Prerequisites

- [Node.js](https://nodejs.org) 18 or higher

## Installation

```bash
git clone https://github.com/SerhijNazarchuk/playwright_yajsc.git
cd playwright_yajsc
npm install
npx playwright install
```

## Running tests

Run all tests:

```bash
npx playwright test
```

Run tests in Chromium only:

```bash
npx playwright test --project=chromium
```

Open the HTML report of the last run:

```bash
npx playwright show-report
```

## Project structure

- `tests/` — test files
- `playwright.config.ts` — Playwright configuration
- `tsconfig.json` — TypeScript configuration
