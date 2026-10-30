// Search and answer engine layer: titles, descriptions, FAQs, structured data, crawl files.
const SITE = 'https://amanagrowthpartners.com';
const LINKEDIN = 'https://www.linkedin.com/in/davidhodgsonuae/';
const EMAIL = 'info@amanagrowthpartners.com';
const TODAY = new Date().toISOString().slice(0, 10);
// Cloudflare Pages serves clean addresses without .html, so every public URL uses that form
const urlFor = (f) => f === 'index.html' ? `${SITE}/` : `${SITE}/${f.replace(/\.html$/, '')}`;

const plain = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&rsquo;|&lsquo;/g, '’').replace(/&ldquo;|&rdquo;/g, '"').replace(/&middot;/g, '·').replace(/&nbsp;/g, ' ');
const attr = (s) => plain(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

// Titles and descriptions, written around what buyers search for in the UK and the Middle East
const META = {
  'index.html': ['Amana Growth Partners | Revenue Growth Partner, UK & Middle East',
    'Operator led revenue growth for founders, CEOs, PE and VC firms and their portfolio companies in the UK and the Middle East. Diagnostics, retained sales leadership, sales hiring and market entry.'],
  'about.html': ['About David Hodgson, Managing Partner | Amana Growth Partners',
    'David Hodgson has spent twenty years building revenue engines from zero across the UK, Europe and the Middle East. Why he started Amana Growth Partners and how he works.'],
  'diagnostic.html': ['Sales & Revenue Diagnostic, UK & Middle East | Amana',
    'An objective sales and revenue diagnostic in 2 to 4 weeks, for a fixed fee. Find why growth has stalled, the fixes in priority order and the cost of doing nothing. UK and Middle East.'],
  'embedded.html': ['30 to 90 Day Revenue Turnaround, with Warranty | Amana',
    'Hands on revenue turnaround for founders, CEOs, PE and VC. We find what is holding growth back, then build and run the fixes with your team within 90 days. UK and Middle East.'],
  'retained.html': ['Retained Growth Partner, Senior Sales Leadership | Amana',
    'Senior commercial leadership every month without a full time senior sales hire. Board level judgement on forecast, hiring, pricing and new markets, in the UK and the Middle East.'],
  'middle-east-market-entry.html': ['Middle East Market Entry, UAE & Saudi Arabia | Amana',
    'Win your first customers in the UAE, Saudi Arabia and the wider Gulf before you open an office or hire locally. Market testing, introductions, pipeline and local set up support.'],
  'mentoring.html': ['Sales Leadership Coaching & Mentoring, UK & Middle East | Amana',
    'One to one coaching for sales leaders from first line manager to VP. Pipeline reviews, deal strategy, hiring and tough conversations, from an operator who has done the job.'],
  'talent.html': ['Hire Right, Sales Hiring and Onboarding | Amana Growth Partners',
    'An operator beside you when you hire salespeople and sales leaders, with a 90 day onboarding plan for every hire. Not recruitment: we are not paid on who you hire. UK and the Middle East.'],
  'team-development.html': ['Sales Team Development & Training | Amana Growth Partners',
    'Build the skills, habits and weekly rhythm that make a whole sales team productive. Assessment, development plans, workshops and live deal coaching, in the UK and the Middle East.'],
  'leak.html': ['Sales Leak Finder, Free Revenue Loss Calculator | Amana',
    'Find out in 30 seconds what bad hires, stalled deals and admin are costing your sales engine. Free, with every figure backed by published research. GBP, USD and AED.'],
  'roi.html': ['Sales ROI Calculator, Free Revenue Growth Tool | Amana',
    'See what a stronger revenue engine could be worth to you. Enter your own numbers for three scenarios: higher win rate, bigger deals and more pipeline. Free, no sign up.'],
  'toolkit.html': ['The Revenue Engine Toolkit, Principles of Growth | Amana',
    'The principles behind a repeatable, scalable revenue engine. Five pillars, three foundations and how to measure everything, from Amana Growth Partners.'],
  'partners.html': ['Partners | Amana Growth Partners',
    'Specialist technology, transformation and recruitment partners we trust and bring in when your revenue engine needs them.'],
  'insights.html': ['Insights on Revenue Growth, UK & Middle East | Amana',
    'Straight answers for founders, investors and sales leaders on hiring, pipeline, forecasting and market entry across the UK and the Middle East. Every figure sourced.'],
  'privacy.html': ['Privacy Notice | Amana Growth Partners', 'How Amana Growth Partners handles personal information.'],
};

const WHERE = 'We work across the UK and the Middle East, from London and Dubai.';
// FAQs shown on each service page and mirrored in structured data. Facts only from the service itself.
const FAQ = {
  diagnostic: [
    ['What is a sales and revenue diagnostic?', 'An objective review of your pipeline, numbers, team and process. We talk to your leadership, sales team and customers to find the root causes of stalled revenue, not the symptoms, then present the fixes in priority order to you or your board.'],
    ['How long does a diagnostic take and how is it priced?', 'Two to four weeks, for a fixed fee agreed up front.'],
    ['Who is the diagnostic for?', 'Founders, CEOs, PE and VC investors and sales leaders who want an independent view of why revenue momentum has slowed, including investors reviewing a portfolio company. ' + WHERE],
  ],
  embedded: [
    ['What happens during the 30 to 90 Day Full Service?', 'We find what is really holding growth back in the first two weeks and agree the priorities with you. Then we build and run the fixes inside your business with your team, typically covering ideal customer profile, pipeline, sales process, forecasting, hiring and weekly rhythm.'],
    ['How hands on is it?', 'Very. We lead the discovery and planning inside your business and execute alongside your team, so the systems and processes keep running after we step back.'],
    ['Where do you deliver it?', WHERE],
  ],
  retained: [
    ['What is a retained growth partner?', 'Senior commercial judgement every month without a full time senior sales hire, similar to fractional sales leadership. We spend set days each month with the CEO and sales leader and help with the big calls on hiring, pipeline coverage, pricing, packaging and new markets.'],
    ['How is it priced?', 'A monthly fee based on the hours retained, reviewed quarterly.'],
    ['Do you attend leadership and board meetings?', 'Yes, as an observer, to give an objective view of revenue and keep the forecast honest. ' + WHERE],
  ],
  'middle-east-market-entry': [
    ['Do I need an office or a local entity to start selling in the Middle East?', 'No, not on day one. We test the market and win your first customers with you first, then help you set up locally and hire the right team when the time is right.'],
    ['Which markets do you cover?', 'The UAE, Saudi Arabia and the wider Gulf, for international businesses from the UK, Europe and beyond.'],
    ['How long does market entry support last and how is it priced?', 'From 3 to 6 months. Fees are flexible to your requirements and can combine a monthly retainer, commission and equity.'],
  ],
  mentoring: [
    ['Who is sales leadership coaching for?', 'Sales leaders from first line manager to VP, and the founders, CEOs and investors backing them.'],
    ['What do the sessions cover?', 'Pipeline reviews, deal strategy, hiring and tough conversations. Where it helps, we join a team meeting. The rhythm is set after a short assessment.'],
    ['How often do we meet and how is it priced?', 'Weekly, monthly or as required, at an hourly rate with the hours agreed in advance. ' + WHERE],
  ],
  talent: [
    ['How do you help us hire salespeople?', 'We define the role for your phase of growth, build the scorecard, test candidates on real deals and role plays, and sit in on the final decision. Then we build the 90 day onboarding plan with you, because onboarding is where a good hire succeeds or fails.'],
    ['Is this recruitment?', 'No. We are not paid on who you hire, so our only interest is getting the decision right. We work alongside your recruiters, or our recruitment partners, and we also assess internal talent for promotion.'],
    ['How is it priced?', 'A fixed fee per role, agreed up front, per hire or across a hiring plan. ' + WHERE],
  ],
  'team-development': [
    ['What does sales team development involve?', 'We assess the team deal by deal and skill by skill, build a development plan for each person and for the team, and coach on live deals and pipeline reviews.'],
    ['What do the workshops cover?', 'Practical skills for discovery, qualification, negotiation and closing, plus the weekly rhythm that keeps the new habits in place.'],
    ['How long does it take?', 'From six weeks, then as required, for a fee agreed up front per team. ' + WHERE],
  ],
};

const faqBlock = (id) => {
  const f = FAQ[id]; if (!f) return '';
  return `
<section class="band tight faq-band">
  <div class="wrap stack">
    <p class="eyebrow">Questions we are asked</p>
    <div class="faq">${f.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
  </div>
</section>`;
};

// ---------------------------------------------------------------- structured data
const ORG = `${SITE}/#organization`, PERSON = `${SITE}/#david-hodgson`, WEBSITE = `${SITE}/#website`;
const AREAS = [
  { '@type': 'Country', name: 'United Kingdom' },
  { '@type': 'Country', name: 'United Arab Emirates' },
  { '@type': 'Country', name: 'Saudi Arabia' },
  { '@type': 'Place', name: 'Middle East' },
];
const TOPICS = ['Revenue growth', 'Go to market strategy', 'Sales leadership', 'Fractional sales leadership', 'Sales pipeline and forecasting', 'Sales hiring and assessment', 'Sales team development', 'Commercial due diligence', 'Private equity value creation', 'Middle East market entry', 'SaaS', 'Data and insights', 'Market intelligence'];

const core = () => [
  {
    '@type': 'ProfessionalService', '@id': ORG, name: 'Amana Growth Partners', url: `${SITE}/`,
    logo: `${SITE}/assets/amana-logo-primary.svg`, image: `${SITE}/assets/david-hodgson.jpg`, email: EMAIL,
    description: 'Operator led revenue growth partner for founders, CEOs, PE and VC firms and their portfolio companies in the UK and the Middle East.',
    founder: { '@id': PERSON }, areaServed: AREAS, knowsAbout: TOPICS,
    location: [
      { '@type': 'Place', name: 'Dubai', address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' } },
      { '@type': 'Place', name: 'London', address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' } },
    ],
  },
  {
    '@type': 'Person', '@id': PERSON, name: 'David Hodgson', jobTitle: 'Managing Partner', worksFor: { '@id': ORG },
    url: urlFor('about.html'), image: `${SITE}/assets/david-hodgson.jpg`, sameAs: [LINKEDIN], knowsAbout: TOPICS,
    description: 'Commercial leader with twenty years building revenue engines from zero across the UK, Europe and the Middle East, in SaaS, data and insights, and intelligence businesses.',
  },
  { '@type': 'WebSite', '@id': WEBSITE, url: `${SITE}/`, name: 'Amana Growth Partners', publisher: { '@id': ORG }, inLanguage: 'en-GB' },
];

const crumbs = (items) => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: url })) });

