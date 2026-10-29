// Amana Growth Partners website, final copy (27 Oct 2026). David's words, dashes swapped for plain punctuation.
//   site2/out/site     full HTML documents for Cloudflare Pages
//   site2/out/preview  same, with index.html as a body fragment for the private preview artifact
const fs = require('fs');
const SEO = require('./seo.js');
const INS = require('./insights.js');
const INS_LIVE = INS.ARTICLES.filter(a => a.status === 'live');
let MODE = 'site'; // 'site' or 'preview': drafts and their links only appear in the preview
const showInsights = () => MODE === 'preview' || INS_LIVE.length > 0;
const path = require('path');
const ROOT = __dirname;
const SCR = path.join(ROOT, '..');
const KIT = path.join(SCR, 'brand2/Amana_Brand_2026');
const OUT_SITE = path.join(ROOT, 'out/site');
const OUT_PREVIEW = path.join(ROOT, 'out/preview');

const EMAIL = 'info@amanagrowthpartners.com';
const CALENDLY = 'https://calendly.com/david-amanagrowthpartners/30min';
const LINKEDIN = 'https://www.linkedin.com/in/davidhodgsonuae/';
const BOOK = './#enquire';
const FONTS = 'https://fonts.googleapis.com/css2?family=Amiri&family=Mrs+Saint+Delafield&family=Space+Grotesk:wght@300;400;500&display=swap';
const VERSION = Date.now().toString(36);
const todo = (t) => `<span class="todo">${t}</span>`;

// Booking button wording, from David's copy
const TALK20 = 'Let&rsquo;s talk. Max 20 to 30 minutes. Book now!';
const TALK2030 = TALK20;
const TALKNOW = 'Let&rsquo;s talk. Book now!';

const NAV = [
  ['about.html', 'About us', 'about'],
  ['about.html#values', 'Values', 'values'],
  ['about.html#mission', 'Vision &amp; Mission', 'mission'],
  ['./#services', 'Services', 'services'],
  ['leak.html', 'Leak Finder', 'leak'],
  ['roi.html', 'ROI Calculator', 'roi'],
  ['toolkit.html', '<span class="lbl-full">Amana Revenue Toolkit</span><span class="lbl-short">Toolkit</span>', 'toolkit'],
];

const PARTNERS = [
  ['technology', 'Technology &amp; Transformation', 'Specialist partners who modernise the tools, systems and data behind your revenue engine, so your team can sell rather than wrestle with technology.'],
  ['recruiters', 'Rockstar Recruiters', 'Specialist recruiters who find and secure the sales talent your revenue engine needs, from first hires to senior leaders.'],
];

const drop = (id, label, isCurrent, items) => `<div class="nav-drop">
        <button class="nav-drop-btn${isCurrent ? ' is-current' : ''}" type="button" aria-expanded="false" aria-controls="${id}">${label} <span aria-hidden="true">&#9662;</span></button>
        <div class="nav-drop-menu" id="${id}">
          ${items.map(([href, text, sub]) => `<a href="${href}">${text}${sub ? `<small>${sub}</small>` : ''}</a>`).join('\n          ')}
        </div>
      </div>`;

const header = (current) => `
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="./" aria-label="Amana Growth Partners home"><img src="assets/amana-logo-primary.svg" alt="Amana Growth Partners" width="300" height="132"></a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav" id="menu-btn">Menu</button>
    <nav class="nav" id="nav" aria-label="Main">
      ${drop('about-menu', 'About us', current === 'about' || current === 'insights', [['about.html', 'Our story', ''], ['about.html#values', 'Values', ''], ['about.html#mission', 'Vision &amp; Mission', ''], ...(showInsights() ? [['insights.html', 'Insights', '']] : [])])}
      ${drop('services-menu', 'Services', current === 'services', [...SERVICES.map(sv => [`${sv.id}.html`, sv.short, ''])])}
      <div class="nav-tools" role="group" aria-label="Tools to use now">
        <span class="nav-tools-label">Tools to use now</span>
        ${NAV.filter(n => ['leak', 'roi'].includes(n[2])).map(([href, label, key]) => `<a class="nav-tool" href="${href}"${key === current ? ' aria-current="page"' : ''}>${label}</a>`).join('\n        ')}
      </div>
      ${NAV.filter(n => !['services', 'about', 'values', 'mission', 'leak', 'roi'].includes(n[2])).map(([href, label, key]) => `<a href="${href}"${key === current ? ' aria-current="page"' : ''}>${label}</a>`).join('\n      ')}
      ${drop('partners-menu', 'Partners', current === 'partners', [...PARTNERS.map(([id, label]) => [`partners.html#${id}`, label, '']), ['partners.html', 'All partners', '']])}
      <a class="btn small" href="${BOOK}">Contact</a>
    </nav>
  </div>
</header>`;

const footer = () => `
<footer class="site-footer">
  <div class="wrap">
    <div>
      <img src="assets/amana-logo-reverse.svg" alt="Amana Growth Partners" width="300" height="132">
      <p class="tag">Repeatable revenue engines that actually convert.</p>
      <p class="foot-amana"><span class="ar" lang="ar">أمانة</span>Amana is the Arabic word for something held in trust. Placed in your care, protected on your honour, and returned to its owner intact. We go one step further and hand it back stronger.</p>
    </div>
    <nav class="foot-links" aria-label="Footer">
      ${NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join('')}${showInsights() ? '<a href="insights.html">Insights</a>' : ''}<a href="partners.html">Partners</a>
      <a href="${BOOK}">Contact</a>
    </nav>
    <div class="foot-meta">
      <span class="copyline" style="font-size:inherit"><span>${EMAIL}</span><button class="copy-btn" type="button" data-copy="${EMAIL}">Copy</button></span>
      <span>Dubai, United Arab Emirates. Working across the UK, Europe and the Middle East.</span>
      <span>&copy; 2026 Amana Growth Partners &middot; <a href="privacy.html" style="color:inherit">Privacy</a></span>
    </div>
  </div>
