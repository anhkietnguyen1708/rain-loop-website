import { test, expect } from '@playwright/test';
const pages=['index','nghien-cuu','nhat-ky','thiet-ke','vat-lieu','doi-ngu'];

test('living process links open the correct blueprint and scroll effects replay with pause support',async({page})=>{
 await page.goto('index.html');
 await expect(page.locator('.loop-step')).toHaveCount(4);
 await expect(page.locator('.wetland-motion')).toBeVisible();
 await page.locator('.loop-step').first().click();
 await expect(page).toHaveURL(/thiet-ke.html#nap-thu$/);
 await expect(page.locator('#hotspot-title')).toHaveText('Nắp thu nước');
 await page.goto('nghien-cuu.html');
 const feature=page.locator('.research-feature');
 await feature.scrollIntoViewIfNeeded();await expect(feature).toHaveClass(/in-view/);
 await page.evaluate(()=>scrollTo({top:document.documentElement.scrollHeight,behavior:'instant'}));
 await expect(feature).not.toHaveClass(/in-view/);
 await feature.scrollIntoViewIfNeeded();await expect(feature).toHaveClass(/in-view/);
 await page.locator('[data-motion-control]').click();
 await expect(page.locator('html')).toHaveClass(/motion-paused/);
 expect(await page.locator('.ticker-track').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
 await page.goto('index.html');
 await expect(page.locator('.wetland-motion')).toBeHidden();
 expect(await page.locator('.hero-art>img').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
 await page.emulateMedia({reducedMotion:'reduce'});
 await expect(page.locator('[data-motion-control]')).toBeDisabled();
 await expect(page.locator('#loop-title')).toContainText('vòng tuần hoàn.');
});

test('chapter transition navigates, clears on arrival/back and respects reduced motion',async({page})=>{
 await page.goto('nghien-cuu.html');
 await page.locator('.next-section a').click();
 await expect(page.locator('html')).toHaveClass(/route-leaving/);
 await expect(page).toHaveURL(/nhat-ky.html$/);
 await expect(page.locator('html')).not.toHaveClass(/route-(arriving|revealing|leaving)/);
 await expect(page.locator('body')).not.toHaveAttribute('aria-busy','true');
 await page.goBack();await expect(page).toHaveURL(/nghien-cuu.html$/);
 await expect(page.locator('html')).not.toHaveClass(/route-(arriving|revealing|leaving)/);
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.locator('.next-section a').click();await expect(page).toHaveURL(/nhat-ky.html$/);
 await expect(page.locator('html')).not.toHaveClass(/route-(arriving|revealing|leaving)/);
 await expect(page.locator('.route-transition')).toBeHidden();
 const family=await page.locator('h1').evaluate(el=>getComputedStyle(el).fontFamily);
 expect(family).toContain('Unbounded');
});

test('rubric card uses product render and logo, four technical sections and nested sketch zoom',async({page})=>{
 await page.goto('nghien-cuu.html');
 const card=page.locator('#card-dat-ngap-nuoc');
 await expect(card.locator('.card-front .card-art img')).toHaveAttribute('src','assets/rainloop-render-3d.webp');
 await expect(card.locator('.card-brand img')).toHaveAttribute('src','assets/rainloop-logo.png');
 await expect(card.locator('.card-ecosystem')).toContainText('Hệ sinh thái đất ngập nước');
 const product=card.locator('.card-front [data-gallery=render]');await product.click();
 await expect(page.locator('#gallery-title')).toHaveText('Render tổng thể nhiều góc nhìn');
 await expect(page.locator('.gallery-download')).toHaveAttribute('href',/originals\/rainloop-render-3d.png$/);
 await page.keyboard.press('Escape');await expect(product).toBeFocused();
 await card.locator('[data-flip]').first().click();
 await expect(card.locator('.card-facts b')).toHaveText(['Nhận diện hệ sinh thái','Cấu trúc & Chức năng','Cơ chế hoạt động','Ứng dụng & Định vị']);
 await expect.poll(()=>card.locator('.card-macro').evaluate(i=>i.complete&&i.naturalWidth>0)).toBeTruthy();
 await card.locator('[data-research-detail]').click();
 await expect(page.locator('.technical-detail')).toHaveCount(4);
 await expect(page.locator('#detail-dialog .photo-attribution')).toContainText('Kaira Liggett');
 const macro=page.locator('.macro-preview');await macro.click();
 await expect(page.locator('#gallery-dialog')).toBeVisible();
 await expect(page.locator('.gallery-caption')).toContainText('Public Domain');
 await page.keyboard.press('Escape');await expect(macro).toBeFocused();
 await expect(page.locator('#detail-dialog')).toBeVisible();
 const sketch=page.getByRole('button',{name:'Phóng lớn sketch gốc ↗'});await sketch.click();
 await expect(page.locator('#gallery-title')).toHaveText('Sketch tay ban đầu');
 await page.getByRole('button',{name:'Phóng lớn',exact:true}).click();
 await expect(page.locator('#zoom-level')).toHaveText('150%');
 await page.keyboard.press('Escape');await expect(sketch).toBeFocused();
 await page.keyboard.press('Escape');await expect(card.locator('[data-research-detail]')).toBeFocused();
 await page.goto('nhat-ky.html');await expect(page.locator('.decision-card')).toHaveCount(4);
 await page.goto('doi-ngu.html');await expect(page.locator('.submission-grid article')).toHaveCount(5);
});

test('biomimicry grid preserves layout, flips accessibly and distinguishes capillary proposal',async({page})=>{
 await page.goto('nghien-cuu.html');
 await expect(page.locator('.research-card')).toHaveCount(2);
 await expect(page.locator('[data-card-count]')).toHaveText('2 / 2 thẻ');
 for(const card of await page.locator('.research-card').all())await expect(card.locator('.card-facts li')).toHaveCount(4);
 await page.getByRole('button',{name:'Lưới gọn',exact:true}).click();
 await expect(page.locator('.research-cards')).toHaveAttribute('data-layout','compact');
 await page.reload();await expect(page.getByRole('button',{name:'Lưới gọn',exact:true})).toHaveAttribute('aria-pressed','true');
 const capillary=page.locator('#card-mao-dan');
 await capillary.locator('[data-flip]').first().click();
 await expect(capillary).toHaveClass(/is-flipped/);
 expect(await capillary.locator('.card-front').evaluate(e=>e.inert)).toBeTruthy();
 expect(await capillary.locator('.card-back').evaluate(e=>e.inert)).toBeFalsy();
 await expect(capillary.locator('[data-research-detail]')).toBeFocused();
 await expect(capillary.locator('.card-implementation')).toHaveText('Chưa tích hợp vào blueprint');
 await capillary.locator('[data-research-detail]').click();
 await expect(page.locator('#detail-title')).toHaveText('Mao dẫn');
 await expect(page.locator('#detail-dialog a[href*=usgs]')).toBeVisible();
 await expect(page.locator('#detail-dialog a[href*=undefined]')).toHaveCount(0);
 await page.keyboard.press('Escape');await page.keyboard.press('Escape');
 await expect(capillary).not.toHaveClass(/is-flipped/);
 await expect(capillary.locator('[data-flip]').first()).toBeFocused();
 await page.getByRole('button',{name:'Đang cân nhắc',exact:true}).click();
 await expect(page.locator('[data-card-count]')).toHaveText('0 / 2 thẻ');
 await page.getByRole('button',{name:'Tất cả',exact:true}).click();
 await expect(page.locator('[data-card-count]')).toHaveText('2 / 2 thẻ');
});

test('card lightbox opens artwork, navigates, zooms, handles touch and returns focus',async({page})=>{
 await page.goto('nghien-cuu.html');
 const trigger=page.locator('#card-dat-ngap-nuoc .card-front [data-card-lightbox]');
 await trigger.click();
 await expect(page.locator('#gallery-title')).toHaveText('Đất ngập nước');
 await expect(page.locator('.gallery-caption')).toContainText('Minh họa AI');
 await expect(page.locator('.gallery-position')).toHaveText('1 / 2');
 await expect.poll(()=>page.locator('.gallery-viewport img').evaluate(i=>i.complete&&i.naturalWidth>0)).toBeTruthy();
 await expect(page.locator('.gallery-thumbnails button')).toHaveCount(2);
 await page.keyboard.press('ArrowRight');
 await expect(page.locator('#gallery-title')).toHaveText('Mao dẫn');
 await expect(page.locator('.gallery-download')).toHaveAttribute('href',/originals\/rainloop-card-capillary.png$/);
 await page.locator('[data-gallery-index="0"]').click();
 await expect(page.locator('#gallery-title')).toHaveText('Đất ngập nước');
 await expect(page.locator('[data-gallery-index="0"]')).toBeFocused();
 await page.keyboard.press('ArrowRight');
 await expect(page.locator('[data-gallery-index="1"]')).toBeFocused();
 await page.getByRole('button',{name:'Phóng lớn',exact:true}).click();
 await expect(page.locator('#zoom-level')).toHaveText('150%');
 await page.getByRole('button',{name:'Thu nhỏ',exact:true}).click();
 const viewport=page.locator('.gallery-viewport');
 await viewport.evaluate(el=>{
  el.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,pointerId:123,pointerType:'touch',clientX:220,clientY:220}));
  el.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,pointerId:123,pointerType:'touch',clientX:100,clientY:220}));
 });
 await expect(page.locator('#gallery-title')).toHaveText('Đất ngập nước');
 await page.keyboard.press('Escape');await expect(trigger).toBeFocused();
 await expect(page.locator('#gallery-dialog')).not.toBeVisible();
});

