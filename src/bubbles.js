export function initBubbleNavigation(){
 const nav=document.querySelector('.desktop-nav');
 const links=[...nav.querySelectorAll('a')];
 const active=links.find(a=>a.hasAttribute('aria-current'));
 let highlighted=active;
 function highlight(link){
  highlighted=link||active;
  links.forEach(a=>a.classList.toggle('is-nav-highlighted',a===highlighted));
  nav.classList.toggle('nav-preview',!!highlighted&&highlighted!==active);
  if(!highlighted||!nav.getClientRects().length){nav.classList.remove('nav-ink-ready');return;}
  const parent=nav.getBoundingClientRect(),box=highlighted.getBoundingClientRect();
  nav.style.setProperty('--nav-x',`${box.left-parent.left-nav.clientLeft}px`);
  nav.style.setProperty('--nav-width',`${box.width}px`);
  nav.style.setProperty('--nav-solid',getComputedStyle(highlighted).getPropertyValue('--tab-solid'));
  nav.classList.add('nav-ink-ready');
 }
 links.forEach(link=>{
  link.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')highlight(link);});
  link.addEventListener('focus',()=>highlight(link));
 });
 nav.addEventListener('pointerleave',()=>highlight(nav.contains(document.activeElement)?document.activeElement.closest('a'):active));
 nav.addEventListener('focusout',()=>requestAnimationFrame(()=>{
  if(!nav.contains(document.activeElement))highlight(active);
 }));
 new ResizeObserver(()=>highlight(highlighted)).observe(nav);
 document.fonts.ready.then(()=>highlight(highlighted));
 highlight(active);
 const root=document.documentElement;
 const fine=matchMedia('(hover: hover) and (pointer: fine)');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const bubbles=[...document.querySelectorAll('.hero-discovery')];
 bubbles.forEach(bubble=>{
  bubble.addEventListener('pointermove',event=>{
   if(event.pointerType==='touch'||!fine.matches||reduced.matches||root.classList.contains('motion-paused'))return;
   const r=bubble.getBoundingClientRect();
   bubble.style.setProperty('--shine-x',`${100*(event.clientX-r.left)/r.width}%`);
   bubble.style.setProperty('--shine-y',`${100*(event.clientY-r.top)/r.height}%`);
  },{passive:true});
  bubble.addEventListener('pointerleave',()=>{
   bubble.style.removeProperty('--shine-x');bubble.style.removeProperty('--shine-y');
  });
 });
 document.addEventListener('rainloop:motion',()=>{
  bubbles.forEach(b=>{b.style.removeProperty('--shine-x');b.style.removeProperty('--shine-y');});
 });
}
