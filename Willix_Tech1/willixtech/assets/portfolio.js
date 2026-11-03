/**
 * Willix Tech — portfolio comercial (adaptação visual da Willix Flow V5).
 * Site estático; dados de demonstrações rotulados; nenhum backend ou número de contato inventado.
 * Configure WHATSAPP_NUMBER abaixo apenas com os dígitos, ex.: 55 + DDD + número.
 */
const WHATSAPP_NUMBER = '5511967361601'; // Confirmado no portfólio de referência fornecido pelo proprietário
const SITE_EMAIL = 'williannunescontato7@gmail.com';
const PROJECTS = [
  {name:'Orman Fit',type:'Site institucional',status:'Prévia do projeto',theme:'fit',number:'01',tag:'ACADEMIA / WEBSITE',description:'Site para duas unidades, com planos, aulas, modalidades e contato orientado à matrícula.',folder:'orman_fit',count:10,link:'https://ormanfit.netlify.app/',action:'Abrir site'},
  {name:'Orman Safe',type:'Website corporativo B2B',status:'Projeto em desenvolvimento',theme:'safe',number:'02',tag:'ENGENHARIA / WEBSITE',description:'Apresentação dos sistemas de proteção coletiva, soluções técnicas e aplicações em obras.',folder:'orman_safe',count:9,link:'',action:'Ver imagens'},
  {name:'FerrazOdonto',type:'Website odontológico',status:'Protótipo demonstrativo',theme:'odonto',number:'03',tag:'ODONTOLOGIA / WEBSITE',description:'Experiência profissional para apresentar tratamentos e facilitar o primeiro contato.',folder:'ferrazodonto',count:6,link:'https://ferrazodontotest.netlify.app/',action:'Abrir protótipo'},
  {name:'Clínica Estética',type:'Conceito de site',status:'Template demonstrativo',theme:'estetica',number:'04',tag:'ESTÉTICA / CONCEITO',description:'Conceito de site para clínicas, com apresentação dos serviços e jornada de atendimento.',folder:'clinica_estetica_template',count:6,link:'',action:'Ver imagens'},
  {name:'Willix Flow',type:'Landing page de produto',status:'Protótipo do produto',theme:'flow',number:'05',tag:'PRODUTO / LANDING PAGE',description:'Landing page com animações e experiência visual tecnológica de um produto em construção.',folder:'',count:1,link:'',action:'Ver captura'},
  {name:'Santucci Concept Hair',type:'Site para salão',status:'Protótipo demonstrativo',theme:'santucci',number:'06',tag:'BELEZA / PROTÓTIPO',description:'Protótipo criado para apresentar serviços e organizar o interesse de clientes vindos do Instagram.',folder:'',count:0,link:'https://santucciprototipo.vercel.app',action:'Abrir protótipo'}
];
const getShots=p=>p.folder?(importMetaShots[p.folder]||[]):(p.theme==='flow'?['./assets/projects/willix-flow.webp']:[]);
const importMetaShots={
  orman_fit:['01_hero.webp','02_diferenciais.webp','03_matricula_unidades.webp','04_planos.webp','05_modalidades.webp','06_assistente_virtual.webp','07_chat_assistente.webp','08_estrutura.webp','09_grade_aulas.webp','10_avaliacoes_google.webp'].map(f=>'./assets/projects/orman_fit/'+f),
  orman_safe:['01_hero.webp','02_parceiros.webp','03_sobre.webp','04_etapas_da_obra.webp','05_predio_interativo.webp','06_galeria_projetos.webp','07_engenharia.webp','08_solucoes_personalizadas.webp','09_contato.webp'].map(f=>'./assets/projects/orman_safe/'+f),
  ferrazodonto:['01_hero.webp','02_tratamentos.webp','03_atendimento.webp','04_experiencia.webp','05_passos_agendamento.webp','06_contato.webp'].map(f=>'./assets/projects/ferrazodonto/'+f),
  clinica_estetica_template:['01_hero.webp','02_hero_variacao.webp','03_tratamentos.webp','04_sobre_a_clinica.webp','05_diferenciais.webp','06_contato.webp'].map(f=>'./assets/projects/clinica_estetica_template/'+f)
};
const waUrl=(message='Olá! Vim pelo site da Willix Tech e quero conversar sobre a criação de um site para minha empresa.')=>`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const ICONS = {
  arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
  spark:'<path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  close:'<path d="M5 5 19 19M19 5 5 19"/>',
  check:'<path d="m4 12 5 5L20 6"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18m0-18c5 5 5 13 0 18"/>',
  layout:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18m-11 0v12"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5 9-5zm-9 9 9 5 9-5m-18 5 9 5 9-5"/>',
  whatsapp:'<path d="M20.5 11.55a8.5 8.5 0 0 1-12.72 7.4L3 20.3l1.45-4.63a8.5 8.5 0 1 1 16.05-4.12Z"/><path d="M8.35 7.95c-.48.26-.83 1.06-.75 1.7.24 1.94 3.31 5.15 5.68 5.94.65.2 1.51.11 1.91-.35l.85-1.16-2.07-1.01-.9 1.03c-1.6-.67-2.82-1.86-3.6-3.44l.99-.87-1.13-2.12-.98.28Z"/>',
  message:'<path d="M20 11.5a8 8 0 0 1-8 8 8.6 8.6 0 0 1-3.8-.9L3 20l1.4-4.6A8 8 0 1 1 20 11.5z"/>',
  chart:'<path d="M3 20h18M6 16V9m6 7V4m6 12v-5"/>',
  phone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  code:'<path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-15-4 18"/>',
  cursor:'<path d="m4 3 15 9-7 1-3 7-5-17z"/>',
  mouse:'<rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v5"/>',
  bolt:'<path d="m13 2-9 12h7l-1 8 10-12h-7l0-8z"/>',
  instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r=".7" fill="currentColor" stroke="none"/>',
  heart:'<path d="M20 5c-2.5-3-6-2-8 1-2-3-5.5-4-8-1-4 5 3 10 8 14 5-4 12-9 8-14z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  chevron:'<path d="m6 9 6 6 6-6"/>',
  external:'<path d="M8 4H4v16h16v-4M12 4h8v8M20 4l-9 9"/>'
};
const icon=(name,size=18)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.arrow}</svg>`;
const brand=()=>`<span class="brand-logo brand-logo-clean"><span class="brand-symbol" aria-hidden="true"><img src="./assets/logo-willix-symbol.png" alt=""></span><span class="brand-type"><strong>Willix</strong><b>TECH</b></span></span>`;
const circuits=[
 'M-10 105 H210 Q255 105 285 150 L420 270 H575',
 'M-10 260 H145 Q215 260 265 260 L420 290 H575',
 'M0 405 H205 Q245 405 280 360 L420 310 H575',
 'M0 555 H178 Q225 555 270 480 L430 330 H575',
 'M1450 105 H1240 Q1185 105 1140 150 L985 270 H865',
 'M1450 260 H1230 Q1170 260 1110 260 L985 290 H865',
 'M1450 405 H1245 Q1200 405 1140 360 L985 310 H865',
 'M1450 555 H1245 Q1170 555 1120 480 L975 330 H865',
 'M690 570 V378','M720 570 V378','M750 570 V378'
];
const circuitMarkup=`<div class="circuit-scene" aria-hidden="true"><svg viewBox="0 0 1440 580" preserveAspectRatio="xMidYMid slice" class="circuit-svg">
  <defs><linearGradient id="wireBlue"><stop stop-color="#07101e"/><stop offset=".48" stop-color="#345070"/><stop offset="1" stop-color="#07101e"/></linearGradient><linearGradient id="sparkBlue"><stop stop-color="#1064ff" stop-opacity="0"/><stop offset=".45" stop-color="#44baff"/><stop offset=".7" stop-color="#d9f4ff"/><stop offset="1" stop-color="#1064ff" stop-opacity="0"/></linearGradient></defs>
  ${circuits.map((d,i)=>`<g><path d="${d}" stroke="url(#wireBlue)" stroke-width="1.5" fill="none"/><path class="circuit-spark" d="${d}" stroke="url(#sparkBlue)" stroke-width="3" stroke-linecap="round" fill="none" style="animation-delay:-${i*.74}s;animation-duration:${4.5+i*.18}s"/></g>`).join('')}
  </svg>${Array.from({length:7},(_,i)=>`<div class="c-node n${i+1}">${icon(['instagram','layout','target','message','chart','bolt','layers'][i],21)}</div>`).join('')}
  <div class="circuit-fade"></div></div>`;
