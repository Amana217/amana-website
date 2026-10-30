// Insights: answer-led articles. Every figure carries a numbered source.
// Status 'draft' builds into the preview only; 'live' also goes into the site, sitemap and llms.txt.
const A = [
  {
    slug: 'cost-of-a-bad-sales-hire-uk',
    status: 'live',
    region: 'UK',
    date: '2026-10-29',
    title: 'What does a bad sales hire really cost a UK business?',
    seoTitle: 'What a Bad Sales Hire Really Costs a UK Business | Amana',
    desc: 'A wrong sales hire costs far more than salary. Using REC, DePaul and Bridge Group research, here is the real cost for a UK business, and how to avoid it.',
    lead: 'Most businesses count the salary. The real bill is the selling time lost while the seat produces little, sits empty, and then ramps up again.',
    service: ['talent.html', 'Hire Right'],
    body: `
<p>Ask a CEO what a bad sales hire cost them and you will usually hear a salary figure. That is the smallest part of it. The bigger cost is the revenue that never arrives while the wrong person holds the seat, while the seat is empty, and while the replacement gets up to speed.</p>

<h2>How common is it?</h2>
<p>Very. The Recruitment &amp; Employment Confederation found that <strong>85% of UK businesses</strong> have made a bad hire.<sup>[1]</sup> In sales the risk is sharper, because the role is visible, measured and hard to fake for long. Across more than 170 SaaS companies, only <strong>51% of account executives</strong> reach quota, and <strong>19%</strong> leave each year involuntarily, more than the 11% who resign.<sup>[2]</sup></p>

<h2>The UK benchmark</h2>
<p>REC's worked example of one poor hire on a £42,000 salary comes to <strong>£132,015</strong>, more than three times the salary. Of that, <strong>£83,160</strong> is knock on cost to the rest of the team: lost productivity, management time and morale.<sup>[1]</sup></p>

<h2>A worked example for a sales role</h2>
<p>Take an account executive on <strong>£90,000</strong> on target earnings, carrying a <strong>£450,000</strong> annual quota. This is the same model our free <a href="leak.html">Leak Finder</a> uses, so you can run it with your own numbers.</p>
<table class="article-table">
  <thead><tr><th>Cost</th><th>Amount</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Pay before the hire is exited</td><td>£60,000</td><td>8 months of £90,000, as in the REC example<sup>[1]</sup></td></tr>
    <tr><td>Agency fee to replace</td><td>£13,500</td><td>15% of salary, the REC rate<sup>[1]</sup></td></tr>
    <tr><td>Onboarding and training, twice</td><td>£3,000</td><td>£1,500 each, as in REC<sup>[1]</sup></td></tr>
    <tr><td>Sales lost while the seat is empty and the new rep ramps</td><td>£245,250</td><td>3.69 months to fill<sup>[3]</sup> plus half of a 5.7 month ramp<sup>[2]</sup>, at £37,500 of quota a month</td></tr>
    <tr class="total"><td>Total cost of one wrong hire</td><td>£321,750</td><td>Before any knock on cost to the team</td></tr>
  </tbody>
</table>
<p>The cash cost here, £76,500, sits close to DePaul University's average replacement cost of <strong>$97,690</strong>.<sup>[3]</sup> The number that hurts is the £245,250 of lost selling time, which most companies never put in the business case. We assume 50% output during the ramp, which is generous for a new hire.</p>

<h2>Why it keeps happening</h2>
<ul>
  <li><strong>Hiring in a hurry.</strong> A target is due and the seat is empty, so the first convincing candidate gets the job.</li>
  <li><strong>Hiring on charisma.</strong> Sales candidates interview well by definition. Without a practical test, the interview measures the wrong skill.</li>
  <li><strong>No definition of good.</strong> What works in a large company with a brand and a pipeline rarely works in a scale up where the rep has to build both.</li>
  <li><strong>Weak onboarding.</strong> A good hire with no plan for the first 90 days can look like a bad one by month four.</li>
</ul>

<h2>How to avoid it</h2>
<ol>
  <li><strong>Write a scorecard before you advertise.</strong> Define the outcomes for the first year, the market and the stage of the business, not just a list of traits.</li>
  <li><strong>Test the job, not the interview.</strong> Run a role play of a real discovery call or negotiation with your own scenario.</li>
  <li><strong>Check the track record properly.</strong> Ask for numbers against quota, deal sizes and sales cycles, then test them in references.</li>
  <li><strong>Plan the first 90 days before day one.</strong> Accounts, targets, coaching rhythm and the point at which you will review progress.</li>
  <li><strong>Decide early.</strong> If it is not working by the agreed review point, act. Every extra month adds to the bill above.</li>
</ol>
<p>If you are about to hire or promote into sales, our <a href="talent.html">Hire Right</a> service builds the scorecard and practical assessment with you, joins the final decision, and stays close through onboarding.</p>`,
    faq: [
      ['How much does a bad sales hire cost in the UK?', 'REC\'s UK worked example puts one poor hire on a £42,000 salary at £132,015 including knock on costs. For a sales role on £90,000 on target earnings with a £450,000 quota, pay, fees, training and lost sales come to about £322,000.'],
      ['How long does it take to replace a salesperson?', 'DePaul University research found 3.69 to 5.42 months to fill a sales role. Bridge Group data shows a further 5.7 months for a new account executive to ramp to full productivity.'],
      ['What is the biggest hidden cost of a bad sales hire?', 'Lost selling time. While the seat is filled by the wrong person, then empty, then ramping, the quota attached to it is largely not delivered. In the worked example that is £245,250, three times the cash cost.'],
    ],
    sources: [
      ['Recruitment &amp; Employment Confederation, Perfect Match: making the right hire and the cost of getting it wrong, June 2017', 'https://rec.uk.com/download_file/2883/6683'],
      ['The Bridge Group, 2024 SaaS AE Metrics and Compensation report, more than 170 B2B SaaS companies', 'https://blog.bridgegroupinc.com/2024-ae-metrics-compensation-benchmark'],
      ['DePaul University Center for Sales Leadership, 2015 to 2016 Sales Effectiveness and Sales Acceleration Survey, research brief', 'https://www.koncert.com/hubfs/ConnectLeader_June2017/PDFs/CL_DePaul_Survey_2__2_.pdf'],
    ],
  },
  {
    slug: 'sell-in-saudi-arabia-without-an-office',
    status: 'live',
    region: 'Middle East',
    date: '2026-10-29',
    title: 'How to start selling in Saudi Arabia without opening an office',
    seoTitle: 'How to Sell in Saudi Arabia Without Opening an Office | Amana',
    desc: 'A practical route for UK and international B2B companies to test the Saudi market and win first customers before committing to an entity, an office or local hires.',
    lead: 'Saudi Arabia is one of the fastest growing markets in the region, and one of the easiest to get expensively wrong. Here is how to test it before you commit.',
    service: ['middle-east-market-entry.html', 'Local Market Entry, Middle East'],
    body: `
<p>Many international businesses decide to enter Saudi Arabia, then start with the most expensive step: a legal entity, an office and a local hire. Twelve months later they have costs, a team and very little pipeline. There is a better order of doing things.</p>

<h2>Why Saudi Arabia, and why now</h2>
<p>The economy grew <strong>4.5%</strong> in 2025, with non oil activities growing <strong>4.9%</strong>, according to the General Authority for Statistics.<sup>[1]</sup> Large programmes across technology, data, infrastructure and services are creating demand for international suppliers. The opportunity is real. So is the competition, and buyers can tell the difference between a supplier who is committed to the market and one who is visiting.</p>

<h2>First, decide who you are selling to</h2>
<p>This one question shapes everything else.</p>
<ul>
  <li><strong>Government and government owned buyers.</strong> Since <strong>1 January 2024</strong>, Saudi government entities have been restricted from contracting with foreign companies that do not have a regional headquarters in the Kingdom.<sup>[2]</sup> If your main buyers are government, a local presence is likely to be part of the plan sooner. In return, qualifying regional headquarters receive a <strong>0% corporate income tax and withholding tax rate for 30 years</strong> on qualifying activities.<sup>[2]</sup></li>
  <li><strong>Private sector buyers.</strong> Here you usually have more room to test the market first, through direct selling, partners or a distributor, before committing to a legal entity.</li>
</ul>

<h2>A practical route in, before the office</h2>
<ol>
  <li><strong>Pick one segment and one offer.</strong> Do not launch everything. Choose the buyers where your product has the clearest proof and the shortest path to a first deal.</li>
  <li><strong>Build a target list of named accounts.</strong> Twenty to thirty organisations, with the decision makers mapped, is enough to learn fast.</li>
  <li><strong>Get in front of buyers in person.</strong> Relationships matter. Plan focused trips around meetings that are already booked, and around the major regional events.</li>
  <li><strong>Use a local partner where it helps.</strong> If you appoint a commercial agent or distributor, note that only Saudi nationals and wholly Saudi owned companies can act in that role, and agreements are recorded in the Ministry of Commerce Commercial Agencies Register, generally within three months.<sup>[3]</sup> Agree the terms for ending the relationship before you start.</li>
  <li><strong>Win the first customers, then set up.</strong> Once you have real pipeline and a few reference customers, the case for an entity, an office and local hires makes itself, and you know exactly what to hire for.</li>
</ol>

<h2>Mistakes we see most often</h2>
<ul>
  <li><strong>Hiring a country manager first.</strong> Without pipeline or a clear offer, a senior hire spends their first year building what should have been tested beforehand.</li>
  <li><strong>Treating the Gulf as one market.</strong> Saudi Arabia and the UAE buy differently. Run them as separate plans.</li>
  <li><strong>Visiting, not committing.</strong> Occasional trips with no follow up signal a supplier who will not be around when things go wrong.</li>
  <li><strong>Leaving legal and tax to the end.</strong> Licensing, contracts and tax affect pricing and margins. Take local advice early.</li>
</ul>

<p class="article-note">This article is practical guidance, not legal or tax advice. Rules change, so take advice from qualified Saudi counsel before appointing a partner or setting up an entity.</p>

<p>Our <a href="middle-east-market-entry.html">Local Market Entry, Middle East</a> service does this with you: we test the market, open doors and help win your first customers before you commit to an office or local hires.</p>`,
    faq: [
      ['Do I need a company in Saudi Arabia to sell there?', 'Not always on day one. Many international businesses test the private sector market through direct selling, partners or a distributor first. If your main buyers are government entities, a regional headquarters in the Kingdom is likely to be needed, as restrictions on contracting apply from 1 January 2024.'],
      ['Who can be a commercial agent or distributor in Saudi Arabia?', 'Only Saudi nationals and wholly Saudi owned companies. Agreements are recorded in the Ministry of Commerce Commercial Agencies Register, generally within three months of taking effect.'],
      ['What incentives are there for a regional headquarters in Saudi Arabia?', 'Qualifying regional headquarters receive a 0% corporate income tax and withholding tax rate for 30 years on qualifying activities.'],
    ],
    sources: [
      ['General Authority for Statistics flash estimate, reported by Arab News, 1 February 2026', 'https://www.arabnews.com/node/2631352'],
      ['Mayer Brown, Updates on Saudi Arabia\'s Regional Headquarters Program, April 2024', 'https://www.mayerbrown.com/en/insights/publications/2024/04/updates-on-saudi-arabias-regional-headquarters-program'],
      ['Clyde &amp; Co, Saudi Arabia\'s commercial agency and distribution, September 2026', 'https://www.clydeco.com/en/insights/2026/09/saudi-arabia-s-commercial-agency-and-distribution'],
    ],
  },
  {
    slug: 'why-your-sales-forecast-keeps-missing',
    status: 'live',
    region: 'UK &amp; Middle East',
    date: '2026-10-29',
    title: 'Why your sales forecast keeps missing, and how to fix it',
    seoTitle: 'Why Your Sales Forecast Keeps Missing, and How to Fix It | Amana',
    desc: 'Fewer than half of forecast deals close and one in five stalls with no decision. Why sales forecasts miss, what it costs, and five fixes that make them reliable.',
    lead: 'Fewer than half of the deals in a typical forecast ever close. The problem is rarely the maths. It is what counts as a real deal.',
    help: {
      intro: 'A forecast you can trust comes from a pipeline you can trust. That means fixing how deals are qualified, reviewed and called, not just the spreadsheet.',
      items: [
        ['diagnostic.html', 'Diagnostic', 'Find out in 2 to 4 weeks where your deals really stall and why, with the fixes in priority order and what doing nothing will cost.'],
        ['embedded.html', '30 to 90 Day Full Service', 'We rebuild your stages, exit criteria, pipeline reviews and forecast rhythm with your team, built and running within 90 days.'],
        ['retained.html', 'Retained Growth Partner', 'Senior judgement every month to keep the forecast honest, in the room with your CEO, sales leader and board.'],
      ],
    },
    body: `
<p>Every quarter the same conversation happens in boardrooms. The number was committed, the team was confident, and the quarter landed short. Then the next forecast arrives with the same confidence. Investors stop believing it, and the sales leader starts to carry the blame for a problem that is usually built into the system.</p>

<h2>How common is a bad forecast?</h2>
<p>Very common. Only <strong>45%</strong> of sales leaders and sellers have high confidence in their organisation&rsquo;s forecasting accuracy.<sup>[1]</sup> In a Forrester study of more than 300 revenue leaders, just <strong>18%</strong> said their quarterly forecasts land within 5% of actual revenue, and <strong>59%</strong> are off by 10% or more.<sup>[2]</sup></p>

<h2>Where forecast deals actually go</h2>
<p>A study of nearly 900 sales organisations tracked what happens to deals once they are in the forecast:<sup>[3]</sup></p>
<ul>
  <li><strong>47.3%</strong> are won</li>
  <li><strong>32.0%</strong> are lost</li>
  <li><strong>20.7%</strong> stall indefinitely with no decision</li>
</ul>
<p>So on a <strong>£10m</strong> forecast, about £4.7m closes and around <strong>£2m</strong> simply stops moving. Much of the loss is not to competitors either. Research on 2.5 million recorded sales conversations attributes <strong>40% to 60%</strong> of lost deals to customer indecision.<sup>[4]</sup> You can run your own numbers in the free <a href="leak.html">Leak Finder</a>.</p>

<h2>Why forecasts miss</h2>
<ul>
  <li><strong>Stages describe what the seller did, not what the buyer did.</strong> &ldquo;Proposal sent&rdquo; says nothing about whether the buyer has a budget, a decision maker and a date.</li>
  <li><strong>No exit criteria.</strong> Without clear evidence required to move a deal forward, every rep defines the stages differently.</li>
  <li><strong>Stalled deals never leave.</strong> Old opportunities sit in the pipeline for months, inflating coverage and confidence.</li>
  <li><strong>The forecast is negotiated, not inspected.</strong> Numbers are rolled up and adjusted in meetings rather than tested deal by deal.</li>
  <li><strong>Nobody measures accuracy.</strong> If last quarter&rsquo;s forecast is never compared with the result, the same habits repeat.</li>
</ul>

<h2>Five fixes that make a forecast reliable</h2>
<ol>
  <li><strong>Define stages by buyer actions.</strong> A deal moves forward when the buyer does something verifiable, such as confirming budget or introducing the decision maker.</li>
  <li><strong>Separate commit from best case.</strong> Commit means evidence, not optimism. Keep upside visible but out of the number.</li>
  <li><strong>Inspect deals, not totals.</strong> In pipeline reviews, ask what the buyer has done in the last two weeks and what happens next, with a date.</li>
  <li><strong>Flag stalled deals automatically.</strong> Set a maximum number of days in each stage. Anything past it is reviewed or removed.</li>
  <li><strong>Score your accuracy every period.</strong> Compare forecast with actual, by rep and by stage, and share it. Accuracy improves fastest when it is measured.</li>
</ol>`,
    faq: [
      ['How accurate are most sales forecasts?', 'Not very. Gartner found only 45% of sales leaders and sellers have high confidence in their forecasting accuracy, and a Forrester study found just 18% of quarterly forecasts land within 5% of actual revenue.'],
      ['What percentage of forecast deals close?', 'CSO Insights research across nearly 900 sales organisations found 47.3% of forecast deals are won, 32.0% are lost and 20.7% stall indefinitely with no decision.'],
      ['How do you make a sales forecast more accurate?', 'Define pipeline stages by verifiable buyer actions, separate commit from best case, inspect individual deals rather than totals, remove stalled deals using time limits in each stage, and measure forecast accuracy every period.'],
    ],
    sources: [
      ['Gartner press release, Gartner Says Less Than 50% of Sales Leaders and Sellers Have High Confidence in Forecasting Accuracy, 12 February 2020', 'https://www.gartner.com/en/newsroom/press-releases/2020-02-12-gartner-says-less-than-50--of-sales-leaders-and-selle'],
      ['Clari, reporting a Forrester Consulting study of 300+ revenue leaders, 25 October 2021', 'https://prod.clari.com/blog/revenue-leaders-are-missing-the-mark-on-sales-forecasting/'],
      ['CSO Insights, Selling in the Age of Ceaseless Change: 2018 to 2019 Sales Performance Study, summary', 'https://revenue.io/wp-content/uploads/2020/02/2018-2019-Sales-Performance-Report-Summary.pdf'],
      ['Challenger Inc, Dixon and McKenna, The JOLT Effect research on customer indecision', 'https://challengerinc.com/losing-to-customer-indecision/'],
    ],
  },
  {
    slug: 'what-pe-firms-should-check-in-a-sales-engine',
    status: 'live',
    region: 'UK &amp; Middle East',
    date: '2026-10-29',
    title: 'What should a PE firm check in a sales engine, before and after a deal?',
    seoTitle: 'What PE Firms Should Check in a Sales Engine Before and After a Deal | Amana',
    desc: 'Deals now need far more EBITDA growth to hit a 2.5x return, and revenue growth drives most value creation. What PE investors should test in a sales engine, and when.',
    lead: 'Returns now depend on revenue growth more than ever. Yet the sales engine is often the least tested part of the investment case.',
    help: {
      intro: 'Most commercial problems in a portfolio company are visible early, if someone who has run a sales engine knows where to look.',
      items: [
        ['diagnostic.html', 'Diagnostic', 'An objective review of the sales engine before or soon after the deal, with the fixes ranked by value, in 2 to 4 weeks.'],
        ['embedded.html', '30 to 90 Day Full Service', 'We turn the commercial part of the 100 day plan into running systems, hands on with the management team.'],
        ['retained.html', 'Retained Growth Partner', 'An operator on call across the portfolio for board reviews, sales leader hires and keeping the forecast honest.'],
      ],
    },
    body: `
<p>The value creation plan assumes the sales engine will scale. It promises a number of new customers, a win rate, a deal size and a pace of hiring. Yet commercial due diligence often stops at the market and the product. The machine that has to deliver the growth is examined last, if at all.</p>

<h2>The maths has changed</h2>
<p>Bain &amp; Company estimates that typical deals now need around <strong>10% to 12%</strong> average annual EBITDA growth to reach the benchmark 2.5x return, against about <strong>5%</strong> in the 2010s.<sup>[1]</sup> Bain&rsquo;s shorthand for it is &ldquo;12 is the new 5&rdquo;.<sup>[1]</sup> The growth now has to be earned.</p>
<p>In software deals, revenue growth has accounted for <strong>52%</strong> of total value creation over ten years, against 42% from multiple expansion and just 6% from margins.<sup>[2]</sup> And the upside of getting the commercial engine right is real: in B2B companies, Bain typically sees a <strong>10% to 20%</strong> top line acceleration and a <strong>10% to 15%</strong> EBITDA uptick from commercial excellence programmes.<sup>[3]</sup></p>

<h2>Before the deal: what to test</h2>
<ul>
  <li><strong>Forecast history.</strong> Compare the last four to eight quarters of forecasts with actual results. A business that cannot call its own quarter will not call the plan.</li>
  <li><strong>Pipeline quality.</strong> How much of the pipeline has real buyer activity, a decision maker and a date? How old is it, and how much has stalled?</li>
  <li><strong>Win rates and sales cycles by segment.</strong> Averages hide the truth. Growth plans often rely on the segment with the weakest numbers.</li>
  <li><strong>Founder and top rep dependence.</strong> If a handful of people close most of the revenue, scaling means building what they do into a process.</li>
  <li><strong>Hiring and ramp.</strong> How long do new sellers take to reach full productivity, and how many reach quota? This sets the real pace of growth.</li>
  <li><strong>Pricing and discounting.</strong> Discount patterns at quarter end tell you how much pricing power really exists.</li>
  <li><strong>Data quality.</strong> If the CRM does not reflect reality, every number above is a guess.</li>
</ul>

<h2>After the deal: the first 100 days</h2>
<ol>
  <li><strong>Set a commercial baseline.</strong> Agree the real numbers for pipeline, win rate, cycle length and forecast accuracy before anything changes.</li>
  <li><strong>Assess the sales leadership.</strong> Decide early whether the current leader can take the business to the next stage, and act on it.</li>
  <li><strong>Fix the forecast rhythm.</strong> A weekly pipeline review and a monthly forecast the board can trust come before any growth initiative.</li>
  <li><strong>Find the quick wins.</strong> Pricing discipline, stalled pipeline and follow up speed usually release value within a quarter.</li>
  <li><strong>Hire to a capacity plan.</strong> Link every sales hire to the plan, the ramp time and the pipeline it needs, so headcount turns into revenue.</li>
</ol>`,
    faq: [
      ['How much EBITDA growth do private equity deals need today?', 'Bain &amp; Company estimates typical deals now need around 10% to 12% average annual EBITDA growth to reach a 2.5x return, compared with about 5% in the 2010s.'],
      ['How much of PE value creation comes from revenue growth?', 'In software deals over ten years, Bain DealEdge data shows revenue growth accounted for 52% of total value creation, multiple expansion 42% and margin expansion 6%.'],
      ['What should commercial due diligence check in a sales team?', 'Forecast accuracy against actual results, pipeline quality and age, win rates and sales cycles by segment, dependence on the founder or top sellers, hiring and ramp time, discounting, and CRM data quality.'],
    ],
    sources: [
      ['Bain &amp; Company press release, Global Private Equity Report 2026, 23 February 2026', 'https://www.bain.com/about/media-center/press-releases/2026/private-equity-resurgence-gathers-steam-as-new-era-challenges-firms-to-enhance-value-creationbain--company-global-pe-report/'],
      ['Bain &amp; Company DealEdge, The Hidden Challenge in Software PE: Margin Expansion, 2025', 'https://dealedge.bain.com/insights/software-margins-gpe-report'],
      ['Bain &amp; Company, How Commercial Excellence Jump-Starts Growth in Private Equity, 28 March 2018', 'https://www.bain.com/insights/how-commercial-excellence-jump-starts-growth-in-private-equity/'],
    ],
  },
];

