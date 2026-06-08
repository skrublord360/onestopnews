const categories = [
  { id: "top", label: "Top Stories", subcategories: ["All top stories", "Breaking", "Most discussed", "Editor picks"] },
  { id: "local", label: "Local News", subcategories: ["All Local", "Singapore Headlines", "Transport", "Housing", "Local Business"] },
  { id: "tech", label: "Tech News", subcategories: ["All Tech", "Apple News", "AI", "Startups", "Cybersecurity", "Other Tech"] },
  { id: "global", label: "Global News", subcategories: ["All Global", "China News", "US News", "Asia-Pacific", "Europe", "Other News"] },
  { id: "finance", label: "Finance News", subcategories: ["All Finance", "Markets", "Earnings", "Personal Finance", "Crypto", "Commodities"] },
  { id: "politics", label: "Politics News", subcategories: ["All Politics", "Singapore Politics", "US Politics", "China Politics", "Geopolitics"] },
  { id: "gossip", label: "Gossip News", subcategories: ["All Gossip", "Singapore Gossip", "Korea Gossip", "Global Gossip", "Internet Culture"] },
];

const articles = [
  {
    id: "local-cna-transport",
    title: "Singapore transport reliability measures move into focus after commuter feedback",
    source: "CNA",
    category: "local",
    subcategory: "Transport",
    time: "18 min ago",
    impact: 94,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Officials are emphasizing reliability metrics, incident response, and clearer public communication across the transport network.",
    summary:
      "Singapore local coverage is focused on transport reliability and how agencies communicate service disruptions. The story is being grouped under Local News because it affects daily commuters directly. The key question is whether new reliability metrics will be visible and useful to the public.",
    keyPoints: [
      "Transport reliability is the central local issue.",
      "Public communication after disruptions is becoming part of the story.",
      "The article belongs under Local News rather than general politics.",
    ],
    basedOn: "excerpt and source metadata",
    url: "https://www.channelnewsasia.com/",
  },
  {
    id: "tech-apple-ai",
    title: "Apple's next software cycle is expected to put private AI features front and center",
    source: "MacDailyNews",
    category: "tech",
    subcategory: "Apple News",
    time: "27 min ago",
    impact: 96,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Analysts are watching whether Apple can make on-device AI feel useful without weakening its privacy positioning.",
    summary:
      "Apple coverage is clustering around private, on-device AI features. Analysts are treating silicon, memory, and privacy messaging as the important signals. This belongs under Tech News with an Apple-specific subcategory.",
    keyPoints: [
      "The Apple-specific angle is on-device AI.",
      "Privacy remains part of the product narrative.",
      "The market impact depends on whether AI becomes a clear upgrade reason.",
    ],
    basedOn: "excerpt and source metadata",
    url: "https://www.macdailynews.com/",
  },
  {
    id: "global-china-economy",
    title: "China policy signals draw attention as investors watch the next growth measures",
    source: "BBC",
    category: "global",
    subcategory: "China News",
    time: "42 min ago",
    impact: 91,
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Global outlets are watching whether fresh policy signals can stabilize sentiment around China's economy.",
    summary:
      "Global coverage is focused on China's next policy signals and what they imply for growth. The story matters beyond China because investors are watching regional demand and trade effects. It is categorized as Global News / China News.",
    keyPoints: [
      "The story is about China policy and economic confidence.",
      "Market watchers are looking for signs of stronger support.",
      "The category should be Global News, not Finance alone.",
    ],
    basedOn: "excerpt and source metadata",
    url: "https://www.bbc.com/news",
  },
  {
    id: "finance-tech-earnings",
    title: "Tech earnings steer pre-market sentiment as investors focus on margins",
    source: "Yahoo Finance",
    category: "finance",
    subcategory: "Earnings",
    time: "55 min ago",
    impact: 89,
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Investors are watching whether large-cap technology companies can defend margins while funding AI infrastructure.",
    summary:
      "Finance coverage is focused on large-cap technology earnings and margin pressure. Investors are balancing AI investment optimism with questions about cost discipline. The article belongs under Finance News because the main user need is market interpretation.",
    keyPoints: [
      "Margins are the central earnings metric.",
      "AI infrastructure spending may pressure near-term costs.",
      "Guidance matters as much as reported revenue.",
    ],
    basedOn: "excerpt and source metadata",
    url: "https://finance.yahoo.com/",
  },
  {
    id: "politics-us-ai",
    title: "US lawmakers press AI executives on licensing, safety, and election risk",
    source: "CNN",
    category: "politics",
    subcategory: "US Politics",
    time: "1 hr ago",
    impact: 86,
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
    excerpt: "The hearing focused on whether voluntary safety commitments are enough as AI tools move deeper into public life.",
    summary:
      "US political coverage is focused on AI regulation and whether voluntary commitments are sufficient. Lawmakers pressed executives on safety, licensing, and election risks. This belongs under Politics News rather than general technology because the core issue is regulation.",
    keyPoints: [
      "Election risk is becoming a concrete regulatory focus.",
      "Licensing and accountability are central policy questions.",
      "The story may shape future AI governance proposals.",
    ],
    basedOn: "excerpt and source metadata",
    url: "https://www.cnn.com/",
  },
  {
    id: "gossip-sg-cafe",
    title: "A viral Singapore cafe queue becomes the latest local internet talking point",
    source: "Mothership",
    category: "gossip",
    subcategory: "Singapore Gossip",
    time: "2 hr ago",
    impact: 74,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    excerpt: "The story moved from food discovery into a broader conversation about queues, hype, and neighbourhood habits.",
    summary:
      "This local culture item is about a viral cafe queue and the conversation around hype-driven food trends. It belongs under Gossip News / Singapore Gossip rather than Local News because the value is social chatter, not civic information. The source attribution remains visible.",
    keyPoints: [
      "The story is local culture and social chatter.",
      "Queues and hype are part of the angle.",
      "It fits the Mothership-style Singapore Gossip lane.",
    ],
    basedOn: "title and excerpt only",
    url: "https://mothership.sg/",
  },
  {
    id: "gossip-korea-comeback",
    title: "K-pop comeback rumors spread as fans track agency teasers and airport photos",
    source: "Koreaboo",
    category: "gossip",
    subcategory: "Korea Gossip",
    time: "2 hr ago",
    impact: 76,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Fan communities are comparing teaser timing, styling changes, and travel sightings ahead of a rumored comeback.",
    summary:
      "Korea gossip coverage is focused on comeback speculation based on public teasers and fan discussion. The summary should avoid stating rumors as confirmed facts. This belongs under Gossip News / Korea Gossip.",
    keyPoints: [
      "The story is rumor-led and should be labeled carefully.",
      "Fan discussion is the main source of momentum.",
      "The original source link remains the place to read full details.",
    ],
    basedOn: "mock excerpt and source metadata",
    url: "https://www.koreaboo.com/",
  },
  {
    id: "global-us-election",
    title: "US campaign coverage intensifies as polling and court timelines converge",
    source: "BBC",
    category: "global",
    subcategory: "US News",
    time: "3 hr ago",
    impact: 84,
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=1200&q=80",
    excerpt: "International readers are following US election developments as legal and campaign calendars overlap.",
    summary:
      "Global coverage is tracking US election developments for an international audience. The story combines polling, legal timelines, and campaign strategy. It sits under Global News / US News because the framing is worldwide relevance.",
    keyPoints: [
      "US political developments are being framed for global readers.",
      "Polling and court timelines are both driving coverage.",
      "Related stories may also appear under Politics News.",
    ],
    basedOn: "excerpt and source metadata",
    url: "https://www.bbc.com/news",
  },
];

