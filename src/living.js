// Decorative motion uses the existing artwork; it is not recorded nature footage.
export function initLivingMotion() {
 const root=document.documentElement;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const stopped=()=>reduced.matches||root.classList.contains('motion-paused');
 const sections=[...document.querySelectorAll('main>section:not(.hero):not(.not-found)')];
 sections.forEach((section,index)=>{
  section.classList.add('scroll-scene');
  section.style.setProperty('--scene-index',index);
  if(!section.matches('.page-intro,.water-loop,.next-section'))section.classList.add('contour-scene');
 });
 const headings=[...document.querySelectorAll('main h2:not(.member-content h2)')];
 headings.forEach(heading=>{
  heading.classList.add('kinetic-heading');
  const walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  let index=0;
  nodes.forEach(node=>{
   const fragment=document.createDocumentFragment();
   node.textContent.split(/(\s+)/u).forEach(word=>{
    if(!word)return;
    if(/^\s+$/u.test(word)){fragment.append(document.createTextNode(word));return;}
    const span=document.createElement('span');span.className='kinetic-word';span.textContent=word;
    span.style.setProperty('--word-delay',`${Math.min(index++*45,360)}ms`);fragment.append(span);
   });
   node.replaceWith(fragment);
  });
 });
 const visible=new Set();
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){visible.add(entry.target);entry.target.classList.add('scene-visible');}
   else{visible.delete(entry.target);entry.target.classList.remove('scene-visible');}
  });
  scheduleScroll();
 },{threshold:0});
 sections.forEach(section=>observer.observe(section));
 const headingObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  entry.target.classList.toggle('heading-active',entry.isIntersecting);
 }),{threshold:0,rootMargin:'0px 0px -8% 0px'});
 headings.forEach(heading=>headingObserver.observe(heading));
 let scrollFrame=0;
 function paintScroll(){
  scrollFrame=0;if(stopped())return;
  visible.forEach(section=>{
   const rect=section.getBoundingClientRect();
   const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));
   section.style.setProperty('--scene-shift',`${(progress-.5)*48}px`);
  });
 }
 function scheduleScroll(){if(!scrollFrame&&!stopped())scrollFrame=requestAnimationFrame(paintScroll);}
 window.addEventListener('scroll',scheduleScroll,{passive:true});
 window.addEventListener('resize',scheduleScroll,{passive:true});

 // Capped resolution and 30 fps; stop completely outside the hero or hidden tab.
 const canvas=document.querySelector('.wetland-motion');
 const hero=document.querySelector('.hero');
 let frame=0,heroVisible=false,width=0,height=0,last=0,elapsed=0;
 const context=canvas?.getContext('2d',{alpha:true});
 const bursts=[];
 function resize(){
  if(!context)return;
  const rect=hero.getBoundingClientRect();width=rect.width;height=rect.height;
  const ratio=Math.min(devicePixelRatio||1,1.5);
  canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);
  context.setTransform(ratio,0,0,ratio,0,0);
 }
 function canRun(){return !!context&&heroVisible&&!stopped()&&!document.hidden;}
 function tick(now){
  frame=0;if(!canRun()){last=0;return;}
  if(!last){last=now;frame=requestAnimationFrame(tick);return;}
  const dt=now-last;if(dt<32){frame=requestAnimationFrame(tick);return;}
  last=now;elapsed+=Math.min(dt,80)/1000;
  context.clearRect(0,0,width,height);
  const count=width<600?14:30;
  // Tiny floating highlights, with independently drifting paths.
  for(let i=0;i<count;i++){
   const x=((i*.61803398875)%1)*width+Math.sin(elapsed*.22+i)*22;
   const y=height*(.53+(i*.381966%1)*.42)+Math.sin(elapsed*.33+i*2)*14;
   const alpha=.18+.27*(.5+.5*Math.sin(elapsed*1.2+i));
   context.fillStyle=`rgba(246,255,203,${alpha})`;
   context.beginPath();context.arc(x,y,i%3===0?2:1.2,0,Math.PI*2);context.fill();
  }
  // Elliptical expanding rings stay on the lower water plane.
  for(let i=0;i<5;i++){
   const phase=(elapsed*.14+i*.2)%1;
   const x=width*(.27+i*.115),y=height*(.78+(i%3)*.05);
   context.strokeStyle=`rgba(239,251,226,${(1-phase)*.32})`;
   context.lineWidth=1;
   context.beginPath();context.ellipse(x,y,12+phase*70,2+phase*10,0,0,Math.PI*2);context.stroke();
  }
  for(let i=bursts.length-1;i>=0;i--){
   const burst=bursts[i];burst.age+=dt/1000;
   if(burst.age>1.7){bursts.splice(i,1);continue;}
   context.strokeStyle=`rgba(235,255,233,${(1-burst.age/1.7)*.65})`;
   context.beginPath();context.ellipse(burst.x,burst.y,8+burst.age*65,3+burst.age*16,0,0,Math.PI*2);context.stroke();
  }
  frame=requestAnimationFrame(tick);
 }
 function sync(){
  root.classList.toggle('living-offscreen',!!hero&&!heroVisible);
  if(canRun()&&!frame){last=0;frame=requestAnimationFrame(tick);}
  if(!canRun()){
   if(frame)cancelAnimationFrame(frame);frame=0;last=0;
   context?.clearRect(0,0,width,height);
  }
  if(stopped())sections.forEach(section=>section.style.removeProperty('--scene-shift'));
  else scheduleScroll();
 }
 if(context){
  resize();
  new ResizeObserver(resize).observe(hero);
  new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;sync();},{threshold:0}).observe(hero);
  hero.addEventListener('pointerdown',event=>{
   if(!canRun()||event.target.closest('a,button'))return;
   const rect=hero.getBoundingClientRect();
   if(event.clientY-rect.top<height*.65)return;
   bursts.push({x:event.clientX-rect.left,y:event.clientY-rect.top,age:0});
   if(bursts.length>6)bursts.shift();
  },{passive:true});
 }
 document.addEventListener('rainloop:motion',sync);
 document.addEventListener('visibilitychange',sync);
 reduced.addEventListener('change',sync);
 sync();
}
