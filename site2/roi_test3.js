const { chromium } = require('playwright');
const S=[{w:2,d:.05,p:.05,c:.05},{w:4,d:.10,p:.10,c:.10},{w:6,d:.15,p:.20,c:.15}];
function fmt(v,c){const a=Math.abs(v);if(a>=999.5e6)return c+(v/1e9).toFixed(a>=9.995e9?1:2)+'bn';if(a>=999.5e3)return c+(v/1e6).toFixed(a>=9.995e6?1:2)+'m';if(a>=999.5)return c+Math.round(v/1e3)+'k';return c+Math.round(v);}
(async()=>{const b=await chromium.launch();const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto('file://'+process.cwd()+'/out/site/roi.html');
 const R=(a,b)=>a+Math.random()*(b-a);let fails=[],n=0;
 const combos=[];for(let m=0;m<8;m++)combos.push([!!(m&1),!!(m&2),!!(m&4)]);
 for(let i=0;i<120;i++){const c={rev:Math.round(R(1e5,3e8)),pipe:Math.round(R(5e4,8e8)),win:Math.round(R(1,90)),deal:Math.round(R(200,3e6)),cyc:Math.round(R(7,500)),mult:Math.round(R(0,20)*2)/2};
  for(const [k,v] of Object.entries({'r-rev':c.rev,'r-pipe':c.pipe,'r-win':c.win,'r-deal':c.deal,'r-cycle':c.cyc,'r-mult':c.mult})) await p.fill('#'+k,String(v));
  for(const [LW,LD,LP] of combos){ n++;
   await p.setChecked('#l-win',LW); await p.setChecked('#l-deal',LD); await p.setChecked('#l-pipe',LP); await p.dispatchEvent('#r-win','input');
   const out=await p.$$eval('.roi-card',cs=>cs.map(c=>({big:c.querySelector('.roi-big').textContent,why:c.querySelector('.roi-why').textContent,t:[...c.querySelectorAll('li')].map(l=>l.textContent).join(' | ')})));
   const win=Math.min(c.win,95)/100, base=c.pipe*win;
   S.forEach((s,i)=>{const nw=LW?Math.min(win+s.w/100,.95):win, pp=LP?s.p:0, dd=LD?s.d:0; const extra=Math.max(c.pipe*(1+pp)*nw*(1+dd)-base,0);
    if(out[i].big!==fmt(extra,'£')) fails.push(['big',LW,LD,LP,out[i].big,fmt(extra,'£')]);
    if(c.mult>0 && !out[i].t.includes(fmt(extra*c.mult,'£')+' of value')) fails.push(['val',out[i].t]);
    const d=Math.round(c.pipe*(1+pp)/c.deal*nw-c.pipe/c.deal*win); if((LW||LP) && !out[i].t.includes(d+' more deals')) fails.push(['deals',out[i].t,d]);
    if(!(LW||LP) && out[i].t.includes('more deals')) fails.push(['deals-shown-when-off']);
    if(LW!==out[i].why.toLowerCase().includes('win ')) fails.push(['why-win',out[i].why]);
    if(LD!==out[i].why.includes('bigger')) fails.push(['why-deal',out[i].why]);
    if(LP!==out[i].why.includes('pipeline.')&&LP) fails.push(['why-pipe',out[i].why]);
    if(/NaN|Infinity|undefined/.test(JSON.stringify(out[i]))) fails.push(['nan']);});
  }}
 console.log('runs',n,'failures',fails.length,'js errors',errs.length); console.log(JSON.stringify(fails.slice(0,5)));
 // example readout
 await p.click('.roi-presets button:nth-child(2)'); await p.setChecked('#l-deal',false); await p.setChecked('#l-pipe',false); await p.dispatchEvent('#r-win','input');
 console.log('win only:', await p.$$eval('.roi-card',cs=>cs.map(c=>c.querySelector('.roi-big').textContent+' / '+c.querySelector('.roi-why').textContent)));
 await b.close();})();
