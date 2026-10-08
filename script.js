const root = 'Framer Portfolio project/';
const img = (path) => encodeURI(root + path);
const projects = [
  {id:'detox',kind:'UX/UI design · Mobile app concept',title:'Digital Detox',tag:'Wellbeing, without the guilt.',color:'#ed5b2c',image:'UI:UX DESIGN PROJECTS/Images/Digital Detox Images/hero.jpg',intro:'A gamified wellbeing app for building a healthier relationship with screens.',about:'Digital Detox is a concept mobile app designed to help people spend less time scrolling and more time doing the things that matter. Small daily actions, supportive prompts and gamified milestones make progress feel visible, manageable and rewarding.',challenge:'Many people want to reduce their screen time, but existing tools can feel punitive or easy to ignore. The challenge was to create an encouraging experience that helps users set a realistic goal, see their progress at a glance and return without extra friction.',sections:[['The solution','The dashboard brings together a daily screen-time summary, a current challenge and a one-tap focus task. A persistent progress card makes an active goal easy to resume.'],['Designed for small wins','A daily companion offers practical prompts; quick goal-setting makes progress visible; rewards recognise consistency; and focus/community challenges turn a bigger intention into repeatable habits.'],['Design decisions','The next action is always obvious. Orange progress accents introduce energy without a tiring feed, while gentle guidance rewards gradual improvement instead of perfection.']],outcome:'A four-day design sprint that turned a broad wellbeing problem into a clear, testable habit-building experience.',gallery:[]},
  {id:'furnich',kind:'UX/UI design · AR app concept',title:'Furnich AR',tag:'Assembly, made more intuitive.',color:'#7361e8',image:'UI:UX DESIGN PROJECTS/Images/FURNICHAR Images/hero.png',intro:'Making flat-pack furniture assembly clearer with augmented reality.',about:'Furnich AR is a mobile concept that makes furniture assembly more approachable. Instead of deciphering paper manuals or searching for tutorials, people follow guided AR steps that show what to do, where a part belongs and which tool is needed.',challenge:'Flat-pack furniture is affordable but often confusing to assemble. Research with young adults and DIY enthusiasts showed a need for visual guidance, in-the-moment support and a clear picture of tools and hardware before starting.',sections:[['The solution','Customers scan a store QR code or enter a serial number, select their furniture and follow a visual assembly path. Card-led browse views make choices quick; product pages surface required tools before the first step.'],['Guidance in context','AR mode overlays step-by-step instructions onto physical furniture, identifying placement, direction and hardware. An AI assistant offers help with tools, troubleshooting and progress, with hands-free controls considered for active assembly.'],['Design decisions','Soft backgrounds and familiar icons preserve a calm interface while the furniture and instructions remain the focus. A prominent QR action moves users from the physical box to the right guide with less effort.']],outcome:'An exploration of how technically ambitious AR interactions can remain calm, useful and ready for a developer handoff.',gallery:[]},
  {id:'callum',kind:'Brand campaign · Web direction · CRM',title:'CALLUM 529',tag:'Luxury, engineered into every touchpoint.',color:'#0a1430',image:'MARKETING PROJECTS/529 CALLUM Whysky/Images/LSB_0572_landscape_vmiddle.jpg',intro:'A digital launch campaign for a limited-edition Scotch whisky collaboration.',about:'CALLUM 529 brought together British automotive design and Scotch whisky craftsmanship in a limited-edition release. The digital campaign communicated the decanter’s sculptural character, technical design language and distillery heritage while giving collectors a premium route to enquire.',challenge:'The product sits between luxury, engineering and heritage. The campaign needed to preserve its sense of rarity across every touchpoint, without becoming overly technical or losing the emotional story.',sections:[['Creative direction','Glossy royal blue, a racing-inspired orange accent, industrial patina and copper-toned surfaces connect the automotive influence to Annandale’s distilling heritage. Restraint, scale and image-led storytelling establish the luxury tone.'],['A product-led digital experience','An immersive landing page introduces the collaboration, design, origin and specification, with enquiry paths naturally placed after moments of discovery.'],['Beyond the landing page','VIP emails extend the story through reveal, craft and collector communications. Social content brings together design studies, product detail, heritage imagery and lifestyle moments for a coherent campaign rhythm.']],outcome:'A premium campaign system built to carry a singular product story across web, CRM, social and physical collateral.',gallery:['LSB_0572_landscape_vmiddle.jpg','Whisky final png.png','Landing Page.png','Welcome & Story.png','Newsletter.png','social media callum.jpg','IMG_7042.PNG','IMG_7043.PNG','IMG_7044.PNG','IMG_7045.PNG'].map(x=>'MARKETING PROJECTS/529 CALLUM Whysky/Images/'+x)},
  {id:'owls',kind:'Digital marketing · Acquisition journey',title:'Owlspriority Immigration',tag:'A clearer path to a life-changing decision.',color:'#cd252d',image:'MARKETING PROJECTS/Owlspriority Projects/Images/gOOGLE ADS.png',intro:'Building an integrated acquisition and customer-engagement journey for Canadian immigration services.',about:'Owlspriority Immigration ran a recurring Visa Eligibility Check programme for people exploring opportunities to study, work or settle in Canada. I contributed across the journey: attracting prospects, explaining the offer and maintaining engagement with useful content.',challenge:'Immigration decisions are high-consideration. The campaign needed to connect awareness, education, conversion and ongoing communication, rather than simply generate traffic.',sections:[['A connected journey','Discover → Learn → Check eligibility → Sign up → Stay informed. Google Search captured high-intent users; Meta generated interest; a focused landing page clarified the free check and email kept the relationship useful after sign-up.'],['Campaign deliverables','Paid creative combined clear messaging with a trustworthy red, white and black system. The landing page used concise benefits, form, pathway and trust-building content. Monthly newsletters translated visa changes into approachable updates.'],['Outcome','The wider digital acquisition programme generated 3,000+ qualified leads, creating a consistent experience from first ad interaction through education and re-engagement.']],outcome:'3,000+ qualified leads generated through a connected acquisition and lifecycle journey.',gallery:['gOOGLE ADS.png','Visa ELIGIBILITY CHECK META ADS.png','LANDING PAGE VISA ELIGIBILITY CHECK.png','NEWSLETTER 01.png','Newsletter 02 New Canada Immigration Plans.png'].map(x=>'MARKETING PROJECTS/Owlspriority Projects/Images/'+x)},
  {id:'mind',kind:'Fundraising · Awareness campaign concept',title:'Sheffield Mind',tag:'Support that starts at work.',color:'#1c6db2',image:'MARKETING PROJECTS/Sheffield Mind/Images/metas ads.png',intro:'A corporate-support campaign for stronger workplaces and better mental health.',about:'This project explored how a corporate-support scheme could help Sheffield businesses contribute regularly, gain meaningful benefits and increase awareness of essential local mental-health services.',challenge:'Smaller charities can struggle to secure the visibility and recurring funding available to national organisations. The campaign had to make corporate involvement feel meaningful, practical and clear.',sections:[['Campaign strategy','A regular corporate-support model offered training, volunteering, events, networking and visibility opportunities. LinkedIn and Facebook directly reached business decision-makers with a proposition that connected healthier workplaces with stronger local communities.'],['Creative direction','Confident blue typography, human photography and direct calls to action make a sensitive subject serious yet approachable. A webinar provides an immediate entry point: expert insight, practical strategies and a clear invitation to act.'],['Considerations','The concept was scoped around a modest £450 budget for content production, promotion, venue considerations and print, creating reusable assets that stay proportionate to the fundraising objective.']],outcome:'An adaptable corporate-support system designed to build awareness, recurring support and a healthier local workplace culture.',gallery:['metas ads.png','SM 1.jpg','Codex Image Sep 16, 2026, 11_54_57 PM.png','linkedin ads carousel '].map(x=>'MARKETING PROJECTS/Sheffield Mind/Images/'+x)},
  {id:'scotrail',kind:'Campaign concept · Degree collaboration',title:'Edinburgh Festival × ScotRail',tag:'Make the journey part of the story.',color:'#0c56a1',image:'MARKETING PROJECTS/ScottRails/Images/hero.jpg',intro:'Encouraging festival travel through an integrated campaign concept.',about:'For a degree project supporting the 2021 Edinburgh International Festival, I worked on a campaign concept with ScotRail that encouraged visitors to make the train part of their festival journey.',challenge:'The festival attracts audiences arriving from many places. The campaign needed to make travel feel like an enjoyable part of the cultural experience, while making the practical benefits of rail clear.',sections:[['Campaign idea','The train becomes a gateway to the festival: a convenient, lower-friction route to arrive ready to explore Edinburgh. A single promise carries across posters, stations, social and web content.'],['Design for real-world contexts','Bold yellow type, documentary-style imagery and ScotRail blue create a high-energy system. Out-of-home concepts are designed for railway environments, where the message must be readable in seconds and still feel exciting.'],['A connected travel story','The content plan considered what people need before travelling: why choose rail, what the festival offers and how the journey can become part of the experience.']],outcome:'A flexible campaign direction built to perform across social, web and physical advertising environments.',gallery:['Railways ads.png','bus stop ads.png','EIF 1.jpg','EIF 2.jpg','EIF 3 PART 1.jpg','EIF 3 PART 2.jpg','ScotRail_Logo.png','Google Display Ads'].map(x=>'MARKETING PROJECTS/ScottRails/Images/'+x)}
];
const campaignFirst = ['callum','owls','mind','scotrail','detox','furnich'];
projects.sort((a,b)=>campaignFirst.indexOf(a.id)-campaignFirst.indexOf(b.id));
const owlsProject=projects.find(project=>project.id==='owls');
owlsProject.image='MARKETING PROJECTS/Owlspriority Projects/Images/Frame 21.png';
const sheffieldProject=projects.find(project=>project.id==='mind');
sheffieldProject.image='MARKETING PROJECTS/Sheffield Mind/Images/SM 1.jpg';
const callumProject=projects.find(project=>project.id==='callum');
callumProject.image='MARKETING PROJECTS/529 CALLUM Whysky/Images/Whisky final png.png';
const visualExplorations=[
  {num:'01 / 09',category:'Spatial UI · VisionOS',title:'Atmospheric Weather Interface',desc:'Spatial weather dashboard exploring ambient lighting, real-time depth cues, glassmorphic telemetry cards, and multi-window hierarchy for VisionOS.',image:'UI:UX DESIGN PROJECTS/Images/Random Designs/Frame 16.png'},
  {num:'02 / 09',category:'Spatial UI · VisionOS',title:'Spatial Sports Live Broadcast HUD',desc:'Immersion-first live sports dashboard with floating statistics widgets, real-time tactical overlays, and panoramic pitch perspectives.',image:'UI:UX DESIGN PROJECTS/Images/Random Designs/Desktop - 1.png'},
  {num:'03 / 09',category:'iOS · Dynamic Island',title:'Flight Tracker Live Activity',desc:'Micro-interaction design exploring compact, minimal, and expanded states of the Dynamic Island for live flight departure status and gate changes.',image:'UI:UX DESIGN PROJECTS/Images/Random Designs/mock 1 & 12 gen.png'},
  {num:'04 / 09',category:'iOS · Dynamic Island',title:'Culinary Timer & Live Steps',desc:'Context-aware cooking companion integrating smart timer rings, ingredient checklists, and glanceable step alerts into the Dynamic Island.',image:'UI:UX DESIGN PROJECTS/Images/Random Designs/mock 2 &2.png'},
  {num:'05 / 09',category:'Mobile UI · Interaction',title:'Interactive Messaging & Polling Flow',desc:'Expressive chat interactions with inline community polling, micro-reactions, and fluid gesture navigation.',image:'UI:UX DESIGN PROJECTS/Images/Random Designs/0031.jpg'},
  {num:'06 / 09',category:'Fintech · Mobile UI',title:'Digital Asset & Multi-Currency Wallet',desc:'Minimalist financial management interface utilizing soft ambient gradients, dark mode contrast, and clean transactional telemetry.',image:'UI:UX DESIGN PROJECTS/Images/Random Designs/page.png'},
  {num:'07 / 09',category:'Fintech · Spatial UI',title:'3D Spatial Banking Ecosystem',desc:'Futuristic banking dashboard featuring multi-layered physical card models, live portfolio analytics, and spatial data cards.',image:'UI:UX DESIGN PROJECTS/Images/Random Designs/Frame 17.png'},
  {num:'08 / 09',category:'EdTech · Language Learning',title:'Speech & Phonetics Audio Learning',desc:'Voice-guided interactive learning flow emphasizing audio-visual phonetics feedback, progress streaks, and frictionless quiz transitions.',image:'UI:UX DESIGN PROJECTS/Images/Random Designs/Frame 5.png'},
  {num:'09 / 09',category:'Productivity · Daily Planner',title:'Mindful Daily Planner & Focus Notes',desc:'Minimalist editorial-style productivity planner combining daily focus blocks, habit trackers, and reflective journaling.',image:'UI:UX DESIGN PROJECTS/Images/Random Designs/cal.png'}
];
const projectSlugs = {
  callum: 'callum-529.html',
  owls: 'owlspriority.html',
  mind: 'sheffield-mind.html',
  scotrail: 'scotrail.html',
  detox: 'digital-detox.html',
  furnich: 'furnich-ar.html'
};
projects.forEach(p => p.url = projectSlugs[p.id]);