function graph(p, services) {
  const url = urlFor(p.file);
  const [title, desc] = META[p.file] || [plain(p.title), plain(p.desc)];
  const page = { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description: desc, isPartOf: { '@id': WEBSITE }, about: { '@id': ORG }, inLanguage: 'en-GB' };
  const g = [...core(), page];
  const home = ['Home', `${SITE}/`];
  const svc = services.find(s => `${s.id}.html` === p.file);
  if (p.article) {
    const a = p.article;
    page.mainEntity = { '@id': `${url}#article` };
    g.push({ '@type': 'BlogPosting', '@id': `${url}#article`, headline: plain(a.title), description: plain(a.desc), url, mainEntityOfPage: { '@id': `${url}#webpage` }, datePublished: a.date, dateModified: a.modified || a.date, inLanguage: 'en-GB', author: { '@id': PERSON }, publisher: { '@id': ORG }, image: `${SITE}/assets/david-hodgson.jpg`, about: [/UK/.test(a.region) && { '@type': 'Country', name: 'United Kingdom' }, /Middle East/.test(a.region) && { '@type': 'Place', name: 'Middle East' }].filter(Boolean), citation: a.sources.map(([t, u]) => ({ '@type': 'CreativeWork', name: plain(t), url: u })) });
    g.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: a.faq.map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: ans } })) });
    g.push(crumbs([home, ['Insights', urlFor('insights.html')], [plain(a.title), url]]));
  } else if (p.file === 'insights.html') {
    page['@type'] = 'CollectionPage';
    g.push(crumbs([home, ['Insights', url]]));
  } else if (p.file === 'index.html') {
    page.mainEntity = { '@id': ORG };
    g.push({ '@type': 'ItemList', name: 'Services', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: plain(s.name), url: urlFor(`${s.id}.html`) })) });
  } else if (p.file === 'about.html') {
    page['@type'] = 'ProfilePage'; page.mainEntity = { '@id': PERSON };
    g.push(crumbs([home, ['About us', url]]));
  } else if (svc) {
    g.push({ '@type': 'Service', '@id': `${url}#service`, name: plain(svc.name), serviceType: plain(svc.short), url, description: plain(svc.intro.join(' ')), provider: { '@id': ORG }, areaServed: svc.id === 'middle-east-market-entry' ? AREAS.slice(1) : AREAS, audience: { '@type': 'BusinessAudience', name: 'Founders, CEOs, PE and VC firms, and sales leaders' } });
    if (FAQ[svc.id]) g.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: FAQ[svc.id].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
    g.push(crumbs([home, ['Services', `${SITE}/#services`], [plain(svc.short), url]]));
  } else if (p.file === 'leak.html' || p.file === 'roi.html') {
    g.push({ '@type': 'WebApplication', name: title.split(' | ')[0], url, applicationCategory: 'BusinessApplication', operatingSystem: 'Any, in the browser', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' }, provider: { '@id': ORG }, description: desc });
    g.push(crumbs([home, [title.split(' | ')[0].split(',')[0], url]]));
  } else {
    g.push(crumbs([home, [title.split(' | ')[0], url]]));
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': g }).replace(/</g, '\\u003c');
}

function headExtra(p, services) {
  const url = urlFor(p.file);
  const noindex = p.file === '404.html';
  return `${noindex ? '' : `<link rel="canonical" href="${url}">`}
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="Amana Growth Partners">
<meta property="og:locale" content="en_GB">
<meta property="og:image" content="${SITE}/assets/david-hodgson.jpg">
<meta property="og:image:alt" content="David Hodgson, Managing Partner, Amana Growth Partners">
<meta name="twitter:card" content="summary_large_image">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}">
${noindex ? '' : `<script type="application/ld+json">${graph(p, services)}</script>`}`;
}

function apply(pages) {
  for (const p of pages) {
    if (p.article) META[p.file] = [p.article.seoTitle, p.article.desc];
    const m = META[p.file]; if (!m) continue;
    p.title = m[0].replace(/&(?!amp;)/g, '&amp;'); p.desc = attr(m[1]);
  }
}

function crawlFiles(pages, services) {
  const urls = pages.filter(p => p.file !== '404.html' && !p.draft).map(p => urlFor(p.file));
  const arts = pages.filter(p => p.article && !p.draft);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc><lastmod>${TODAY}</lastmod></url>`).join('\n')}\n</urlset>\n`;
  const robots = `# Search engines and AI assistants are welcome\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;
  const line = (f) => { const m = META[f]; return m ? `- [${m[0].split(' | ')[0]}](${urlFor(f)}): ${m[1]}` : ''; };
  const llms = `# Amana Growth Partners

> Operator led revenue growth partner for founders, CEOs, PE and VC firms and their portfolio companies in the UK and the Middle East. Founded by David Hodgson, Managing Partner, who has spent twenty years building revenue engines from zero across the UK, Europe and the Middle East in SaaS, data and insights, and intelligence businesses. Based in London and Dubai.

Amana works with private equity and venture capital firms across their portfolio, and directly with founder led and established B2B companies. Engagements include sales and revenue diagnostics, hands on 30 to 90 day turnarounds, retained sales leadership, sales hiring and assessment, sales team development, sales leadership coaching, and market entry into the UAE, Saudi Arabia and the wider Gulf. Contact: ${EMAIL}

## Services

${services.map(s => line(`${s.id}.html`)).join('\n')}

## Free tools

${line('leak.html')}
${line('roi.html')}

## About

${line('about.html')}
${line('toolkit.html')}
${line('partners.html')}
${arts.length ? `\n## Insights\n\n${arts.map(p => line(p.file)).join('\n')}\n` : ''}`;
  return { 'sitemap.xml': sitemap, 'robots.txt': robots, 'llms.txt': llms };
}

module.exports = { urlFor, SITE, META, FAQ, faqBlock, headExtra, apply, crawlFiles };
