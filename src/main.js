import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';
import '@fontsource/be-vietnam-pro/400-italic.css';
import '@fontsource/be-vietnam-pro/500-italic.css';
import '@fontsource/unbounded/500.css';
import '@fontsource/unbounded/600.css';
import '@fontsource/fraunces/500-italic.css';
import './style.css';
import './reference-theme.css';
import './criteria.css';
import './expressive.css';
import './living.css';
import './bubbles.css';
import './colorful.css';
import { initLivingMotion } from './living.js';
import { initBubbleNavigation } from './bubbles.js';
import { navigateTo } from './transitions.js';
import { research, hotspots, drawings } from './content.js';

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const escapeHTML = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const memory = new Map();
const storage = {
  get(key) { try { return sessionStorage.getItem(key) ?? memory.get(key); } catch { return memory.get(key); } },
  set(key,value) { memory.set(key,value); try { sessionStorage.setItem(key,value); } catch {} },
  remove(key) { memory.delete(key); try { sessionStorage.removeItem(key); } catch {} }
};
function parseState(key) { try { return JSON.parse(storage.get(key)||'null'); } catch { storage.remove(key); return null; } }
const dialogTriggers = new WeakMap();
let menuScroll = 0;
function openDialog(dialog, trigger) {
  dialogTriggers.set(dialog, trigger || document.activeElement);
  dialog.showModal();
  document.body.classList.add('modal-open');
}
$$('dialog').forEach(dialog=>{
  dialog.addEventListener('close',()=>{
    if(!$('dialog[open]')) document.body.classList.remove('modal-open');
    dialogTriggers.get(dialog)?.focus({preventScroll:true});
    if(dialog.id==='mobile-menu'){
      $('.menu-toggle').setAttribute('aria-expanded','false');
      if(!presentation)requestAnimationFrame(()=>scrollTo({top:menuScroll,behavior:'instant'}));
    }
  });
  dialog.addEventListener('click',event=>{
    if(event.target!==dialog) return;
    const r=dialog.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close();
  });
});
$$('[data-close-dialog]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
$('.menu-toggle')?.addEventListener('click',event=>{
  menuScroll=scrollY;
  event.currentTarget.setAttribute('aria-expanded','true');
  openDialog($('#mobile-menu'),event.currentTarget);
});
$$('#mobile-menu a').forEach(a=>a.addEventListener('click',()=>$('#mobile-menu').close()));
matchMedia('(min-width: 1051px)').addEventListener('change',event=>{
  if(event.matches && $('#mobile-menu').open) $('#mobile-menu').close();
});

if(!reduced.matches) document.documentElement.classList.add('js-motion');
const revealObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{
 if(entry.isIntersecting)entry.target.classList.add('in-view');
 else if(!entry.target.contains(document.activeElement))entry.target.classList.remove('in-view');
}),{threshold:.08});
$$('[data-reveal]').forEach(element=>revealObserver.observe(element));

const video=$('.hero-art video');
let motionPaused=storage.get('rainloop-motion-paused')==='true';
const motionButton=$('.motion-toggle');
const motionControls=$$('[data-motion-control]');
function syncMotion(){
 const stopped=motionPaused||reduced.matches;
 document.documentElement.classList.toggle('motion-paused',stopped);
 if(motionButton){motionButton.setAttribute('aria-pressed',String(stopped));motionButton.textContent=stopped?'Bật chuyển động ▷':'Tạm dừng chuyển động Ⅱ';if(reduced.matches)motionButton.textContent='Đã giảm chuyển động';motionButton.disabled=reduced.matches;}
 motionControls.forEach(button=>{button.setAttribute('aria-pressed',String(stopped));button.textContent=stopped?'Chuyển động: tắt':'Chuyển động: bật';button.setAttribute('aria-label',stopped?'Bật chuyển động':'Tạm dừng chuyển động');button.disabled=reduced.matches;});
 document.dispatchEvent(new CustomEvent('rainloop:motion',{detail:{stopped}}));
 if(video){if(stopped)video.pause();else if(video.dataset.visible==='true')playVideo();}
}
function playVideo(){
 if(!video||motionPaused||reduced.matches||document.hidden)return;
 if(!video.getAttribute('src'))video.src=video.dataset.src;
 video.play().catch(()=>{video.hidden=true;});
}
motionButton?.addEventListener('click',()=>{motionPaused=!motionPaused;storage.set('rainloop-motion-paused',String(motionPaused));syncMotion();});
motionControls.forEach(button=>button.addEventListener('click',()=>{motionPaused=!motionPaused;storage.set('rainloop-motion-paused',String(motionPaused));syncMotion();}));
reduced.addEventListener('change',syncMotion);
if(video){
 video.addEventListener('error',()=>{video.hidden=true;});
 video.addEventListener('playing',()=>{video.hidden=false;});
 new IntersectionObserver(entries=>entries.forEach(entry=>{video.dataset.visible=String(entry.isIntersecting);if(entry.isIntersecting)playVideo();else video.pause();}),{threshold:.1}).observe(video);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else if(video.dataset.visible==='true')playVideo();});
}
syncMotion();