const projectGrid = document.querySelector('#projects');
projectGrid.innerHTML = projects.map((p, i) => {
  const tags = p.kind.split(' · ').slice(0, 3);
  return `<a href="${p.url}" class="project project--${p.id}" style="--project-color:${p.color}" aria-label="View ${p.title} case study"><div class="project-image"><div class="project-topline">${tags.map(tag => `<span>${tag}</span>`).join('')}</div><img src="${img(p.image)}" alt="${p.title} project visual" loading="${i > 1 ? 'lazy' : 'eager'}"><div class="project-shade"></div><div class="project-meta"><p>0${i + 1} / ${p.tag}</p><h3>${p.title} <b class="project-arrow-circle" aria-hidden="true"><svg class="arrow-svg" width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 11.5L11.5 2.5"/><path d="M4 2.5h7.5V10"/></svg></b></h3></div></div></a>`;
}).join('');
const expStack=document.querySelector('#experiments-stack');
if(expStack){expStack.innerHTML=visualExplorations.map((exp,idx)=>`<article class="exp-card" data-index="${idx}" style="z-index:${idx+1}" tabindex="0" role="button" aria-label="View ${exp.title}"><div class="exp-card-media"><img src="${img(exp.image)}" alt="${exp.title}" loading="${idx>1?'lazy':'eager'}"><div class="exp-card-shade"></div><div class="exp-card-topline"><div class="exp-card-meta-left"><span class="exp-pill">${exp.num}</span><span class="exp-pill">${exp.category}</span></div><div class="exp-card-action"><span>Expand Preview</span><span class="exp-card-arrow" aria-hidden="true"><svg class="arrow-svg" width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 11.5L11.5 2.5"/><path d="M4 2.5h7.5V10"/></svg></span></div></div><div class="exp-card-bottomline"><h3 class="exp-card-title">${exp.title}</h3><p class="exp-card-desc">${exp.desc}</p></div></div></article>`).join('');}

