"""Generate standalone crawlable HTML pages for all guides and sitemap.xml."""

import html
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_JS = ROOT / "js" / "articles.js"
GUIDES_DIR = ROOT / "guides"
BASE_URL = "https://jiwonyida.github.io/living-in-korea-guide"
LAST_VERIFIED = "2026-11-28"

OFFICIAL_SOURCES_BY_CATEGORY = {
    "lease": [
        ("대한민국 법제처 — 주택임대차보호법", "https://www.law.go.kr/법령/주택임대차보호법"),
        ("대한민국 법제처 — 공인중개사법", "https://www.law.go.kr/법령/공인중개사법"),
        ("국토교통부 — 주택 임대차 제도 안내", "https://www.molit.go.kr"),
    ],
    "safety": [
        ("대한민국 법제처 — 주택임대차보호법", "https://www.law.go.kr/법령/주택임대차보호법"),
        ("대법원 인터넷등기소 (등기부등본 열람)", "https://www.iros.go.kr"),
        ("정부24 (확정일자·전입신고 안내)", "https://www.gov.kr"),
        ("하이코리아 HiKorea (외국인 체류지 변경신고)", "https://www.hikorea.go.kr"),
    ],
    "finding": [
        ("국토교통부 — 실거래가 공개시스템", "https://rt.molit.go.kr"),
        ("서울특별시 — 전월세 정보 안내", "https://housing.seoul.go.kr"),
        ("대한민국 법제처 — 주택임대차보호법", "https://www.law.go.kr/법령/주택임대차보호법"),
    ],
    "living": [
        ("정부24 — 생활·민원 통합 안내", "https://www.gov.kr"),
        ("하이코리아 HiKorea — 외국인 체류 안내", "https://www.hikorea.go.kr"),
    ],
    "chinese": [
        ("대한민국 법제처 — 주택임대차보호법", "https://www.law.go.kr/법령/주택임대차보호법"),
        ("대법원 인터넷등기소 (등기부등본 열람)", "https://www.iros.go.kr"),
        ("하이코리아 HiKorea (외국인 체류 민원)", "https://www.hikorea.go.kr"),
    ],
}

CATEGORY_LABELS = {
    "finding": "집 구하기 기초 · Finding a Home",
    "lease": "임대차 계약 · Lease & Contracts",
    "safety": "안전 & 법률 · Safety & Legal",
    "living": "한국 생활 정착 · Living in Korea",
    "chinese": "유학생·특화 가이드 · Special Guide",
}


def parse_articles(source: str) -> list[dict]:
    """Extract metadata and Korean static HTML content for each article in articles.js."""
    # Split on top-level article objects by matching '  {\n    id: "'
    chunks = re.split(r'\n  \{\s*\n\s*id:\s*"', source)
    articles = []
    for chunk in chunks[1:]:
        id_match = re.match(r'([^"]+)"', chunk)
        if not id_match:
            continue
        art_id = id_match.group(1)

        def grab_str(pattern: str) -> str:
            m = re.search(pattern, chunk)
            return m.group(1).strip() if m else ""

        category = grab_str(r'category:\s*"([^"]+)"')
        read_time = grab_str(r'readTime:\s*(\d+)')
        publish_date = grab_str(r'publishDate:\s*"([^"]+)"')
        author_name = grab_str(r'author:\s*\{\s*name:\s*"([^"]+)"')
        author_role = grab_str(r'role:\s*"([^"]+)"')

        title_block = re.search(r'title:\s*\{([\s\S]*?)\n\s*\},', chunk)
        excerpt_block = re.search(r'excerpt:\s*\{([\s\S]*?)\n\s*\},', chunk)
        content_block = re.search(r'content:\s*\{([\s\S]*?)\n\s*\}\s*\n\s*\}', chunk)

        ko_title = ""
        if title_block:
            m = re.search(r'ko:\s*"((?:\\.|[^"\\])*)"', title_block.group(1))
            if m:
                ko_title = m.group(1)

        ko_excerpt = ""
        if excerpt_block:
            m = re.search(r'ko:\s*"((?:\\.|[^"\\])*)"', excerpt_block.group(1))
            if m:
                ko_excerpt = m.group(1)

        ko_content = ""
        if content_block:
            m = re.search(r'ko:\s*`([\s\S]*?)`', content_block.group(1))
            if m:
                ko_content = m.group(1).strip()

        tags_m = re.search(r'tags:\s*\[([^\]]+)\]', chunk)
        tags = []
        if tags_m:
            tags = [t.strip().strip('"') for t in tags_m.group(1).split(",")]

        articles.append({
            "id": art_id,
            "category": category,
            "readTime": read_time or "5",
            "publishDate": publish_date or LAST_VERIFIED,
            "authorName": author_name or "Living in Korea Guide Editorial",
            "authorRole": author_role or "Korean Housing Information Archive",
            "title": ko_title,
            "excerpt": ko_excerpt,
            "content": ko_content,
            "tags": tags,
        })
    return articles


