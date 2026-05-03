# Qianfosi.org Website

Static bilingual website (Chinese / English) for Thousand Buddha Temple (千佛寺), hosted on GitHub Pages (see `CNAME`).

## Structure

- Plain HTML/CSS/JS — no build step, no framework, no package manager.
- Each page has two versions: `<page>.html` (Chinese, default) and `<page>_en.html` (English).
- Shared chrome lives in `header.html` / `header_en.html` and `footer.html` / `footer_en.html`, injected at runtime by `shared.js`.
- Sectional content lives under top-level folders: `about/`, `contact/`, `news/`, `visit/` (with subfolders `calendar/`, `classics/`, `donation/`, `library/`).
- Assets: `images/`, `icons/`, `files/`. News article images are in `news/news-images/`.

## Editing conventions

- When updating a page, update **both** the Chinese and English versions in lockstep — they mirror each other.
- In English content, the temple name is **"Thousand Buddha Temple"** — never "Qianfo Temple" or other transliterations.
- The home page announcement block is `<div class="announcement">` in `index.html` and `index_en.html` — this is what gets refreshed for each new event.
- Posters/flyers for upcoming events go in `<div class="poster">` on the home page, with the image in `images/`.
- Past events are listed in the `past-events-section` on the home page, linking to articles under `news/`.

## Don't

- Don't run a build — there isn't one. Just edit the HTML/CSS/JS directly.
- Don't introduce a framework, bundler, or package manager for what is currently a static site.