$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 const selected=button.dataset.filter;
 $$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 let count=0;
 $$('.research-card').forEach(card=>{card.hidden=selected!=='all'&&card.dataset.status!==selected;if(!card.hidden)count++;});
 $('.filter-empty').hidden=count!==0;
 $('.research-context').hidden=count===0;
 $('[data-card-count]').textContent=`${count} / ${research.length} thẻ`;
}));
const cardGrid=$('.research-cards');
function setCardLayout(layout){
 if(!cardGrid)return;
 cardGrid.dataset.layout=layout==='compact'?'compact':'gallery';
 $$('[data-card-layout]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.cardLayout===cardGrid.dataset.layout)));
 storage.set('rainloop-card-layout',cardGrid.dataset.layout);
}
if(cardGrid)setCardLayout(storage.get('rainloop-card-layout'));
$$('[data-card-layout]').forEach(button=>button.addEventListener('click',()=>setCardLayout(button.dataset.cardLayout)));
function flipCard(card,showBack){
 const front=$('.card-front',card),back=$('.card-back',card);
 card.classList.toggle('is-flipped',showBack);
 front.inert=showBack;back.inert=!showBack;
 front.setAttribute('aria-hidden',String(showBack));back.setAttribute('aria-hidden',String(!showBack));
 $('[data-flip]',front).setAttribute('aria-expanded',String(showBack));
 (showBack?$('[data-research-detail]',back):$('[data-flip]',front)).focus({preventScroll:true});
}
$$('[data-flip]').forEach(button=>button.addEventListener('click',()=>{
 const card=button.closest('.research-card');
 flipCard(card,!card.classList.contains('is-flipped'));
}));
$$('.card-front').forEach(front=>front.addEventListener('click',event=>{
 if(event.target.closest('button,a')||getSelection()?.toString())return;
 flipCard(front.closest('.research-card'),true);
}));
$$('.research-card').forEach(card=>card.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&card.classList.contains('is-flipped')&&!$('dialog[open]')){
  event.preventDefault();event.stopPropagation();flipCard(card,false);
 }
}));
$$('[data-research-detail]').forEach(button=>button.addEventListener('click',()=>{
 const item=research.find(r=>r.id===button.dataset.researchDetail);if(!item)return;
 const destination=item.hotspotId?`<a class="text-link" href="thiet-ke.html#${item.hotspotId}">Xem trên bản vẽ ↗</a>`:'<a class="text-link" href="vat-lieu.html#kiem-chung">Xem kế hoạch kiểm chứng ↗</a>';
 $('.detail-content').innerHTML=`<p class="eyebrow">HỒ SƠ PHỎNG SINH HỌC / 4 PHẦN KỸ THUẬT</p><h2 id="detail-title">${escapeHTML(item.name)}</h2><span class="tag">${escapeHTML(item.statusLabel)} · ${escapeHTML(item.category)}</span><p class="detail-implementation">${escapeHTML(item.implementation)}</p>
 <section class="technical-detail"><p class="eyebrow">01 / NHẬN DIỆN HỆ SINH THÁI</p><h3>${escapeHTML(item.ecosystemName)}</h3><button class="macro-preview" data-gallery-src="${item.macro.src}" data-gallery-title="${escapeHTML(item.macro.title)}" data-gallery-caption="${escapeHTML(item.macro.credit)} · Nguồn: ${escapeHTML(item.macro.source)} · Giấy phép: ${escapeHTML(item.macro.license)}" aria-label="Phóng lớn ${escapeHTML(item.macro.title)}"><img src="${item.macro.src}" alt="${escapeHTML(item.macro.title)}"/><span>Ảnh tham khảo thật · Phóng lớn ↗</span></button><p class="photo-attribution">${escapeHTML(item.macro.credit)} · <a href="${item.macro.source}" target="_blank" rel="noopener noreferrer">Nguồn ảnh ↗</a> · <a href="${item.macro.license}" target="_blank" rel="noopener noreferrer">Giấy phép ↗</a></p><p>${escapeHTML(item.identity)}</p><p class="note">${escapeHTML(item.referenceNote)}</p></section>
 <section class="technical-detail"><p class="eyebrow">02 / CẤU TRÚC & CHỨC NĂNG</p><h3>Cấu trúc & chức năng</h3><p>${escapeHTML(item.structure)}</p><p>${escapeHTML(item.function)}</p></section>
 <section class="technical-detail"><p class="eyebrow">03 / CƠ CHẾ HOẠT ĐỘNG</p><h3>Từ khoa học đến nguyên lý thiết kế</h3><p>${escapeHTML(item.mechanism)}</p><p><b>Nguyên lý chuyển hóa:</b> ${escapeHTML(item.principle)}</p></section>
 <section class="technical-detail"><p class="eyebrow">04 / ỨNG DỤNG & ĐỊNH VỊ</p><h3>Đối chiếu với RainLoop</h3><p>${escapeHTML(item.application)}</p><div class="detail-drawing-actions"><button class="button light small" data-gallery="sketch">Phóng lớn sketch gốc ↗</button><button class="button light small" data-gallery="concept">Phóng lớn concept ↗</button></div>${destination}<p>${escapeHTML(item.decision)}</p>${!item.hotspotId?'<p class="note">Vị trí dự kiến: từ khoang chứa đến vùng rễ. Chưa có đường dây mao dẫn trên sketch/RL-001; nhóm cần bổ sung chi tiết trước khi xác nhận định vị kỹ thuật.</p>':''}</section>
 <div class="note">${escapeHTML(item.source)}<ul class="research-sources">${(item.sourceLinks||[]).map(source=>`<li><a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)} ↗</a></li>`).join('')}</ul></div><details class="art-supplement"><summary>Minh họa nghệ thuật của thẻ</summary><button class="detail-art" data-card-lightbox="${item.id}" aria-label="Phóng lớn hình thẻ ${escapeHTML(item.name)}"><img src="${item.image}" alt="${escapeHTML(item.imageAlt)}"/><span>Minh họa AI · Phóng lớn ↗</span></button></details>`;
 openDialog($('#detail-dialog'),button);
}));

