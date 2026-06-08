# OneStopNews

**Everything important, sorted by topic.**

Live site: https://onestopnews.onrender.com/

![OneStopNews desktop screenshot](assets/screenshots/desktop-home.png)

OneStopNews is a topic-first news aggregator that helps readers scan major stories quickly. Instead of organizing articles by publisher, it groups them by what they are about: local news, tech, global news, war news, finance, politics, gossip, and top stories.

The product is designed for readers who want one clean place to understand what is happening without jumping between every publisher, feed, forum, and finance page manually.

---

## What OneStopNews Does

OneStopNews collects public article information, sorts articles into clear categories, and presents them in a clean reading interface.

For each article, readers can see:

- article title
- source
- category and subcategory
- published time
- short summary when requested
- direct link to the original article

OneStopNews does **not** copy and republish full publisher articles. The full article remains with the original source.

---

## Product Highlights

| Feature | Description |
|---|---|
| Topic-first browsing | Articles are grouped by category instead of publisher. |
| Subcategory menus | Large topics can be narrowed into specific areas such as Apple News, China News, Singapore Gossip, or War News. |
| Search and sorting | Readers can search across the feed and sort article lists. |
| Balanced Singapore Gossip | Singapore Gossip is designed to show a useful mix of local entertainment and social stories instead of clustering around one publisher. |
| Popularity-aware metadata | When a source exposes public popularity signals, OneStopNews can use them to improve story ordering. |
| Article images | Cards can show publisher-provided images when available from feed metadata. |
| Original source links | Every story links back to the publisher. |
| On-demand summaries | Summaries are generated only when a reader asks for them. |
| Mobile-friendly layout | The interface is built to work on desktop and phone screens. |
| Source visibility | Readers can see where each article came from before opening it. |

---

## Main Categories

| Category | Includes |
|---|---|
| Top Stories | Major headlines and widely relevant stories |
| Local News | Singapore headlines, transport, housing, and local business |
| Tech News | Apple news, AI, startups, cybersecurity, and other tech |
| Global News | China news, US news, Asia-Pacific, Europe, and other world news |
| War News | Russia-Ukraine, Israel-Gaza, Middle East, defense, and other conflicts |
| Finance News | Markets, earnings, personal finance, crypto, and commodities |
| Politics News | Singapore politics, US politics, China politics, and geopolitics |
| Gossip News | Singapore gossip from local entertainment/social sources, Hong Kong gossip, Korea gossip, global gossip, and internet culture |

---

## Screenshots

| Desktop | Mobile |
|---|---|
| ![Desktop home](assets/screenshots/desktop-home.png) | ![Mobile home](assets/screenshots/mobile-home.png) |

---

## Public Architecture

This repository intentionally shows a simplified architecture. The public view explains the product shape without exposing private ingestion logic, ranking rules, summarization internals, source-specific workarounds, or deployment secrets.

![High-level architecture](assets/screenshots/architecture-overview.svg)

For more detail, see [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md).

---

## Content Approach

OneStopNews is built around discovery, categorization, and summarization.

The app stores and displays article metadata such as title, source, timestamp, category, excerpt when available, and summary when requested. It does not present itself as the publisher of the original reporting.

Each article includes a direct link to the original publisher.

---

## Product Principles

- Organize news by topic, not by source.
- Keep browsing clean and readable.
- Always show where an article came from.
- Never hide the original publisher link.
- Do not republish full copyrighted articles.
- Summarize only selected articles.
- Treat gossip and discussion-based content carefully.
- Label summaries clearly.
- Make mobile browsing feel first-class.

---

## Status

OneStopNews is currently an MVP.

The live version supports topic browsing, subcategories, article listings, source links, search, sorting, and on-demand summaries.

Singapore Gossip is tuned to keep a healthier mix of local sources, including Stomp and Mothership-style coverage, with visible titles kept clean even when source pages expose counters or popularity metadata.

Future improvements may include broader source coverage, stronger deduplication, better personalization, richer source health reporting, and higher-quality AI summaries.

---

## Documentation

| Document | Purpose |
|---|---|
| [Project_Requirements_Document.md](Project_Requirements_Document.md) | Public product requirements and scope |
| [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md) | Public-safe architecture overview and data flow |

---

## License

Private - all rights reserved.
