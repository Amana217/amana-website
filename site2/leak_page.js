module.exports = ({ CALENDLY }) => `
<section class="band tool-page">
  <div class="wrap leak-layout">
    <div class="leak-intro">
      <p class="eyebrow">The Leak Finder</p>
      <h1>Every sales engine leaks. Find out how much yours is losing in 30 seconds.</h1>
      <p class="for-line">Three quick questions. Every number comes from published research, and you can tap any source to check it.</p>
      <label class="leak-cur">Show amounts in
        <select id="k-cur"><option value="GBP">GBP £</option><option value="USD">USD $</option><option value="AED">AED</option></select>
      </label>
    </div>
    <div class="leak">

    <article class="leak-step" id="step1">
      <p class="leak-num">1 of 3 &middot; The wrong hire</p>
      <h2>Have you ever hired a salesperson who didn&rsquo;t work out?</h2>
      <div class="leak-choices" role="group" aria-label="Your answer">
        <button type="button" data-a="yes">Yes</button><button type="button" data-a="unsure">Not sure</button><button type="button" data-a="no">No</button>
      </div>
      <div class="leak-result" id="r1" hidden>
        <p class="leak-lead" id="r1-lead"></p>
        <p class="leak-big"><span id="r1-big">0</span></p>
        <p class="leak-detail" id="r1-detail"></p>
        <div class="leak-tune">
          <label>Their annual pay, including commission<input id="k-ote" type="text" inputmode="numeric"></label>
          <label>Their annual sales target<input id="k-quota" type="text" inputmode="numeric"></label>
        </div>
        <details class="leak-src"><summary>Where this comes from</summary>
          <ul>
            <li>Pay for 8 months before the hire is exited, a 15% agency fee and training costs follow the UK worked example in REC, <a href="https://rec.uk.com/download_file/2883/6683" target="_blank" rel="noopener">Perfect Match</a>, 2017. REC found 85% of UK businesses have made a bad hire.</li>
            <li>A sales role takes 3.69 months to fill: DePaul University Center for Sales Leadership, 2016, 127 firms.</li>
            <li>A new account executive takes 5.7 months to ramp: The Bridge Group, SaaS AE Metrics, 2024 data, 172 companies. We assume half their target while ramping.</li>
          </ul>
        </details>
        <button type="button" class="btn small leak-next" data-next="step2">Next question</button>
      </div>
    </article>

    <article class="leak-step" id="step2" hidden>
      <p class="leak-num">2 of 3 &middot; Deals that stall</p>
      <h2>How much pipeline are you looking to build this year?</h2>
      <p class="muted" style="margin-top:-6px">As a rule, you should be building 4 to 5 times your target.</p>
      <div class="leak-slider"><input id="k-pipe" type="range" min="0" max="100" step="1" aria-label="Pipeline to build this year"><output id="k-pipe-out"></output></div>
      <div class="leak-result" id="r2">
        <p class="leak-lead">Research says this much of it will die without a competitor ever winning it:</p>
        <p class="leak-big"><span id="r2-big">0</span></p>
        <p class="leak-detail" id="r2-detail"></p>
        <details class="leak-src"><summary>Where this comes from</summary>
          <ul>
            <li>Of forecast deals, 47.3% are won, 32.0% lost and 20.7% stall with no decision: CSO Insights, 2018 to 2019 Sales Performance Study, nearly 900 sales organisations.</li>
            <li>40% to 60% of lost deals are lost to customer indecision: Dixon and McKenna, <a href="https://challengerinc.com/losing-to-customer-indecision/" target="_blank" rel="noopener">The JOLT Effect</a>, 2.5 million sales conversations.</li>
          </ul>
        </details>
        <button type="button" class="btn small leak-next" data-next="step3">Next question</button>
      </div>
    </article>

    <article class="leak-step" id="step3" hidden>
      <p class="leak-num">3 of 3 &middot; Buried in admin</p>
      <h2>How many people sell in your team?</h2>
      <div class="leak-slider"><input id="k-team" type="range" min="1" max="60" step="1" value="8" aria-label="Sales team size"><output id="k-team-out"></output></div>
      <div class="leak-result" id="r3">
        <p class="leak-lead">Sales pay spent on everything except selling, every year:</p>
        <p class="leak-big"><span id="r3-big">0</span></p>
        <p class="leak-detail" id="r3-detail"></p>
        <details class="leak-src"><summary>Where this comes from</summary>
          <ul>
            <li>Reps spend just 28% of their week actually selling: <a href="https://www.salesforce.com/news/stories/sales-research-2023/" target="_blank" rel="noopener">Salesforce, State of Sales</a>, December 2022, 7,775 sales professionals.</li>
            <li>Uses the annual pay from question 1. Extra capacity assumes selling time rises from 28% to 33%.</li>
          </ul>
        </details>
        <button type="button" class="btn small leak-next" data-next="summary">See my biggest leak</button>
      </div>
    </article>

    <article class="leak-step leak-summary" id="summary" hidden>
      <p class="eyebrow">Your biggest leak</p>
      <h2 id="s-title"></h2>
      <p class="leak-big"><span id="s-big">0</span></p>
      <p class="leak-detail" id="s-detail"></p>
      <ul class="leak-list" id="s-list"></ul>
      <p class="leak-note">We do not add these into one total. They overlap, and we would rather show you numbers we can stand behind.</p>
      <div class="btn-row">
        <a class="btn" href="${CALENDLY}" target="_blank" rel="noopener">Find your real leak. Free 30 minute Growth Review</a>
        <a class="btn ghost" id="s-fix" href="roi.html">See what fixing it is worth</a>
      </div>
      <p class="leak-next-svc" id="s-svc"></p>
      <button type="button" class="textlink leak-restart" id="restart">Start again</button>
    </article>
    </div>
  </div>
</section>
<script>
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var D = { GBP: { sym: '£', ote: 90000, quota: 450000, pipeMax: 50000000, pipe: 10000000 },
            USD: { sym: '$', ote: 115000, quota: 575000, pipeMax: 60000000, pipe: 12500000 },
            AED: { sym: 'AED ', ote: 420000, quota: 2100000, pipeMax: 200000000, pipe: 45000000 } };
  var cur = 'GBP', answer = null, pipeExact = null;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var num = function (id) { var t = String($(id).value).replace(/[^0-9.,]/g, ''); if ((t.match(/[.]/g) || []).length > 1) t = t.replace(/[.]/g, ''); t = t.replace(/,/g, ''); var v = parseFloat(t); return isFinite(v) && v > 0 ? v : 0; };
  var money = function (v) { var s = D[cur].sym, a = Math.abs(v);
    if (a >= 999.5e6) return s + (v / 1e9).toFixed(a >= 9.995e9 ? 1 : 2) + 'bn';
    if (a >= 999.5e3) return s + (v / 1e6).toFixed(a >= 9.995e6 ? 1 : 2) + 'm';
    if (a >= 999.5) return s + Math.round(v / 1e3) + 'k';
    return s + Math.round(v); };
  var full = function (v) { return D[cur].sym + Math.round(v).toLocaleString('en-GB'); };
  var timers = {};
  function show(id, v, text) {
    var el = $(id); el.setAttribute('data-v', v);
    if (reduce) { el.textContent = text || money(v); return; }
    clearInterval(timers[id]); var t0 = Date.now(), dur = 700;
    timers[id] = setInterval(function () { var k = Math.min((Date.now() - t0) / dur, 1); var e = 1 - Math.pow(1 - k, 3);
      el.textContent = k < 1 ? money(v * e) : (text || money(v)); if (k >= 1) clearInterval(timers[id]); }, 30);
  }
  // Pipeline slider maps 0..100 to a sensible log scale
  function pipeFromSlider(x) { var lo = D[cur].pipeMax / 500, hi = D[cur].pipeMax; return Math.round(lo * Math.pow(hi / lo, x / 100) / 10000) * 10000; }
  function sliderFromPipe(v) { var lo = D[cur].pipeMax / 500, hi = D[cur].pipeMax; return Math.round(100 * Math.log(v / lo) / Math.log(hi / lo)); }

  function calc1() {
    var ote = num('k-ote'), quota = num('k-quota');
    var cash = ote * 8 / 12 + ote * 0.15 + (cur === 'GBP' ? 3000 : cur === 'USD' ? 3800 : 14000);
    var lost = quota / 12 * (3.69 + 5.7 * 0.5);
    var total = cash + lost;
    $('r1-lead').textContent = answer === 'yes' ? 'That hire most likely cost you about:' : answer === 'unsure' ? 'If even one hire is wrong, research says it costs about:' : 'Good. 85% of UK businesses cannot say that. One wrong hire would cost you about:';
    show('r1-big', total);
    $('r1-detail').innerHTML = full(cash) + ' in pay, fees and training, plus ' + full(lost) + ' of sales lost while the seat is empty and the replacement ramps up.';
    return total;
  }
  function calc2() {
    var pipe = pipeExact !== null ? pipeExact : pipeFromSlider(+$('k-pipe').value);
    $('k-pipe-out').textContent = money(pipe);
    var stall = pipe * 0.207, lostDeals = pipe * 0.32, lo = stall + lostDeals * 0.4, hi = stall + lostDeals * 0.6;
    show('r2-big', (lo + hi) / 2, money(lo) + ' to ' + money(hi));
    $('r2-detail').innerHTML = money(stall) + ' stalls with no decision, and another ' + money(lostDeals * 0.4) + ' to ' + money(lostDeals * 0.6) + ' is lost to buyers who never decide.';
    return { lo: lo, hi: hi, mid: (lo + hi) / 2 };
  }
  function calc3() {
    var team = +$('k-team').value, ote = num('k-ote');
    $('k-team-out').textContent = team + (team === 1 ? ' person' : ' people');
    var nonSell = team * ote * 0.72, extra = team * (33 / 28 - 1);
    show('r3-big', nonSell);
    $('r3-detail').innerHTML = 'That is 72% of their time. Lifting selling time from 28% to 33% is like adding <b>' + extra.toFixed(1) + (extra >= 1.95 || extra < 1.05 ? ' sellers' : ' sellers') + '</b> without hiring anyone.';
    return nonSell;
  }
  function summary() {
    var h = calc1(), p = calc2(), a = calc3();
    var items = [
      { k: 'hire', t: 'The wrong hire', v: h, txt: money(h) + ' per wrong salesperson', svc: '<a href="talent.html">Talent Identification</a> helps you hire and promote the right sales people.' },
      { k: 'pipe', t: 'Deals that stall and die', v: p.mid, txt: money(p.lo) + ' to ' + money(p.hi) + ' of your pipeline', svc: 'A <a href="diagnostic.html">Diagnostic</a> finds exactly where your deals stall, in 2 to 4 weeks.' },
      { k: 'admin', t: 'Sellers buried in admin', v: a, txt: money(a) + ' of sales pay spent not selling', svc: '<a href="team-development.html">Sales Team Development</a> builds the habits and rhythm that put time back into selling.' }
    ];
    var top = items.slice().sort(function (x, y) { return y.v - x.v; })[0];
    $('s-title').textContent = top.t;
    show('s-big', top.v, top.k === 'pipe' ? money(p.lo) + ' to ' + money(p.hi) : null);
    $('s-detail').textContent = top.k === 'pipe' ? 'of your pipeline is likely to die without a competitor winning it.' : top.k === 'hire' ? 'for every salesperson who does not work out.' : 'of sales pay a year goes on everything except selling.';
    $('s-list').innerHTML = items.map(function (i) { return '<li' + (i === top ? ' class="is-top"' : '') + '><span>' + i.t + '</span><b>' + i.txt + '</b></li>'; }).join('');
    $('s-svc').innerHTML = 'Where we would start: ' + top.svc;
    $('s-fix').href = 'roi.html?cur=' + cur;
  }
  function setCur(c) {
    cur = c; $('k-ote').value = D[c].ote.toLocaleString('en-GB'); $('k-quota').value = D[c].quota.toLocaleString('en-GB');
    $('k-pipe').value = sliderFromPipe(D[c].pipe); pipeExact = D[c].pipe; refresh();
  }
  function refresh() { if (!$('r1').hidden) calc1(); calc2(); calc3(); if (!$('summary').hidden) summary(); }

  Array.prototype.forEach.call(document.querySelectorAll('.leak-choices button'), function (b) {
    b.addEventListener('click', function () {
      answer = b.getAttribute('data-a');
      Array.prototype.forEach.call(document.querySelectorAll('.leak-choices button'), function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      $('r1').hidden = false; calc1();
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('.leak-next'), function (b) {
    b.addEventListener('click', function () {
      var n = $(b.getAttribute('data-next')); n.hidden = false; b.hidden = true;
      if (n.id === 'summary') summary(); else refresh();
      n.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });
  ['k-ote', 'k-quota'].forEach(function (id) { $(id).addEventListener('input', refresh); $(id).addEventListener('blur', function () { var v = num(id); $(id).value = v ? v.toLocaleString('en-GB') : ''; }); });
  $('k-pipe').addEventListener('input', function () { pipeExact = null; refresh(); }); $('k-team').addEventListener('input', refresh);
  $('k-cur').addEventListener('change', function () { setCur($('k-cur').value); });
  $('restart').addEventListener('click', function () {
    answer = null; ['step2', 'step3', 'summary', 'r1'].forEach(function (id) { $(id).hidden = true; });
    Array.prototype.forEach.call(document.querySelectorAll('.leak-next'), function (b) { b.hidden = false; });
    Array.prototype.forEach.call(document.querySelectorAll('.leak-choices button'), function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
    $('step1').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  });
  setCur('GBP');
})();
</script>
`;