test('six pages reload, assets load, no horizontal overflow or script errors',async({page})=>{
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 const failures=[];page.on('response',response=>{if(response.status()>=400)failures.push(response.url());});
 for(const name of pages){
  await page.goto(`${name}.html`);await page.reload();
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang','vi');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
  const badImages=await page.locator('img').evaluateAll(images=>images.filter(i=>!i.closest('dialog')&&i.complete&&i.naturalWidth===0).length);
  expect(badImages).toBe(0);
 }
 expect(errors).toEqual([]);expect(failures).toEqual([]);
});

test('all internal anchor targets and local links exist in production output',async({page,request})=>{
 const links=new Set();
 for(const name of pages){
  await page.goto(`${name}.html`);
  for(const href of await page.locator('a[href]').evaluateAll(items=>items.map(a=>a.href)))links.add(href);
 }
 for(const href of links){
  const url=new URL(href);if(url.origin!=='http://127.0.0.1:4173')continue;
  const response=await request.get(url.pathname);expect(response.status(),href).toBe(200);
  if(url.hash){
   const text=await response.text();const id=decodeURIComponent(url.hash.slice(1));
   expect(text.includes(`id="${id}"`)||text.includes(`data-hotspot="${id}"`),href).toBeTruthy();
  }
 }
});