// Visual Explorations Lightbox Preview & Sticky Cards Stacking Animation
const expLightbox=document.querySelector('#exp-lightbox');
let currentExpIdx=0;

function updateExpLightbox(idx){
  if(idx<0)idx=visualExplorations.length-1;
  if(idx>=visualExplorations.length)idx=0;
  currentExpIdx=idx;
  const item=visualExplorations[currentExpIdx];
  const counter=document.querySelector('#lightbox-counter');
  const tag=document.querySelector('#lightbox-tag');
  const title=document.querySelector('#lightbox-title');
  const image=document.querySelector('#lightbox-image');
  const desc=document.querySelector('#lightbox-desc');
  if(counter)counter.textContent=item.num;
  if(tag)tag.textContent=item.category;
  if(title)title.textContent=item.title;
  if(image){image.src=img(item.image);image.alt=item.title;}
  if(desc)desc.textContent=item.desc;
}

function openExpLightbox(idx){
  if(!expLightbox)return;
  updateExpLightbox(idx);
  expLightbox.showModal();
  document.body.style.overflow='hidden';
}

function closeExpLightbox(){
  if(!expLightbox)return;
  expLightbox.close();
  document.body.style.overflow='';
}

if(expLightbox){
  const closeBtn=document.querySelector('#lightbox-close');
  const prevBtn=document.querySelector('#lightbox-prev');
  const nextBtn=document.querySelector('#lightbox-next');
  if(closeBtn)closeBtn.addEventListener('click',closeExpLightbox);
  if(prevBtn)prevBtn.addEventListener('click',()=>updateExpLightbox(currentExpIdx-1));
  if(nextBtn)nextBtn.addEventListener('click',()=>updateExpLightbox(currentExpIdx+1));
  expLightbox.addEventListener('click',e=>{if(e.target===expLightbox)closeExpLightbox();});
  document.addEventListener('keydown',e=>{
    if(expLightbox.open){
      if(e.key==='ArrowLeft'){e.preventDefault();updateExpLightbox(currentExpIdx-1);}
      else if(e.key==='ArrowRight'){e.preventDefault();updateExpLightbox(currentExpIdx+1);}
      else if(e.key==='Escape'){closeExpLightbox();}
    }
  });
}

