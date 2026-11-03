/**
 * Willix Flow V3 visual layer. No build-time packages or third-party CDNs.
 * Enhances the existing React/Vite landing without replacing its product logic.
 * Important: this is native WebGL 3D + Web Animations API, not Aceternity, Three.js or GSAP.
 */
(() => {
  'use strict';
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reduced = () => media.matches;

  function boot() {
    if (document.documentElement.classList.contains('v3-ready')) return;
    document.documentElement.classList.add('v3-ready');
    const hero = $('.hero');
    const globalSection = $('.global');
    const globeShell = $('.globe-shell');
    if (!hero || !globeShell) return;
    // Portfolio: the old SaaS intro is intentionally disabled.
    if(!hero.classList.contains('hero-portfolio')) setupMotion(hero, globalSection);
    setupGlobe(globeShell, globalSection);
    setupHoverAndNav();
    // Portfolio: avoid replaying the Flow-branded clip.
    setupMetadata();
  }

  function setupMotion(hero, globalSection) {
    const progress=document.createElement('div');
    progress.className='v3-scroll-progress';progress.setAttribute('aria-hidden','true');
    document.body.appendChild(progress);
    const sections=$$('main > section');
    const headlines=$$('.section-heading h2, .features-heading h2, .contact-inner h2, .hero h1, .intro-copy h3');
    const cards=$$('.bento-card, .related-grid article, .audience-cols article, .plan-main, .plan-aside');
    const seen=new WeakSet();
    const observe=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if (!entry.isIntersecting || seen.has(entry.target)) return;
        seen.add(entry.target);
        const el=entry.target;
        if (reduced()) return;
        if (headlines.includes(el)) {
          const isHero=!!el.closest('.hero');
          el.animate([
            {opacity:.16,filter:'blur(11px)',clipPath:'inset(0 0 90% 0)',transform:'translate3d(0,44px,0)'},
            {opacity:1,filter:'blur(0px)',clipPath:'inset(0 0 0% 0)',transform:'translate3d(0,0,0)'}
          ],{duration:isHero?1100:950,delay:isHero?350:90,easing:'cubic-bezier(.18,.7,.18,1)',fill:'both'});
        } else if (cards.includes(el)) {
          const siblings=$$('.bento-card, .related-grid article, .audience-cols article, .plan-main, .plan-aside',el.parentElement);
          const order=Math.max(0,siblings.indexOf(el));
          el.animate([
            {opacity:.3,transform:'translate3d(0,36px,0) scale(.965)',filter:'brightness(.72)'},
            {opacity:1,transform:'translate3d(0,0,0) scale(1)',filter:'brightness(1)'}
          ],{duration:780,delay:Math.min(order*85,350),easing:'cubic-bezier(.2,.72,.2,1)',fill:'both'});
        } else {
          el.classList.add('v3-visible');
        }
        observe.unobserve(el);
      });
    },{threshold:.14,rootMargin:'0px 0px -55px 0px'});
    [...headlines,...cards,...sections].forEach(el=>observe.observe(el));
    let ticking=false;
    function update() {
      ticking=false;
      const y=window.scrollY || 0;
      const doc=Math.max(document.documentElement.scrollHeight-window.innerHeight,1);
      progress.style.transform=`scaleX(${Math.max(0,Math.min(1,y/doc))})`;
      if (!reduced()) {
        const r=hero.getBoundingClientRect();
        const p=Math.min(1,Math.max(0,-r.top/Math.max(r.height,1)));
        hero.style.setProperty('--hero-scroll',p.toFixed(3));
        if(globalSection) {
          const g=globalSection.getBoundingClientRect();
          const gp=Math.min(1,Math.max(0,(window.innerHeight-g.top)/(window.innerHeight+g.height)));
          globalSection.style.setProperty('--globe-scroll',gp.toFixed(3));
        }
      }
    }
    window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}},{passive:true});
    window.addEventListener('resize',update,{passive:true});update();
  }

  function setupHoverAndNav(){
    const cards=$$('.bento-card, .related-grid article, .plan-main');
    if(!matchMedia('(pointer:fine)').matches || reduced()) return;
    cards.forEach(card=>{
      card.addEventListener('pointermove',e=>{
        const r=card.getBoundingClientRect();
        const px=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));
        const py=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height));
        card.style.setProperty('--mx',`${(px*100).toFixed(1)}%`);
        card.style.setProperty('--my',`${(py*100).toFixed(1)}%`);
        card.style.setProperty('--rx',`${((.5-py)*2.0).toFixed(1)}deg`);
        card.style.setProperty('--ry',`${((px-.5)*2.0).toFixed(1)}deg`);
      },{passive:true});
      card.addEventListener('pointerleave',()=>{card.style.removeProperty('--rx');card.style.removeProperty('--ry');},{passive:true});
    });
  }

  // Native WebGL sphere: genuine depth, perspective, vertex-buffer rotation and luminous arcs.
  // Deliberately abstract: the service does NOT claim worldwide coverage.
  function setupGlobe(shell, section) {
    const fallback=$('.world-canvas',shell);
    const canvas=document.createElement('canvas');
    canvas.className='willix-webgl';
    canvas.setAttribute('aria-label','Esfera tridimensional animada com pontos e conexões azuis representando o fluxo de contatos');
    canvas.setAttribute('role','img');
    const gl=canvas.getContext('webgl',{alpha:true,antialias:true,powerPreference:'low-power'});
    if (!gl) return;
    shell.insertBefore(canvas,fallback);
    shell.classList.add('webgl-live');
    const vertex=`attribute vec3 a_pos; attribute vec3 a_color; attribute float a_size;
      uniform float u_angle; uniform float u_tilt; uniform float u_aspect; uniform float u_pixel;
      varying vec3 v_color; varying float v_depth;
      void main() {
        float c=cos(u_angle), s=sin(u_angle);
        vec3 p=vec3(a_pos.x*c+a_pos.z*s,a_pos.y,-a_pos.x*s+a_pos.z*c);
        float t=cos(u_tilt), q=sin(u_tilt);
        p=vec3(p.x,p.y*t-p.z*q,p.y*q+p.z*t);
        float depth=3.3-p.z*.85;
        gl_Position=vec4(p.x*2.55/depth/u_aspect,p.y*2.55/depth,0.0,1.0);
        gl_PointSize=clamp(a_size*u_pixel*2.9/depth,1.0,9.0);
        v_color=a_color;
        v_depth=smoothstep(-1.1,.8,p.z);
      }`;
    const fragment=`precision mediump float;
      uniform float u_points;
      varying vec3 v_color; varying float v_depth;
      void main(){
        float a=1.0;
        if(u_points>0.5){vec2 xy=gl_PointCoord*2.0-1.0;float rr=dot(xy,xy);a=1.0-smoothstep(.03,1.0,rr);}
        a*=mix(.18,1.0,v_depth);
        gl_FragColor=vec4(v_color,a);
      }`;
    function shader(type,src){const sh=gl.createShader(type);gl.shaderSource(sh,src);gl.compileShader(sh);if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(sh));return sh;}
    let program;
    try {program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));}
    catch(e){console.warn('WebGL fallback:',e);canvas.remove();shell.classList.remove('webgl-live');return;}
    const apos=gl.getAttribLocation(program,'a_pos'), acol=gl.getAttribLocation(program,'a_color'), asize=gl.getAttribLocation(program,'a_size');
    const angleUni=gl.getUniformLocation(program,'u_angle'), tiltUni=gl.getUniformLocation(program,'u_tilt'),aspectUni=gl.getUniformLocation(program,'u_aspect'),pixelUni=gl.getUniformLocation(program,'u_pixel'),pointsUni=gl.getUniformLocation(program,'u_points');
    function makeBuffer(data){const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data),gl.STATIC_DRAW);return {buffer:buf,count:data.length/7};}
    const points=[];
    function push(arr,x,y,z,rr,gg,bb,size){arr.push(x,y,z,rr,gg,bb,size);}
    // Fibonacci sphere: uniform distribution over a real 3D unit sphere.
    const total=4300;
    for(let i=0;i<total;i++){
      const y=1-(i/(total-1))*2, rad=Math.sqrt(Math.max(0,1-y*y)), phi=i*Math.PI*(3-Math.sqrt(5));
      const x=Math.cos(phi)*rad,z=Math.sin(phi)*rad;
      const lum=(i%23===0)?1.0:(i%7===0?.63:.37);
      push(points,x,y,z,.05+.31*lum,.22+.45*lum,.48+.50*lum,i%19===0?4.0:2.0);
    }
    const pts=makeBuffer(points);
    const lines=[];
    function vec(lon,lat,r=1){const la=lat*Math.PI/180,lo=lon*Math.PI/180;return [r*Math.cos(la)*Math.sin(lo),r*Math.sin(la),r*Math.cos(la)*Math.cos(lo)];}
    function arc(from,to,index){let [a,b]=[vec(...from),vec(...to)];const segments=56;
      for(let i=0;i<segments;i++){
        const coords=[i/segments,(i+1)/segments].map(t=>{
          const v=a.map((n,j)=>n*(1-t)+b[j]*t),norm=Math.hypot(...v)||1;
          const radius=1.035+.23*Math.sin(t*Math.PI);
          return v.map(n=>n/norm*radius);
        });
        const strength=(index%3===0)?.92:.62;
        coords.forEach(v=>push(lines,...v,.11*strength,.49*strength,.99*strength,2));
      }
    }
    const routes=[
      [[-70,-25],[45,30]], [[-130,20],[55,-20]], [[-12,55],[160,-15]],
      [[120,15],[-60,35]], [[30,-40],[160,45]], [[-155,-15],[5,-15]],
      [[45,60],[-120,-20]], [[-160,10],[105,-35]], [[-30,-50],[70,15]]
    ]; routes.forEach((r,i)=>arc(r[0],r[1],i));
    for(let lat of [-55,0,55]) {for(let i=0;i<160;i++) {
      const from=vec(i/160*360,lat,1.012),to=vec((i+1)/160*360,lat,1.012);
      push(lines,...from,.06,.26,.56,1);push(lines,...to,.06,.26,.56,1);
    }}
    const path=makeBuffer(lines);
    function bind(buf){gl.bindBuffer(gl.ARRAY_BUFFER,buf.buffer);gl.vertexAttribPointer(apos,3,gl.FLOAT,false,28,0);gl.vertexAttribPointer(acol,3,gl.FLOAT,false,28,12);gl.vertexAttribPointer(asize,1,gl.FLOAT,false,28,24);}
    gl.useProgram(program);[apos,acol,asize].forEach(a=>gl.enableVertexAttribArray(a));
    gl.clearColor(0,0,0,0);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
    let width=1,height=1,ratio=1,visible=false, raf=0, previous=0,phase=.0,ended=false;
    let pointerX=0,pointerY=0,targetX=0,targetY=0;
    const finePointer=matchMedia('(pointer:fine)').matches && !reduced();
    if(finePointer){
      shell.addEventListener('pointermove',e=>{const r=shell.getBoundingClientRect();targetX=((e.clientX-r.left)/Math.max(1,r.width)-.5)*2;targetY=((e.clientY-r.top)/Math.max(1,r.height)-.5)*2;},{passive:true});
      shell.addEventListener('pointerleave',()=>{targetX=0;targetY=0;},{passive:true});
    }
    let journeyStage=0;
    window.addEventListener('willix-journey-stage',event=>{
      journeyStage=Number(event.detail?.index)||0;
      if(visible && !raf)raf=requestAnimationFrame(render);
    });
    function resize(){const rect=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,1.5);width=Math.max(1,Math.round(rect.width*dpr));height=Math.max(1,Math.round(rect.height*dpr));canvas.width=width;canvas.height=height;ratio=width/height;gl.viewport(0,0,width,height);}
    const ro=new ResizeObserver(resize);ro.observe(canvas);resize();
    const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible&&!raf)raf=requestAnimationFrame(render);},{threshold:0.01});io.observe(section||shell);
    function render(time){raf=0;if(ended||!visible||document.hidden)return;if(previous && time-previous<(matchMedia('(max-width: 780px)').matches?50:33)){raf=requestAnimationFrame(render);return;}previous=time;
      if(!reduced())phase+=.0031;
      pointerX+=(targetX-pointerX)*.07;pointerY+=(targetY-pointerY)*.07;
      const scroll=Number.parseFloat(section?.style.getPropertyValue('--globe-scroll'))||0;
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform1f(angleUni,phase+scroll*.22+journeyStage*.63+pointerX*.11);
      gl.uniform1f(tiltUni,-.27+scroll*.08+journeyStage*.075+pointerY*.075);
      gl.uniform1f(aspectUni,ratio);
      gl.uniform1f(pixelUni,Math.min(window.devicePixelRatio||1,1.5)*3.0);
      gl.uniform1f(pointsUni,0.0);bind(path);gl.drawArrays(gl.LINES,0,path.count);
      gl.uniform1f(pointsUni,1.0);bind(pts);gl.drawArrays(gl.POINTS,0,pts.count);
      if(!reduced())raf=requestAnimationFrame(render);
    }
    document.addEventListener('visibilitychange',()=>{if(!document.hidden&&visible&&!raf&&!ended)raf=requestAnimationFrame(render);});
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();ended=true;cancelAnimationFrame(raf);shell.classList.remove('webgl-live');});
    window.addEventListener('pagehide',()=>{ended=true;cancelAnimationFrame(raf);io.disconnect();ro.disconnect();},{once:true});
  }

  function setupMetadata(){
    const meta=document.querySelector('meta[name="description"]');
    if(meta) meta.setAttribute('content','Willix Tech — sites, sistemas web, design e automações para empresas. Conheça projetos e soluções digitais sob medida.');
    // Do not claim checkout, testimonials, subscribers, or capabilities not yet live.
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init,{once:true});else init();
  function init(){
    if($('.hero') && $('.globe-shell')){boot();return;}
    const ob=new MutationObserver(()=>{if($('.hero')&&$('.globe-shell')){ob.disconnect();boot();}});
    ob.observe(document.documentElement,{childList:true,subtree:true});
    window.setTimeout(()=>ob.disconnect(),10000);
  }
})();
