import { pages } from './content.js';

const root=document.documentElement;
const key='rainloop-route-transition';
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let leaving=false, travelTimer;
const stopped=()=>reduced.matches||root.classList.contains('motion-paused');
const labelFor=url=>pages.find(p=>url.pathname.endsWith(`/${p.id}.html`))?.title||'RainLoop';
function clearTransition(){
 root.classList.remove('route-preparing','route-leaving','route-arriving','route-revealing');
 document.body.removeAttribute('aria-busy');leaving=false;
}

export function navigateTo(target){
 const url=new URL(target,location.href);
 if(leaving)return;
 if(stopped()||url.origin!==location.origin){location.assign(url.href);return;}
 leaving=true;
 document.querySelectorAll('dialog[open]').forEach(d=>d.close());
 const title=document.querySelector('[data-route-title]');if(title)title.textContent=labelFor(url);
 try{sessionStorage.setItem(key,JSON.stringify({path:url.pathname+url.search,label:labelFor(url),time:Date.now()}));}catch{}
 document.body.setAttribute('aria-busy','true');root.classList.add('route-preparing');
 requestAnimationFrame(()=>requestAnimationFrame(()=>root.classList.add('route-leaving')));
 // Navigation never depends on animationend or a successful storage write.
 travelTimer=setTimeout(()=>location.assign(url.href),570);
}

document.addEventListener('click',event=>{
 if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 const a=event.target.closest('a[href]');
 if(!a||a.hasAttribute('download')||(a.target&&a.target!=='_self')||a.rel.includes('external'))return;
 const url=new URL(a.href,location.href);
 if(url.origin!==location.origin||!url.pathname.startsWith(import.meta.env.BASE_URL)||!url.pathname.endsWith('.html'))return;
 if(url.pathname===location.pathname&&url.search===location.search)return;
 if(stopped())return;
 event.preventDefault();navigateTo(url);
});

let arriving;
try{arriving=JSON.parse(sessionStorage.getItem(key)||'null');sessionStorage.removeItem(key);}catch{}
if(arriving&&arriving.path===location.pathname+location.search&&Date.now()-arriving.time<15000&&!stopped()){
 const title=document.querySelector('[data-route-title]');if(title)title.textContent=arriving.label;
 root.classList.add('route-arriving');
 const unveil=()=>{
  if(stopped()){clearTransition();return;}
  root.classList.add('route-revealing');
  setTimeout(clearTransition,680);
 };
 // A slow font must not lock visitors behind the transition curtain.
 Promise.race([document.fonts.ready,new Promise(resolve=>setTimeout(resolve,1100))]).then(()=>requestAnimationFrame(()=>requestAnimationFrame(unveil)));
}else clearTransition();

window.addEventListener('pageshow',event=>{if(event.persisted){clearTimeout(travelTimer);clearTransition();}});
document.addEventListener('rainloop:motion',()=>{if(stopped()&&!leaving)clearTransition();});
