# OneStopNews

**Everything important, sorted by topic.**

Live site: https://onestopnews.onrender.com/

OneStopNews is a live, topic-first news aggregator. It pulls public RSS feeds, groups articles by what they are about, and lets readers scan the day quickly without jumping between every publisher one by one.

Instead of organizing news by source, OneStopNews organizes articles into categories such as local news, tech, global news, finance, politics, gossip, and top stories.

For each article, the app shows a clean article card, a direct link to the original publisher, and an optional summary that is generated only when the user asks for it.

---

## What Works Now

This repository contains a working MVP, not just a static mockup.

| Feature | Status |
|---|---|
| Live RSS ingestion | Implemented |
| Topic-based categories | Implemented |
| Dropdown subcategories | Implemented |
| Article search and sorting | Implemented |
| Source health tracking | Implemented |
| Original source links | Implemented |
| On-demand summaries | Implemented with a free extractive summarizer |
| Mobile-friendly layout | Implemented |
| Backend API | Implemented |
| Local JSON storage | Implemented |

---

## Main Categories

| Category | Includes |
|---|---|
| **Top Stories** | Breaking stories, major headlines, widely relevant articles |
| **Local News** | Singapore headlines, transport, housing, local business |
| **Tech News** | Apple news, AI, startups, cybersecurity, other tech |
| **Global News** | China news, US news, Asia-Pacific, Europe, other world news |
| **Finance News** | Markets, earnings, personal finance, crypto, commodities |
| **Politics News** | Singapore politics, US politics, China politics, geopolitics |
| **Gossip News** | Singapore gossip, Korea gossip, global gossip, internet culture |

---

## How Articles Work

OneStopNews pulls article metadata from public feeds and stores only the information needed to display and organize the story.

The app stores:

- title
- source name
- original article link
- published time
- feed excerpt or metadata, when provided
- category and subcategory
- generated summary, if the user requests one

OneStopNews does **not** copy and republish full articles.

The original article remains on the publisher's website. The **Original Source** view gives attribution and sends the reader to the publisher.

---

## AI Summaries

Summaries are generated only when a user clicks to summarize an article.

This keeps the app cheaper to run because it does not summarize every article automatically in the background.

The current MVP uses a free extractive summarizer. A production version can later connect to OpenAI or another AI provider for higher-quality summaries.

---

## Project Files

```text
onestopnews-live/
├── public/
│   ├── index.html      # Main website page
│   ├── styles.css      # Layout, visual design, mobile styling
│   └── app.js          # Frontend interactions, filters, article rendering
├── src/
│   ├── config/
│   │   ├── categories.js   # Topic and subcategory structure
│   │   └── sources.js      # RSS source list
│   └── lib/
│       ├── classify.js     # Category matching rules
│       ├── ingest.js       # Feed ingestion logic
│       ├── rss.js          # RSS parser
│       ├── store.js        # Local JSON data store
│       └── summarize.js    # On-demand summary logic
├── data/
│   └── state.json      # Local article/source state
├── server.js           # Backend server and API routes
├── package.json        # App scripts
└── README.md
```

---

## Run Locally

Install Node.js first if your computer does not already have it.

Then run:

```bash
npm start
```

Open:

```text
http://127.0.0.1:5174
```

If you need another port:

```bash
PORT=8080 npm start
```

To stop the local site, press:

```text
Control + C
```

---

## API Routes

| Route | Purpose |
|---|---|
| `GET /api/categories` | Returns the topic and subcategory structure |
| `GET /api/articles` | Returns articles with filters, sorting, and category counts |
| `GET /api/articles/:id` | Returns one article |
| `POST /api/ingest` | Pulls live articles from RSS feeds |
| `POST /api/summarize/:id` | Generates a summary for one selected article |
| `GET /api/source-health` | Shows feed status and ingestion information |

---

## Deploying

This app should be deployed as a **Web Service**, not as a static site.

It needs a backend because it fetches live RSS feeds, serves API routes, stores article state, and generates summaries.

On Render, choose:

```text
New Web Service
```

Use this start command:

```bash
npm start
```

Render provides the `PORT` automatically. The server listens on `0.0.0.0` so Render can detect the open port.

---

## Notes For First Deploy

When the app first starts, it may need a moment to pull live articles.

If article counts look empty:

1. Click **Refresh feeds** in the website.
2. Wait a few seconds.
3. Reload the page.

The dropdown counts are calculated from the backend article index so they stay consistent across devices.

---

## Product Principles

- Organize news by topic, not by source.
- Keep the interface clean and readable.
- Always show where an article came from.
- Never hide the original publisher link.
- Do not republish full copyrighted articles.
- Summarize only selected articles to keep costs low.
- Treat gossip and Reddit discussions carefully.
- Label summaries clearly.
- Make mobile browsing feel first-class.

---

## Planned Next Steps

1. Improve source coverage and add more approved feeds
2. Add a production database instead of local JSON storage
3. Add optional AI provider support for better summaries
4. Add admin tools for source and category management
5. Add stronger deduplication across publishers
6. Add account-free saved preferences on the device
7. Add monitoring for broken feeds

---

## License

Private - all rights reserved.