test('research filters, flip, detail dialog and hotspot navigation',async({page})=>{
 await page.goto('nghien-cuu.html');
 await page.getByRole('button',{name:'Đã loại',exact:true}).click();
 await expect(page.locator('.filter-empty')).toBeVisible();
 expect(await page.locator('.research-card').evaluateAll(cards=>cards.every(card=>card.hidden))).toBeTruthy();
 await page.getByRole('button',{name:'Được chọn',exact:true}).click();
 await page.getByRole('button',{name:'Lật thẻ',exact:true}).first().click();
 await expect(page.locator('.card-front').first()).toHaveAttribute('aria-hidden','true');
 await page.getByRole('button',{name:'Xem chi tiết'}).first().click();
 await expect(page.locator('#detail-dialog')).toBeVisible();
 await expect(page.locator('#detail-title')).toHaveText('Đất ngập nước');
 await page.keyboard.press('Escape');
 await expect(page.getByRole('button',{name:'Xem chi tiết'}).first()).toBeFocused();
 await page.getByRole('button',{name:'Xem chi tiết'}).first().click();
 await page.locator('#detail-dialog').getByRole('link',{name:'Xem trên bản vẽ'}).click();
 await expect(page.locator('#hotspot-title')).toHaveText('Lớp lọc');
 await expect(page.locator('#hotspot-detail')).toBeFocused();
 await page.getByRole('button',{name:'05: Van điều tiết'}).click();
 await expect(page.locator('#hotspot-title')).toHaveText('Van điều tiết');
 await expect(page).toHaveURL(/#van$/);
});

test('material tabs, timeline and test-plan disclosures work',async({page})=>{
 await page.goto('vat-lieu.html');
 await page.getByRole('tab',{name:'02 / Triển khai thực tế'}).click();
 await expect(page.locator('#panel-real')).toBeVisible();
 await expect(page.locator('#panel-model')).toBeHidden();
 await page.keyboard.press('ArrowLeft');
 await expect(page.locator('#tab-model')).toHaveAttribute('aria-selected','true');
 await page.locator('.test-card summary').first().click();
 await expect(page.locator('.test-body').first()).toBeVisible();
 await page.goto('nhat-ky.html');
 await page.locator('.timeline-item summary').nth(4).click();
 await expect(page.locator('.timeline-body').nth(4)).toBeVisible();
});

test('presentation crosses pages and restores original page and scroll position',async({page})=>{
 await page.goto('doi-ngu.html');
 await page.evaluate(()=>window.scrollTo({top:500,behavior:'instant'}));
 const originalY=await page.evaluate(()=>scrollY);
 // Use pointer coordinates for the sticky header so Playwright does not scroll it to its original layout position.
 if(await page.locator('.header-present').isVisible()){
  const box=await page.locator('.header-present').boundingBox();
  await page.mouse.click(box.x+box.width/2,box.y+box.height/2);
 }
 else if(await page.locator('.menu-toggle').isVisible()){
  const box=await page.locator('.menu-toggle').boundingBox();
  await page.mouse.click(box.x+box.width/2,box.y+box.height/2);
  await page.locator('#mobile-menu [data-start-presentation]').click();
 }else{
  // Tablet shows desktop navigation; use the visible presentation control on home.
  await page.locator('.header-present').evaluate(button=>button.click());
 }
 await expect(page).toHaveURL(/index.html#van-de$/);
 await expect(page.locator('.presentation-bar')).toBeVisible();
 await page.getByRole('button',{name:'Bước tiếp',exact:true}).click();
 await expect(page).toHaveURL(/nghien-cuu.html#nguyen-ly$/);
 await page.getByRole('button',{name:'Bước tiếp',exact:true}).click();
 await expect(page).toHaveURL(/nhat-ky.html#quyet-dinh$/);
 await expect(page.locator('#presentation-progress')).toContainText('3 / 6');
 await page.getByRole('button',{name:'Bước tiếp',exact:true}).click();
 await expect(page).toHaveURL(/thiet-ke.html#co-che$/);
 await page.getByRole('button',{name:'Bước tiếp',exact:true}).click();
 await expect(page).toHaveURL(/vat-lieu.html#kiem-chung$/);
 await page.getByRole('button',{name:'Bước tiếp',exact:true}).click();
 await expect(page).toHaveURL(/doi-ngu.html$/);
 await expect(page.getByRole('button',{name:'Bước tiếp',exact:true})).toBeDisabled();
 await page.getByRole('button',{name:'Thoát trình diễn'}).click();
 await expect(page.locator('.presentation-bar')).toBeHidden();
 await expect.poll(()=>page.evaluate(()=>scrollY)).toBeCloseTo(originalY,0);
});

test('mobile menu keyboard focus, close behavior, and persistent header',async({page})=>{
 test.skip(page.viewportSize().width>800,'Mobile-only navigation');
 await page.goto('index.html');
 const menu=page.getByRole('button',{name:'Mở menu'});
 await menu.click();await expect(page.locator('#mobile-menu')).toBeVisible();
 for(let i=0;i<9;i++)await page.keyboard.press('Tab');
 expect(await page.evaluate(()=>document.activeElement.closest('dialog')?.id)).toBe('mobile-menu');
 await page.keyboard.press('Escape');await expect(menu).toBeFocused();
 await menu.click();await page.locator('#mobile-menu').getByRole('link',{name:'Đội ngũ'}).click();
 await expect(page).toHaveURL(/doi-ngu.html$/);
 await page.evaluate(()=>window.scrollTo({top:document.body.scrollHeight,behavior:'instant'}));
 await expect(page.locator('.site-header')).toBeInViewport();
 await menu.click();await page.getByRole('button',{name:'Đóng menu'}).click();
 await expect(page.locator('#mobile-menu')).toBeHidden();
});

test('reduced motion, pause control, and static media fallback',async({page})=>{
 await page.goto('index.html');
 await page.locator('.motion-toggle').click();
 await expect(page.locator('html')).toHaveClass(/motion-paused/);
 await page.locator('.motion-toggle').click();
 await expect(page.locator('html')).not.toHaveClass(/motion-paused/);
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.reload();
 await expect(page.locator('.motion-toggle')).toBeDisabled();
 expect(await page.locator('.hero-art>img').evaluate(element=>getComputedStyle(element).animationName)).toBe('none');
 await expect(page.locator('.hero-art img')).toBeVisible();
 expect(await page.locator('.hero-art img').evaluate(img=>img.naturalWidth)).toBeGreaterThan(0);
 await expect(page.locator('video')).toHaveCount(0); // No real video has been supplied yet.
});

test('image viewer zoom, pan, next image, Escape and focus return with explicit fixture',async({page})=>{
 await page.goto('thiet-ke.html');
 // Separate fixture exercises the generic viewer independently of the supplied drawings.
 await page.evaluate(()=>{
  const holder=document.createElement('div');holder.id='fixture-controls';
  for(let i=0;i<2;i++){
   const button=document.createElement('button');button.textContent=`Mở ảnh kiểm thử ${i}`;
   button.dataset.gallerySrc='assets/wetland-illustration.svg';button.dataset.galleryTitle=`Fixture ${i}`;holder.append(button);
  }
  document.querySelector('main').prepend(holder);
 });
 const trigger=page.locator('#fixture-controls button').first();await trigger.click();
 await expect(page.locator('#gallery-dialog')).toBeVisible();
 await expect.poll(()=>page.locator('.gallery-viewport img').evaluate(i=>i.naturalWidth)).toBeGreaterThan(0);
 await page.getByRole('button',{name:'Phóng lớn',exact:true}).click();
 await expect(page.locator('#zoom-level')).toHaveText('150%');
 await page.locator('.gallery-viewport').focus();await page.keyboard.press('ArrowRight');
 expect(await page.locator('.gallery-viewport img').evaluate(i=>i.style.transform)).not.toBe('translate(0px,0px) scale(1.5)');
 await page.getByRole('button',{name:'Ảnh tiếp',exact:true}).click();
 await expect(page.locator('#gallery-title')).toHaveText('Fixture 1');
 await expect(page.locator('#zoom-level')).toHaveText('100%');
 await page.keyboard.press('Escape');await expect(trigger).toBeFocused();
});

test('404 and style tile are reachable',async({page})=>{
 await page.goto('404.html');await expect(page.getByRole('link',{name:'Về Trang chủ'})).toBeVisible();
 await page.goto('nhan-dien.html');await expect(page.locator('.palette>div')).toHaveCount(6);
});

test('supplied drawings, original downloads, comparison and local Vietnamese fonts',async({page})=>{
 await page.goto('thiet-ke.html');
 await page.evaluate(()=>document.fonts.ready);
 const typography=await page.locator('h1 em').evaluate(el=>({family:getComputedStyle(el).fontFamily,style:getComputedStyle(el).fontStyle,loaded:document.fonts.check('italic 500 24px "Fraunces"','Thiết kế vùng rễ')}));
 expect(typography.family).toContain('Fraunces');expect(typography.style).toBe('italic');expect(typography.loaded).toBeTruthy();
 await expect(page.locator('.drawing-preview')).toHaveCount(5);
 await page.locator('[data-compare]').fill('75');
 await expect(page.locator('[data-compare-output]')).toHaveText('75%');
 expect(await page.locator('.comparison-stage').evaluate(el=>el.style.getPropertyValue('--compare'))).toBe('75%');
 await page.locator('[data-gallery="blueprint"]').click();
 await expect(page.locator('#gallery-title')).toHaveText('Blueprint & mặt cắt kỹ thuật');
 await expect(page.locator('.gallery-download')).toHaveAttribute('href',/originals\/rainloop-blueprint.png$/);
 await expect.poll(()=>page.locator('.gallery-viewport img').evaluate(i=>i.complete&&i.naturalWidth>0)).toBeTruthy();
 await page.keyboard.press('Escape');
 await expect(page.locator('[data-gallery="blueprint"]')).toBeFocused();
 await page.goto('nhat-ky.html');
 await expect(page.locator('.journal-evidence-image')).toHaveCount(2);
 await page.goto('vat-lieu.html');await expect(page.locator('.bom-image')).toBeVisible();
});

test('pointer effects and page-wide pause respect input and reduced motion',async({page})=>{
 await page.goto('thiet-ke.html');
 const fine=await page.evaluate(()=>matchMedia('(hover: hover) and (pointer: fine)').matches);
 await expect(page.locator('[data-cursor-control]')).toBeVisible({visible:fine});
 if(fine){
  await page.mouse.move(160,160);await expect(page.locator('.cursor-halo')).toHaveClass(/visible/);
  await page.locator('[data-cursor-control]').click();await expect(page.locator('html')).not.toHaveClass(/cursor-effects/);
  await page.locator('[data-cursor-control]').click();await expect(page.locator('html')).toHaveClass(/cursor-effects/);
 }
 await page.locator('[data-motion-control]').click();await expect(page.locator('html')).toHaveClass(/motion-paused/);
 await page.emulateMedia({reducedMotion:'reduce'});await expect(page.locator('[data-motion-control]')).toBeDisabled();
 expect(await page.locator('.flow-path').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
 await expect(page.locator('html')).not.toHaveClass(/cursor-effects/);
});