if(expStack){
  expStack.addEventListener('click',e=>{
    const card=e.target.closest('.exp-card');
    if(card&&card.dataset.index!==undefined){openExpLightbox(parseInt(card.dataset.index,10));}
  });
  expStack.addEventListener('keydown',e=>{
    if((e.key==='Enter'||e.key===' ')&&e.target.closest('.exp-card')){
      e.preventDefault();
      openExpLightbox(parseInt(e.target.closest('.exp-card').dataset.index,10));
    }
  });
}

// Live India Time (IST) & Sun / Moon Celestial Transition
const HERO_SUN_SVG = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="2.8" fill="currentColor" stroke="none"/><line x1="8" y1="1.2" x2="8" y2="2.8"/><line x1="8" y1="13.2" x2="8" y2="14.8"/><line x1="1.2" y1="8" x2="2.8" y2="8"/><line x1="13.2" y1="8" x2="14.8" y2="8"/><line x1="3.2" y1="3.2" x2="4.4" y2="4.4"/><line x1="11.6" y1="11.6" x2="12.8" y2="12.8"/><line x1="3.2" y1="12.8" x2="4.4" y2="11.6"/><line x1="11.6" y1="4.4" x2="12.8" y2="3.2"/></svg>`;

const HERO_MOON_HTML = `<span class="hero-moon-wrap"><svg class="hero-moon-svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><span class="zzz-stream" aria-hidden="true"><span class="z-char z-1">z</span><span class="z-char z-2">z</span><span class="z-char z-3">Z</span></span></span>`;

