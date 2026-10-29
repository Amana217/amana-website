const { chromium } = require('playwright');
const S=[{w:2,d:.05,p:.05,c:.05},{w:4,d:.10,p:.10,c:.10},{w:6,d:.15,p:.20,c:.15}];
// Independent formatter: express value at 3 significant figures in the right unit
function fmt(v,c){const a=Math.abs(v);
  if(a>=999.5e6) return c+(v/1e9).toFixed(a>=9.995e9?1:2)+'bn';
  if(a>=999.5e3) return c+(v/1e6).toFixed(a>=9.995e6?1:2)+'m';
  if(a>=999.5) return c+Math.round(v/1e3)+'k'; return c+Math.round(v);}
function ref(rev,pipe,winPct,deal,cyc,mult){const win=Math.min(winPct,95)/100, base=pipe*win;
  return S.map(s=>{const nw=Math.min(win+s.w/100,.95); const extra=Math.max(pipe*(1+s.p)*nw*(1+s.d)-base,0);
  return {extra,pct:rev>0?extra/rev*100:null,deals:deal>0?Math.round(pipe*(1+s.p)/deal*nw-pipe/deal*win):null,days:cyc>0?Math.round(cyc*s.c):null,val:mult>0?extra*mult:null};});}
(async()=>{const b=await chromium.launch(); const p=await b.newPage(); await p.goto('file://'+process.cwd()+'/out/site/roi.html');
 const read=()=>p.evaluate(()=>[...document.querySelectorAll('.roi-card')].map(c=>({big:c.querySelector('.roi-big').textContent,t:[...c.querySelectorAll('li')].map(l=>l.textContent).join(' | ')})));
 async function set(o){for(const [k,v] of Object.entries(o)) await p.fill('#'+k,String(v)); await p.dispatchEvent('#r-win','input');}
 let fails=[],n=0; const R=(a,b)=>a+Math.random()*(b-a);
 const cases=[]; for(let i=0;i<500;i++) cases.push({rev:Math.round(R(1e5,3e8)),pipe:Math.round(R(5e4,8e8)),win:Math.round(R(1,90)),deal:Math.round(R(200,3e6)),cyc:Math.round(R(7,500)),mult:Math.round(R(0,20)*2)/2});
 // boundary cases engineered around 1k, 1m, 10m, 1bn outputs
 for(const target of [999.4,999.6,9999,999400,999600,9994000,9996000,999.4e6,999.6e6]) cases.push({rev:5e6,pipe:target/0.2*1/1, win:0,deal:4e4,cyc:120,mult:1,raw:target});
 for(const c of cases){ n++;
   let o={'r-rev':c.rev,'r-pipe':c.pipe,'r-win':c.win,'r-deal':c.deal,'r-cycle':c.cyc,'r-mult':c.mult};
   if(c.raw!==undefined){ // win 0 is invalid input; instead reach target via pipeline at 20% win: conservative extra = pipe*(1.05*.22*1.05-.2)
     const k=1.05*.22*1.05-.2; o['r-win']=20; o['r-pipe']=Math.round(c.raw/k); c.pipe=o['r-pipe']; c.win=20; }
   await set(o); const out=await read(); const r=ref(c.rev,c.pipe,c.win,c.deal,c.cyc,c.mult);
   r.forEach((x,i)=>{const t=out[i].t;
     if(out[i].big!==fmt(x.extra,'£')) fails.push(['big',out[i].big,fmt(x.extra,'£')]);
     if(x.pct!==null && !t.includes(x.pct.toFixed(0)+'% on top')) fails.push(['pct',t]);
     if(!t.includes(fmt(x.extra*3,'£')+' over three')) fails.push(['3y',t]);
     if(x.deals!==null && !t.includes(x.deals+' more deals')) fails.push(['deals',t]);
     if(x.days!==null && !t.includes(x.days+' days')) fails.push(['days',t]);
     if(x.val!==null && !t.includes(fmt(x.val,'£')+' of value')) fails.push(['val',t]);
     if(/NaN|Infinity|undefined|1000k|1000\.0?m|£1000(?!\d)|10\.00m|1000\.00?bn/.test(t+out[i].big)) fails.push(['format',out[i].big,t]);
     if(i>0 && false){} });
   // ordering sanity
   const v=r.map(x=>x.extra); if(!(v[0]<=v[1]&&v[1]<=v[2])) fails.push(['order',c]);
 }
 // separator handling
 const sep=[['10,000,000',1e7],['10.000.000',1e7],['10000000',1e7],['£10,000,000',1e7],['10 000 000',1e7]];
 for(const [txt,val] of sep){ await p.fill('#r-rev','5000000'); await p.fill('#r-pipe',txt); await p.fill('#r-win','20'); await p.dispatchEvent('#r-win','input'); const o=await read(); if(o[1].big!=='£904k') fails.push(['sep',txt,o[1].big]); }
 // empty and zero inputs
 await p.fill('#r-rev',''); await p.fill('#r-deal',''); await p.fill('#r-mult',''); await p.dispatchEvent('#r-win','input'); const e=await read(); if(/NaN|Infinity|%/.test(JSON.stringify(e))) fails.push(['empty',JSON.stringify(e)]);
 console.log('cases',n,'failures',fails.length); console.log(JSON.stringify(fails.slice(0,6)));
 // show boundary outputs
 for(const raw of [999.6,999600,9996000,999.6e6]){const k=1.05*.22*1.05-.2; await p.fill('#r-pipe',String(Math.round(raw/k))); await p.fill('#r-win','20'); await p.dispatchEvent('#r-win','input'); console.log(raw,'->',(await read())[0].big);}
 await b.close();})();
