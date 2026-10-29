// Lead form in the Contact section. Submissions go straight into HubSpot (EU data centre) as contacts.
const HS = { portal: '149649295', form: '5b50512e-ea54-4fe2-90ac-ebe4a61fd949', endpoint: 'https://api-eu1.hsforms.com/submissions/v3/integration/submit' };

const opt = (list) => ['<option value="" selected disabled>Choose one</option>', ...list.map(v => `<option>${v}</option>`)].join('');
const ROLES = ['Founder or CEO', 'Investor (PE or VC)', 'Sales leader', 'Other'];
const REVENUE = ['Under £2m', '£2m to £10m', '£10m to £50m', '£50m+', 'Investor, across a portfolio'];
const NEEDS = ['Revenue has stalled', 'Go to market strategy', 'Entering a new market', 'Expanding into the Middle East', 'Pipeline and forecasting', 'Sales process and CRM', 'Pricing and packaging', 'Hiring or building the sales team', 'Assessing or hiring a sales leader', 'Developing the sales team', 'Coaching for me or my sales leaders', 'Senior commercial leadership (fractional CRO)', 'Sales due diligence before an investment', 'Portfolio support', 'Not sure yet'];
const TIMING = ['Now', 'Within 3 months', 'Just exploring'];

module.exports = ({ EMAIL, CALENDLY }) => `
  <div class="wrap leadf" id="enquire">
    <div class="lead-head">
      <p class="eyebrow">Not ready to book yet?</p>
      <h3>Tell us where you are, and we will come back to you personally.</h3>
      <p class="muted">Six quick questions, about a minute. Or <a class="textlink" href="${CALENDLY}" target="_blank" rel="noopener">pick a time now</a>.</p>
    </div>
    <form class="lead-form" id="lead-form" novalidate>
      <div class="lf-row">
        <label>First name<span aria-hidden="true">*</span><input name="firstname" autocomplete="given-name" required></label>
        <label>Last name<span aria-hidden="true">*</span><input name="lastname" autocomplete="family-name" required></label>
      </div>
      <div class="lf-row">
        <label>Work email<span aria-hidden="true">*</span><input name="email" type="email" autocomplete="email" required></label>
        <label>Company<span aria-hidden="true">*</span><input name="company" autocomplete="organization" required></label>
      </div>
      <div class="lf-row">
        <label>Company website<input name="website" type="text" inputmode="url" placeholder="example.com"></label>
        <label>Your role<span aria-hidden="true">*</span><select name="jobtitle" required>${opt(ROLES)}</select></label>
      </div>
      <div class="lf-row">
        <label>Annual revenue<span aria-hidden="true">*</span><select name="annualrevenue" required>${opt(REVENUE)}</select></label>
        <label>What do you most need help with?<span aria-hidden="true">*</span><select name="main_need" required>${opt(NEEDS)}</select></label>
      </div>
      <div class="lf-row">
        <label>When do you want to start?<span aria-hidden="true">*</span><select name="start_timing" required>${opt(TIMING)}</select></label>
        <label class="lf-hp" aria-hidden="true">Leave this empty<input name="hp_check" tabindex="-1" autocomplete="off"></label>
      </div>
      <label class="lf-full"><span>Anything we should know? <span class="muted">(optional)</span></span><textarea name="message" rows="3"></textarea></label>
      <p class="lf-consent muted">We use these details only to reply to your enquiry. See our <a href="privacy.html">privacy notice</a>.</p>
      <div class="lf-actions"><button class="btn" type="submit">Send</button><p class="lf-status" id="lf-status" role="status" aria-live="polite"></p></div>
    </form>
    <div class="lead-done" id="lead-done" hidden>
      <p class="eyebrow">Thank you</p>
      <h3>We have your details and will be in touch shortly.</h3>
      <p class="muted">If it is urgent, <a class="textlink" href="${CALENDLY}" target="_blank" rel="noopener">book a time now</a> or email ${EMAIL}.</p>
    </div>
  </div>
<script>
(function () {
  var f = document.getElementById('lead-form'); if (!f) return;
  var st = document.getElementById('lf-status'), done = document.getElementById('lead-done');
  var cookie = function (n) { var m = document.cookie.match('(^|; )' + n + '=([^;]*)'); return m ? decodeURIComponent(m[2]) : null; };
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    if (f.hp_check.value) return;
    var bad = Array.prototype.filter.call(f.querySelectorAll('[required]'), function (el) { return !el.value || !el.checkValidity(); });
    f.querySelectorAll('.lf-bad').forEach(function (el) { el.classList.remove('lf-bad'); });
    if (bad.length) { bad.forEach(function (el) { el.classList.add('lf-bad'); }); bad[0].focus(); st.textContent = 'Please complete the highlighted fields.'; return; }
    var names = ['firstname', 'lastname', 'email', 'company', 'website', 'jobtitle', 'annualrevenue', 'main_need', 'start_timing', 'message'];
    var fields = names.map(function (n) { return { objectTypeId: '0-1', name: n, value: (f[n].value || '').trim() }; }).filter(function (x) { return x.value; });
    var ctx = { pageUri: location.href, pageName: document.title }; var h = cookie('hubspotutk'); if (h) ctx.hutk = h;
    var btn = f.querySelector('button[type=submit]'); btn.disabled = true; st.textContent = 'Sending…';
    fetch('${HS.endpoint}/${HS.portal}/${HS.form}', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fields: fields, context: ctx, legalConsentOptions: { legitimateInterest: { value: true, subscriptionTypeId: 4012354045, legalBasis: 'LEAD', text: 'We use these details only to reply to your enquiry.' } } }) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); f.hidden = true; done.hidden = false; done.scrollIntoView({ behavior: 'smooth', block: 'center' }); })
      .catch(function () { btn.disabled = false; st.innerHTML = 'Sorry, that did not send. Please email <a href="mailto:${EMAIL}">${EMAIL}</a>.'; });
  });
})();
</script>`;