</footer>
<script>
(function () {
  /* Every new page opens at the top unless the link points to a section */
  var navType = ''; try { navType = (performance.getEntriesByType('navigation')[0] || {}).type || ''; } catch (e) {}
  var toTop = function () { if (!location.hash && navType !== 'back_forward') window.scrollTo(0, 0); };
  toTop(); window.addEventListener('load', toTop);
  /* Links to a section (such as Contact) land on it even after images and fonts shift the layout */
  var toHash = function () { if (!location.hash || location.hash.length < 2) return; var t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); };
  window.addEventListener('load', function () { setTimeout(toHash, 50); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(toHash, 50); });
  var mb = document.getElementById('menu-btn'), nav = document.getElementById('nav');
  var drops = Array.prototype.slice.call(document.querySelectorAll('.nav-drop'));
  var closeAll = function (except) { drops.forEach(function (x) { if (x !== except) { x.classList.remove('open'); x.querySelector('.nav-drop-btn').setAttribute('aria-expanded', 'false'); } }); };
  drops.forEach(function (dd) {
    var db = dd.querySelector('.nav-drop-btn');
    db.addEventListener('click', function (e) { e.stopPropagation(); closeAll(dd); var o = dd.classList.toggle('open'); db.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest || !e.target.closest('.nav-drop')) closeAll(null); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(null); });  if (mb) mb.addEventListener('click', function () { var o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o ? 'true' : 'false'); mb.textContent = o ? 'Close' : 'Menu'; });
  if (nav) nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); mb.textContent = 'Menu'; } });
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-copy');
      var done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1800); };
      var pick = function () { var s = b.previousElementSibling; if (!s) return; var r = document.createRange(); r.selectNodeContents(s); var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r); };
      try { navigator.clipboard.writeText(v).then(done, pick); } catch (e) { pick(); }
    });
  });
})();
</script>`;

const cta = (h = TALKNOW, intro = 'Tell us where you are and where you want to get to.', btn = TALKNOW) => `
<section class="band sand tight">
  <div class="wrap cta">
    <h2>${h}</h2>
    <p class="lead">${intro}</p>
    <a class="btn ghost" href="${CALENDLY}" target="_blank" rel="noopener">${btn}</a>
  </div>