def render_guide_html(article: dict, all_articles: list[dict]) -> str:
    art_id = article["id"]
    title_esc = html.escape(article["title"])
    excerpt_esc = html.escape(article["excerpt"])
    canonical = f"{BASE_URL}/guides/{art_id}.html"
    cat_label = CATEGORY_LABELS.get(article["category"], article["category"])
    sources = OFFICIAL_SOURCES_BY_CATEGORY.get(article["category"], OFFICIAL_SOURCES_BY_CATEGORY["lease"])

    tags_html = "\n".join(
        f'          <span class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">#{html.escape(t)}</span>'
        for t in article["tags"]
    )
    sources_html = "\n".join(
        f'            <li><a href="{html.escape(url)}" target="_blank" rel="noopener noreferrer" class="text-emerald-800 hover:underline font-medium">{html.escape(name)} ↗</a></li>'
        for name, url in sources
    )

    related = [a for a in all_articles if a["id"] != art_id][:3]
    related_html = "\n".join(
        f'''          <a href="{a["id"]}.html" class="block p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all">
            <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-700">{html.escape(a["category"])}</span>
            <h4 class="font-bold text-slate-900 mt-1 line-clamp-2">{html.escape(a["title"])}</h4>
            <p class="text-xs text-slate-500 mt-2 line-clamp-2">{html.escape(a["excerpt"])}</p>
          </a>'''
        for a in related
    )

    return f'''<!DOCTYPE html>
<html lang="ko" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title_esc} | Living in Korea Guide</title>
  <meta name="description" content="{excerpt_esc}">
  <link rel="canonical" href="{canonical}">

  <meta property="og:title" content="{title_esc} | Living in Korea Guide">
  <meta property="og:description" content="{excerpt_esc}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{canonical}">

  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="stylesheet" href="../styles.css?v=20261128">
</head>
<body class="bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">

  <header class="sticky top-0 z-40 w-full glass-nav border-b border-slate-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <a href="../index.html" class="flex items-center space-x-2.5">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-800 to-teal-600 flex items-center justify-center text-white shadow-sm">
          <i data-lucide="home" class="w-5 h-5"></i>
        </div>
        <span class="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight" data-i18n="brandName">
          리빙 인 코리아 가이드
        </span>
      </a>

      <nav class="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
        <a href="../index.html" class="hover:text-emerald-700 transition-colors" data-i18n="navHome">홈</a>
        <a href="../index.html#calculator" class="hover:text-emerald-700 transition-colors" data-i18n="navCalculator">정착 비용 계산기</a>
        <a href="../index.html#guides" class="text-emerald-700 font-bold" data-i18n="navGuides">주거 가이드</a>
        <a href="../index.html#about" class="hover:text-emerald-700 transition-colors" data-i18n="navFaq">소개 & FAQ</a>
      </nav>

      <div class="flex items-center space-x-2">
        <select
          id="guideLangSelect"
          aria-label="Language"
          class="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-700 focus:outline-none">
          <option value="ko">🇰🇷 한국어</option>
          <option value="en">🇺🇸 English</option>
          <option value="zh">🇨🇳 中文</option>
          <option value="ja">🇯🇵 日本語</option>
        </select>
      </div>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-10">
    <!-- Breadcrumb -->
    <nav class="text-xs font-medium text-slate-500 flex items-center space-x-2" aria-label="Breadcrumb">
      <a href="../index.html" class="hover:text-emerald-700" data-i18n="navHome">홈</a>
      <span>/</span>
      <a href="../index.html#guides" class="hover:text-emerald-700" data-i18n="navGuides">주거 가이드</a>
      <span>/</span>
      <span class="text-slate-800 truncate">{title_esc}</span>
    </nav>

    <article class="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
      <div class="flex flex-wrap items-center gap-2 text-xs mb-4">
        <span class="font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-900">
          {html.escape(cat_label)}
        </span>
        <span class="text-slate-500 font-medium">· {article["readTime"]} min read</span>
        <span class="text-slate-500 font-medium">· 작성일: {article["publishDate"]}</span>
        <span class="text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
          법령·행정 기준 검증: {LAST_VERIFIED}
        </span>
      </div>

      <h1 id="guideTitle" class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
        {title_esc}
      </h1>

      <p id="guideExcerpt" class="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
        {excerpt_esc}
      </p>

      <div class="flex flex-wrap gap-2 pb-6 border-b border-slate-200">
{tags_html}
      </div>

      <div class="flex items-center space-x-3 py-5 border-b border-slate-100 text-sm">
        <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
          {html.escape(article["authorName"][0])}
        </div>
        <div>
          <p class="font-bold text-slate-900">{html.escape(article["authorName"])}</p>
          <p class="text-xs text-slate-500">{html.escape(article["authorRole"])}</p>
        </div>
      </div>

      <!-- Full Static Article Body -->
      <div id="guideBody" class="article-body-content text-slate-700 leading-relaxed space-y-6 pt-8">
        {article["content"]}
      </div>

      <!-- Official Legal & Administrative References -->
      <aside class="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <h2 class="text-base font-extrabold text-slate-900 flex items-center space-x-2">
          <i data-lucide="shield-check" class="w-5 h-5 text-emerald-700"></i>
          <span>검증 기준 및 공식 참고 기관 (Official References)</span>
        </h2>
        <p class="text-xs text-slate-600 leading-relaxed">
          본 사이트는 한국 부동산 실무 지식을 바탕으로 외국인 거주자에게 정확한 임대차 정보와 정착 가이드를 제공하는 비영리 정보 아카이브입니다. 모든 콘텐츠는 한국 임대차보호법 및 공식 행정 절차를 기준으로 검증하여 작성됩니다.
        </p>
        <ul class="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
{sources_html}
        </ul>
      </aside>

      <!-- Cost Calculator CTA -->
      <div class="mt-8 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-bold" data-i18n="calcTitle">초기 정착 자금 & 실제 월 주거비 계산기</h3>
          <p class="text-xs sm:text-sm text-slate-300 mt-1" data-i18n="calcSubtitle">계약 및 입주 시 당장 필요한 총 목돈과 매월 고정으로 지출되는 진짜 주거 비용을 계산해 보세요.</p>
        </div>
        <a href="../index.html#calculator" class="whitespace-nowrap px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow" data-i18n="btnHeroCalculator">
          정착 비용 계산해보기
        </a>
      </div>
    </article>

    <!-- Related Guides -->
    <section class="space-y-4">
      <h2 class="text-xl font-extrabold text-slate-900">함께 읽으면 좋은 주거 가이드</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
{related_html}
      </div>
    </section>
  </main>

  <footer class="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-xs mt-12">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p data-i18n="footerCopyright">© 2026 Living in Korea Guide. All rights reserved. 대한민국 거주 외국인을 위해 제작되었습니다.</p>
      <div class="flex items-center space-x-4">
        <a href="../index.html" class="hover:text-white underline" data-i18n="navHome">홈</a>
        <a href="../privacy.html" class="hover:text-white underline" data-i18n="linkPrivacy">개인정보처리방침</a>
        <a href="../terms.html" class="hover:text-white underline" data-i18n="linkTerms">이용약관 및 면책조항</a>
      </div>
    </div>
  </footer>

  <script src="../js/i18n.js?v=20261128"></script>
  <script src="../js/articles.js?v=20261128"></script>
  <script>
    (function () {{
      const articleId = "{art_id}";
      const select = document.getElementById("guideLangSelect");

      function applyGuideLanguage(lang) {{
        const valid = ["ko", "en", "zh", "ja"].includes(lang) ? lang : "ko";
        localStorage.setItem("living_korea_lang", valid);
        if (select) select.value = valid;

        const t = window.translations && window.translations[valid];
        if (t) {{
          document.querySelectorAll("[data-i18n]").forEach(el => {{
            const k = el.getAttribute("data-i18n");
            if (t[k]) el.innerHTML = t[k];
          }});
        }}

        const item = (window.articlesData || []).find(a => a.id === articleId);
        if (item) {{
          const titleEl = document.getElementById("guideTitle");
          const excerptEl = document.getElementById("guideExcerpt");
          const bodyEl = document.getElementById("guideBody");
          if (titleEl && item.title[valid]) titleEl.textContent = item.title[valid];
          if (excerptEl && item.excerpt[valid]) excerptEl.textContent = item.excerpt[valid];
          if (bodyEl && item.content[valid]) bodyEl.innerHTML = item.content[valid];
        }}
      }}

      document.addEventListener("DOMContentLoaded", () => {{
        const saved = localStorage.getItem("living_korea_lang") || "ko";
        if (saved !== "ko") {{
          applyGuideLanguage(saved);
        }} else if (select) {{
          select.value = "ko";
        }}
        if (select) {{
          select.addEventListener("change", (e) => applyGuideLanguage(e.target.value));
        }}
        if (window.lucide) lucide.createIcons();
      }});
    }})();
  </script>
</body>
</html>
'''


