/**
 * Willix Flow V4 — Correção de marca, hierarquia e jornada interativa.
 * Progressive enhancement para o protótipo React/Vite atual. Nenhum dado real
 * é coletado ou enviado; o fluxo de quatro etapas é uma DEMONSTRAÇÃO.
 * Não substitui autenticação, SaaS, métricas ou checkout.
 */
(() => {
  'use strict';
  const $ = (selector, parent=document) => parent.querySelector(selector);
  const $$ = (selector, parent=document) => [...parent.querySelectorAll(selector)];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const ico = (name,size=20) => {
    const paths = {
      instagram: '<rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.8" cy="6.3" r="1" fill="currentColor" stroke="none"/>',
      link: '<path d="M10 13.5a5 5 0 0 0 7 .1l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 10.5a5 5 0 0 0-7-.1l-2 2a5 5 0 0 0 7 7l1.2-1.2"/>',
      layout: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 9v12"/>',
      sparkles: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 16l.75 2.25L22 19l-2.25.75L19 22l-.75-2.25L16 19l2.25-.75L19 16z"/>',
      list: '<path d="M9 6h12M9 12h12M9 18h12"/><path d="m3 6 1 1 2-2M3 12l1 1 2-2M3 18l1 1 2-2"/>',
      message: '<path d="M20 11.5a8 8 0 0 1-8 8 8.6 8.6 0 0 1-3.8-.9L3 20l1.4-4.6A8 8 0 1 1 20 11.5z"/><path d="M8 12h8M8 9h5"/>',
      chart: '<path d="M4 20h16M6 16v-5M12 16V6M18 16v-8"/>',
      arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
      check: '<path d="m4 12 5 5L20 6"/>',
      layers: '<path d="m12 3 9 5-9 5-9-5 9-5zm-9 9 9 5 9-5m-18 5 9 5 9-5"/>'
    };
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.sparkles}</svg>`;
  };

  const STAGES = [
    {
      title:'Entendemos seu negócio',short:'Diagnóstico',icon:'message',
      detail:'Começamos com uma conversa sobre sua empresa, público e o resultado que você espera alcançar.',
      example:'Sua ideia → Objetivo claro',label:'Descoberta',
      preview:'Definimos o desafio, o público e os pontos de melhoria antes de criar.'
    },
    {
      title:'Desenhamos a experiência',short:'Estratégia e design',icon:'layout',
      detail:'Organizamos a estrutura, os conteúdos e a navegação, com foco no que o seu cliente realmente precisa.',
      example:'Estratégia → Protótipo',label:'Planejamento',
      preview:'Apresentamos a proposta visual e alinhamos as decisões importantes.'
    },
    {
      title:'Transformamos em tecnologia',short:'Desenvolvimento',icon:'layers',
      detail:'Implementamos a solução com atenção a desempenho, experiência mobile e detalhes que fazem diferença.',
      example:'Protótipo → Projeto funcional',label:'Construção',
      preview:'Uma experiência consistente em celular, tablet e computador.'
    },
    {
      title:'Publicamos e evoluímos',short:'Entrega e evolução',icon:'check',
      detail:'Após os testes e ajustes combinados, orientamos a publicação e definimos próximos passos quando necessário.',
      example:'Testes → Publicação',label:'Entrega',
      preview:'Seu novo canal digital fica pronto para ser apresentado ao público.'
    }
  ];

  function enhanceBrand(){
    const navbar=$('.nav-brand');
    if(navbar){
      navbar.setAttribute('aria-label','Willix Tech — início');
      const original=$('img',navbar);
      if(original){original.src='./assets/logo-willix-oficial.png';original.alt='Willix — logo oficial';}
      const flow=$('.nav-word b',navbar);
      if(flow)flow.textContent='TECH';
    }
    // A logomarca completa original é usada também no nó central, nunca uma
    // nova marca desenhada por CSS ou símbolo com legenda substituindo a arte.
    const core=$('.core-chip');
    if(core){
      core.classList.add('core-chip-official');
      core.innerHTML='<span class="core-logo-plate"><img src="./assets/logo-willix-oficial.png" alt="" /></span><span class="core-product-name">TECH</span>';
    }
  }

  function enhanceCircuits(){
    const scene=$('.circuit-scene');
    if(!scene)return;
    scene.classList.add('circuit-v4');
    const svg=$('.circuit-svg',scene);
    if(!svg)return;
    const allPaths=$$('g > path:first-child',svg);
    allPaths.forEach((path,index)=>{
      const d=path.getAttribute('d');
      path.setAttribute('stroke','#2070df');
      path.setAttribute('stroke-width','2');
      path.setAttribute('opacity',index%2===0?'0.78':'0.55');
      const glow=document.createElementNS(SVG_NS,'path');
      glow.setAttribute('d',d);glow.setAttribute('fill','none');
      glow.setAttribute('stroke','#147dff');glow.setAttribute('stroke-width','5.5');
      glow.setAttribute('opacity','0.28');glow.setAttribute('class','circuit-soft-glow');
      path.parentElement.insertBefore(glow,path);
      if(!reduced.matches && index < 8){
        const particle=document.createElementNS(SVG_NS,'circle');
        particle.setAttribute('r',index%3===0?'3.7':'2.6');
        particle.setAttribute('fill','#bceaff');
        particle.setAttribute('class','circuit-energy-dot');
        const move=document.createElementNS(SVG_NS,'animateMotion');
        move.setAttribute('dur',`${(5.2+index*.27).toFixed(2)}s`);
        move.setAttribute('begin',`${(-index*.8).toFixed(2)}s`);
        move.setAttribute('repeatCount','indefinite');
        move.setAttribute('path',d);
        particle.appendChild(move);
        svg.appendChild(particle);
      }
    });
    const iconNames=['layout','layers','sparkles','message','chart','link','list'];
    $$('.c-node:not(.core-chip)',scene).forEach((node,i)=>{
      node.innerHTML=ico(iconNames[i]||'sparkles',22);
      node.classList.add('c-node-v4');
    });
  }

  function enhanceBento(){
    const tile=$('.bento-squares');
    if(tile){
      const title=$('h3',tile), paragraph=$('p',tile);
      if(title)title.classList.add('bento-text-safe');
      if(paragraph)paragraph.classList.add('bento-text-safe');
      tile.classList.add('bento-squares-v4');
      $('.tile-board',tile)?.setAttribute('aria-hidden','true');
    }
  }

  function createJourney(){
    const section=$('.global');
    const shell=$('.globe-shell',section);
    const heading=$('.section-heading',section);
    if(!section||!shell||!heading)return;
    section.id='processo';
    section.classList.add('journey-section-v4');
    const h2=$('h2',heading);
    if(h2)h2.innerHTML='Da primeira conversa à entrega.<br/><span>Um processo que faz sentido.</span>';
    const description=$('p',heading);
    if(description)description.textContent='Explore as quatro etapas do nosso processo e entenda como uma ideia vira solução digital.';
    const layout=document.createElement('div');
    layout.className='journey-layout';
    layout.innerHTML=`
      <div class="journey-details">
        <div class="journey-eyebrow"><span class="journey-live"></span> COMO TRABALHAMOS • 4 ETAPAS</div>
        <div class="journey-steps" role="group" aria-label="Etapas do desenvolvimento">
          ${STAGES.map((stage,i)=>`<button type="button" class="journey-step${i===0?' is-active':''}" data-journey-stage="${i}" aria-pressed="${i===0}">
            <span class="journey-step-icon">${ico(stage.icon,20)}</span>
            <span class="journey-step-copy"><small>ETAPA 0${i+1}</small><strong>${stage.short}</strong></span>
            <span class="journey-step-indicator">${ico('arrow',17)}</span>
          </button>`).join('')}
        </div>
        <div class="journey-explanation" aria-live="polite">
          <div class="journey-explanation-number" id="journey-stage-count">01 / 04 — DESCOBERTA</div>
          <h3 id="journey-stage-title"></h3>
          <p id="journey-stage-text"></p>
          <div class="journey-example">${ico('check',15)}<span id="journey-stage-example"></span></div><div class="journey-proof"><img src="./assets/projects/orman_fit/01_hero.webp" alt="Captura de um projeto da Willix Tech" id="journey-proof-image" loading="lazy"><div><small>EXEMPLO DO PORTFÓLIO</small><strong id="journey-proof-title">Orman Fit</strong></div></div>
          <div class="journey-actions"><button class="journey-next" type="button">Próxima etapa ${ico('arrow',17)}</button><a href="#projetos" class="journey-demo-link">Explorar os projetos ${ico('arrow',15)}</a></div>
        </div>
      </div>
      <div class="journey-visual">
        <div class="journey-visual-head"><span class="journey-visual-kicker">VISUALIZAÇÃO INTERATIVA</span><span class="journey-visual-dots"><i></i><i></i><i></i><i></i></span></div>
        <div class="journey-orbit-frame">
          <span class="journey-orbit-ring" aria-hidden="true"></span>
          ${STAGES.map((stage,i)=>`<button type="button" class="journey-orbit-node journey-orbit-node-${i}" data-orbit-stage="${i}" aria-label="Selecionar etapa ${i+1}: ${stage.short}" aria-pressed="false"><span>0${i+1}</span>${ico(stage.icon,17)}</button>`).join('')}
        </div>
        <div class="journey-visual-bottom">
          <span class="journey-insight-icon"></span>
          <span><small id="journey-active-label"></small><strong id="journey-active-preview"></strong></span>
        </div>
      </div>`;
    heading.insertAdjacentElement('afterend',layout);
    $('.journey-orbit-frame',layout).appendChild(shell);
    $$('.globe-label',shell).forEach(e=>e.remove());
    const foot=$('.global-bottom',section);
    if(foot)foot.remove();
    let active=0;
    const buttons=$$('.journey-step',layout),orbits=$$('.journey-orbit-node',layout),dots=$$('.journey-visual-dots i',layout);
    function setStage(i,focus=false){
      active=(i+STAGES.length)%STAGES.length;
      const stage=STAGES[active];
      const proofItems=[['./assets/projects/orman_safe/03_sobre.webp','Diagnóstico do negócio'],['./assets/projects/clinica_estetica_template/01_hero.webp','Design e protótipo'],['./assets/projects/orman_fit/04_planos.webp','Páginas e funcionalidades'],['./assets/projects/orman_fit/01_hero.webp','Site pronto para demonstrar']];
      const proofImage=$('#journey-proof-image',layout);if(proofImage)proofImage.src=proofItems[active][0];
      const proofTitle=$('#journey-proof-title',layout);if(proofTitle)proofTitle.textContent=proofItems[active][1];
      buttons.forEach((b,j)=>{
        b.classList.toggle('is-active',j===active);
        b.setAttribute('aria-pressed',String(j===active));
      });
      dots.forEach((d,j)=>d.classList.toggle('active',j===active));
      orbits.forEach((b,j)=>{b.classList.toggle('is-active',j===active);b.setAttribute('aria-pressed',String(j===active));});
      $('#journey-stage-count',layout).textContent=`0${active+1} / 04 — ${stage.label.toUpperCase()}`;
      $('#journey-stage-title',layout).textContent=stage.title;
      $('#journey-stage-text',layout).textContent=stage.detail;
      $('#journey-stage-example',layout).textContent=stage.example;
      $('#journey-active-label',layout).textContent=stage.label.toUpperCase();
      $('#journey-active-preview',layout).textContent=stage.preview;
      $('.journey-insight-icon',layout).innerHTML=ico(stage.icon,24);
      section.dataset.journeyStep=String(active);
      // V3 WebGL layer can use this event to shift rotation/illumination per step.
      window.dispatchEvent(new CustomEvent('willix-journey-stage',{detail:{index:active}}));
      if(focus)buttons[active].focus();
    }
    buttons.forEach((button,i)=>{
      button.addEventListener('click',()=>setStage(i));
      button.addEventListener('keydown',e=>{
        if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();setStage(i+1,true);}
        if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();setStage(i-1,true);}
      });
    });
    orbits.forEach((button,i)=>button.addEventListener('click',()=>setStage(i)));
    $('.journey-next',layout).addEventListener('click',()=>setStage(active+1));
    setStage(0);
  }

  function boot(){
    if(document.documentElement.classList.contains('willix-v4-ready'))return;
    if(!$('.hero')||!$('.global')||!$('.bento-squares'))return;
    document.documentElement.classList.add('willix-v4-ready');
    enhanceBrand();enhanceCircuits();enhanceBento();createJourney();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
  function init(){if($('.hero')&&$('.global')){boot();return;}
    const ob=new MutationObserver(()=>{if($('.hero')&&$('.global')){ob.disconnect();boot();}});
    ob.observe(document.documentElement,{childList:true,subtree:true});
    window.setTimeout(()=>ob.disconnect(),15000);
  }
})();