function selectHotspot(id,{focus=false,scroll=false}={}){
 const h=hotspots.find(item=>item.id===id);if(!h||!$('#hotspot-title'))return;
 $$('[data-hotspot]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hotspot===id)));
 $('#hotspot-number').textContent=`BỘ PHẬN ${h.n}`;
 $('#hotspot-title').textContent=h.name;
 $('#hotspot-text').textContent=h.text;
 if(focus)$('#hotspot-detail').focus({preventScroll:true});
 if(scroll)$('#co-che').scrollIntoView({behavior:'instant',block:'start'});
}
$$('[data-hotspot]').forEach(button=>button.addEventListener('click',()=>{
 const id=button.dataset.hotspot;
 history.replaceState(null,'',`#${id}`);
 selectHotspot(id,{focus:true});
}));
function readHotspotHash(){const id=decodeURIComponent(location.hash.slice(1));if(hotspots.some(h=>h.id===id))selectHotspot(id,{focus:true,scroll:true});}
if($('#hotspot-title')){
 selectHotspot(hotspots[0].id);
 requestAnimationFrame(readHotspotHash);
 window.addEventListener('hashchange',readHotspotHash);
}
$('[data-flow-toggle]')?.addEventListener('click',event=>{
 const button=event.currentTarget;const running=button.getAttribute('aria-pressed')!=='true';
 button.setAttribute('aria-pressed',String(running));button.textContent=running?'Tạm dừng dòng nước Ⅱ':'Chạy dòng nước ▷';
 $('.interactive').classList.toggle('flow-paused',!running);
});
if(reduced.matches&&$('[data-flow-toggle]')){$('[data-flow-toggle]').textContent='Đã giảm chuyển động';$('[data-flow-toggle]').setAttribute('aria-pressed','false');$('[data-flow-toggle]').disabled=true;}

function selectMaterialTab(button){
 $$('[data-material-tab]').forEach(tab=>{const active=tab===button;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;$(`#panel-${tab.dataset.materialTab}`).hidden=!active;});
}
$$('[data-material-tab]').forEach(button=>{
 button.addEventListener('click',()=>selectMaterialTab(button));
 button.addEventListener('keydown',event=>{
  const tabs=$$('[data-material-tab]');let index=tabs.indexOf(button);
  if(event.key==='ArrowRight')index=(index+1)%tabs.length;else if(event.key==='ArrowLeft')index=(index-1+tabs.length)%tabs.length;else if(event.key==='Home')index=0;else if(event.key==='End')index=tabs.length-1;else return;
  event.preventDefault();selectMaterialTab(tabs[index]);tabs[index].focus();
 });
});

// Supplied originals are available for reading measurements and downloading.
const gallery=$('#gallery-dialog'),viewport=$('.gallery-viewport'),galleryImage=$('img',viewport);
let galleryItems=[],galleryIndex=0,zoom=1,panX=0,panY=0,pointer=null;
function paintImage(){
 const boundX=Math.max(0,(galleryImage.clientWidth*zoom-viewport.clientWidth)/2);
 const boundY=Math.max(0,(galleryImage.clientHeight*zoom-viewport.clientHeight)/2);
 panX=Math.max(-boundX,Math.min(boundX,panX));panY=Math.max(-boundY,Math.min(boundY,panY));
 galleryImage.style.transform=`translate(${panX}px,${panY}px) scale(${zoom})`;
 $('#zoom-level').textContent=`${Math.round(zoom*100)}%`;
 $('[data-zoom-out]').disabled=zoom<=1;$('[data-zoom-in]').disabled=zoom>=4;
}
function showImage(index){
 if(!galleryItems.length)return;
 galleryIndex=(index+galleryItems.length)%galleryItems.length;
 const item=galleryItems[galleryIndex];
 gallery.classList.add('gallery-loading');
 $('.gallery-load-status').hidden=false;
 $('.gallery-load-status').textContent='Đang tải ảnh…';
 galleryImage.src=item.original||item.src;galleryImage.alt=item.title;$('#gallery-title').textContent=item.title;
 $('.gallery-download').href=item.original||item.src;
 $('.gallery-caption').textContent=item.caption||'Tư liệu thiết kế do nhóm cung cấp.';
 $('.gallery-position').textContent=`${galleryIndex+1} / ${galleryItems.length}`;
 const restoreThumbnailFocus=$('.gallery-thumbnails').contains(document.activeElement);
 $('.gallery-thumbnails').innerHTML=galleryItems.map((image,i)=>`<button data-gallery-index="${i}" aria-label="Xem ảnh ${escapeHTML(image.title)}" aria-pressed="${i===galleryIndex}"><img src="${image.src}" alt="" loading="lazy"/></button>`).join('');
 if(restoreThumbnailFocus)$(`[data-gallery-index="${galleryIndex}"]`).focus({preventScroll:true});
 zoom=1;panX=0;panY=0;paintImage();
 $('[data-gallery-prev]').disabled=galleryItems.length<2;$('[data-gallery-next]').disabled=galleryItems.length<2;
}
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-gallery], [data-gallery-src], [data-card-lightbox]');if(!button)return;
 galleryItems=drawings.filter(d=>d.src).map(d=>({id:d.id,src:d.src,title:d.title,original:d.original}));
 if(button.dataset.cardLightbox){
  const visibleIds=$$('.research-card:not([hidden])').map(card=>card.dataset.cardId);
  galleryItems=research.filter(item=>visibleIds.includes(item.id)||item.id===button.dataset.cardLightbox).map(item=>({id:item.id,src:item.image,original:item.original,title:item.name,caption:`Minh họa AI · ${item.implementation}. ${item.summary}`}));
  galleryIndex=galleryItems.findIndex(item=>item.id===button.dataset.cardLightbox);
 }else if(button.dataset.gallerySrc){
  galleryItems=$$('[data-gallery-src]').map((b,i)=>({id:`supplied-${i}`,src:b.dataset.gallerySrc,title:b.dataset.galleryTitle||'Ảnh thiết kế',caption:b.dataset.galleryCaption||'Ảnh tham khảo; xem nguồn và tác giả trong hồ sơ chi tiết.'}));
  galleryIndex=$$('[data-gallery-src]').indexOf(button);
 }else galleryIndex=galleryItems.findIndex(d=>d.id===button.dataset.gallery);
 if(galleryIndex<0)return;
 openDialog(gallery,button);showImage(galleryIndex);
});
galleryImage.addEventListener('load',()=>{gallery.classList.remove('gallery-loading');$('.gallery-load-status').hidden=true;paintImage();});
galleryImage.addEventListener('error',()=>{gallery.classList.remove('gallery-loading');$('.gallery-load-status').hidden=false;$('.gallery-load-status').textContent='Không tải được ảnh. Hãy chọn ảnh khác hoặc mở lại thư viện.';});
$('.gallery-thumbnails').addEventListener('click',event=>{
 const button=event.target.closest('[data-gallery-index]');if(button)showImage(Number(button.dataset.galleryIndex));
});
$('[data-zoom-in]').addEventListener('click',()=>{zoom=Math.min(4,zoom+.5);paintImage();});
$('[data-zoom-out]').addEventListener('click',()=>{zoom=Math.max(1,zoom-.5);paintImage();});
$('[data-gallery-prev]').addEventListener('click',()=>showImage(galleryIndex-1));
$('[data-gallery-next]').addEventListener('click',()=>showImage(galleryIndex+1));
viewport.addEventListener('pointerdown',event=>{pointer={id:event.pointerId,x:event.clientX,y:event.clientY,startX:event.clientX,startY:event.clientY,type:event.pointerType};if(event.isTrusted)viewport.setPointerCapture(event.pointerId);});
viewport.addEventListener('pointermove',event=>{if(!pointer||pointer.id!==event.pointerId)return;panX+=event.clientX-pointer.x;panY+=event.clientY-pointer.y;pointer.x=event.clientX;pointer.y=event.clientY;paintImage();});
viewport.addEventListener('pointerup',event=>{
 if(pointer&&pointer.type==='touch'&&zoom===1&&galleryItems.length>1){
  const dx=event.clientX-pointer.startX,dy=event.clientY-pointer.startY;
  if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.2)showImage(galleryIndex+(dx<0?1:-1));
 }
 pointer=null;
});
for(const name of ['pointercancel','lostpointercapture'])viewport.addEventListener(name,()=>{pointer=null;});
viewport.addEventListener('keydown',event=>{
 if(zoom===1&&(event.key==='ArrowLeft'||event.key==='ArrowRight'))return;
 const delta={ArrowLeft:[35,0],ArrowRight:[-35,0],ArrowUp:[0,35],ArrowDown:[0,-35]}[event.key];
 if(delta){event.preventDefault();panX+=delta[0];panY+=delta[1];paintImage();}
});
gallery.addEventListener('keydown',event=>{
 if(event.defaultPrevented||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
 event.preventDefault();
 if(event.key==='Home')showImage(0);else if(event.key==='End')showImage(galleryItems.length-1);else showImage(galleryIndex+(event.key==='ArrowRight'?1:-1));
});
window.addEventListener('resize',()=>{if(gallery.open)paintImage();});

const steps=[
 {url:'index.html#van-de',label:'Vấn đề'},
 {url:'nghien-cuu.html#nguyen-ly',label:'Nghiên cứu'},
 {url:'nhat-ky.html#quyet-dinh',label:'Journal'},
 {url:'thiet-ke.html#co-che',label:'Thiết kế'},
 {url:'vat-lieu.html#kiem-chung',label:'Kiểm chứng'},
 {url:'doi-ngu.html',label:'Đội ngũ'}
];
let presentation=parseState('rainloop-presentation');
if(presentation && (!Number.isInteger(presentation.index)||!steps[presentation.index]||typeof presentation.origin!=='string')){storage.remove('rainloop-presentation');presentation=null;}
function updatePresentation(){
 const bar=$('.presentation-bar');bar.hidden=!presentation;document.body.classList.toggle('presenting',!!presentation);
 if(!presentation)return;
 $('#presentation-progress').textContent=`${presentation.index+1} / ${steps.length} · ${steps[presentation.index].label}`;
 $('[data-presentation-prev]').disabled=presentation.index===0;
 $('[data-presentation-next]').disabled=presentation.index===steps.length-1;
}
function goStep(index){
 if(!presentation||index<0||index>=steps.length)return;
 presentation.index=index;storage.set('rainloop-presentation',JSON.stringify(presentation));updatePresentation();
 const url=new URL(import.meta.env.BASE_URL+steps[index].url,location.origin);
 if(location.pathname===url.pathname){history.replaceState(null,'',url.pathname+url.hash);const target=$(url.hash||'#main');target?.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});}
 else navigateTo(url);
}
$$('[data-start-presentation]').forEach(button=>button.addEventListener('click',()=>{
 presentation={index:0,origin:location.pathname+location.search+location.hash,scroll:$('#mobile-menu').open?menuScroll:scrollY};
 $$('dialog[open]').forEach(dialog=>dialog.close());
 goStep(0);
}));
$('[data-presentation-prev]').addEventListener('click',()=>goStep(presentation.index-1));
$('[data-presentation-next]').addEventListener('click',()=>goStep(presentation.index+1));
function exitPresentation(){
 if(!presentation)return;
 const old=presentation;presentation=null;storage.remove('rainloop-presentation');updatePresentation();
 const origin=new URL(old.origin,location.origin);
 if(origin.origin!==location.origin||!origin.pathname.startsWith(import.meta.env.BASE_URL))return;
 if(origin.pathname===location.pathname){history.replaceState(null,'',origin.pathname+origin.search+origin.hash);scrollTo({top:old.scroll||0,behavior:'instant'});}
 else {storage.set('rainloop-return',JSON.stringify({url:origin.pathname+origin.search+origin.hash,scroll:old.scroll||0}));navigateTo(origin);}
}
$('[data-presentation-exit]').addEventListener('click',exitPresentation);
window.addEventListener('keydown',event=>{
 if(!presentation||$('dialog[open]')||event.target.closest('input,textarea,select,[contenteditable=true],.table-scroll,[role=tablist]'))return;
 if(event.key==='Escape'){event.preventDefault();exitPresentation();}
});
const returning=parseState('rainloop-return');
if(returning&&returning.url===location.pathname+location.search+location.hash){
 history.scrollRestoration='manual';
 requestAnimationFrame(()=>requestAnimationFrame(()=>{scrollTo({top:returning.scroll,behavior:'instant'});storage.remove('rainloop-return');}));
}
updatePresentation();