</section>`;

const headTags = (title, desc) => `<title>${title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="assets/style.css?v=${VERSION}">`;
const fullDoc = (p) => `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${headTags(p.title, p.desc)}
${SEO.headExtra(p, SERVICES)}
</head>
<body>
${header(p.nav)}
<main>
${p.body}
</main>
${footer()}
</body>
</html>
`;
const fragment = (p) => `${headTags(p.title, p.desc)}\n${header(p.nav)}\n<main>\n${p.body}\n</main>\n${footer()}\n`;

// ---------------------------------------------------------------- content
const SERVICES = [
  { id: 'diagnostic', name: 'Diagnostic', short: 'Diagnostic', rhythm: '2 to 4 weeks', fee: 'Fixed fee, agreed up front',
    intro: ['For founders, CEOs, PE, VC, sales leaders and anyone who wants an objective view or isn&rsquo;t entirely sure why revenue momentum has stalled.'],
    problems: ['We are growing, but not fast enough, and I can&rsquo;t see why.', 'A portfolio company is missing its plan.', 'I have no confidence in the forecast.', 'I&rsquo;m thinking about letting the sales leader go.'],
    doList: ['Review your pipeline, numbers, team and process', 'Talk to your leadership, sales team and customers', 'Find the root causes, not the symptoms', 'Present the findings to you or your board'],
    getList: ['A clear view of what is working and what is broken', 'The fixes, in priority order', 'The cost of doing nothing, in time, money and people&rsquo;s livelihoods'] },
  { id: 'embedded', name: '30 to 90 Day Full Service, with warranty', short: '30 to 90 Day Full Service', rhythm: 'Up to 90 days', fee: 'Agreed up front',
    timeFact: 'Up to 90 days, sometimes longer, case dependent',
    intro: ['For founders, CEOs, PE, VC, sales leaders and anyone who wants an objective view or isn&rsquo;t entirely sure why revenue momentum has stalled.', 'We work with you and your teams to find what is holding growth back and agree the plan to course correct. We&rsquo;re very hands on with your team, and we execute together.'],
    problems: ['Our average deal size needs to increase.', 'Our LTV to CAC ratio is way off.', 'We made some poor hiring decisions.', 'The product is so slick, but customers aren&rsquo;t buying.', 'The sales leader isn&rsquo;t right.'],
    doList: ['Find what is really holding growth back, in the first two weeks', 'Agree the priorities with you', 'Lead the discovery and planning inside your business, with your team', 'Typically ICP, customer focus, pipeline, sales process, forecasting, hiring and weekly rhythm'],
    getList: ['The real problems found, not guessed', 'Fixes built and running within 90 days', 'Repeatable systems and processes that scale'] },
  { id: 'retained', name: 'Retained Growth Partner', short: 'Retained Growth Partner', rhythm: 'Monthly, reviewed quarterly', fee: 'Monthly fee based on hours retained',
    intro: ['For founders, CEOs, PE, VC and boards. Senior commercial judgement every month, without hiring a full time CRO or VP Sales.'],
    problems: ['I need a CRO&rsquo;s judgement, not a CRO&rsquo;s salary.', 'I can&rsquo;t afford a VP Sales or CRO right now.'],
    doList: ['Set days each month with the CEO and sales leader', 'Join leadership and board meetings as an observer', 'Keep the forecast honest', 'Help with the big calls on hiring, pipeline coverage, pricing, packaging and entering new markets'],
    getList: ['Senior commercial leadership on hand', 'For a fraction of the cost of a full-time hire'] },
  { id: 'middle-east-market-entry', name: 'Local Market Entry, Middle East', short: 'Local Market Entry, Middle East', rhythm: 'From 3 to 6 months', fee: 'Flexible to requirements',
    intro: ['For international businesses that want to win customers in the Gulf and the wider Middle East.', 'We test the market, build pipeline and win your first customers with you, before you commit to an office, a local entity or full time hires.', 'Local knowledge, a trusted network, and someone on the ground who has built from zero in the region more than once.'],
    problems: ['We want to grow in the Middle East but have no one on the ground.', 'Opening an office and hiring locally is a big bet. Are we sure the demand is there?', 'We don&rsquo;t know how deals really get done in the region.'],
    doList: ['Agree your goals, budget and what success looks like in the region', 'Plan 2 to 3 entry scenarios and test the market quickly', 'Open doors, run meetings alongside your team and support the close', 'Introduce partners, distributors and set up advisers', 'Help you set up locally and hire the right team when the time is right'],
    getList: ['First customers and real pipeline in the region', 'A clear, evidence based decision on whether to invest further', 'No office or local entity needed on day one'] },
  { id: 'mentoring', name: 'Sales Leadership Coaching &amp; Mentoring', short: 'Sales Leadership Coaching &amp; Mentoring', rhythm: 'Weekly, monthly, or as required', fee: 'Hourly rate, hours agreed in advance',
    intro: ['For sales leaders from first line to VP, and the founders, CEOs and investors backing them.', 'An objective sounding board that makes your sales leaders sharper and more productive.'],
    problems: ['My sales leader is good but has no one to think out loud with.', 'Let&rsquo;s look at internal mentor programmes.'],
    doList: ['One to one sessions for first line managers through to VP', 'Pipeline reviews, deal strategy, hiring and tough conversations', 'Join a team meeting where it helps', 'Rhythm set after a short assessment'],
    getList: ['A more confident leader who makes better calls', 'A leader with less emotion, who feels protected'] },
  { id: 'talent', name: 'Talent Identification', short: 'Talent Identification', rhythm: 'Per hire, or across a hiring plan', fee: 'Fixed fee per role, agreed up front',
    intro: ['For founders, CEOs, PE, VC and sales leaders about to hire or promote into sales.', 'Find, assess and secure the sales people who will actually hit the number, before a wrong hire costs you a year.'],
    problems: ['We hired a sales leader who interviewed brilliantly and delivered nothing.', 'I don&rsquo;t know what good looks like for this role.', 'Our best rep isn&rsquo;t ready to lead, but we promoted them anyway.'],
    doList: ['Define what good looks like for the role, the market and the stage you are at', 'Build the scorecard, interview plan and practical assessment', 'Join interviews and run role plays with shortlisted candidates', 'Assess internal talent for promotion and readiness', 'Work alongside your recruiters, or our recruitment partners'],
    getList: ['The right hire, made on evidence rather than instinct', 'A repeatable hiring process your team can run without us'] },
  { id: 'team-development', name: 'Sales Team Development', short: 'Sales Team Development', rhythm: 'From 6 weeks, then as required', fee: 'Agreed up front, per team',
    intro: ['For sales leaders, founders and CEOs who want the whole team performing, not just the top two.', 'Build the skills, habits and rhythm that make a sales team consistently productive.'],
    problems: ['Two of our reps carry the whole number.', 'We train people, but nothing changes on the calls.', 'Every rep sells differently, and the forecast shows it.'],
    doList: ['Assess the team, deal by deal and skill by skill', 'Build a development plan for each person and for the team', 'Run practical workshops on discovery, qualification, negotiation and closing', 'Coach on live deals and pipeline reviews', 'Set the weekly rhythm that keeps the new habits in place'],
    getList: ['More of the team hitting target, not just the stars', 'Shared standards, a common language and a forecast you can trust'] },
];
const svc = (id) => SERVICES.find(s => s.id === id);

const SESSIONS = [
  ['Growth Review', '30 min', 'Where revenue is leaking, and the first thing to fix.'],
  ['Middle East Market Entry Check', '30 min', 'Is the Gulf right for you now, and how to start.'],
  ['Sales Hire Sense Check', '30 min', 'A second opinion before you make a senior sales hire.'],
  ['Sales Leader Coaching &amp; Mentorship', '30 min', 'Talk through the number, the team, the board. Need to vent without repercussions?'],
];

const STEPS = [
  ['Listen', 'Your goals, your people, your timeframes.', 'Week 1'],
  ['Diagnose', 'Numbers, pipeline and team, honestly assessed.', 'Weeks 2 to 3'],
  ['Planning', 'The priority fixes, built with your team.', 'Weeks 3 to 4'],
  ['Execute', 'Rhythm, coaching and habits that stick.', 'Week 5 onwards, and repeat'],
  ['Hand over', 'An engine that is well oiled and runs without us.', 'Final week'],
];

const CHAPTERS = [
  ['The revenue equation', 'Before you fix anything, know where your revenue actually comes from.'],
  ['Talent', 'The engine is only ever as good as the people running it.'],
  ['Enablement', 'Great people with no skills or system will always underperform good people with one.'],
  ['Marketing and demand', 'Sales cannot close what marketing does not create.'],
  ['Sales', 'A sales process nobody follows is not a process. It is hope, and hope is not a strategy.'],
  ['Customer success', 'The cheapest revenue you will ever win is from customers you already have. It is worth 20 times net new.'],
  ['The foundations', 'Great pillars on weak foundations will still fall over.'],
  ['Measure anything, but not everything', 'What gets measured gets done. Focus is key.'],
  ['Commission planning and targeting', 'Incentivise the right way, and pay your people what they deserve. Don&rsquo;t pay for nothing.'],
];

const WANTS = [
  { id: 'fix', want: 'Find and fix what is holding growth back' },
  { id: 'retained', want: 'Have senior commercial leadership, without a full-time hire' },
  { id: 'middle-east-market-entry', want: 'Enter the Middle East and win customers' },
  { id: 'mentoring', want: 'Make my sales leaders, or myself, sharper' },
  { id: 'talent', want: 'Hire and promote the right sales people' },
  { id: 'team-development', want: 'Develop my whole sales team' },
  { id: 'toolkit', want: 'Understand what makes a revenue engine work' },
  { id: 'talk', want: 'Talk it through first' },
];

const btns = (detail, label = TALK20) => `<div class="btn-row"><a class="btn" href="${CALENDLY}" target="_blank" rel="noopener">${label}</a>${detail ? `<a class="btn ghost" href="${detail}">Full details</a>` : ''}</div>`;
const panel = ({ eyebrow, h, forText, doList, getList, detail }) => `
      <p class="eyebrow">${eyebrow}</p>
      <h3>${h}</h3>
      ${forText.map(t => `<p class="for">${t}</p>`).join('')}
      <div class="panel-cols">
        <div><p class="mini">What we do</p><ul class="ticks">${doList.map(x => `<li>${x}</li>`).join('')}</ul></div>
        <div><p class="mini">What you get</p><ul class="ticks">${getList.map(x => `<li>${x}</li>`).join('')}</ul></div>
      </div>
      ${btns(detail)}`;
const panelFor = (w) => {
  if (w.id === 'fix') return `
      <p class="eyebrow">Two ways to start</p>
      <h3>Find the leak, plan accordingly, then execute.</h3>
      <p class="for">For founders, CEOs, PE, VC, sales leaders and anyone who knows growth has stalled, but not exactly why.</p>
      <div class="options">
        <a class="option" href="diagnostic.html"><em>2 to 4 weeks</em><strong>Diagnostic: getting under the hood</strong><span>An honest outside view of what is holding revenue back, before you spend more, or make any big decisions.</span></a>
        <a class="option" href="embedded.html"><em>Up to 90 days</em><strong>30 to 90 Day Full Service, with warranty</strong><span>We work with you and your teams to find what is holding growth back and agree the plan to course correct. We&rsquo;re very hands on, and we execute together.</span></a>
      </div>
      <p class="for">Not sure which? Start with the Diagnostic. Everything it finds carries straight into the 30 to 90 day full service.</p>
      ${btns('', TALK2030)}`;
  if (w.id === 'retained') return panel({ eyebrow: 'Monthly, quarterly, annually', h: 'Retained Growth Partner',
    forText: ['For founders, CEOs, PE and VC. Senior commercial judgement, without hiring a full-time CRO or VP Sales. It could be as little as 5 hours a month.'],
    doList: ['Set days each month with the CEO, sales leader and wider team', 'Join leadership and board meetings as an observer, for objective revenue reviews', 'Keep the forecast honest', 'Help with the big calls on hiring, pricing, packaging and entering new markets'],
    getList: ['Senior commercial leadership on hand', 'For a fraction of the cost of a full-time hire'], detail: 'retained.html' });
  if (w.id === 'middle-east-market-entry') return panel({ eyebrow: 'From 3 months &middot; Monthly retainer &middot; Commission &middot; Equity (LTIP)', h: 'Local Market Entry, Middle East',
    forText: ['For international businesses entering the Gulf. Test the market and win your first customers before you open an office or hire locally.'],
    doList: ['Access to our network and counsel for your Middle East growth plans', 'Test the market quickly and find your first customers', 'Shape your regional strategy, open doors, join pitch meetings and help close', 'Introduce partners, distributors and set up advisers', 'Help you hire a local team when the time is right'],
    getList: ['De-risk opening an office and hiring locally', 'Real pipeline and first customers', 'No office or local entity needed on day one'], detail: 'middle-east-market-entry.html' });
  if (w.id === 'mentoring') return panel({ eyebrow: 'Weekly or monthly', h: 'Sales Leadership Coaching &amp; Mentoring',
    forText: ['For sales leaders from first line to VP, and the CEOs and investors backing them. An objective sounding board that makes your sales leaders sharper and more productive.', 'I wish I had more of this in the field.'],
    doList: ['One to one sessions for first line managers through to VP', 'Pipeline reviews, deal strategy, hiring and tough conversations, and much more', 'Join a team meeting where it helps', 'Rhythm set after a short assessment'],
    getList: ['A more confident leader who makes better calls', 'Strip the emotion out of it', 'A team that hits its number more often'], detail: 'mentoring.html' });
  if (w.id === 'talent' || w.id === 'team-development') { const sv = svc(w.id); return panel({ eyebrow: sv.rhythm, h: sv.name, forText: sv.intro, doList: sv.doList, getList: sv.getList, detail: `${sv.id}.html` }); }
  if (w.id === 'toolkit') return `
      <p class="eyebrow">Included with every engagement</p>
      <h3>The Principles of the Revenue Engine</h3>
      <p class="for"><b>Building your supercar.</b> How to build a commercial engine that converts. Five pillars, three foundations, and the numbers that prove it is working.</p>
      <ul class="ticks">${CHAPTERS.map(c => `<li>${c[0]}</li>`).join('')}</ul>
      <div class="btn-row"><a class="btn" href="toolkit.html">See the toolkit</a><a class="btn ghost" href="${CALENDLY}" target="_blank" rel="noopener">${TALK20}</a></div>`;
  return `
      <p class="eyebrow">Free &middot; No sales pitch</p>
      <h3>Start with a conversation.</h3>
      <p class="for">Tell us where you are and where you want to get to. We will tell you honestly whether we can help, and how. If we can&rsquo;t, we will tell you who can.</p>
      <ul class="ticks">${SESSIONS.map(s => `<li>${s[0]}, ${s[1]}</li>`).join('')}</ul>
      <div class="btn-row"><a class="btn" href="${CALENDLY}" target="_blank" rel="noopener">Let&rsquo;s talk. Max 20 to 30 minutes. Book now!</a></div>`;
};

const pages = [];

// HOME
pages.push({
  file: 'index.html', nav: 'home', title: 'Amana Growth Partners',
  desc: 'David Hodgson helps founders, CEOs, investors, PE, VC and sales leaders build revenue engines that are repeatable and scalable. We are operators, not consultants. Book a short introduction.',
  body: `
<section aria-label="Film">
  <div class="wrap">
    <div class="media note-mode" id="media">
      <canvas id="ambient" aria-hidden="true"></canvas>
      <video id="bg-video" muted loop playsinline preload="none" aria-hidden="true" data-src="assets/hero.mp4"></video>
      <div class="panel-left"><div class="panel-photo"><img src="assets/david-hodgson.jpg" alt="David Hodgson" width="800" height="1000"></div><p class="panel-name"><strong>David Hodgson</strong><span>Value creation &amp; commercial growth partner</span><span class="panel-sectors">SaaS, Data &amp; Insights, Intelligence</span></p></div>
      <div class="panel-note">
        <p class="eyebrow">A note from me</p>
        <p>If you are reading this, growth probably matters a great deal to you right now. Maybe it has stalled. Maybe you are about to back a business, enter a new market, or even let your sales leader go. Perhaps you are the sales leader carrying a number with nobody to think it through with.</p>
        <p>I have sat on every side of that table. I&rsquo;ve spent 20 years building revenue engines as an operator inside B2B SaaS and data businesses, and there&rsquo;s a lot of value I can add pre and post deal. Pre deal on due diligence, and post deal to accelerate value creation. I started Amana because I have seen how much time and money is wasted building revenue engines, in founder led businesses and in large corporates alike.</p>
        <p>When you work with me you get the truth early, from someone who has done the job.</p>
        <p>Mistakes are costing founders, investors and shareholders huge sums of money, and costing the company&rsquo;s employees their livelihoods. It becomes &lsquo;the blame game&rsquo;.</p>
        <p>We exist to fix this serial problem.</p>
        <div class="note-tools"><a class="btn" href="leak.html">Find your leak</a><a class="btn ghost" href="roi.html">Work out your ROI</a></div>
      </div>
    </div>
    <p class="stats-label">Built from zero, more than once. UK, Europe &amp; Middle East.</p>
    <div class="stats stats-words">
      <div class="stat"><strong>20+</strong><span>Years building revenue engines &amp; coaching rockstar talent</span></div>
      <div class="stat"><strong>Over $300M</strong><span>Pipeline created</span></div>
      <div class="stat"><strong>Over $75M</strong><span>Closed</span></div>
      <div class="stat"><strong>Over $30M</strong><span>Closed in the Middle East, built from nothing</span></div>
    </div>
  </div>
</section>

<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <h1 class="rise d2">The growth partner I wish I&rsquo;d had.</h1>
    </div>
    <div class="intro rise d3">
      <p>We help founders, CEOs, investors and sales leaders build revenue engines that are repeatable and scalable.</p>
      <p><b>We are operators, not consultants.</b></p>
      <div class="btn-row hero-btns"><a class="btn" href="${CALENDLY}" target="_blank" rel="noopener">${TALK20}</a><a class="btn ghost" href="#services">Problem statements</a></div>
    </div>
  </div>
</section>

<section class="band mist" id="services" style="scroll-margin-top:80px">
  <div class="wrap">
    <div class="want">
      <div>
      <div class="stack" style="margin-bottom:clamp(20px,3vw,32px)">
        <h2>Services</h2><p class="eyebrow">I want to&hellip;</p>
        <p class="muted" style="font-style:italic;font-size:0.95rem">Pick your need for a short value summary.</p>
      </div>
      <div class="want-list" role="tablist" aria-label="I want to" aria-orientation="vertical">
        ${WANTS.map((w, i) => `<button type="button" class="want-btn" role="tab" id="t-${w.id}" aria-selected="${i === 0}" aria-controls="p-${w.id}" tabindex="${i === 0 ? 0 : -1}"><span>${w.want}</span><i aria-hidden="true">&rarr;</i></button>`).join('\n        ')}
      </div>
      </div>
      <div>
        ${WANTS.map((w, i) => `<div class="want-panel" role="tabpanel" id="p-${w.id}" aria-labelledby="t-${w.id}"${i === 0 ? '' : ' hidden'}>${panelFor(w)}
        </div>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>

<section class="band" id="way" style="scroll-margin-top:80px">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">The Amana Way</p><h2>Five steps, the same every time.</h2></div>
      <p class="muted lead">Whatever the service, the work follows the same path and framework, so you always know where we are. See the example below.</p>
    </div>
    <div class="way">
      ${STEPS.map(([a, b, c], i) => `
      <div class="step"><span class="n">${i + 1}</span><h3>${a}</h3><p>${b}</p><span class="when">${c}</span></div>`).join('')}
    </div>
    <p class="keep">You keep every tool, template and playbook we build together. Repeatable &amp; scalable.</p>
  </div>
</section>

<section class="band mist tight">
  <div class="wrap"><p class="eyebrow tools-eyebrow">Tools to use now</p></div>
  <div class="wrap tools-teaser">
    <a class="tool-card" href="leak.html"><p class="eyebrow">The Leak Finder</p><h2>How much is your sales engine losing?</h2><p class="muted">Three questions, 30 seconds, every number sourced.</p><span class="btn">Find your leak</span></a>
    <a class="tool-card" href="roi.html"><p class="eyebrow">ROI calculator</p><h2>What could fixing it be worth?</h2><p class="muted">Three scenarios from your own numbers, in about a minute.</p><span class="btn ghost">Work out your ROI</span></a>
  </div>
</section>

<section class="band mist">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">Free discovery sessions</p><h2>Start with a conversation. No sales pitch.</h2></div>
      <p class="muted lead">Short, practical sessions. You leave with something useful whether we work together or not.</p>
    </div>
    <div class="sessions">
      ${SESSIONS.map(([a, t, b]) => `
      <div class="session"><span class="len">${t}</span><h3>${a}</h3><p>${b}</p><a href="${CALENDLY}" target="_blank" rel="noopener">Book this session &rarr;</a></div>`).join('')}
    </div>
  </div>
</section>

<section class="band mist" id="book" style="scroll-margin-top:80px">
  <div class="wrap book">
    <div class="stack-lg">
      <p class="eyebrow">Contact</p>
      <h2>${TALK20}</h2>
      <p class="lead muted">Tell us where you are and where you want to get to. We will tell you honestly whether we can help. If we can&rsquo;t, we know someone who can.</p>
    </div>
    <div class="details">
      <div><span class="label">Choose a time</span>${CALENDLY ? `<a class="btn" href="${CALENDLY}" target="_blank" rel="noopener" style="align-self:flex-start">See available times</a>` : todo('Calendly link to add')}</div>
      <div><span class="label">Email</span><span class="copyline"><span>${EMAIL}</span><button class="copy-btn" type="button" data-copy="${EMAIL}">Copy</button></span></div>
      <div><span class="label">Based in</span><span>Dubai &amp; London. Working across the UK, Europe and the Middle East.</span></div>
    </div>
  </div>
${require('./lead_form.js')({ EMAIL, CALENDLY })}
</section>
<script>
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.want-btn'));
  var mq = window.matchMedia('(max-width: 860px)');
  var holder = tabs.length ? document.getElementById(tabs[0].getAttribute('aria-controls')).parentNode : null;
  function place() {
    if (!holder) return;
    tabs.forEach(function (x) {
      var pnl = document.getElementById(x.getAttribute('aria-controls'));
      if (mq.matches) { if (x.nextElementSibling !== pnl) x.parentNode.insertBefore(pnl, x.nextSibling); }
      else if (pnl.parentNode !== holder) holder.appendChild(pnl);
    });
  }
  place();
  if (mq.addEventListener) mq.addEventListener('change', place);
  function pick(t) {
    tabs.forEach(function (x) {
      var on = x === t; x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    place();
    if (mq.matches) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { pick(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key, j = k === 'ArrowDown' ? i + 1 : k === 'ArrowUp' ? i - 1 : k === 'Home' ? 0 : k === 'End' ? tabs.length - 1 : null;
      if (j === null) return; e.preventDefault(); j = (j + tabs.length) % tabs.length;
      tabs.forEach(function (x, n) { x.tabIndex = n === j ? 0 : -1; }); tabs[j].focus();
    });
  });
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var box = document.getElementById('media'), v = document.getElementById('bg-video');
  if (v && !reduce) {
    v.src = v.getAttribute('data-src');
    v.addEventListener('canplay', function () { v.classList.add('on'); box.classList.add('has-video'); v.play().catch(function () {}); }, { once: true });
    v.addEventListener('error', function () { v.removeAttribute('src'); }, { once: true });
  }
  var c = document.getElementById('ambient');
  if (!c || !c.getContext) return;
  var ctx = c.getContext('2d'), w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  var discs = [
    { fx: .74, fy: .52, fr: .62, col: '#F2C9A2', ax: .02, ay: .03, sp: .00011 },
    { fx: .965, fy: .9, fr: .06, col: '#1F6F55', ax: .01, ay: .02, sp: .00017 },
    { fx: .8, fy: .98, fr: .07, col: '#FBEBDD', ax: .02, ay: .01, sp: .00013 },
    { fx: .945, fy: .1, fr: .03, col: '#1D1D1B', ax: .01, ay: .01, sp: .0002 }
  ];
  function size() { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    var m = Math.min(w, h * 1.6);
    discs.forEach(function (d, i) {
      var x = (d.fx + Math.sin(t * d.sp + i) * d.ax) * w, y = (d.fy + Math.cos(t * d.sp * 1.3 + i) * d.ay) * h;
      ctx.fillStyle = d.col; ctx.beginPath(); ctx.arc(x, y, d.fr * m, 0, Math.PI * 2); ctx.fill();
    });
    if (!reduce && !(v && v.classList.contains('on'))) requestAnimationFrame(draw);
  }
  size(); draw(0); window.addEventListener('resize', function () { size(); draw(performance.now()); });
})();
// Centre the note against the photo (desktop layout only)
(function () {
  var box = document.querySelector('.media.note-mode'); if (!box) return;
  var left = box.querySelector('.panel-left'), photo = box.querySelector('.panel-photo'), note = box.querySelector('.panel-note');
  var mq = window.matchMedia('(min-width: 861px)');
  function fit() {
    left.style.marginTop = ''; note.style.marginTop = '';
    if (!mq.matches) return;
    var top = box.getBoundingClientRect().top;
    var pc = photo.getBoundingClientRect().top - top + photo.offsetHeight / 2;
    var nt = pc - note.offsetHeight / 2 - (note.getBoundingClientRect().top - top);
    if (nt >= 0) note.style.marginTop = nt + 'px'; else left.style.marginTop = (-nt) + 'px';
  }
  fit(); window.addEventListener('resize', fit); window.addEventListener('load', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();
</script>`,
});

// SERVICE PAGES
SERVICES.forEach((s, i) => {
  const next = SERVICES[(i + 1) % SERVICES.length];
  pages.push({
    file: `${s.id}.html`, nav: 'services', title: `${s.short.replace('&amp;', '&')} | Amana Growth Partners`, desc: `${s.short.replace('&amp;', '&')}. ${s.intro[s.intro.length > 1 ? 1 : 0].replace(/&rsquo;/g, '’')}`,
    body: `
<section class="page-hero">
  <div class="wrap stack-lg">
    <a class="textlink back" href="./#services">&larr; All services</a>
    <div class="stack"><p class="eyebrow">${s.rhythm}</p><h1>${s.name}</h1></div>
    <div class="stack" style="max-width:62ch">${s.intro.map(t => `<p class="for-line">${t}</p>`).join('')}</div>
  </div>
</section>
<section class="band mist tight">
  <div class="wrap stack">
    <p class="eyebrow">Sound familiar?</p>
    <div class="quotes">${s.problems.map(p => `<p>&ldquo;${p}&rdquo;</p>`).join('')}</div>
  </div>
</section>
<section class="band">
  <div class="wrap">
    <div class="cols-2">
      <div class="stack"><p class="eyebrow">What we do</p><ul class="ticks lead">${s.doList.map(x => `<li>${x}</li>`).join('')}</ul></div>
      <div class="stack"><p class="eyebrow">What you get</p><ul class="ticks lead">${s.getList.map(x => `<li>${x}</li>`).join('')}</ul></div>
    </div>
    <div class="facts">
      <div><span class="label">Time</span><span>${s.timeFact || s.rhythm}</span></div>
      <div><span class="label">Fee</span><span>${s.fee}</span></div>
      <div><span class="label">Next service</span><a href="${next.id}.html">${next.short} &rarr;</a></div>
    </div>
  </div>
</section>
${SEO.faqBlock(s.id)}
${cta()}`,
  });
});

// TOOLKIT: the high level view, tied to The Amana Way
const engine = `
<figure class="engine" aria-label="The revenue engine">
  <div class="eng-platform"><span class="eng-tag">Your platform</span><div><span>Products</span><span>Services</span><span>Data &amp; insight</span></div></div>
  <div class="eng-band">The revenue engine</div>
  <div class="eng-pillars">${[['Talent acquisition', 'Recruitment and onboarding'], ['Sales enablement', 'Learning and development'], ['Marketing', 'Demand generation'], ['Sales', 'Business development'], ['Customer success', 'Account management']].map(([a, b]) => `<div class="eng-pillar"><strong>${a}</strong><span>${b}</span></div>`).join('')}</div>
  <p class="eng-label">Built on three foundations</p>
  <div class="eng-founds">${[['Sales tools', 'The tech stack'], ['Standard operating procedures', 'Repeatable &amp; scalable'], ['Revenue operations', 'The data room, your CRM']].map(([a, b]) => `<div class="eng-found"><strong>${a}</strong><span>${b}</span></div>`).join('')}</div>
  <div class="eng-measure"><strong>Measure everything with total clarity</strong><span>Lead and lag indicators for every pillar. CAC, LTV, payback, retention.</span></div>
</figure>`;
pages.push({
  file: 'toolkit.html', nav: 'toolkit', title: 'The Principles of the Revenue Engine | Amana Growth Partners',
  desc: 'The Principles of the Revenue Engine. Building your supercar. Five pillars, three foundations and the numbers that prove it is working. The framework behind The Amana Way.',
  body: `
<section class="tk-hero">
  <div class="wrap hero-grid">
    <div class="stack-lg">
      <p class="eyebrow">Amana Revenue Toolkit</p>
      <h1>The Principles of the Revenue Engine</h1>
      <p class="tk-car">Building your supercar.</p>
    </div>
    <div class="intro">
      <p>How to build a revenue machine that converts, and how to know it is working. It&rsquo;s the same framework we use with every customer.</p>
      <div class="btn-row"><a class="btn" href="#engine">See the engine</a><a class="btn ghost" href="${CALENDLY}" target="_blank" rel="noopener">${TALK20}</a></div>
    </div>
  </div>
</section>

<section class="band" style="border-top:1px solid var(--line)">
  <div class="wrap cols-2">
    <div class="stack"><p class="eyebrow">Why this exists</p><h2>Growth is rarely an effort problem.</h2></div>
    <div class="stack">
      <p class="lead-p">Most growth problems are not effort problems. The team is working hard. The founder is in every deal. Marketing is busy. Demand seems there. And still the number moves too slowly, or not at all.</p>
      <p class="lead-p">In twenty years of building revenue engines, we have found the same thing every time. Growth comes from a small number of pillars working together, sitting on solid foundations, and measured honestly. Get those right and success follows. Get one wrong and the engine leaks.</p>
      <p class="lead-p">The Principles of the Revenue Engine are our attempt to write that down in one place. It is free, it is practical, and it is the same framework we use with every customer.</p>
    </div>
  </div>
</section>

<section class="band mist" id="engine" style="scroll-margin-top:80px">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">The revenue engine</p><h2>Five pillars. Three foundations. Measured honestly.</h2></div>
      <div class="stack">
        <p class="muted lead">Any SaaS platform, whatever it sells, even with services and data, relies on the same five pillars.</p>
        <p class="muted lead">Pair them with world class tools, repeatable procedures and a clean data room, then measure everything.</p>
        <p class="muted lead">From there, it&rsquo;s about having a clearly defined commercial story that ensures decision makers must make a decision.</p>
      </div>
    </div>
    ${engine}
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">The revenue equation</p><h2>Every number comes back to one line.</h2></div>
      <p class="muted lead">Recurring revenue is the goal, and what you keep. Clear targeting is important, and to make that target we must look at four things.</p>
    </div>
    <div class="gap-model">
      <div class="gm-row target"><span class="op"></span><span class="gm-box">What is the target</span></div>
      <div class="gm-row"><span class="op">&minus;</span><span class="gm-box">What is already in the bag and guaranteed</span></div>
      <div class="gm-row"><span class="op">+</span><span class="gm-box neg">What is at risk</span></div>
      <div class="gm-row"><span class="op">&minus;</span><span class="gm-box">What is in the pipeline that we are confident will convert</span></div>
      <div class="gm-row"><span class="op">=</span><span class="gm-box gap">What is the gap to target</span></div>
      <div class="gm-row result"><span class="op">&rarr;</span><span class="gm-box ink">What additional pipeline do we have to build and close to make that gap</span></div>
    </div>
  </div>
</section>

<section class="band mist">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">Efficiency</p><h2>Growth has to pay for itself.</h2></div>
      <p class="muted lead">Investors do not just ask how fast you are growing. They ask what it costs. Three numbers answer that.</p>
    </div>
    <div class="cols-3">
      <div class="card"><span class="label">LTV : CAC</span><p class="big-n">3 : 1</p><p><b>At the very least.</b> What a customer is worth, against what it cost to win them. Three or better is healthy.</p></div>
      <div class="card"><span class="label">CAC payback</span><p class="big-n">&lt; 12 to 18</p><p>Months to earn back the cost of winning a customer. Shorter means you can grow faster on less cash.</p></div>
      <div class="card"><span class="label">Burn multiple</span><p class="big-n">&lt; 1.5</p><p>Cash burned for every unit of new recurring revenue. Lower is better.</p></div>
    </div>
  </div>
</section>

<section class="band ink tight">
  <div class="wrap stack-lg">
    <p class="eyebrow" style="color:var(--sand)">Definition</p>
    <p class="pull" style="color:var(--white);max-width:34ch">A commercial engine is the people, process, technology and data that turn a market into recurring revenue, predictably and at a cost you can afford.</p>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">The principles</p><h2>9 chapters</h2></div>
      <p class="muted lead">Each chapter covers why it matters, what great looks like, how to measure it, the principles, the warning signs and the tools. The full chapters are coming soon.</p>
    </div>
    <ol class="tk-grid static">${CHAPTERS.map(([a, b], i) => `<li><div><span class="n">${String(i + 1).padStart(2, '0')}</span><strong>${a}</strong><span class="muted">${b}</span></div></li>`).join('')}</ol>
  </div>
</section>
${cta('Want an honest look at your engine?', 'Tell us where you are and where you want to get to. No sales pitch.', 'Let&rsquo;s talk. 20 to 30 minutes. Book now!')}`,
});

// ABOUT
pages.push({
  file: 'about.html', nav: 'about', title: 'About Us | Amana Growth Partners',
  desc: 'David Hodgson, Managing Partner of Amana Growth Partners. Twenty years building revenue engines across the UK, Europe and the Middle East.',
  body: `
<section class="page-hero">
  <div class="wrap stack-lg">
    <p class="eyebrow">About us</p>
    <h1>I have made the mistakes, so you do not have to.</h1>
  </div>
</section>
<section class="band" style="padding-top:0;padding-bottom:28px">
  <div class="wrap portrait">
    <figure>
      <img src="assets/david-hodgson.jpg" alt="David Hodgson, Managing Partner of Amana Growth Partners" width="800" height="1000">
      <figcaption>David Hodgson &middot; Managing Partner</figcaption>
    </figure>
    <div class="story">
      <p>I was born in Sharjah in the early 1980s. My father came to the UAE in the 1970s and built his working life here, and the Gulf has been home for most of mine. It is where I learnt that business is done between people, and that trust takes years to earn and a moment to lose.</p>
      <p>I started my career in frontline banking, and six years later I spent nearly ten years in a private equity backed software business that sold into supply chains. This is where I cut my teeth. I started in data entry, passing contacts to the sales team, then writing scripts and booking meetings. I moved into what was then telesales and quickly became one of the top performing reps in the business. From there I led teams and became obsessed with data. This gave me the opportunity to work in sales operations, and to learn the value of forecast accuracy upstream. Over the years I helped open offices around the world, including Hong Kong, and worked on turnarounds across Europe.</p>
      <p>Since then, I have built go to market from zero in the Middle East more than once. I helped launch a business with no customers and no team, and today it turns over more than 30 million in the region. Within that, I took a newly acquired product to 4 million in under 2 years, in the middle of COVID. More recently, I led the commercial turnaround for one of the world&rsquo;s largest data businesses.</p>
      <p>Along this journey, I have made many mistakes, and have witnessed how it goes wrong in different areas of the revenue machine, and someone usually gets the blame.</p>
      <p>I&rsquo;ve seen sales hires made in a hurry, targets set without planning, and forecasts submitted without thought and evidence. I&rsquo;ve seen founders told what they wanted to hear until the money ran out, and others so in denial they would not hear or accept the truth. Most of it was totally avoidable, and everyone usually knows.</p>
      <p>I want to live in a blame free revenue world. Ha ha!</p>
    </div>
  </div>
</section>
<section class="band tight" style="padding-top:48px">
  <div class="wrap">
    <div class="quote-pair"><p class="pull">&ldquo;There is value and money in being trusted.&rdquo;<cite>Charlie Munger</cite></p><p class="pull">&ldquo;Getting stuff done and executing are highly underrated!&rdquo;<cite>David Hodgson</cite></p></div><p class="quote-note">In a world that is not slowing down, and a market full of &lsquo;I need quick wins and quick exits&rsquo;, I believe that is truer than ever.</p>
  </div>
</section>
<section class="band mist" id="mission" style="scroll-margin-top:80px">
  <div class="wrap cols-2">
    <div class="stack"><p class="eyebrow">Vision</p><p class="lead">A world that understands what it asks of its commercial leaders. The VP Sales or CRO in a small or mid-sized business is expected to deliver investor returns on a clock, with models built for a different era and a board that rarely sees the load. We want founders, CEOs, boards and investors to recognise that pressure for what it is, and to stop treating it as a problem of the person rather than the system.</p></div>
    <div class="stack"><p class="eyebrow">Mission</p><p class="lead">To stand beside the commercial leader, share the load with your sales leader and balance it with the CEO and board. We bring an impartial view, rebuild what is broken in the model with everyone as a unit, get execution moving with urgency, and hand the business back stronger, with the work already underway.</p></div>
  </div>
</section>
<section class="band" id="values" style="scroll-margin-top:80px">
  <div class="wrap">
    <div class="section-head"><div class="stack"><p class="eyebrow">Values</p><h2>What you can hold us to.</h2></div></div>
    <div class="cols-4">
      <div class="card value"><h3>Trust</h3><p>We tell you what we see, including what you would rather not hear. The truth is much more valuable early on.</p></div>
      <div class="card value"><h3>Loyalty</h3><p>Once we are in, we are on your side of the table. We stay through the hard quarters as well as the good ones, and we do not take on work that conflicts with yours.</p></div>
      <div class="card value"><h3>Ownership</h3><p>We do the work with your team, not just the advice. We build with your people, side by side, and leave behind a well oiled machine.</p></div>
      <div class="card value"><h3>Respect</h3><p>Business is done between people. We protect your reputation and your relationships as carefully as our own.</p></div>
    </div>
  </div>
</section>
<section class="band mist">
  <div class="wrap">
    <div class="section-head"><div class="stack"><p class="eyebrow">How we measure success</p><h2>Every engagement is judged on three things.</h2></div></div>
    <div class="cols-3">
      <div class="card"><h3>Revenue &amp; pipeline</h3><p>More of both, and more predictable.</p></div>
      <div class="card"><h3>Reputation</h3><p>With your customers, your team and your investors.</p></div>
      <div class="card"><h3>Operational efficiency</h3><p>A repeatable and scalable commercial engine that costs less to run and does not depend on heroes.</p></div>
    </div>
  </div>
</section>
${cta('Let&rsquo;s talk. Max 20 to 30 minutes!', 'Tell us where you are and where you want to get to.', 'Book a slot in our diary now!')}`,
});

// LEAK FINDER
pages.push({
  file: 'leak.html', nav: 'leak', title: 'The Leak Finder | Amana Growth Partners', desc: 'Every sales engine leaks. Find out how much yours is losing in 30 seconds, with research you can check.',
  body: require('./leak_page.js')({ CALENDLY }),
});

// ROI CALCULATOR
pages.push({
  file: 'roi.html', nav: 'roi', title: 'ROI calculator | Amana Growth Partners', desc: 'What could a stronger revenue engine be worth? Three scenarios from your own numbers.',
  body: require('./roi_page.js')({ CALENDLY, TALK20 }),
});

// PARTNERS
pages.push({
  file: 'partners.html', nav: 'partners', title: 'Partners | Amana Growth Partners', desc: 'Specialist partners we trust and bring in when your revenue engine needs them.',
  body: `
<section class="page-hero"><div class="wrap stack-lg"><p class="eyebrow">Partners</p><h1>Specialists we trust and bring in when your revenue engine needs them.</h1></div></section>
<section class="band" style="padding-top:0">
  <div class="wrap partner-list">
    ${PARTNERS.map(([id, label, text]) => `<article class="partner card" id="${id}" style="scroll-margin-top:100px">
      <p class="eyebrow">${label}</p>
      <p>${text}</p>
      <p class="partner-soon">Partner details coming soon.</p>
    </article>`).join('\n    ')}
  </div>
</section>
${cta('Let&rsquo;s talk. Max 20 to 30 minutes!', 'Tell us where you are and where you want to get to.', 'Book a slot in our diary now!')}`,
});

// PRIVACY
pages.push({
  file: 'privacy.html', nav: '', title: 'Privacy | Amana Growth Partners', desc: 'How Amana Growth Partners handles personal information.',
  body: `
<section class="page-hero"><div class="wrap stack-lg"><p class="eyebrow">Privacy</p><h1>Privacy notice</h1></div></section>
<section class="band" style="padding-top:0">
  <div class="wrap prose">
    <p>Amana Growth Partners respects your privacy. This notice explains what personal information we collect through this website, why, and what rights you have.</p>
    <h2>What we collect</h2>
    <ul><li>Details you send by email or through the enquiry form on this website, such as your name, company, role, email address, what you need help with and your message.</li><li>Details you give when booking a conversation through the booking service.</li><li>Basic, anonymous information about how the website is used, such as pages visited.</li></ul>
    <h2>How we use it</h2><p>Only to reply to you, arrange and hold conversations you ask for, and improve the website. We do not sell your information or use it for unrelated marketing.</p>
    <h2>Who we share it with</h2><p>Only the services needed to run this website, email, booking and our customer records, and only for those purposes. Enquiry form details are stored in HubSpot, our customer relationship system, in its European data centre. Some of these providers may store data outside your country, under appropriate safeguards.</p>
    <h2>How long we keep it</h2><p>For as long as needed to deal with your enquiry and any work that follows, then it is deleted.</p>
    <h2>Your rights</h2><p>You can ask to see, correct or delete the information we hold about you, or object to how it is used, by emailing ${EMAIL}.</p>
    <h2>Contact</h2><p>Amana Growth Partners, Dubai, United Arab Emirates. ${EMAIL}</p>
    <p class="muted">Last updated October 2026.</p>
  </div>
</section>`,
});

// INSIGHTS: hub and articles (drafts build into the preview only)
pages.push({ file: 'insights.html', nav: 'insights', title: 'Insights | Amana Growth Partners', desc: 'Insights', draft: INS_LIVE.length === 0,
  body: INS.hubPage(INS_LIVE.length ? INS_LIVE : INS.ARTICLES) + cta() });
for (const a of INS.ARTICLES) pages.push({ file: `${a.slug}.html`, nav: 'insights', title: a.title, desc: a.desc, article: a, draft: a.status !== 'live',
  body: INS.articlePage(a, { CALENDLY, TALK20 }) });

// ---------------------------------------------------------------- write
const ASSETS = {
  'style.css': path.join(ROOT, 'style.css'),
  'amana-logo-primary.svg': path.join(KIT, 'Logo/SVG/amana-logo-primary.svg'),
  'amana-logo-reverse.svg': path.join(KIT, 'Logo/SVG/amana-logo-reverse.svg'),
  'favicon.svg': path.join(KIT, 'Web/favicon.svg'),
  'favicon.ico': path.join(KIT, 'Web/favicon.ico'),
  'apple-touch-icon.png': path.join(KIT, 'Web/apple-touch-icon.png'),
  'david-square.jpg': path.join(SCR, 'site-src/assets/david-square.jpg'),
  'david-hodgson.jpg': path.join(SCR, 'site-src/assets/david-hodgson.jpg'),
  'email-logo.png': path.join(KIT, 'Email/email-logo.png'),
};
for (const out of [OUT_SITE, OUT_PREVIEW]) {
  fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(path.join(out, 'assets'), { recursive: true });
  for (const [k, v] of Object.entries(ASSETS)) fs.copyFileSync(v, path.join(out, 'assets', k));
}
SEO.apply(pages);
for (const p of pages) {
  MODE = 'site'; if (!p.draft) fs.writeFileSync(path.join(OUT_SITE, p.file), fullDoc(p));
  MODE = 'preview'; fs.writeFileSync(path.join(OUT_PREVIEW, p.file), p.file === 'index.html' ? fragment(p) : fullDoc(p));
}
MODE = 'site';
fs.writeFileSync(path.join(OUT_SITE, '_headers'), '/assets/*.css\n  Cache-Control: public, max-age=300\n/assets/*.jpg\n  Cache-Control: public, max-age=86400\n');
fs.writeFileSync(path.join(OUT_SITE, '404.html'), fullDoc({ file: '404.html', nav: '', title: 'Page not found | Amana Growth Partners', desc: 'Page not found.', body: `<section class="page-hero"><div class="wrap stack-lg"><p class="eyebrow">404</p><h1>That page has moved.</h1><p class="lead muted">The site has been simplified. <a class="textlink" href="./">Go to the home page &rarr;</a></p></div></section>` }));
// Redirects: old chapter pages to the toolkit, old service URL to the renamed page
fs.writeFileSync(path.join(OUT_SITE, '_redirects'), ['revenue-equation', 'talent', 'enablement', 'marketing', 'sales', 'success', 'foundations', 'measure', 'eight-steps'].map(c => `/toolkit-${c}.html /toolkit.html 301`).join('\n') + '\n/local-sales-agent.html /middle-east-market-entry 301\n/local-sales-agent /middle-east-market-entry 301\n');
// Search engine and AI crawler files
for (const [f, txt] of Object.entries(SEO.crawlFiles(pages, SERVICES))) fs.writeFileSync(path.join(OUT_SITE, f), txt);
console.log('built', pages.map(p => p.file).join(', '));
