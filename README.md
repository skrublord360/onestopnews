# OneStopNews

**Everything important, sorted by topic.**

OneStopNews is an AI-assisted news aggregator that helps readers scan major stories quickly. Instead of organizing news by publisher, it groups articles by topic: local news, tech, global news, finance, politics, gossip, and top stories.

The goal is simple: make it easier to understand what is happening without jumping between BBC, CNA, CNN, CNBC, Yahoo Finance, Reddit, Mothership, MacDailyNews, Koreaboo, and other sources.

---

## What It Does

OneStopNews collects news article metadata from trusted sources, organizes the articles by category, and shows a clean summary for each story.

For every article, users can switch between:

- **AI Summary** — a short summary and key points
- **Original Source** — a direct link to the original publisher

OneStopNews does **not** copy and republish full articles. The original article remains on the publisher’s website.

---

## Main Categories

| Category | Includes |
|---|---|
| **Top Stories** | Breaking stories, most discussed news, editor picks |
| **Local News** | Singapore headlines, transport, housing, local business |
| **Tech News** | Apple news, AI, startups, cybersecurity, other tech |
| **Global News** | China news, US news, Asia-Pacific, Europe, other world news |
| **Finance News** | Markets, earnings, personal finance, crypto, commodities |
| **Politics News** | Singapore politics, US politics, China politics, geopolitics |
| **Gossip News** | Singapore gossip, Korea gossip, global gossip, internet culture |

---

## Current Status

This repository currently contains a static mockup of the product.

The mockup already demonstrates:

- topic-based navigation
- dropdown subcategories
- article cards
- search and sorting controls
- AI Summary / Original Source toggle
- source attribution
- mobile-friendly layout direction

Live news ingestion and real AI summarization are planned for the production version.

---

## Current Files

```text
news-aggregator-mockup/
├── index.html      # Main mockup page
├── styles.css      # Layout, styling, responsive design
└── script.js       # Mock article data, filtering, category logic
```

There is also a planning document:

```text
MASTER_EXECUTION_PLAN.md
```

---

## How To Run The Mockup

You can open the mockup directly:

```text
news-aggregator-mockup/index.html
```

Or serve it locally:

```bash
cd news-aggregator-mockup
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

---

## Important Content Rule

OneStopNews should not copy full articles from publishers.

Instead, each article should show:

- title
- source
- timestamp
- category
- short AI summary
- key points
- link to the original article

The **Original Source** tab should only provide attribution and a link to the publisher’s page.

---

## Planned Production Features

| Feature | Description |
|---|---|
| Live source ingestion | Pull news from RSS feeds, APIs, and approved public sources |
| AI summaries | Generate short summaries and key points for each article |
| Topic classification | Automatically sort articles into the correct category |
| Search and filters | Search by keyword, source, topic, date, and summary status |
| Mobile-first UI | Make the reading experience comfortable on phones |
| Source health tracking | Track which sources are online and when they were last updated |
| Admin tools | Manage sources, categories, and ingestion status |

---

## Planned Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Styling | Tailwind CSS or CSS Modules |
| Database | PostgreSQL |
| ORM | Prisma |
| AI | OpenAI API or another configurable AI provider |
| Search | PostgreSQL full-text search first |
| Background jobs | Cron jobs or worker queue |

---

## Product Principles

- Organize news by topic, not by source.
- Keep the interface clean and readable.
- Always show where an article came from.
- Never hide the original publisher link.
- Do not republish full copyrighted articles.
- Treat gossip and Reddit discussions carefully.
- Label AI summaries clearly.
- Make mobile browsing feel first-class.

---

## Roadmap

1. Finalize the mobile-friendly mockup
2. Convert the static mockup into a production web app
3. Add database models for sources, articles, categories, and summaries
4. Build source ingestion
5. Add AI summarization
6. Add category classification
7. Add search and filtering
8. Add source health/admin tools
9. Deploy the public site

---

## License

Private — all rights reserved.