let currentHeroIconMode = null;

function updateIndiaTime(){
  const timeVal = document.querySelector('#hero-time-val') || document.querySelector('#nav-time-val');
  if(!timeVal) return;
  const now = new Date();
  
  // Format current India Time: e.g. "5:18 PM India"
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  timeVal.textContent = `${timeFormatter.format(now)} India`;
  
  // After 6pm (>= 18:00) until 5am (< 05:00) IST: Moon
  // After 5am (>= 05:00) until 6pm (< 18:00) IST: Sun
  const params = new URLSearchParams(window.location.search);
  const preview = params.get('preview');
  let targetMode;
  if (preview === 'moon') {
    targetMode = 'moon';
  } else if (preview === 'sun') {
    targetMode = 'sun';
  } else {
    const hourFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      hourCycle: 'h23'
    });
    const indiaHour = parseInt(hourFormatter.format(now), 10) % 24;
    targetMode = (indiaHour >= 18 || indiaHour < 5) ? 'moon' : 'sun';
  }
  
  // Swap icon and update animation classes
  if (currentHeroIconMode !== targetMode) {
    const iconContainer = document.querySelector('#hero-time-icon') || document.querySelector('.hero-time-icon');
    if (iconContainer) {
      iconContainer.classList.remove('is-sun', 'is-moon');
      iconContainer.classList.add(targetMode === 'moon' ? 'is-moon' : 'is-sun');
      iconContainer.style.webkitAnimation = '';
      iconContainer.style.animation = '';
      iconContainer.innerHTML = targetMode === 'moon' ? HERO_MOON_HTML : HERO_SUN_SVG;
      currentHeroIconMode = targetMode;
    }
  }
}
updateIndiaTime();
setInterval(updateIndiaTime, 1000);