def build_sitemap(articles: list[dict]) -> str:
    urls = [
        (f"{BASE_URL}/", "weekly", "1.0"),
        (f"{BASE_URL}/privacy.html", "monthly", "0.4"),
        (f"{BASE_URL}/terms.html", "monthly", "0.4"),
    ]
    for art in articles:
        urls.append((f"{BASE_URL}/guides/{art['id']}.html", "monthly", "0.8"))

    items = "\n".join(
        f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{LAST_VERIFIED}</lastmod>
    <changefreq>{freq}</changefreq>
    <priority>{prio}</priority>
  </url>"""
        for loc, freq, prio in urls
    )
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{items}
</urlset>
"""


def main() -> None:
    source = ARTICLES_JS.read_text(encoding="utf-8")
    articles = parse_articles(source)
    if len(articles) != 10:
        raise RuntimeError(f"Expected 10 articles, parsed {len(articles)}")

    GUIDES_DIR.mkdir(exist_ok=True)
    for art in articles:
        if not art["title"] or not art["content"]:
            raise RuntimeError(f"Incomplete parsed Korean data for {art['id']}")
        out_path = GUIDES_DIR / f"{art['id']}.html"
        out_path.write_text(render_guide_html(art, articles), encoding="utf-8")

    (ROOT / "sitemap.xml").write_text(build_sitemap(articles), encoding="utf-8")
    print(f"Generated {len(articles)} guide pages in {GUIDES_DIR} and sitemap.xml")


if __name__ == "__main__":
    main()