const projectMarkup=p=>{
 const shots=getShots(p),image=shots[0];
 return `<article class="project-card" data-category="${p.theme}">
  <button class="project-visual ${image?'project-has-shot':'project-no-shot'}" type="button" data-open-gallery="${p.number}" aria-label="${image?'Ampliar capturas reais de':'Conhecer'} ${p.name}">
   ${image?`<div class="project-browser"><span><i></i><i></i><i></i></span><span>CAPTURA DO PROJETO</span></div><img class="project-screenshot" src="${image}" alt="Captura real da página ${p.name}" loading="lazy" decoding="async">`:`<div class="project-missing-shot">${icon('layout',38)}<strong>${p.name}</strong><span>Protótipo disponível para visualizar online</span></div>`}
   <span class="project-index">${p.number} / 06</span><span class="project-zoom">${image?'Ver imagens':'Conhecer projeto'} ${icon('external',14)}</span>
  </button>
  <div class="project-info"><div class="project-topline"><span>${p.type}</span><span class="project-state">${p.status}</span></div><h3>${p.name}</h3><p>${p.description}</p>
   <div class="project-actions"><button type="button" class="project-link" data-open-gallery="${p.number}">${image?'Ver capturas':'Detalhes'} ${icon('arrow',15)}</button>${p.link?`<a class="project-outbound" href="${p.link}" target="_blank" rel="noopener noreferrer">${p.action} ${icon('external',14)}</a>`:''}</div>
  </div></article>`;
};
const FAQ=[
 ['A Willix Tech desenvolve apenas sites?','Não. Além de sites institucionais e landing pages, trabalhamos com experiências web, automações e soluções personalizadas conforme o escopo do projeto.'],
 ['Preciso ter identidade visual e textos prontos?','Não necessariamente. Podemos começar com os materiais que você já tem e definir juntos o conteúdo e a estrutura necessários. Serviços adicionais são alinhados na proposta.'],
 ['Quanto custa desenvolver um site?','O investimento depende das páginas, funcionalidades, integrações e nível de personalização. Depois de entender o objetivo, apresentamos uma proposta com o escopo definido.'],
 ['O site funciona no celular?','Sim. O desenvolvimento considera navegação responsiva para celulares e computadores, com testes de layout antes da entrega.'],
 ['Vocês oferecem manutenção depois da entrega?','Podemos combinar hospedagem, pequenas atualizações e acompanhamento técnico em um plano separado, de acordo com a necessidade do projeto.'],
 ['Os projetos apresentados já estão publicados?','Nem todos. Cada card identifica se é prévia, protótipo, trabalho de portfólio ou produto em desenvolvimento. Links de demonstração são disponibilizados quando existem.']
];