const sourceByCategory = {
  local: ["CNA", "Mothership", "Reddit Singapore", "The Straits Times"],
  tech: ["MacDailyNews", "CNBC", "CNN", "BBC", "Reddit"],
  global: ["BBC", "CNN", "CNA", "CNBC"],
  finance: ["Yahoo Finance", "CNBC", "BBC", "Reddit"],
  politics: ["CNA", "CNN", "BBC", "CNBC"],
  gossip: ["Mothership", "Koreaboo", "Yahoo", "Reddit"],
};

const sourceUrls = {
  BBC: "https://www.bbc.com/news",
  CNA: "https://www.channelnewsasia.com/",
  CNN: "https://www.cnn.com/",
  CNBC: "https://www.cnbc.com/",
  MacDailyNews: "https://www.macdailynews.com/",
  "Yahoo Finance": "https://finance.yahoo.com/",
  Reddit: "https://www.reddit.com/",
  "Reddit Singapore": "https://www.reddit.com/r/singapore/",
  Mothership: "https://mothership.sg/",
  Koreaboo: "https://www.koreaboo.com/",
  Yahoo: "https://www.yahoo.com/",
  "The Straits Times": "https://www.straitstimes.com/",
};

const imagePool = {
  local: [
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?auto=format&fit=crop&w=1200&q=80",
  ],
  tech: [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  ],
  global: [
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
  ],
  finance: [
    "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
  ],
  politics: [
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
  ],
  gossip: [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  ],
};

