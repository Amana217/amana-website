// Audience pages: PE and VC investors, and founders and CEOs. David's words where he gave them.
module.exports = ({ CALENDLY, TALK20, cta }) => {
  const CHECK = 'assets/amana-pre-deal-sales-red-flags.pdf';
  const investors = `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="stack-lg">
      <p class="eyebrow">For PE and VC investors</p>
      <h1>An operator on your side of the deal.</h1>
    </div>
    <div class="intro">
      <p>I&rsquo;ve spent 20 years building revenue engines as an operator inside B2B SaaS and data businesses, and there&rsquo;s a lot of value I can add pre and post deal. Pre deal on due diligence, and post deal to accelerate value creation.</p>
      <p><b>We work with a small number of funds on a retained model.</b></p>
      <div class="btn-row"><a class="btn" href="${CALENDLY}" target="_blank" rel="noopener">${TALK20}</a><a class="btn ghost" href="${CHECK}" target="_blank" rel="noopener">Pre-deal red flags checklist</a></div>
    </div>
  </div>
</section>

<section class="band mist">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">Why it matters now</p><h2>The sales engine carries more of the return than ever.</h2></div>
      <p class="muted lead">The model shows what the sales engine has produced. It rarely shows whether it can deliver what the investment case now needs.</p>
    </div>
    <div class="cols-3">
      <div class="card"><span class="label">EBITDA growth needed</span><p class="big-n">10 to 12%</p><p>A year, for a typical deal to return 2.5x today. In the 2010s it was about 5%.<sup>1</sup></p></div>
      <div class="card"><span class="label">Sellers who missed quota</span><p class="big-n">78%</p><p>Across 655,000 opportunities in the latest B2B benchmark.<sup>2</sup></p></div>
      <div class="card"><span class="label">Forecast deals with no decision</span><p class="big-n">1 in 5</p><p>Not lost to a competitor. They simply stop moving.<sup>3</sup></p></div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">Pre and post deal</p><h2>Three ways we work with your fund.</h2></div>
      <p class="muted lead">One operator from first look to exit. Everything found before the deal carries straight into the value creation plan.</p>
    </div>
    <div class="cols-3">
      <div class="card"><span class="label">Pre deal &middot; 2 to 4 weeks</span><h3>Due diligence on the sales engine</h3><p>An operator&rsquo;s view of whether the team, pipeline and forecast can deliver the plan you are paying for. Scored, evidenced and presented to your investment committee.</p><a class="textlink" href="diagnostic.html">The Diagnostic &rarr;</a></div>
      <div class="card"><span class="label">Post deal &middot; first 100 days</span><h3>Accelerate value creation</h3><p>We work hands on with the management team on the commercial priorities in the value creation plan, and get the fixes built and running within 90 days.</p><a class="textlink" href="embedded.html">30 to 90 Day Full Service &rarr;</a></div>
      <div class="card"><span class="label">Through the hold &middot; retained</span><h3>A revenue partner for the portfolio</h3><p>Set days each month across your portfolio companies. Honest forecasts, the big calls on hiring and pricing, and a clear revenue view for the board.</p><a class="textlink" href="retained.html">Retained Growth Partner &rarr;</a></div>
    </div>
  </div>
</section>

<section class="band mist">
  <div class="wrap cols-2">
    <div class="stack"><p class="eyebrow">What we look at</p><h2>Eight areas. Scored the same way, every time.</h2><p class="muted lead">Every business is scored 1 to 4 in each area, so you can compare companies across the portfolio and track progress from entry to exit.</p></div>
    <ul class="ticks lead">
      <li>Market focus and who they really win</li>
      <li>Pipeline generation</li>
      <li>Sales process and stages</li>
      <li>Forecast discipline</li>
      <li>Pricing and discount control</li>
      <li>Team capacity and productivity</li>
      <li>Retention and expansion</li>
      <li>Leadership, rhythm and reporting</li>
    </ul>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">&ldquo;We already have a sales leader&rdquo;</p><h2>We back your sales leader. We don&rsquo;t replace them.</h2></div>
      <p class="muted lead">A great sales leader is the goal. These are the moments a fund needs more than one person can give.</p>
    </div>
    <div class="cols-4">
      <div class="card"><h3>Before you own it</h3><p>Pre deal, the sales leader works for the seller. Their view of the engine is not independent, and your own leader is not in the room yet.</p></div>
      <div class="card"><h3>While you hire</h3><p>Finding and landing a strong sales leader takes months. The value creation plan starts on day one.</p></div>
      <div class="card"><h3>An honest second view</h3><p>No leader can mark their own homework. The board gets an objective read on the forecast, and the sales leader gets someone who has done the job to think it through with.</p></div>
      <div class="card"><h3>The right leader for the phase</h3><p>The right sales leader, in the right role, for the phase of growth. Getting that wrong is one of the most common and costly issues we see. We define what good looks like and help you hire on evidence.</p></div>
    </div>
  </div>
</section>

<section class="band mist">
  <div class="wrap cols-2">
    <div class="stack"><p class="eyebrow">Why an operator</p><h2>We are operators, not consultants.</h2></div>
    <div class="stack">
      <p class="lead-p">I have carried the number, built teams from zero, opened new markets and sat in the board meetings where the forecast was questioned. I know what good looks like from the inside, and where the gaps hide.</p>
      <p class="lead-p">You get the truth early, before you pay for it. Then we stay to get the work done with the team, and hand back an engine that runs without us.</p>
    </div>
  </div>
</section>

<section class="band ink tight">
  <div class="wrap cols-2">
    <div class="stack"><p class="eyebrow" style="color:var(--sand)">Free download</p><h2 style="color:var(--white)">Pre-deal sales red flags</h2></div>
    <div class="stack">
      <p style="color:var(--white)">24 questions an operator asks about the sales engine before you sign, with the evidence to request from management in each area.</p>
      <div class="btn-row"><a class="btn" href="${CHECK}" target="_blank" rel="noopener">Download the checklist</a></div>
    </div>
  </div>
</section>

<section class="band tight">
  <div class="wrap"><p class="muted" style="font-size:0.85rem;max-width:90ch">Sources: 1 Bain &amp; Company, Global Private Equity Report 2026. 2 Ebsta and Pavilion, 2025 GTM Benchmarks. 3 CSO Insights, study of nearly 900 sales organisations: 20.7% of forecast deals ended with no decision.</p></div>
</section>
${cta('Let&rsquo;s talk about your portfolio.', 'Tell us about a deal you are looking at, or a portfolio company that is behind plan. 20 to 30 minutes, no sales pitch.', TALK20)}`;

  const founders = `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="stack-lg">
      <p class="eyebrow">For founders and CEOs</p>
      <h1>Growth that does not depend on you being in every deal.</h1>
    </div>
    <div class="intro">
      <p>I&rsquo;ve spent 20 years building revenue engines as an operator inside B2B SaaS and data businesses. I help founders and CEOs find what is holding growth back, fix it with their team, and build an engine that is repeatable and scalable.</p>
      <div class="btn-row"><a class="btn" href="${CALENDLY}" target="_blank" rel="noopener">${TALK20}</a><a class="btn ghost" href="leak.html">Find your leak</a></div>
    </div>
  </div>
</section>

<section class="band mist tight">
  <div class="wrap stack">
    <p class="eyebrow">Sound familiar?</p>
    <div class="quotes">
      <p>&ldquo;We are growing, but not fast enough, and I can&rsquo;t see why.&rdquo;</p>
      <p>&ldquo;I have no confidence in the forecast.&rdquo;</p>
      <p>&ldquo;I&rsquo;m still in every big deal.&rdquo;</p>
      <p>&ldquo;I&rsquo;m thinking about letting the sales leader go.&rdquo;</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="section-head">
      <div class="stack"><p class="eyebrow">How we help</p><h2>Find it, fix it, keep it running.</h2></div>
      <p class="muted lead">Start with the Diagnostic. Everything it finds carries straight into the work that follows.</p>
    </div>
    <div class="cols-3">
      <div class="card"><span class="label">2 to 4 weeks &middot; fixed fee</span><h3>Diagnostic</h3><p>An honest outside view of what is holding revenue back, before you spend more or make any big decisions.</p><a class="textlink" href="diagnostic.html">Full details &rarr;</a></div>
      <div class="card"><span class="label">Up to 90 days</span><h3>30 to 90 Day Full Service</h3><p>We work hands on with you and your team to agree the plan and build the fixes, with a warranty.</p><a class="textlink" href="embedded.html">Full details &rarr;</a></div>
      <div class="card"><span class="label">Monthly</span><h3>Retained Growth Partner</h3><p>Senior sales leadership every month, without a full time hire. On hand for the forecast, the board and the big calls.</p><a class="textlink" href="retained.html">Full details &rarr;</a></div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap cols-2">
    <div class="stack"><p class="eyebrow">&ldquo;Shouldn&rsquo;t I just hire a sales leader?&rdquo;</p><h2>Maybe. The right leader, in the right role, for your phase of growth.</h2></div>
    <div class="stack">
      <p class="lead-p">A senior sales hire is one of the biggest bets you will make. Get it wrong and it costs a year, not just a salary. It is one of the most common issues we see. We help you decide whether you need that hire yet, what good looks like for your phase of growth, and how to hire on evidence.</p>
      <p class="lead-p">Already have a sales leader? Good. We work beside them, share the load and make them better. We don&rsquo;t replace them.</p>
    </div>
  </div>
</section>

<section class="band mist">
  <div class="wrap cols-2">
    <div class="stack"><p class="eyebrow">Raising or selling?</p><h2>Know what investors will find first.</h2></div>
    <div class="stack">
      <p class="lead-p">Investors now look hard at the sales engine before they commit. Use the same 24 questions they should be asking, and fix the gaps before they find them.</p>
      <div class="btn-row"><a class="btn" href="${CHECK}" target="_blank" rel="noopener">Download the red flags checklist</a></div>
    </div>
  </div>
</section>

<section class="band mist tight">
  <div class="wrap"><p class="eyebrow tools-eyebrow">Tools to use now</p></div>
  <div class="wrap tools-teaser">
    <a class="tool-card" href="leak.html"><p class="eyebrow">The Leak Finder</p><h2>How much is your sales engine losing?</h2><p class="muted">Three questions, 30 seconds, every number sourced.</p><span class="btn">Find your leak</span></a>
    <a class="tool-card" href="roi.html"><p class="eyebrow">ROI calculator</p><h2>What could fixing it be worth?</h2><p class="muted">Three scenarios from your own numbers, in about a minute.</p><span class="btn ghost">Work out your ROI</span></a>
  </div>
</section>
${cta('Let&rsquo;s talk.', 'Tell us where you are and where you want to get to. We will tell you honestly whether we can help.', TALK20)}`;

  return [
    { file: 'investors.html', nav: 'services', title: 'For PE and VC Investors | Amana Growth Partners',
      desc: 'An operator on your side of the deal. Sales engine due diligence pre deal, and value creation post deal, for PE and VC firms in the UK and the Middle East.', body: investors },
    { file: 'founders.html', nav: 'services', title: 'For Founders and CEOs | Amana Growth Partners',
      desc: 'Growth that does not depend on you being in every deal. Diagnostic, hands on 90 day programme and retained growth partner for founders and CEOs in the UK and the Middle East.', body: founders },
  ];
};