document.getElementById('root').innerHTML=`
<a class="skip-link" href="#inicio">Ir para o conteúdo</a>
<div class="notice-bar"><span>WILLIX TECH <span class="notice-sep">/</span> CODE · DESIGN · SYSTEMS · DIGITAL</span><a href="#contato">Seu próximo projeto começa aqui ${icon('arrow',12)}</a></div>
<header class="nav-shell" id="nav-shell"><a href="#inicio" class="nav-brand" aria-label="Willix Tech, início"><span class="nav-official" aria-hidden="true"><img src="./assets/logo-willix-symbol.png" alt=""></span><span class="nav-word"><strong>Willix</strong><b>TECH</b></span></a><nav class="nav-menu" id="nav-menu" aria-label="Menu principal"><a href="#sobre">Sobre</a><a href="#servicos">Soluções</a><a href="#projetos">Projetos</a><a href="#processo">Processo</a><a href="#contato">Contato</a></nav><a class="nav-action" href="${waUrl()}" target="_blank" rel="noopener noreferrer">Pedir um site ${icon('arrow',14)}</a><button type="button" class="nav-toggle" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false">${icon('menu',19)}</button></header>
<main id="inicio">
<section class="hero cinematic hero-portfolio" aria-labelledby="hero-title">
  <div class="hero-grid"></div><div class="hero-beam"></div><div class="hero-beam beam-second"></div>
  ${circuitMarkup}
  <div class="hero-main container">
    <div class="hero-content" data-reveal>
      <div class="capsule"><span class="pulse-blue"></span> SITES PROFISSIONAIS PARA NEGÓCIOS</div>
      <h1 id="hero-title" tabindex="-1">Sites que valorizam sua empresa.<br><span>Mais presença. Mais oportunidades.</span></h1>
      <p>Desenvolvemos sites institucionais e landing pages com design exclusivo, navegação intuitiva e foco em transformar visitas em conversas com sua empresa.</p>
      <div class="cta-pair"><a href="${waUrl()}" target="_blank" rel="noopener noreferrer" class="btn btn-blue hero-wa">${icon('whatsapp',18)} Pedir orçamento ${icon('arrow',17)}</a><a href="#projetos" class="btn btn-ghost">Ver projetos reais ${icon('external',15)}</a></div>
      <div class="hero-qualities"><span>${icon('check',14)} Design sob medida</span><span>${icon('phone',14)} Prioridade mobile</span><span>${icon('message',14)} Contato direto</span></div>
      <button type="button" id="replay-brand-intro" class="watch-intro">${icon('spark',16)} Assistir à apresentação em vídeo ${icon('arrow',14)}</button>
    </div>
    <div class="hero-feature" aria-label="Destaques reais do nosso portfólio">
      <div class="hero-orbit" aria-hidden="true"><span class="orbit-ring orbit-ring-one"></span><span class="orbit-ring orbit-ring-two"></span><span class="orbit-core">W</span></div>
      <div class="hero-floating-steps" aria-hidden="true"><span class="hero-step-a">${icon('target',16)} Diagnóstico</span><span class="hero-step-b">${icon('layout',16)} Design</span><span class="hero-step-c">${icon('code',16)} Desenvolvimento</span></div>
      <a class="hero-screen hero-screen-primary" href="https://ormanfit.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Ver site Orman Fit"><div class="hero-screen-top"><i></i><i></i><i></i><span>ormanfit.netlify.app</span></div><img src="./assets/hero-orman-fit.jpg" alt="Captura real do website Orman Fit" decoding="async" fetchpriority="high"><span class="hero-screen-label">Orman Fit ${icon('external',13)}</span></a>
      <a class="hero-screen hero-screen-secondary" href="#projetos" aria-label="Ver projeto Orman Safe"><div class="hero-screen-top"><i></i><i></i><i></i><span>Orman Safe</span></div><img src="./assets/hero-orman-safe.jpg" alt="Captura real do projeto Orman Safe" decoding="async"><span class="hero-screen-label">Orman Safe ${icon('arrow',13)}</span></a>
      <a href="#processo" class="hero-process-link">${icon('globe',17)} Explore nosso processo interativo ${icon('arrow',14)}</a>
    </div>
  </div>
  <div class="hero-bottom"><span>DESIGN + ESTRATÉGIA + CÓDIGO</span><span class="scroll-indicator">${icon('mouse',14)} DESLIZE PARA EXPLORAR</span><span>GUARULHOS · SP</span></div>
</section>
<section class="intro bright-section" id="sobre"><div class="container"><div class="section-heading center dark-text" data-reveal><span class="section-pill">POR TRÁS DA WILLIX TECH</span><h2>Uma marca de tecnologia.<br><span>Projetos feitos por pessoas.</span></h2></div>
  <div class="intro-grid"><div class="intro-visual" data-reveal><div class="visual-glow"></div><div class="visual-crosses"><span>✳</span><span>+</span></div><div class="intro-founder"><img src="./assets/willian-hero.png" loading="lazy" decoding="async" alt="Retrato do profissional à frente da Willix Tech"><div class="intro-founder-title"><span>À FRENTE DA WILLIX TECH</span><strong>Willian Nunes</strong><small>Design · Desenvolvimento · Tecnologia</small></div></div><div class="intro-visual-caption">ESTRATÉGIA · DESIGN · DESENVOLVIMENTO <span>↗</span></div></div>
  <div class="intro-copy" data-reveal><span class="tiny-heading">SOLUÇÕES REAIS. EXPERIÊNCIAS MARCANTES.</span><h3>Seu negócio tem história. Seu site precisa transmiti-la.</h3><p>A Willix Tech nasce da união entre design e desenvolvimento. Criamos sites personalizados para apresentar seu negócio com clareza e profissionalismo, sempre com atenção à experiência de quem visita.</p><div class="intro-divider"></div><div class="marquee-window" aria-label="Nossos serviços"><div class="marquee-track">${['WEBSITES','DESIGN','SISTEMAS WEB','AUTOMAÇÕES','SOLUÇÕES DIGITAIS','ESTRATÉGIA', 'WEBSITES','DESIGN','SISTEMAS WEB','AUTOMAÇÕES','SOLUÇÕES DIGITAIS','ESTRATÉGIA'].map(x=>`<span><span class="ticker-point">✦</span>${x}</span>`).join('')}</div></div></div></div></div>
</section>
<section class="features cinematic" id="servicos"><div class="container"><div class="features-heading" data-reveal><span class="section-pill">O QUE PODEMOS CRIAR</span><h2>Seu negócio no digital.<br><span>Do jeito certo.</span></h2><p>Sites e landing pages são nossa principal solução. Sistemas e automações são avaliados conforme o desafio da sua empresa.</p></div>
  <div class="bento-grid" data-reveal>
    <article class="bento-card bento-large"><span class="tiny-heading">NOSSA ESPECIALIDADE · WEBSITES</span><h3>Um site profissional para<br>destacar sua empresa.</h3><p>Sites institucionais e landing pages responsivos, com conteúdo objetivo, apresentação dos seus diferenciais e botões de contato.</p><div class="radar-visual" aria-hidden="true"><span class="radar-ring one"></span><span class="radar-ring two"></span><span class="radar-ring three"></span><div class="radar-center"><img src="./assets/logo-willix-symbol.png" alt=""></div><span class="radar-comet"></span></div></article>
    <article class="bento-card bento-squares"><span class="tiny-heading">SOLUÇÕES PERSONALIZADAS</span><h3>Sistemas web para<br>demandas específicas.</h3><p>Projetos sob avaliação para organizar informações e apoiar operações, conforme o escopo e a viabilidade.</p><div class="tile-board" aria-hidden="true">${Array.from({length:16},(_,i)=>`<span class="${i===10?'tile-active':''}">${i===10?icon('layers',22):''}</span>`).join('')}</div></article>
    <article class="bento-card bento-form"><span class="tiny-heading">AUTOMAÇÕES</span><h3>Menos tarefas manuais.<br>Mais tempo para crescer.</h3><p>Automações planejadas de acordo com a rotina, integrações disponíveis e necessidades do seu negócio.</p><div class="bento-message" aria-hidden="true"><span class="live-point"></span> Fluxo conectado <div class="message-line"></div><div class="message-line short"></div><div class="message-chip">Etapa concluída ${icon('check',12)}</div></div></article>
    <article class="bento-card bento-wide"><div><span class="tiny-heading">DESIGN + EXPERIÊNCIA</span><h3>Visual que chama atenção.<br>Experiência que faz sentido.</h3><p>Identidade, clareza e interação trabalhando juntas para facilitar a decisão do visitante.</p></div><div class="track-visual" aria-hidden="true"><svg viewBox="0 0 580 200" preserveAspectRatio="none"><defs><linearGradient id="lineB"><stop stop-color="#07101e"/><stop offset=".65" stop-color="#296ff0"/><stop offset="1" stop-color="#51b3ff"/></linearGradient></defs>${[35,65,95,125,155].map(y=>`<path d="M0 ${y} H140 l30 20 H370 l35 -20 H580" stroke="url(#lineB)" stroke-width="1.5" fill="none" opacity=".7"/>`).join('')}</svg><span class="track-beam"></span></div></article>
    <article class="bento-card bento-stat"><span class="tiny-heading">EVOLUÇÃO DIGITAL</span><h3>Estrutura para crescer<br>com mais clareza.</h3><p>Projetos pensados para o uso real, com atenção a manutenção, desempenho e próximos passos.</p><div class="micro-dashboard" aria-hidden="true"><div><span class="mini-dot"></span> Estrutura e evolução</div><div class="mock-chart">${[31,47,38,73,56,85,65,97,78,100].map((x,i)=>`<i style="height:${x}%;animation-delay:${i*.1}s"></i>`).join('')}</div></div></article>
  </div></div></section>
<section class="portfolio-projects bright-section" id="projetos"><div class="container"><div class="projects-intro" data-reveal><div><span class="section-pill">PROJETOS & CONCEITOS</span><h2>Trabalhos que saíram<br><span>da tela para o mundo.</span></h2></div><p>Capturas reais retiradas do portfólio anterior da Willix Tech. Veja páginas, detalhes e demonstrações de cada trabalho.</p></div><div class="projects-grid">${PROJECTS.map(projectMarkup).join('')}</div><p class="project-disclaimer">As imagens são capturas dos materiais originais anexados ao portfólio; projetos demonstrativos e em andamento estão identificados. Para Santucci, o protótipo é apresentado por link, sem captura fictícia.</p></div></section>
<section class="global cinematic" aria-label="Processo de desenvolvimento"><div class="stars"></div><div class="section-heading center" data-reveal><span class="section-pill">COMO TRABALHAMOS</span><h2>Da conversa à entrega.<br>Uma jornada bem planejada.</h2><p>Diagnóstico, estratégia, construção e evolução — cada fase tem uma função.</p></div><div class="globe-shell"><div class="globe-light"></div><canvas class="world-canvas" aria-label="Visualização de esfera digital" role="img"></canvas><div class="globe-label label-a"><span class="live-point"></span> Ideias conectadas</div><div class="globe-label label-b">${icon('code',13)} Tecnologia aplicada</div></div><div class="global-bottom">DESCOBERTA <span>✦</span> DESIGN <span>✦</span> DESENVOLVIMENTO</div></section>
<section class="experience bright-section" id="briefing"><div class="container"><div class="section-heading center dark-text" data-reveal><span class="section-pill">COMO PODEMOS AJUDAR?</span><h2>Sua ideia pode ser<br><span>o nosso próximo projeto.</span></h2><p>Responda a três perguntas e organize o que precisa. Sem cadastro e sem compromisso.</p></div><div class="demo-partners" data-reveal><span>SOLUÇÕES PARA</span><div><span>negócios locais</span><span>clínicas</span><span>escritórios</span><span>serviços</span><span>empresas</span></div></div>
  <div class="demo-frame" data-reveal><div class="demo-frame-top"><span><span class="live-point"></span> BRIEFING INTERATIVO</span><span class="demo-right">SEM ENVIO AUTOMÁTICO ${icon('spark',12)}</span></div><div class="demo-center"><div class="demo-orb">✦</div><div class="demo-caption">COMECE POR AQUI</div><h3>O que você quer<br>tirar do papel?</h3><p>Monte uma mensagem inicial para conversarmos sobre sua ideia.</p><div class="demo-progress"><span class="active"></span><span></span><span></span></div>
     <div class="demo-inner" id="briefing-step" aria-live="polite"></div><p class="briefing-status" id="briefing-status" role="status"></p></div></div>
  </div></section>
<section class="plans cinematic" id="diferenciais"><div class="container"><div class="section-heading center" data-reveal><span class="section-pill">POR QUE A WILLIX TECH</span><h2>Cada detalhe conta.<br><span>Cada negócio é único.</span></h2><p>Uma experiência profissional começa com boas decisões, não com um modelo genérico.</p></div><div class="value-grid" data-reveal><article><span class="value-icon">${icon('target',27)}</span><span class="value-number">01 /</span><h3>Entender antes de criar.</h3><p>A solução parte do seu objetivo: vender, apresentar serviços, organizar informações ou simplificar processos.</p></article><article class="value-featured"><span class="value-icon">${icon('spark',27)}</span><span class="value-number">02 /</span><h3>Visual com identidade.</h3><p>Projetos com personalidade, atenção aos detalhes e experiências feitas para inspirar confiança.</p></article><article><span class="value-icon">${icon('code',27)}</span><span class="value-number">03 /</span><h3>Construção com propósito.</h3><p>Design e desenvolvimento caminhando juntos, com foco em funcionalidade, responsividade e clareza.</p></article></div></div></section>
<section class="faq-section cinematic" id="duvidas"><div class="container narrow"><div class="section-heading center" data-reveal><span class="section-pill">PERGUNTAS FREQUENTES</span><h2>Antes de começarmos.</h2></div><div class="faq-list" data-reveal>${FAQ.map(([q,a],i)=>`<details ${i===0?'open':''}><summary>${q}<span class="faq-plus" aria-hidden="true">+</span></summary><p>${a}</p></details>`).join('')}</div></div></section>
<section class="contact-glow" id="contato"><div class="contact-inner" data-reveal><span class="section-pill">VAMOS CRIAR ALGO?</span><h2>Seu próximo site começa<br>com uma conversa.</h2><p>Conte o que você precisa e vamos conversar sobre o melhor formato de site para sua empresa.</p><a href="${waUrl()}" target="_blank" rel="noopener noreferrer" class="btn btn-blue">Solicitar orçamento no WhatsApp ${icon('arrow',16)}</a><span class="contact-subtext">Sem compromisso. Uma conversa para entender seu objetivo.</span></div><div class="contact-light"></div></section>
</main>
<footer><div class="container"><div class="footer-columns"><div><a href="#inicio">${brand()}</a><p>Design, tecnologia e soluções digitais para negócios que querem dar o próximo passo.</p><span class="footer-by">GUARULHOS · SP / ATENDIMENTO DIGITAL</span></div><div><b>EXPLORE</b><a href="#sobre">Quem somos</a><a href="#servicos">Soluções</a><a href="#projetos">Projetos</a><a href="#processo">Como trabalhamos</a></div><div><b>VAMOS CONVERSAR</b><a href="#briefing">Montar briefing</a><a href="${waUrl()}" target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="mailto:${SITE_EMAIL}">E-mail</a><a href="#duvidas">Dúvidas frequentes</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Willix Tech. Todos os direitos reservados.</span><span>CODE <span class="footer-dot">✦</span> DESIGN <span class="footer-dot">✦</span> SYSTEMS</span></div></div></footer>
<a class="whatsapp-float" href="${waUrl()}" target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Willix Tech pelo WhatsApp">${icon('whatsapp',22)}<span>Orçamento pelo WhatsApp</span></a>
<dialog id="project-dialog" class="project-dialog" aria-labelledby="gallery-title"><div class="gallery-modal"><header><div><span class="gallery-overline">CAPTURAS ORIGINAIS DO PORTFÓLIO</span><h2 id="gallery-title">Projeto</h2><p id="gallery-description"></p></div><button type="button" class="gallery-close" id="gallery-close" aria-label="Fechar galeria">${icon('close',22)}</button></header><div class="gallery-frame"><button class="gallery-arrow" id="gallery-prev" aria-label="Imagem anterior">${icon('arrow',20)}</button><img id="gallery-image" alt="" decoding="async"><button class="gallery-arrow" id="gallery-next" aria-label="Próxima imagem">${icon('arrow',20)}</button></div><div class="gallery-bottom"><span id="gallery-index">1 / 1</span><span id="gallery-status"></span><a id="gallery-link" href="#projetos" target="_blank" rel="noopener noreferrer">Abrir site ${icon('external',13)}</a></div></div></dialog>
<div id="brand-intro" class="brand-intro" hidden role="dialog" aria-modal="true" aria-label="Abertura da Willix Tech"><video id="brand-intro-video" src="./assets/Willix_Tech_brand_animation_c2eda036.mp4" autoplay muted playsinline preload="auto" aria-label="Animação de apresentação da marca Willix Tech"></video><div class="brand-intro-controls"><button type="button" id="brand-audio-toggle" class="intro-control-button" aria-label="Ativar áudio da introdução" aria-pressed="false">${icon('message',16)} <span>Ativar áudio</span></button><button type="button" id="skip-brand-intro" class="intro-control-button intro-skip" aria-label="Pular introdução e acessar o portfólio">Pular introdução ${icon('arrow',16)}</button></div></div>
`;

