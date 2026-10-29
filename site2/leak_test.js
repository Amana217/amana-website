const { chromium } = require('playwright');
const SYM={GBP:'£',USD:'$',AED:'AED '}, TR={GBP:3000,USD:3800,AED:14000};
function fmt(v,s){const a=Math.abs(v);if(a>=999.5e6)return s+(v/1e9).toFixed(a>=9.995e9?1:2)+'bn';if(a>=999.5e3)return s+(v/1e6).toFixed(a>=9.995e6?1:2)+'m';if(a>=999.5)return s+Math.round(v/1e3)+'k';return s+Math.round(v);}
(async()=>{const b=await chromium.launch();let fails=[],n=0;
 for(const w of [1440,390]){ const p=await b.newPage({viewport:{width:w,height:900}, reducedMotion:'reduce'}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto('file://'+process.cwd()+'/out/site/leak.html');
  for(const cur of ['GBP','USD','AED']) for(const ans of ['yes','unsure','no']){
   await p.selectOption('#k-cur',cur); await p.click('#restart').catch(()=>{});
   await p.click(`.leak-choices button[data-a=${ans}]`);
   for(let t=0;t<25;t++){ n++;
     const ote=Math.round(20000+Math.random()*400000), quota=Math.round(50000+Math.random()*3e6), team=1+Math.floor(Math.random()*60), sl=Math.floor(Math.random()*101);
     await p.fill('#k-ote',String(ote)); await p.fill('#k-quota',String(quota));
     if(await p.isHidden('#step2')) await p.click('#step1 .leak-next');
     await p.$eval('#k-pipe',(e,v)=>{e.value=v;e.dispatchEvent(new Event('input'));},sl);
     if(await p.isHidden('#step3')) await p.click('#step2 .leak-next');
     await p.$eval('#k-team',(e,v)=>{e.value=v;e.dispatchEvent(new Event('input'));},team);
     if(await p.isHidden('#summary')) await p.click('#step3 .leak-next');
     await p.$eval('#k-ote',e=>e.dispatchEvent(new Event('input')));
     const g=await p.evaluate(()=>({r1:document.getElementById('r1-big').textContent,r2:document.getElementById('r2-big').textContent,r3:document.getElementById('r3-big').textContent,po:document.getElementById('k-pipe-out').textContent,s:document.getElementById('s-big').textContent,title:document.getElementById('s-title').textContent,list:document.getElementById('s-list').textContent,lead:document.getElementById('r1-lead').textContent}));
     const s=SYM[cur];
     const h=ote*8/12+ote*.15+TR[cur]+quota/12*(3.69+2.85);
     const max={GBP:5e7,USD:6e7,AED:2e8}[cur], lo0=max/500, pipe=Math.round(lo0*Math.pow(max/lo0,sl/100)/10000)*10000;
     const plo=pipe*.207+pipe*.32*.4, phi=pipe*.207+pipe*.32*.6, a=team*ote*.72;
     if(g.r1!==fmt(h,s)) fails.push(['r1',g.r1,fmt(h,s)]);
     if(g.po!==fmt(pipe,s)) fails.push(['po',g.po,fmt(pipe,s)]);
     if(g.r2!==fmt(plo,s)+' to '+fmt(phi,s)) fails.push(['r2',g.r2]);
     if(g.r3!==fmt(a,s)) fails.push(['r3',g.r3,fmt(a,s)]);
     const top=[['The wrong hire',h],['Deals that stall and die',(plo+phi)/2],['Sellers buried in admin',a]].sort((x,y)=>y[1]-x[1])[0][0];
     if(g.title!==top) fails.push(['top',g.title,top]);
     if(/NaN|Infinity|undefined/.test(JSON.stringify(g))) fails.push(['nan']);
     if(/1000k|1000\.0?m|10\.00m/.test(JSON.stringify(g))) fails.push(['fmt',g]);
     const leadOk = ans==='yes'?g.lead.startsWith('That hire'):ans==='unsure'?g.lead.startsWith('If even one'):g.lead.startsWith('Good.');
     if(!leadOk) fails.push(['lead',ans,g.lead]);
   }
  }
  const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) fails.push(['overflow',w]);
  if(errs.length) fails.push(['js',errs[0]]);
  await p.screenshot({path:'leak-'+w+'.png',fullPage:true});
 }
 console.log('runs',n,'failures',fails.length); console.log(JSON.stringify(fails.slice(0,6))); await b.close();})();
