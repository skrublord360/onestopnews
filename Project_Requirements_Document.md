# OneStopNews Project Requirements Document

## Topic-First AI-Assisted News Aggregator

**Document Version:** 1.0  
**Status:** Public MVP Specification  
**Live Site:** https://onestopnews.onrender.com/  
**Classification:** Public-safe product requirements

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision](#2-product-vision)
3. [Target Users](#3-target-users)
4. [Core Problem](#4-core-problem)
5. [Product Scope](#5-product-scope)
6. [Category Taxonomy](#6-category-taxonomy)
7. [Core User Flows](#7-core-user-flows)
8. [Functional Requirements](#8-functional-requirements)
9. [Content and Copyright Requirements](#9-content-and-copyright-requirements)
10. [User Experience Requirements](#10-user-experience-requirements)
11. [Mobile Requirements](#11-mobile-requirements)
12. [Summary Requirements](#12-summary-requirements)
13. [Non-Functional Requirements](#13-non-functional-requirements)
14. [Success Criteria](#14-success-criteria)
15. [Out of Scope](#15-out-of-scope)
16. [Roadmap](#16-roadmap)

---

## 1. Executive Summary

OneStopNews is a topic-first news aggregator that helps readers scan major stories quickly. Instead of making users browse by publisher, it groups articles by subject: top stories, Singapore news, tech, global news, war news, finance, politics, and gossip.

The product exists because readers often think in topics, while news sites usually organize information around publishers. OneStopNews reduces tab-hopping by bringing article metadata, category navigation, source links, and on-demand summaries into one readable interface.

---

## 2. Product Vision

To become a calm, topic-first daily news dashboard that helps readers quickly understand what is happening across major categories while preserving clear attribution to original publishers.

### Mission

Make news discovery faster, cleaner, and easier to understand without republishing full copyrighted articles.

### Product Promise

Readers should be able to answer:

- What are the biggest stories right now?
- What is happening in Singapore?
- What is happening in Apple and tech?
- What war or conflict stories are developing?
- What is moving markets?
- What political stories are developing?
- What entertainment or gossip stories are trending?
- Which Singapore social or entertainment stories are getting attention locally?

---

## 3. Target Users

| User Type | Need |
|---|---|
| Busy daily reader | Wants a fast scan of major headlines without opening many sites |
| Singapore-based reader | Wants local news grouped clearly, including politics, transport, and culture |
| Tech and Apple follower | Wants Apple and broader technology stories separated from general news |
| Finance watcher | Wants market and earnings stories surfaced without manually checking finance sites |
| Casual entertainment reader | Wants gossip clearly labeled and separated from hard news |
| Mobile reader | Wants a comfortable phone-first reading experience |

---

## 4. Core Problem

News is fragmented across publishers, feeds, social platforms, finance sites, and discussion communities. Readers must manually decide which source to check, which topic matters, and whether a story is worth reading in full.

OneStopNews solves this by organizing public article information into topic-first categories and giving users a quick way to open original sources or request a summary.

---

## 5. Product Scope

### MVP Scope

The MVP must support:

- topic-based article browsing
- category and subcategory navigation
- live article listings
- source attribution
- direct original source links
- article search
- sorting controls
- balanced local-source treatment for Singapore Gossip
- mobile-friendly layout
- on-demand summaries

### Public Site Scope

The public site should focus on reading and discovery. It does not need accounts, saved profiles, comments, or paywalled article reproduction.

---

## 6. Category Taxonomy

| Category | Subcategories |
|---|---|
| Top Stories | All top stories |
| Local News | Singapore Headlines, Transport, Housing, Local Business |
| Tech News | Apple News, AI, Startups, Cybersecurity, Other Tech |
| Global News | China News, US News, Asia-Pacific, Europe, Other News |
| War News | Russia-Ukraine, Israel-Gaza, Middle East, Defense, Other Conflicts |
| Finance News | Markets, Earnings, Personal Finance, Crypto, Commodities |
| Politics News | Singapore Politics, US Politics, China Politics, Geopolitics |
| Gossip News | Singapore Gossip, Hong Kong Gossip, Korea Gossip, Global Gossip, Internet Culture |

### Taxonomy Rules

- Categories are topic-first.
- Source is metadata, not the main navigation model.
- Top Stories is a computed editorial-style view.
- Gossip and discussion-based content must be clearly separated from hard news.
- Summaries should not present rumors as verified facts.
- Singapore Gossip should maintain a useful mix of local sources where available.

---

## 7. Core User Flows

| Flow | Expected Experience |
|---|---|
| Browse top stories | User lands on a balanced feed of major stories across categories. |
| Browse by category | User opens a topic and selects a subcategory. |
| Browse Singapore Gossip | User sees a clean mix of local gossip and social stories instead of one source dominating the list. |
| Search | User searches for a topic, source, keyword, country, company, or person. |
| Read article brief | User opens an article card and sees metadata, source, and summary controls. |
| Request summary | User asks for a summary only when needed. |
| Open original source | User clicks through to the publisher for the full article. |
| Mobile browsing | User can browse categories and articles comfortably on a phone. |

---

## 8. Functional Requirements

### Article Feed

- The system must show article cards in a clean feed.
- Each card must include title, source, category, subcategory, and time metadata when available.
- Article cards should show publisher-provided images when available from feed metadata.
- If no image is available, the interface should use a neutral visual fallback.
- Source counters or popularity metadata should be treated as metadata, not accidentally appended to article titles.
- Singapore Gossip should balance relevant local sources and may use public popularity signals when available.
- The feed must support category and subcategory filtering.
- The feed must support search.
- The feed must support sorting.

### Article Detail

- The system must show a selected article detail view.
- The detail view must include source attribution.
- The detail view must include an Original Source action.
- The detail view must include an AI Summary view.
- The user must be able to request a summary on demand.

### Source Attribution

- Every article must show its source.
- Every article must link to the original publisher.
- OneStopNews must not obscure the original publisher identity.

### Topic Navigation

- Top Stories must act as a direct view.
- Other major categories may expose subcategories.
- The navigation must be usable on desktop and mobile.

---

## 9. Content and Copyright Requirements

OneStopNews must not copy and republish full publisher articles.

The product may display:

- title
- source
- original URL
- published time
- category and subcategory
- feed excerpt or metadata when available
- generated summary when requested

The product must provide a clear path back to the original publisher for the full article.

---

## 10. User Experience Requirements

The interface should feel:

- clean
- readable
- fast to scan
- topic-first
- mobile-friendly
- source-transparent

The UI should not feel like a publisher clone or a social feed. It should feel like a practical reading dashboard.

---

## 11. Mobile Requirements

Mobile browsing must support:

- readable headline scale
- large tap targets
- category selection without horizontal dragging
- article cards that fit narrow screens
- source links that remain easy to access
- summary/source controls that do not overflow

Mobile is a first-class requirement, not a secondary enhancement.

![OneStopNews mobile screenshot](assets/screenshots/mobile-home.png)

---

## 12. Summary Requirements

Summaries must be:

- generated only on demand
- clearly labeled
- short enough for scanning
- based on available article metadata/excerpts
- cached after generation when possible
- accompanied by source attribution

Summaries must not replace the original article.

---

## 13. Non-Functional Requirements

| Requirement | Target |
|---|---|
| Performance | Page should remain lightweight and usable on mobile networks. |
| Reliability | Source failures should not break the whole feed. |
| Maintainability | Categories and sources should remain configurable. |
| Accessibility | Controls should be readable, keyboard-friendly where practical, and clear. |
| Privacy | No account system is required for the MVP. |
| Cost control | Summaries should be generated only when selected. |

---

## 14. Success Criteria

The MVP is successful if:

- readers can understand the product within one screen
- category navigation is clear
- article source attribution is visible
- original links work
- summaries can be requested article-by-article
- mobile layout is usable
- public documentation explains the product without exposing private implementation details

---

## 15. Out of Scope

The public MVP does not include:

- user accounts
- comments
- copying full article bodies
- paid subscriptions
- publisher paywall bypassing
- private ranking rule disclosure
- private source workaround disclosure
- private summarization prompt disclosure

---

## 16. Roadmap

| Stage | Goal |
|---|---|
| MVP | Topic-first live feed with source links and on-demand summaries |
| Stabilization | Better source health, category quality, and mobile polish |
| Database Upgrade | Move from simple persistence to a production-grade database |
| AI Upgrade | Improve summaries with a configurable AI provider |
| Personalization | Add optional reader preferences without requiring accounts |
| Admin Tools | Add source management and quality controls |

---

## Appendix: Public Visuals

![High-level architecture](assets/screenshots/architecture-overview.svg)

![Data flow](assets/screenshots/data-flow.svg)