const menuButton=document.getElementById('nav-toggle');
const navMenu=document.getElementById('nav-menu');
menuButton?.addEventListener('click',()=>{
  const open=navMenu.classList.toggle('expanded');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
  menuButton.innerHTML=icon(open?'close':'menu',19);
});
navMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  navMenu.classList.remove('expanded');menuButton.setAttribute('aria-expanded','false');menuButton.innerHTML=icon('menu',19);
}));
const navShell=document.getElementById('nav-shell');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const motionElements=[];
// Keep the site visible unless the motion observer is ready. Container and child
// reveals are sequenced separately, without scrolling interception or JS layout shifts.
function setupPortfolioMotion(){
  const stagedGroups=[
    ['.features-heading','.section-pill,h2,p'],
    ['.projects-intro','.section-pill,h2,p'],
    ['.contact-inner','.section-pill,h2,p,.btn,.contact-subtext'],
    ['.intro-copy','.tiny-heading,h3,p,.intro-divider,.marquee-window'],
    ['.section-heading','.section-pill,h2,p'],
    ['.bento-grid','.bento-card'],
    ['.value-grid','article'],
    ['.faq-list','details']
  ];
  stagedGroups.forEach(([parentSelector,childSelector])=>{
    document.querySelectorAll(parentSelector).forEach(parent=>{
      // Existing CSS reveals for large containers are replaced by small reveals.
      parent.removeAttribute('data-reveal');
      [...parent.querySelectorAll(childSelector)].filter(el=>el.closest(parentSelector)===parent).forEach((child,i)=>{
        child.setAttribute('data-reveal','');
        child.style.setProperty('--reveal-delay',`${Math.min(i,5)*90}ms`);
      });
    });
  });
  document.querySelectorAll('.project-card').forEach((card,i)=>{
    card.setAttribute('data-reveal','');
    card.style.setProperty('--reveal-delay',`${(i%3)*95}ms`);
  });
  document.querySelectorAll('.demo-partners,.demo-frame,.intro-visual').forEach((el,i)=>{
    el.style.setProperty('--reveal-delay',`${Math.min(i,2)*90}ms`);
  });
  // Hero is handled as an independent entrance, and its heading is never hidden.
  const heroContent=document.querySelector('.hero-content');
  heroContent?.removeAttribute('data-reveal');
  const els=[...document.querySelectorAll('[data-reveal]')];
  if(reducedMotion.matches || !('IntersectionObserver' in window)){
    els.forEach(el=>el.classList.add('revealed'));
  } else {
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      });
    },{threshold:.08,rootMargin:'0px 0px -28px 0px'});
    els.forEach(el=>observer.observe(el));
    document.documentElement.classList.add('motion-ready');
  }
  const updateNav=()=>navShell.classList.toggle('scrolled',window.scrollY>48);
  window.addEventListener('scroll',updateNav,{passive:true});updateNav();
  document.addEventListener('visibilitychange',()=>{
    document.body.classList.toggle('tab-hidden',document.hidden);
    document.querySelectorAll('.circuit-svg').forEach(svg=>{
      if(typeof svg.pauseAnimations!=='function')return;
      try{document.hidden||!svg.closest('.is-on-screen')?svg.pauseAnimations():svg.unpauseAnimations()}catch(_){}
    });
  });
  if('IntersectionObserver' in window){
    const ambient=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
      target.classList.toggle('is-on-screen',isIntersecting);
      const animatedSVG=target.querySelector('.circuit-svg');
      if(animatedSVG && typeof animatedSVG.pauseAnimations==='function'){
        try{isIntersecting&&!document.hidden?animatedSVG.unpauseAnimations():animatedSVG.pauseAnimations()}catch(_){}
      }
    }),{threshold:0});
    document.querySelectorAll('main > section').forEach(el=>ambient.observe(el));
  }
}
setupPortfolioMotion();
function enterHero(){
  document.body.classList.add('hero-is-ready');
  document.body.classList.remove('hero-entry-pending');
}

