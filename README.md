Amana Growth Partners website, source files (29 October 2026)

What this is: everything needed to rebuild the website exactly as it is live.
To rebuild: install Node.js, open a terminal in this folder and run
    node site2/build3.js
The finished site appears in site2/out/site (upload that folder's contents, zipped, to Cloudflare Pages).

Where things live:
  site2/build3.js     pages, menus, services and home page
  site2/insights.js   Insights articles (set status to 'live' to publish one)
  site2/seo.js        search titles, descriptions, FAQs, structured data, sitemap, robots, llms.txt
  site2/leak_page.js  Leak Finder
  site2/roi_page.js   ROI calculator
  site2/style.css     all styling
  *_test.js           calculator checks (need Playwright)

## Publishing
Cloudflare Pages builds this repository automatically:
- Build command: `node site2/build3.js`
- Output directory: `site2/out/site`
