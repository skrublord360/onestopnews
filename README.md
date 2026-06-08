# OneStopNews Private Repository

This is the private working repository for OneStopNews.

It contains the actual application code that powers the live site, including the backend, frontend, source ingestion, category rules, ranking behavior, summary logic, and development cache.

Live site: https://onestopnews.onrender.com/

---

## What This Repo Is For

Use this repo for building, running, fixing, and deploying OneStopNews.

This is where the real product logic lives:

- collecting article metadata from sources
- cleaning and normalizing article titles
- sorting stories into categories and subcategories
- keeping Singapore Gossip mixed between local sources
- handling Stomp view counts as private ranking metadata
- linking every article back to the original publisher
- generating summaries only when requested
- serving the public website

This repo should stay private because it contains the core implementation.

---

## What The App Does

OneStopNews is a topic-first news aggregator.

Instead of making users browse by publisher, it groups articles into sections such as:

- Top Stories
- Local News
- Tech News
- Global News
- War News
- Finance News
- Politics News
- Gossip News

Each article shows metadata, source attribution, an optional image, an original source link, and an AI summary when requested.

OneStopNews does not copy and republish full publisher articles.

---

## Important Privacy Boundary

Keep this repo private.

Do not copy these into the public GitHub repo:

- backend source code
- source ingestion logic
- source-specific parsing workarounds
- fallback article seeds
- classification rules
- ranking rules
- Stomp view-count handling
- JayneStars fallback handling
- summarization implementation
- cached data files
- environment variables
- deployment configuration
- private execution plans
- agent instructions

The public repo should only contain product-facing documents, screenshots, public-safe architecture, and the live site link.

---

## Folder Guide

```text
private-repo/
├── server.js                         # Web server and API routes
├── package.json                      # App scripts and Node settings
├── public/                           # Frontend HTML, CSS, and browser JS
├── src/
│   ├── config/
│   │   ├── categories.js             # Category and subcategory list
│   │   └── sources.js                # Private source configuration
│   └── lib/
│       ├── classify.js               # Category and ranking logic
│       ├── ingest.js                 # Source fetching pipeline
│       ├── rss.js                    # RSS and HTML parsing helpers
│       ├── store.js                  # Local article cache handling
│       └── summarize.js              # On-demand summary logic
├── data/
│   └── state.json                    # Local cached article state
├── docs/
│   ├── MASTER_EXECUTION_PLAN.md      # Private implementation plan
│   └── PRIVATE_REPO_CONTENTS.md      # Private repo inventory
├── public dupes/                     # Copy of public repo docs
└── AGENTS.md                         # Private instructions for coding agents
```

---

## Public Repo Dupes

The `public dupes/` folder contains copies of the public repository files:

```text
public dupes/
├── README.md
├── Project_Requirements_Document.md
├── TECHNICAL_ARCHITECTURE.md
├── REPO_CONTENTS.md
└── assets/
```

Use that folder when updating the public GitHub repo.

The public repo is for presentation. This private repo is for the working app.

---

## Run The App

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

The app uses the hosting platform's `PORT` value in production. For local development, it falls back to port `5174`.

---

## Useful Checks

Run these before deploying changes:

```bash
node --check server.js
find src -name '*.js' -print | xargs -I{} node --check {}
node --check public/app.js
```

If source or category logic changes, also check that the relevant category counts still look right in the app.

---

## Deployment

Deploy this private repo as the Render web service.

Do not deploy the public repo as the working site. The public repo does not contain the backend or ingestion logic needed to run OneStopNews.

After changing ingestion, source config, ranking, or cached data behavior, restart the Render service so the live site picks up the latest code.

---

## Current Sensitive Areas

These areas need extra care when editing:

- Stomp Singapore Gossip parsing and view-count sorting
- Mothership and Stomp source mix for Singapore Gossip
- JayneStars Hong Kong Gossip fallback handling
- Top Stories balancing so gossip does not dominate
- Source attribution and original article links
- AI summary wording and disclosure
- Article image extraction and fallback visuals

---

## Product Rules

- Organize news by topic, not by publisher.
- Always show the original source.
- Do not republish full articles.
- Keep summaries optional and clearly labeled.
- Keep mobile browsing first-class.
- Treat gossip and Reddit-style content carefully.
- Keep public documentation useful without exposing private logic.

---

## License

Private - all rights reserved.