const topicAngles = [
  "draws fresh attention after overnight developments",
  "moves higher on editors' watchlists as new context emerges",
  "sparks debate across analysts, officials, and online communities",
  "becomes a cross-source story after several outlets pick up the thread",
  "gains momentum as readers look for a clearer summary of what changed",
  "adds new details that could shift the next round of coverage",
];

const visualByCategory = {
  local: ["#405247", "#b86f52"],
  tech: ["#243b55", "#64786a"],
  global: ["#334155", "#486b8f"],
  finance: ["#2f3a2f", "#c6a15b"],
  politics: ["#3f3446", "#8d5a4a"],
  gossip: ["#6d637e", "#b86f52"],
};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function makeGeneratedArticle(category, subcategory, index) {
  const sources = sourceByCategory[category.id];
  const source = sources[index % sources.length];
  const images = imagePool[category.id];
  const title = `${subcategory} ${topicAngles[index % topicAngles.length]}`;
  const impact = 96 - ((index * 7 + category.label.length + subcategory.length) % 38);
  const timeValue = index < 5 ? `${index + 6} min ago` : `${index + 1} hr ago`;
  const excerpt = `${category.label} coverage from ${source} is grouped under ${subcategory}, keeping the feed organized by topic instead of publisher.`;

  return {
    id: `${category.id}-${slugify(subcategory)}-${index}`,
    title,
    source,
    category: category.id,
    subcategory,
    time: timeValue,
    impact,
    image: images[index % images.length],
    excerpt,
    summary: `This generated mock article represents how OneStopNews would cluster ${source} coverage under ${category.label} and ${subcategory}. The important product behavior is topic-first grouping, visible attribution, and a concise AI summary. In the live product, this summary would be generated from permitted source metadata, excerpts, or licensed text.`,
    keyPoints: [
      `Classified as ${category.label} / ${subcategory}.`,
      `Source attribution remains visible as ${source}.`,
      "The original article is accessed through the canonical source link.",
      "The feed can mix multiple publishers inside the same topic lane.",
    ],
    basedOn: "mock metadata for prototype display",
    url: sourceUrls[source],
  };
}

categories
  .filter((category) => category.id !== "top")
  .forEach((category) => {
    category.subcategories
      .filter((subcategory) => !subcategory.startsWith("All "))
      .forEach((subcategory, subcategoryIndex) => {
        articles.push(makeGeneratedArticle(category, subcategory, subcategoryIndex * 2));
        articles.push(makeGeneratedArticle(category, subcategory, subcategoryIndex * 2 + 1));
      });
  });

let selectedCategory = "top";
let selectedSubcategory = "All top stories";
let selectedArticleId = articles[0].id;
let selectedMode = "summary";

const categoryList = document.querySelector("#categoryList");
const megaNav = document.querySelector("#megaNav");
const subcategorySelect = document.querySelector("#subcategorySelect");
const sortSelect = document.querySelector("#sortSelect");
const searchInput = document.querySelector("#searchInput");
const activeCategory = document.querySelector("#activeCategory");
const resultCount = document.querySelector("#resultCount");
const leadCard = document.querySelector("#leadCard");
const articleGrid = document.querySelector("#articleGrid");
const detailPanel = document.querySelector("#detailPanel");
let openMenuId = "";

function categoryCount(categoryId) {
  if (categoryId === "top") return articles.length;
  return articles.filter((article) => article.category === categoryId).length;
}

function renderCategories() {
  if (!categoryList) return;
  categoryList.innerHTML = categories
    .map(
      (category) => `
      <button class="category-button ${category.id === selectedCategory ? "active" : ""}" type="button" data-category="${category.id}">
        <strong>${category.label}</strong>
        <span>${categoryCount(category.id)}</span>
      </button>
    `
    )
    .join("");
}