const longDate = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

function articlePage(a, { CALENDLY, TALK20 }) {
  return `
<article class="article">
  <section class="page-hero article-hero">
    <div class="wrap article-wrap">
      <a class="textlink back" href="insights.html">&larr; All insights</a>
      <p class="eyebrow">${a.region} &middot; ${longDate(a.date)}</p>
      <h1>${a.title}</h1>
      <p class="lead article-lead">${a.lead}</p>
      <p class="article-by">By <a href="about.html">David Hodgson</a>, Managing Partner</p>
    </div>
  </section>
  <section class="band tight">
    <div class="wrap article-wrap article-body">
      ${a.body}
      ${a.help ? `<aside class="article-help" aria-label="How we can help">
        <p class="eyebrow">How we can help</p>
        <p class="article-help-intro">${a.help.intro}</p>
        <div class="article-help-grid">${a.help.items.map(([href, name, line]) => `<a class="article-help-card" href="${href}"><strong>${name}</strong><span class="ahc-text">${line}<em>See how it works &rarr;</em></span></a>`).join('')}</div>
        <a class="btn" href="${CALENDLY}" target="_blank" rel="noopener">${TALK20}</a>
      </aside>` : `<div class="article-tools">
        <a class="btn" href="leak.html">Find your leak</a>
        <a class="btn ghost" href="roi.html">Work out your ROI</a>
        <a class="btn ghost" href="${CALENDLY}" target="_blank" rel="noopener">${TALK20}</a>
      </div>`}
      <h2>Questions we are asked</h2>
      <div class="faq">${a.faq.map(([q, ans]) => `<details><summary>${q}</summary><p>${ans}</p></details>`).join('')}</div>
      <h2 class="sources-h">Sources</h2>
      <ol class="article-sources">${a.sources.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join('')}</ol>
    </div>
  </section>
</article>`;
}

function hubPage(list) {
  return `
<section class="page-hero">
  <div class="wrap stack">
    <p class="eyebrow">Insights</p>
    <h1>Straight answers on building a revenue engine</h1>
    <p class="for-line" style="max-width:62ch">Practical answers to the questions founders, investors and sales leaders ask us, across the UK and the Middle East. Every figure is sourced.</p>
  </div>
</section>
<section class="band tight">
  <div class="wrap insight-grid">
    ${list.map(a => `<a class="insight-card" href="${a.slug}.html"><p class="eyebrow">${a.region} &middot; ${longDate(a.date)}</p><h2>${a.title}</h2><p class="muted">${a.lead}</p><span class="textlink">Read the answer &rarr;</span></a>`).join('\n    ')}
  </div>
</section>`;
}

module.exports = { ARTICLES: A, articlePage, hubPage, longDate };