// Comparison slider stays usable by keyboard and touch.
$$('[data-compare]').forEach(input=>{
 const comparison=input.closest('.design-comparison');
 input.addEventListener('input',()=>{
  const value=Number(input.value);
  $('.comparison-stage',comparison).style.setProperty('--compare',`${value}%`);
  input.setAttribute('aria-valuetext',`${value}% phác thảo, ${100-value}% concept`);
  $('[data-compare-output]',comparison).textContent=`${value}%`;
 });
});

// Hover effects supplement the native pointer; no interaction depends on them.
const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
const halo=$('.cursor-halo'),cursorControl=$('[data-cursor-control]');
let cursorEnabled=storage.get('rainloop-cursor')!=='false';
let cursorFrame=0,scrollFrame=0,pointerX=0,pointerY=0,pointerPresent=false;
function effectsEnabled(){return !reduced.matches&&!motionPaused;}
function updateCursorState(){
 const active=cursorEnabled&&finePointer.matches&&effectsEnabled();
 document.documentElement.classList.toggle('cursor-effects',active);
 cursorControl.hidden=!finePointer.matches;
 cursorControl.setAttribute('aria-pressed',String(active));
 cursorControl.textContent=active?'Con trỏ: bật':'Con trỏ: tắt';
 cursorControl.disabled=reduced.matches||motionPaused;
 if(!active){halo.classList.remove('visible');$$('.pointer-ripple').forEach(r=>r.remove());}
}
cursorControl.addEventListener('click',()=>{cursorEnabled=!cursorEnabled;storage.set('rainloop-cursor',String(cursorEnabled));updateCursorState();});
finePointer.addEventListener('change',updateCursorState);
document.addEventListener('rainloop:motion',()=>{
 updateCursorState();
 if(!effectsEnabled()){
  $$('[data-tilt],.button').forEach(el=>{el.style.removeProperty('--tilt-x');el.style.removeProperty('--tilt-y');el.style.removeProperty('--pointer-x');el.style.removeProperty('--pointer-y');});
  $('.hero-art')?.style.removeProperty('--parallax');
 }
});
updateCursorState();
document.addEventListener('pointermove',event=>{
 if(event.pointerType==='touch'||!document.documentElement.classList.contains('cursor-effects'))return;
 pointerX=event.clientX;pointerY=event.clientY;pointerPresent=true;
 const target=event.target.closest('a,button,summary,input[type=range]');
 const inspecting=!!event.target.closest('[data-gallery],[data-gallery-src],[data-card-lightbox]');
 halo.classList.toggle('interactive-target',!!target);
 $('span',halo).textContent=inspecting?'Xem':'';
 if(!cursorFrame)cursorFrame=requestAnimationFrame(()=>{
  cursorFrame=0;halo.style.translate=`${pointerX}px ${pointerY}px`;
  halo.classList.toggle('visible',pointerPresent&&!$('dialog[open]'));
 });
},{passive:true});
document.addEventListener('pointerout',event=>{if(!event.relatedTarget){pointerPresent=false;halo.classList.remove('visible');}});
window.addEventListener('blur',()=>halo.classList.remove('visible'));
document.addEventListener('pointerdown',event=>{
 if(event.pointerType==='touch'||!effectsEnabled()||!cursorEnabled||!finePointer.matches||$('dialog[open]'))return;
 const ripple=document.createElement('span');ripple.className='pointer-ripple';ripple.setAttribute('aria-hidden','true');
 ripple.style.left=`${event.clientX}px`;ripple.style.top=`${event.clientY}px`;document.body.append(ripple);
 ripple.addEventListener('animationend',()=>ripple.remove(),{once:true});setTimeout(()=>ripple.remove(),900);
});
$$('.drawing-card,.explore-card,.member,.research-card').forEach(el=>{
 el.dataset.tilt='';
 el.addEventListener('pointermove',event=>{
  if(!finePointer.matches||!effectsEnabled()||event.pointerType==='touch')return;
  const rect=el.getBoundingClientRect();
  el.style.setProperty('--tilt-x',`${((event.clientY-rect.top)/rect.height-.5)*-3}deg`);
  el.style.setProperty('--tilt-y',`${((event.clientX-rect.left)/rect.width-.5)*3}deg`);
 });
 el.addEventListener('pointerleave',()=>{el.style.setProperty('--tilt-x','0deg');el.style.setProperty('--tilt-y','0deg');});
});
$$('.button').forEach(el=>{
 el.addEventListener('pointermove',event=>{
  if(!finePointer.matches||!effectsEnabled()||event.pointerType==='touch')return;
  const r=el.getBoundingClientRect();
  el.style.setProperty('--pointer-x',`${(event.clientX-r.left-r.width/2)*.07}px`);
  el.style.setProperty('--pointer-y',`${(event.clientY-r.top-r.height/2)*.07}px`);
 });
 el.addEventListener('pointerleave',()=>{el.style.setProperty('--pointer-x','0px');el.style.setProperty('--pointer-y','0px');});
});
function paintScroll(){
 scrollFrame=0;
 const max=document.documentElement.scrollHeight-innerHeight;
 const progress=max>0?Math.min(1,Math.max(0,scrollY/max)):0;
 $('.scroll-progress').style.scale=`${progress} 1`;
 const hero=$('.hero-art');if(hero&&effectsEnabled())hero.style.setProperty('--parallax',`${Math.min(scrollY*.09,65)}px`);
}
window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(paintScroll);},{passive:true});
window.addEventListener('resize',paintScroll);paintScroll();
const timelineObserver=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('timeline-active',entry.isIntersecting)),{rootMargin:'-15% 0px -25% 0px',threshold:.1});
$$('.timeline-item').forEach(el=>timelineObserver.observe(el));
$$('.drawing-card,.explore-card,.member').forEach((el,i)=>el.style.setProperty('--reveal-delay',`${i%3*70}ms`));
initLivingMotion();
initBubbleNavigation();
