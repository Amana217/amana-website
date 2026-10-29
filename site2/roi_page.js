module.exports = ({ CALENDLY, TALK20 }) => `
<section class="page-hero roi-hero">
  <div class="wrap roi-hero-grid">
    <div class="stack"><p class="eyebrow">ROI calculator</p><h1>What could a stronger revenue engine be worth to you?</h1></div>
    <p class="for-line">Pick the business most like yours and the answer appears straight away. Then change any number to make it yours. Every box explains what it means and where to find it.</p>
  </div>
</section>
<section class="band" style="padding-top:0">
  <div class="wrap roi">
    <form class="roi-inputs card" id="roi-form" onsubmit="return false">
      <p class="eyebrow">1. Start with a business like yours</p>
      <div class="roi-presets" role="group" aria-label="Example businesses">
        <button type="button" data-p="3000000,6000000,20,25000,90,4">Founder led scale up<span>about £3m revenue</span></button>
        <button type="button" data-p="15000000,30000000,25,60000,120,5" class="on">VC backed company<span>about £15m revenue</span></button>
        <button type="button" data-p="40000000,80000000,22,150000,180,4">PE backed, established sales team<span>about £40m revenue</span></button>
      </div>
      <p class="eyebrow" style="margin-top:6px">2. Make it yours (optional)</p>
      <label class="roi-cur">Currency
        <select id="r-cur"><option value="£">GBP £</option><option value="$">USD $</option><option value="AED ">AED</option></select>
      </label>
      <label>Annual revenue<input id="r-rev" type="text" inputmode="numeric" value="15,000,000"><small>Your total sales last year. We use it to show the uplift as a percentage.</small></label>
      <label>Qualified pipeline created per year<input id="r-pipe" type="text" inputmode="numeric" value="30,000,000"><small>The total value of real opportunities your team creates in a year, where there is a genuine buyer, need and budget. It is in your CRM. Only know a quarter? Multiply it by four.</small></label>
      <label>Win rate (%)<input id="r-win" type="number" min="1" max="90" step="1" value="25"><small>Out of every 10 qualified opportunities, how many do you win? 2 out of 10 is 20%.</small></label>
      <label>Average deal size<input id="r-deal" type="text" inputmode="numeric" value="60,000"><small>The typical first year value of a deal you win. New business revenue divided by the number of new deals.</small></label>
      <label>Average sales cycle (days)<input id="r-cycle" type="number" min="7" max="720" step="1" value="120"><small>Days from the first proper conversation to a signed contract.</small></label>
      <label>Valuation multiple (investors only)<input id="r-mult" type="number" min="0" max="30" step="0.5" value="5"><small>What the business would be valued at, as a multiple of revenue. Not an investor? Set it to 0.</small></label>
      <p class="roi-note">Not sure? Use your best estimate. Nothing you type is sent or stored.</p>
    </form>
    <div class="roi-out">
      <div class="roi-levers" role="group" aria-label="Improvements to include">
        <p class="roi-levers-title">Which improvements do you want to include? Switch off anything that feels unrealistic for you.</p>
        <label><input type="checkbox" id="l-win" checked><span><b>Win more deals</b>Higher win rate from the same opportunities</span></label>
        <label><input type="checkbox" id="l-deal" checked><span><b>Bigger deals</b>Higher average deal size</span></label>
        <label><input type="checkbox" id="l-pipe" checked><span><b>More pipeline</b>More qualified opportunities each year</span></label>
      </div>
      <p class="roi-today" id="roi-today"></p>
      <div class="roi-cards" id="roi-cards"></div>
      <details class="roi-assume">
        <summary>How the scenarios are worked out</summary>
        <table>
          <thead><tr><th>Improvement</th><th>Conservative</th><th>Expected</th><th>Strong</th></tr></thead>
          <tbody>
            <tr><td>Win rate</td><td>+2 points</td><td>+4 points</td><td>+6 points</td></tr>
            <tr><td>Average deal size</td><td>+5%</td><td>+10%</td><td>+15%</td></tr>
            <tr><td>Qualified pipeline</td><td>+5%</td><td>+10%</td><td>+20%</td></tr>
            <tr><td>Sales cycle</td><td>5% shorter</td><td>10% shorter</td><td>15% shorter</td></tr>
          </tbody>
        </table>
        <p>Extra revenue = more qualified deals, won more often, at a higher value, compared with what your current pipeline and win rate deliver. Only the improvements you switch on are counted. Value created = extra annual revenue multiplied by your valuation multiple. These are planning assumptions, not guarantees. Your results depend on your market, your team and how quickly changes are made.</p>
      </details>
      <div class="roi-cta">
        <p><strong>Want to test these numbers against your real pipeline?</strong> Bring them to a free 20 to 30 minute call.</p>
        <a class="btn" id="roi-book" href="${CALENDLY}" target="_blank" rel="noopener">${TALK20}</a>
      </div>
    </div>
  </div>
</section>
<script>
(function () {
  var S = [
    { name: 'Conservative', w: 2, d: 0.05, p: 0.05, c: 0.05 },
    { name: 'Expected', w: 4, d: 0.10, p: 0.10, c: 0.10 },
    { name: 'Strong', w: 6, d: 0.15, p: 0.20, c: 0.15 }
  ];
  var $ = function (id) { return document.getElementById(id); };
  var num = function (id) {
    var t = String($(id).value).replace(/[^0-9.,]/g, '');
    if ((t.match(/[.]/g) || []).length > 1) t = t.replace(/[.]/g, '');
    t = t.replace(/,/g, '');
    var v = parseFloat(t); return isFinite(v) && v > 0 ? v : 0;
  };
  var cur = function () { return $('r-cur').value; };
  var money = function (v) {
    var a = Math.abs(v), s;
    if (a >= 999.5e6) s = (v / 1e9).toFixed(a >= 9.995e9 ? 1 : 2) + 'bn';
    else if (a >= 999.5e3) s = (v / 1e6).toFixed(a >= 9.995e6 ? 1 : 2) + 'm';
    else if (a >= 999.5) s = Math.round(v / 1e3) + 'k';
    else s = Math.round(v).toString();
    return cur() + s;
  };
  function why(s, LW, LD, LP) {
    var parts = [];
    if (LW) parts.push('win ' + s.w + ' more deals in every 100');
    if (LD) parts.push('make each deal ' + Math.round(s.d * 100) + '% bigger');
    if (LP) parts.push('create ' + Math.round(s.p * 100) + '% more pipeline');
    if (!parts.length) return 'Switch on at least one improvement above to see the impact.';
    var t = parts.length === 1 ? parts[0] : parts.slice(0, -1).join(', ') + ' and ' + parts[parts.length - 1];
    return t.charAt(0).toUpperCase() + t.slice(1) + '.';
  }
  function calc() {
    var rev = num('r-rev'), pipe = num('r-pipe'), win = Math.min(num('r-win'), 95) / 100, deal = num('r-deal'), cyc = num('r-cycle'), mult = num('r-mult');
    var base = pipe * win;
    var LW = $('l-win').checked, LD = $('l-deal').checked, LP = $('l-pipe').checked;
    var html = S.map(function (s, i) {
      var nw = LW ? Math.min(win + s.w / 100, 0.95) : win;
      var dd = LD ? s.d : 0, pp = LP ? s.p : 0;
      var won = pipe * (1 + pp) * nw * (1 + dd);
      var extra = Math.max(won - base, 0);
      var pct = rev > 0 ? extra / rev * 100 : 0;
      var dealsNow = deal > 0 ? (pipe / deal) * win : 0;
      var dealsNew = deal > 0 ? (pipe * (1 + pp) / deal) * nw : 0;
      var val = extra * mult;
      return '<div class="roi-card' + (i === 1 ? ' is-mid' : '') + '">' +
        '<p class="eyebrow">' + s.name + '</p>' +
        '<p class="roi-big">' + money(extra) + '</p><p class="roi-sub">extra revenue a year</p>' +
        '<p class="roi-why">' + why(s, LW, LD, LP) + '</p>' +
        '<ul>' +
        (rev > 0 ? '<li><b>' + pct.toFixed(0) + '%</b> on top of today&rsquo;s revenue</li>' : '') +
        '<li><b>' + money(extra * 3) + '</b> over three years</li>' +
        (deal > 0 && (LW || LP) ? '<li><b>' + Math.round(dealsNew - dealsNow) + '</b> more deals won a year</li>' : '') +
        (cyc > 0 ? '<li><b>' + Math.round(cyc * s.c) + ' days</b> faster to close</li>' : '') +
        (mult > 0 ? '<li><b>' + money(val) + '</b> of value created at ' + mult + 'x</li>' : '') +
        '</ul></div>';
    }).join('');
    $('roi-cards').innerHTML = html;
    $('roi-today').innerHTML = base > 0 ? '<b>Today</b> your pipeline turns into about <b>' + money(base) + '</b> of new business a year (' + money(pipe) + ' of pipeline at a ' + Math.round(win * 100) + '% win rate). Here is what a stronger sales engine adds on top.' : 'Add your pipeline and win rate to see the result.';
  }
  ['r-rev', 'r-pipe', 'r-deal'].forEach(function (id) {
    $(id).addEventListener('blur', function () { var v = num(id); $(id).value = v ? v.toLocaleString('en-GB') : ''; });
  });
  document.getElementById('roi-form').addEventListener('input', calc);
  ['l-win', 'l-deal', 'l-pipe'].forEach(function (id) { $(id).addEventListener('change', calc); });
  var fmtIn = function (v) { return Number(v).toLocaleString('en-GB'); };
  Array.prototype.forEach.call(document.querySelectorAll('.roi-presets button'), function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-p').split(',');
      $('r-rev').value = fmtIn(v[0]); $('r-pipe').value = fmtIn(v[1]); $('r-win').value = v[2];
      $('r-deal').value = fmtIn(v[3]); $('r-cycle').value = v[4]; $('r-mult').value = v[5];
      Array.prototype.forEach.call(document.querySelectorAll('.roi-presets button'), function (x) { x.classList.toggle('on', x === b); });
      calc();
    });
  });
  try { var q = new URLSearchParams(location.search).get('cur'); var m = { GBP: '£', USD: '$', AED: 'AED ' }; if (q && m[q]) $('r-cur').value = m[q]; } catch (e) {}
  calc();
})();
</script>
`;