let currentStep=0;
const brief={service:'Site institucional',purpose:'Apresentar meus serviços',urgency:'Quero conversar sobre o prazo',name:'',business:''};
const services=['Site institucional','Landing page','Sistema web','Automação','Ainda não sei'];
const purposes=['Apresentar meus serviços','Conseguir mais contatos','Organizar um processo','Criar um produto digital'];
const deadlines=['Quero conversar sobre o prazo','Nas próximas semanas','Nos próximos meses','Estou pesquisando'];
const mount=document.getElementById('briefing-step');
const status=document.getElementById('briefing-status');
const escapeHTML=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const briefText=()=>`Olá, Willix Tech! Me chamo ${brief.name.trim()||'[seu nome]'}${brief.business.trim()?` e represento ${brief.business.trim()}`:''}. Tenho interesse em ${brief.service.toLowerCase()}. Meu objetivo é ${brief.purpose.toLowerCase()}. Sobre o prazo: ${brief.urgency.toLowerCase()}. Podemos conversar sobre o projeto?`;
function renderBrief(){
  document.querySelectorAll('.demo-progress span').forEach((e,i)=>e.className=i===currentStep?'active':i<currentStep?'done':'');
  status.textContent='';
  if(currentStep===0) mount.innerHTML=`<span class="demo-label">01 — QUAL SOLUÇÃO VOCÊ PROCURA?</span><div class="demo-options">${services.map(x=>`<button type="button" class="demo-option ${brief.service===x?'selected':''}" data-service="${x}">${x}<span>${brief.service===x?'●':'○'}</span></button>`).join('')}</div><button type="button" class="demo-continue" id="brief-next">Continuar ${icon('arrow',15)}</button>`;
  else if(currentStep===1) mount.innerHTML=`<span class="demo-label">02 — CONTE UM POUCO MAIS</span><div class="demo-fields"><label>Seu primeiro nome<input type="text" name="name" maxlength="60" autocomplete="given-name" value="${escapeHTML(brief.name)}" placeholder="Como podemos te chamar?"></label><label>Nome da empresa (opcional)<input type="text" name="business" maxlength="80" value="${escapeHTML(brief.business)}" placeholder="Seu negócio"></label><label>Principal objetivo<select name="purpose">${purposes.map(x=>`<option ${brief.purpose===x?'selected':''}>${x}</option>`).join('')}</select></label><label>Quando pretende começar?<select name="urgency">${deadlines.map(x=>`<option ${brief.urgency===x?'selected':''}>${x}</option>`).join('')}</select></label></div><button type="button" class="demo-continue" id="brief-next">Preparar mensagem ${icon('arrow',15)}</button><button type="button" class="demo-return" id="brief-back">Voltar</button>`;
  else mount.innerHTML=`<span class="demo-label">03 — SEU BRIEFING ESTÁ PRONTO</span><div class="demo-message">${escapeHTML(briefText())}</div><p class="demo-note">Sua mensagem não foi enviada nem armazenada. Você pode copiá-la para compartilhar com a Willix Tech.</p><div class="briefing-actions"><button type="button" class="demo-continue" id="brief-action">${WHATSAPP_NUMBER?'Abrir WhatsApp':'Copiar mensagem'} ${icon(WHATSAPP_NUMBER?'arrow':'check',15)}</button><button type="button" class="demo-return" id="brief-back">Editar informações</button></div>`;
  mount.querySelectorAll('[data-service]').forEach(b=>b.addEventListener('click',()=>{brief.service=b.dataset.service;renderBrief()}));
  mount.querySelectorAll('input,select').forEach(e=>e.addEventListener('input',()=>{brief[e.name]=e.value}));
  mount.querySelector('#brief-next')?.addEventListener('click',()=>{currentStep++;renderBrief()});
  mount.querySelector('#brief-back')?.addEventListener('click',()=>{currentStep--;renderBrief()});
  mount.querySelector('#brief-action')?.addEventListener('click',async()=>{
    if(WHATSAPP_NUMBER){window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(briefText())}`,'_blank','noopener,noreferrer');return;}
    try{await navigator.clipboard.writeText(briefText());status.textContent='Mensagem copiada! Compartilhe com a Willix Tech pelo canal de contato combinado.';}
    catch(e){const r=document.createRange();r.selectNodeContents(mount.querySelector('.demo-message'));getSelection().removeAllRanges();getSelection().addRange(r);status.textContent='Selecione e copie a mensagem acima.';}
  });
}
renderBrief();


/* Canvas 2D fallback for devices or browsers where WebGL is unavailable. */
function initFallbackGlobe(){
  const shell=document.querySelector('.globe-shell');
  if(!shell || shell.classList.contains('webgl-live')) return;
  const canvas=shell.querySelector('canvas.world-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');if(!ctx)return;
  let visible=false,angle=-.45,last=0,raf=0,w=1,h=1;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const points=[];
  const N=1700;
  for(let i=0;i<N;i++){
    const y=1-2*(i+.5)/N;
    const rr=Math.sqrt(Math.max(0,1-y*y));
    const phi=i*Math.PI*(3-Math.sqrt(5));
    points.push([Math.cos(phi)*rr,y,Math.sin(phi)*rr,i%12===0?1.55:.8]);
  }
  function resize(){
    const rect=canvas.getBoundingClientRect();
    const dpr=Math.min(devicePixelRatio||1,1.5);
    w=Math.max(1,rect.width);h=Math.max(1,rect.height);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  const ro=new ResizeObserver(resize);ro.observe(canvas);resize();
  const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible&&!document.hidden&&!raf)raf=requestAnimationFrame(draw);},{threshold:.02});
  io.observe(shell);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&visible&&!raf)raf=requestAnimationFrame(draw);});
  function draw(t){
    raf=0;
    if(!visible || document.hidden)return;
    if(t-last<50 && !reduce){raf=requestAnimationFrame(draw);return;}
    if(reduce && last)return;
    last=t;
    ctx.clearRect(0,0,w,h);
    const cx=w/2,cy=h*.49,r=Math.min(w*.43,h*.42);
    const glow=ctx.createRadialGradient(cx,cy,r*.45,cx,cy,r*1.2);
    glow.addColorStop(0,'rgba(5,66,140,.22)');glow.addColorStop(.75,'rgba(10,95,215,.09)');glow.addColorStop(1,'rgba(10,95,215,0)');
    ctx.fillStyle=glow;ctx.beginPath();ctx.arc(cx,cy,r*1.2,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(45,131,248,.44)';ctx.lineWidth=1.2;
    ctx.shadowBlur=18;ctx.shadowColor='#0077ff';ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke();ctx.shadowBlur=0;
    const co=Math.cos(angle),si=Math.sin(angle);
    for(const [x,y,z,sz] of points){
      const rx=x*co-z*si,rz=x*si+z*co;
      if(rz<-.06)continue;
      ctx.fillStyle=rz>.65?'rgba(157,215,255,.8)':'rgba(58,133,240,.5)';
      ctx.beginPath();ctx.arc(cx+rx*r,cy-y*r,sz*(.5+Math.max(0,rz)),0,Math.PI*2);ctx.fill();
    }
    if(!reduce){angle+=.004;raf=requestAnimationFrame(draw);}
  }
  if(!reduce && visible)raf=requestAnimationFrame(draw);
  window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);io.disconnect();ro.disconnect()},{once:true});
}
window.addEventListener('load',initFallbackGlobe,{once:true});

// Original project screenshots: an accessible, keyboard-navigable gallery.
const gallery=document.getElementById('project-dialog');
const galleryImg=document.getElementById('gallery-image');
let currentProject=null, currentShot=0,previousGalleryFocus=null;
function setGalleryShot(n){
 const shots=getShots(currentProject);if(!shots.length)return;
 currentShot=(n+shots.length)%shots.length;
 galleryImg.src=shots[currentShot]; galleryImg.alt=`Captura ${currentShot+1} do projeto ${currentProject.name}`;
 document.getElementById('gallery-index').textContent=`${currentShot+1} / ${shots.length}`;
 document.getElementById('gallery-prev').disabled=shots.length<2;
 document.getElementById('gallery-next').disabled=shots.length<2;
}
function openGallery(p){
 if(!p)return;
 const shots=getShots(p);
 if(!shots.length){if(p.link)window.open(p.link,'_blank','noopener,noreferrer');return;}
 currentProject=p;previousGalleryFocus=document.activeElement;
 document.getElementById('gallery-title').textContent=p.name;
 document.getElementById('gallery-description').textContent=p.description;
 document.getElementById('gallery-status').textContent=p.status;
 const link=document.getElementById('gallery-link');link.hidden=!p.link;if(p.link)link.href=p.link;
 setGalleryShot(0);gallery.showModal();document.getElementById('gallery-close').focus();
}
document.querySelectorAll('[data-open-gallery]').forEach(btn=>btn.addEventListener('click',()=>openGallery(PROJECTS.find(p=>p.number===btn.dataset.openGallery))));
document.getElementById('gallery-close').addEventListener('click',()=>gallery.close());
document.getElementById('gallery-prev').addEventListener('click',()=>setGalleryShot(currentShot-1));
document.getElementById('gallery-next').addEventListener('click',()=>setGalleryShot(currentShot+1));
gallery.addEventListener('click',e=>{if(e.target===gallery)gallery.close()});
gallery.addEventListener('close',()=>{galleryImg.removeAttribute('src');previousGalleryFocus?.focus?.({preventScroll:true})});
gallery.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();setGalleryShot(currentShot+1)}if(e.key==='ArrowLeft'){e.preventDefault();setGalleryShot(currentShot-1)}});
// Brand opening: the exact original Willix Tech video, never the former Flow intro.
const intro=document.getElementById('brand-intro');
const introVideo=document.getElementById('brand-intro-video');
const audioToggle=document.getElementById('brand-audio-toggle');
const skipIntro=document.getElementById('skip-brand-intro');
const INTRO_SESSION_KEY='willix-tech-brand-intro-c2eda036-v1';
let introFocus=null,introActive=false,introExiting=false,introWatchdog=0,introCloseTimer=0;
const backdropElements=[...document.querySelectorAll('#root > :not(#brand-intro)')];
function setBackdropInert(locked){backdropElements.forEach(el=>{el.inert=locked;});}
function safeSetSeen(){try{sessionStorage.setItem(INTRO_SESSION_KEY,'1')}catch(_){}}
function finishIntro(reason='ended'){
  if(!introActive || introExiting)return;
  introExiting=true;introActive=false;safeSetSeen();
  clearTimeout(introWatchdog);
  introVideo.pause();
  // Reveal the fully loaded page underneath the 700ms black overlay fade.
  intro.classList.add('is-leaving');
  document.body.classList.remove('intro-open');
  setBackdropInert(false);
  // The heading stays visible; the secondary hero elements now enter in sequence.
  requestAnimationFrame(enterHero);
  if(reason==='skip'){
    document.querySelector('.hero-wa')?.focus({preventScroll:true});
  } else {
    document.activeElement===skipIntro && document.querySelector('#hero-title')?.focus?.({preventScroll:true});
  }
  intro.setAttribute('aria-hidden','true');
  introCloseTimer=setTimeout(()=>{
    intro.hidden=true;
    intro.classList.remove('is-leaving');
    intro.setAttribute('aria-hidden','true');
  },700);
}
function showIntro({replay=false}={}){
  if(introActive)return;
  clearTimeout(introCloseTimer);
  introFocus=document.activeElement;
  introExiting=false;introActive=true;
  intro.hidden=false;intro.removeAttribute('aria-hidden');
  intro.classList.remove('is-leaving');
  document.body.classList.add('intro-open');
  document.body.classList.remove('hero-is-ready');
  document.body.classList.add('hero-entry-pending');
  setBackdropInert(true);
  introVideo.pause();
  try{introVideo.currentTime=0}catch(_){}
  introVideo.muted=true;introVideo.loop=false;introVideo.playsInline=true;
  audioToggle.setAttribute('aria-pressed','false');
  audioToggle.setAttribute('aria-label','Ativar áudio da introdução');
  audioToggle.querySelector('span').textContent='Ativar áudio';
  skipIntro.focus({preventScroll:true});
  // No waiting forever on media/network/browser errors. Video length is ~7.93s.
  introWatchdog=setTimeout(()=>finishIntro('timeout'),12000);
  try {
    const played=introVideo.play();
    if(played && typeof played.catch==='function')played.catch(()=>finishIntro('autoplay-blocked'));
  }catch(_){finishIntro('autoplay-blocked')}
}
skipIntro.addEventListener('click',()=>finishIntro('skip'));
document.getElementById('replay-brand-intro').addEventListener('click',()=>showIntro({replay:true}));
introVideo.addEventListener('ended',()=>finishIntro('ended'));
introVideo.addEventListener('error',()=>finishIntro('media-error'));
introVideo.addEventListener('stalled',()=>{if(introActive && introVideo.readyState<2){clearTimeout(introWatchdog);introWatchdog=setTimeout(()=>finishIntro('stalled'),4500)}});
audioToggle.addEventListener('click',()=>{
  if(!introActive)return;
  introVideo.muted=!introVideo.muted;
  const soundOn=!introVideo.muted;
  audioToggle.querySelector('span').textContent=soundOn?'Silenciar':'Ativar áudio';
  audioToggle.setAttribute('aria-pressed',String(soundOn));
  audioToggle.setAttribute('aria-label',soundOn?'Silenciar introdução':'Ativar áudio da introdução');
});
intro.addEventListener('keydown',e=>{
  if(e.key==='Escape'){e.preventDefault();finishIntro('skip');return;}
  if(e.key!=='Tab')return;
  const buttons=[audioToggle,skipIntro];
  const index=buttons.indexOf(document.activeElement);
  if(e.shiftKey && index===0){e.preventDefault();skipIntro.focus();}
  if(!e.shiftKey && index===1){e.preventDefault();audioToggle.focus();}
});
// Reduced motion goes straight to the website; a deliberate replay still works.
let seen=false;
try{seen=sessionStorage.getItem(INTRO_SESSION_KEY)==='1'}catch(_){}
const skipByQuery=new URLSearchParams(location.search).has('skipIntro');
document.body.classList.add('hero-entry-pending');
if(!reducedMotion.matches && !seen && !skipByQuery)showIntro();
else requestAnimationFrame(enterHero);
