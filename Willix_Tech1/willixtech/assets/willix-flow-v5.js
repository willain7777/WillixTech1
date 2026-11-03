/**
 * Willix Flow V5 — cinematic visual improvements, progressive enhancement.
 * Real working features: recognizable hero flow icons, original Willix asset,
 * illuminated circuit energy, scroll-synchronized section illumination.
 * This layer uses browser-native rendering/animations, not GSAP or Three.js.
 * Does not simulate checkout, subscriptions, or analytics.
 */
(() => {
  'use strict';
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const paths = {
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5.4"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.6" cy="6.6" r="1" fill="currentColor" stroke="none"/>',
    whatsapp: '<path d="M20.5 11.55a8.5 8.5 0 0 1-12.72 7.4L3 20.3l1.45-4.63a8.5 8.5 0 1 1 16.05-4.12Z"/><path d="M8.35 7.95c-.48.26-.83 1.06-.75 1.7.24 1.94 3.31 5.15 5.68 5.94.65.2 1.51.11 1.91-.35l.85-1.16-2.07-1.01-.9 1.03c-1.6-.67-2.82-1.86-3.6-3.44l.99-.87-1.13-2.12-.98.28Z"/>',
    questions: '<circle cx="12" cy="12" r="9"/><path d="M9.45 9a2.7 2.7 0 0 1 5.2.9c0 1.6-2.65 2.25-2.65 3.65"/><circle cx="12" cy="17.35" r=".8" fill="currentColor" stroke="none"/>',
    questionnaire: '<rect x="4" y="2.8" width="16" height="18.4" rx="3"/><path d="M8 7.5h8M8 12h8m-8 4.5h5"/><path d="M16 16l1.4 1.4L20 14.8"/>',
    clinic: '<path d="M4 20V7.7c0-.7.5-1.2 1.2-1.2h13.6c.7 0 1.2.5 1.2 1.2V20"/><path d="M8 20v-5.5h8V20M12 3v7m-3.5-3.5h7"/><path d="M2 20h20"/>',
    insight: '<path d="M4 19.5h16M6 16v-3.5M11 16V8m5 8V5"/><path d="m5 9 5-4 4 2 5-4"/>',
    link: '<path d="M9.1 14.8a4.5 4.5 0 0 0 6.6-.1l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.8 1.8"/><path d="M14.9 9.2a4.5 4.5 0 0 0-6.6.1l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.8-1.8"/>',
  };
  const SVG=(name,size=25)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.link}</svg>`;
  const nodes = [
    ['.c-node.n1','instagram','Presença digital'],
    ['.c-node.n2','clinic','Sua empresa'],
    ['.c-node.n3','questions','Estratégia'],
    ['.c-node.n7','questionnaire','Planejamento'],
    ['.c-node.n4','whatsapp','Conexão'],
    ['.c-node.n5','insight','Evolução'],
    ['.c-node.n6','link','Automação'],
  ];
  function setupBrand(){
    const symbol='./assets/logo-willix-symbol.png';
    $$('.nav-official img,.core-logo-plate img,.brand-logo img,.intro-brand-plate img').forEach(img=>{
      img.setAttribute('src',symbol);
      img.removeAttribute('width');img.removeAttribute('height');
      img.style.objectFit='contain';
    });
    const core=$('.core-chip');
    if(core){
      core.classList.add('flow-core-v5');
      core.setAttribute('data-label','HUB DIGITAL');
      core.setAttribute('aria-label','Willix Tech: tecnologia e soluções digitais');
      let plate=$('.core-logo-plate',core);
      if(!plate){
        core.innerHTML='<span class="core-logo-plate"><img alt="" src="'+symbol+'"></span><span class="core-product-name"><span>WILLIX</span><strong>TECH</strong></span>';
      }
      const label=$('.core-product-name',core); if(label && !label.querySelector('strong')) label.innerHTML='<span>WILLIX</span><strong>TECH</strong>';
      const ring=document.createElement('span');ring.className='flow-core-ring';ring.setAttribute('aria-hidden','true');
      core.prepend(ring);
    }
    $('.nav-brand')?.classList.add('brand-v5');
  }
  function setupHero(){
    const scene=$('.circuit-scene');if(!scene)return;
    scene.classList.add('circuit-v5');
    nodes.forEach(([selector,name,label])=>{
      const node=$(selector,scene);if(!node)return;
      node.innerHTML=SVG(name,25);
      node.classList.add('c-node-v5');
      node.dataset.flowLabel=label;
      node.style.setProperty('--icon-order',String(nodes.findIndex(x=>x[0]===selector)));
    });
    const svg=$('.circuit-svg',scene);
    if(svg){
      // Additional path highlights represent actual energy flowing through the diagram.
      $$('g',svg).forEach((g,i)=>{
        const p=$('path',g);if(!p)return;
        const accent=p.cloneNode(false);
        accent.setAttribute('class','v5-wire-accent');
        accent.setAttribute('fill','none');accent.setAttribute('stroke','#2794ff');
        accent.setAttribute('stroke-width',i%2?'.85':'1.3');
        accent.setAttribute('opacity',i%2?'0.68':'0.9');
        g.appendChild(accent);
      });
    }
    const beam=document.createElement('div');beam.className='flow-hero-halo';beam.setAttribute('aria-hidden','true');scene.appendChild(beam);
    const caption=document.createElement('div');caption.className='flow-hero-caption';caption.setAttribute('aria-hidden','true');
    caption.innerHTML='<span>IDEIA + ESTRATÉGIA</span><i></i><span>DESIGN + CÓDIGO</span><i></i><span>RESULTADOS</span>';
    scene.appendChild(caption);
    const cta=$('.hero-content .cta-pair'); if(cta)cta.classList.add('cta-pair-v5');
    $('.hero')?.classList.add('hero-v5');
  }
  function setupJourney(){
    const journey=$('.journey-section-v4');if(!journey)return;
    journey.classList.add('journey-v5');
    const steps=$$('.journey-step',journey);
    const iconNames=['questions','questionnaire','clinic','insight'];
    steps.forEach((step,i)=>{
      const slot=$('.journey-step-icon',step);if(slot)slot.innerHTML=SVG(iconNames[i],20);
    });
    $$('.journey-orbit-node',journey).forEach((node,i)=>{
      const oldSvg=$('svg',node);if(oldSvg)oldSvg.outerHTML=SVG(iconNames[i],19);
    });
  }
  function setupSeams(){
    const sections=$$('main > section');
    sections.forEach((section,i)=>{
      if(i===0)return;
      section.classList.add('flow-seam-section');
      if(section.classList.contains('intro')||section.classList.contains('features')||section.classList.contains('experience')||section.classList.contains('plans')){
        const seam=document.createElement('div');seam.className='flow-section-seam';seam.setAttribute('aria-hidden','true');
        section.prepend(seam);
      }
    });
    if(reduceMotion.matches)return;
    let frame=0;
    const update=()=>{
      frame=0;
      const vh=window.innerHeight;
      sections.forEach(section=>{
        const rect=section.getBoundingClientRect();
        if(rect.top>vh*1.1||rect.bottom<-.2*vh)return;
        const t=Math.max(0,Math.min(1,(vh-rect.top)/(vh*.94)));
        section.style.setProperty('--flow-section-enter',t.toFixed(3));
        section.style.setProperty('--flow-light-offset',`${Math.round((t-.5)*32)}px`);
      });
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule,{passive:true});
    update();
  }
  function setupFAQ(){
    $$('.faq-list details').forEach(d=>{
      d.addEventListener('toggle',()=>d.classList.toggle('flow-faq-active',d.open));
    });
  }
  function boot(){
    if(document.documentElement.classList.contains('willix-v5-ready'))return;
    if(!$('.hero')||!$('.journey-section-v4'))return;
    document.documentElement.classList.add('willix-v5-ready');
    setupBrand();setupHero();setupJourney();setupSeams();setupFAQ();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
  function start(){
    if($('.hero')&&$('.journey-section-v4')){boot();return;}
    const observer=new MutationObserver(()=>{if($('.hero')&&$('.journey-section-v4')){observer.disconnect();boot();}});
    observer.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(()=>observer.disconnect(),15000);
  }
})();