function subcategoryCount(categoryId, subcategory) {
  if (subcategory.startsWith("All ")) return categoryCount(categoryId);
  return articles.filter((article) => article.category === categoryId && article.subcategory === subcategory).length;
}

function renderMegaNav() {
  megaNav.innerHTML = categories
    .map((category) => {
      const sources = category.id === "top" ? ["BBC", "CNA", "CNN", "CNBC", "Yahoo Finance", "Reddit"] : sourceByCategory[category.id] || [];
      const subcategories = category.subcategories.filter((subcategory) => !subcategory.startsWith("All "));

      return `
        <div class="mega-item ${openMenuId === category.id ? "open" : ""}">
          <button class="mega-button" type="button" data-menu="${category.id}" aria-expanded="${openMenuId === category.id}">
            ${category.label}
          </button>
          <div class="mega-menu" role="menu">
            <div class="mega-menu-header">
              <div>
                <strong>${category.label}</strong>
                <span>Browse topic-first coverage grouped from multiple publishers.</span>
              </div>
              <div class="mega-count">${categoryCount(category.id)} stories</div>
            </div>
            <div class="mega-subgrid">
              ${subcategories
                .map(
                  (subcategory) => `
                    <button class="mega-subitem" type="button" data-nav-category="${category.id}" data-nav-subcategory="${subcategory}">
                      ${subcategory}
                      <span>${subcategoryCount(category.id, subcategory)}</span>
                    </button>
                  `
                )
                .join("")}
            </div>
            <div class="mega-footer">
              ${sources.map((source) => `<span class="mega-source">${source}</span>`).join("")}
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderSubcategories() {
  const category = categories.find((item) => item.id === selectedCategory) || categories[0];
  activeCategory.textContent = category.label;
  selectedSubcategory = category.subcategories.includes(selectedSubcategory) ? selectedSubcategory : category.subcategories[0];
  subcategorySelect.innerHTML = category.subcategories
    .map((subcategory) => `<option value="${subcategory}" ${subcategory === selectedSubcategory ? "selected" : ""}>${subcategory}</option>`)
    .join("");
}

function filteredArticles() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categories.find((item) => item.id === selectedCategory);
  const allSubcategory = category?.subcategories[0];

  const filtered = articles.filter((article) => {
    const matchesCategory = selectedCategory === "top" || article.category === selectedCategory;
    const matchesSubcategory =
      selectedSubcategory === allSubcategory ||
      selectedSubcategory === "Breaking" ||
      selectedSubcategory === "Most discussed" ||
      selectedSubcategory === "Editor picks" ||
      article.subcategory === selectedSubcategory;
    const text = `${article.title} ${article.source} ${article.category} ${article.subcategory} ${article.excerpt}`.toLowerCase();
    const matchesSearch = !query || text.includes(query);
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  if (sortSelect.value === "impact") return filtered.sort((a, b) => b.impact - a.impact);
  if (sortSelect.value === "summary") return filtered.filter((article) => article.summary).sort((a, b) => b.impact - a.impact);
  return filtered;
}

function cardMeta(article) {
  return `
    <div class="meta-row">
      <span class="source-chip">${article.source}</span>
      <span class="category-tag">${categoryLabel(article.category)} / ${article.subcategory}</span>
      <span>${article.time}</span>
      <span class="summary-ready">AI summary</span>
    </div>
  `;
}

function visualMarkup(article) {
  const colors = visualByCategory[article.category] || ["#262b31", "#64786a"];
  return `<div class="news-art" style="--art-a: ${colors[0]}; --art-b: ${colors[1]}"><span>${categoryLabel(article.category)} / ${article.subcategory}</span></div>`;
}

function categoryLabel(categoryId) {
  return categories.find((category) => category.id === categoryId)?.label || "Top Stories";
}

function renderLead(article) {
  leadCard.innerHTML = `
    <div class="lead-image">
      ${visualMarkup(article)}
      <div class="image-scrim"></div>
    </div>
    <div class="lead-content">
      ${cardMeta(article)}
      <h2>${article.title}</h2>
      <p>${article.excerpt}</p>
      <div class="lead-actions">
        <button class="primary-button" type="button" data-open="${article.id}">Read brief</button>
        <button class="secondary-button" type="button" data-source="${article.url}">Open source</button>
      </div>
    </div>
  `;
}

function renderArticles() {
  const results = filteredArticles();
  const [lead, ...rest] = results;
  resultCount.textContent = `${results.length} article${results.length === 1 ? "" : "s"} shown from ${articles.length} indexed`;

  if (!lead) {
    leadCard.innerHTML = `<div class="empty">No articles match this category and search yet.</div>`;
    articleGrid.innerHTML = "";
    return;
  }

  if (!results.some((article) => article.id === selectedArticleId)) selectedArticleId = lead.id;

  renderLead(lead);
  articleGrid.innerHTML = rest
    .map(
      (article) => `
      <button class="article-card ${article.id === selectedArticleId ? "selected" : ""}" type="button" data-open="${article.id}">
        <div class="article-thumb">
          ${visualMarkup(article)}
        </div>
        <div class="article-body">
          ${cardMeta(article)}
          <h3>${article.title}</h3>
          <p>${article.excerpt}</p>
        </div>
      </button>
    `
    )
    .join("");
}

function renderDetail() {
  const article = articles.find((item) => item.id === selectedArticleId) || articles[0];
  const body =
    selectedMode === "summary"
      ? `
      <div class="summary-box">
        <p>${article.summary}</p>
        <ul>${article.keyPoints.map((point) => `<li>${point}</li>`).join("")}</ul>
        <div class="disclosure">AI-generated summary. Based on ${article.basedOn}. Verify sensitive details with the original source.</div>
      </div>
    `
      : `
      <div class="summary-box">
        <p><strong>Original article:</strong> This view keeps the publisher attribution clear and sends you directly to the canonical source.</p>
        <p>No full article text is copied into OneStopNews.</p>
        <div class="disclosure">Use the button below to read the full article on ${article.source}.</div>
      </div>
    `;

  detailPanel.innerHTML = `
    <article class="detail-card">
      <div class="detail-hero">
        ${visualMarkup(article)}
      </div>
      <div class="detail-inner">
        ${cardMeta(article)}
        <h2>${article.title}</h2>
        <div class="toggle" role="group" aria-label="Article view mode">
          <button class="${selectedMode === "original" ? "active" : ""}" type="button" data-mode="original">Original Source</button>
          <button class="${selectedMode === "summary" ? "active" : ""}" type="button" data-mode="summary">AI Summary</button>
        </div>
        ${body}
        <a class="source-link" href="${article.url}" target="_blank" rel="noreferrer">Open original source</a>
      </div>
    </article>
  `;
}

function renderAll() {
  renderCategories();
  renderMegaNav();
  renderSubcategories();
  renderArticles();
  renderDetail();
}

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  const menuButton = event.target.closest("[data-menu]");
  const navSubcategoryButton = event.target.closest("[data-nav-category]");
  const openButton = event.target.closest("[data-open]");
  const sourceButton = event.target.closest("[data-source]");
  const modeButton = event.target.closest("[data-mode]");

  if (!event.target.closest(".mega-item")) {
    openMenuId = "";
    renderMegaNav();
  }

  if (menuButton) {
    openMenuId = openMenuId === menuButton.dataset.menu ? "" : menuButton.dataset.menu;
    renderMegaNav();
  }

  if (navSubcategoryButton) {
    selectedCategory = navSubcategoryButton.dataset.navCategory;
    selectedSubcategory = navSubcategoryButton.dataset.navSubcategory;
    openMenuId = "";
    renderAll();
  }

  if (categoryButton) {
    selectedCategory = categoryButton.dataset.category;
    selectedSubcategory = "";
    openMenuId = "";
    renderAll();
  }

  if (openButton) {
    selectedArticleId = openButton.dataset.open;
    selectedMode = "summary";
    renderArticles();
    renderDetail();
  }

  if (sourceButton) {
    window.open(sourceButton.dataset.source, "_blank", "noreferrer");
  }

  if (modeButton) {
    selectedMode = modeButton.dataset.mode;
    renderDetail();
  }
});

subcategorySelect.addEventListener("change", () => {
  selectedSubcategory = subcategorySelect.value;
  renderArticles();
  renderDetail();
});

sortSelect.addEventListener("change", () => {
  renderArticles();
  renderDetail();
});

searchInput.addEventListener("input", () => {
  renderArticles();
  renderDetail();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && openMenuId) {
    openMenuId = "";
    renderMegaNav();
  }
});

renderAll();