/* ==========================================================================
   Text-Focused Animation & Motion System
   ========================================================================== */

// 1. Dual-Track Tools Marquee Cloner (seamless infinite loop)
function initToolsMarquee() {
  const tracks = document.querySelectorAll('.tools-track');
  tracks.forEach(track => {
    if (track.dataset.duplicated === 'true') return;
    const items = Array.from(track.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
    track.dataset.duplicated = 'true';
  });
}

// 2. Hero Headline Masked Line Wipe (on page load with deliberate calm pause)
function initHeroLineWipe() {
  const heroHeading = document.querySelector('.hero .masked-heading');
  const heroEyebrow = document.querySelector('.hero .eyebrow');
  
  const trigger = () => {
    if (heroEyebrow) heroEyebrow.classList.add('in-view');
    if (heroHeading) heroHeading.classList.add('in-view');
  };

  // Wait 650ms after load so the visitor sees a still, calm page before the text gracefully glides up
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(trigger, 650);
    });
  } else {
    setTimeout(trigger, 650);
  }
}

// 3. Scroll-Triggered Text, Paragraph & Card Animations (IntersectionObserver)
function initScrollAnimations() {
  // Eyebrow reveals (for all eyebrows outside the hero)
  const eyebrowObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.eyebrow:not(.hero .eyebrow)').forEach(el => {
    eyebrowObserver.observe(el);
  });

  // Section headings line wipe (Strategy-minded & Let's make something)
  const headingObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.masked-heading:not(.hero .masked-heading)').forEach(el => {
    headingObserver.observe(el);
  });

  // Two-Tone Paragraph in About section (animate bold key phrases to full contrast)
  const aboutBio = document.querySelector('.about-copy > p:not(.eyebrow)');
  if (aboutBio) {
    const checkBioPosition = () => {
      const rect = aboutBio.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.70) {
        aboutBio.classList.add('highlight-in');
        window.removeEventListener('scroll', checkBioPosition);
      }
    };
    window.addEventListener('scroll', checkBioPosition, { passive: true });
    checkBioPosition();
  }

  // Card scroll entrance (projects & visual explorations) with 120ms index-based stagger
  const cardObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const idx = parseInt(card.dataset.animIndex || '0', 10);
        card.style.transitionDelay = `${(idx % 2) * 120}ms`;
        card.classList.add('in-view');
        obs.unobserve(card);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.project').forEach((card, idx) => {
    card.dataset.animIndex = idx;
    cardObserver.observe(card);
    if (card.getBoundingClientRect().top < window.innerHeight * 0.85) {
      card.classList.add('in-view');
    }
  });

  document.querySelectorAll('.exp-card').forEach((card, idx) => {
    card.dataset.animIndex = idx;
    cardObserver.observe(card);
    if (card.getBoundingClientRect().top < window.innerHeight * 0.85) {
      card.classList.add('in-view');
    }
  });
}

// 4. Sticky Nav Scroll Shrink with Glassmorphic Blur
function initNavScroll() {
  const navHeader = document.querySelector('header.nav');
  if (!navHeader) return;
  let navTicking = false;

  const onScroll = () => {
    const isScrolled = window.scrollY > 50;
    navHeader.classList.toggle('nav-scrolled', isScrolled);
  };

  window.addEventListener('scroll', () => {
    if (!navTicking) {
      requestAnimationFrame(() => {
        onScroll();
        navTicking = false;
      });
      navTicking = true;
    }
  }, { passive: true });

  onScroll();
}

// Run initializers
initToolsMarquee();
initHeroLineWipe();
initScrollAnimations();
initNavScroll();



