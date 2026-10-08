// Live India Time (IST) & Sun / Moon Celestial Transition
const HERO_SUN_SVG = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="2.8" fill="currentColor" stroke="none"/><line x1="8" y1="1.2" x2="8" y2="2.8"/><line x1="8" y1="13.2" x2="8" y2="14.8"/><line x1="1.2" y1="8" x2="2.8" y2="8"/><line x1="13.2" y1="8" x2="14.8" y2="8"/><line x1="3.2" y1="3.2" x2="4.4" y2="4.4"/><line x1="11.6" y1="11.6" x2="12.8" y2="12.8"/><line x1="3.2" y1="12.8" x2="4.4" y2="11.6"/><line x1="11.6" y1="4.4" x2="12.8" y2="3.2"/></svg>`;

const HERO_MOON_HTML = `<span class="hero-moon-wrap"><svg class="hero-moon-svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><span class="zzz-stream" aria-hidden="true"><span class="z-char z-1">z</span><span class="z-char z-2">z</span><span class="z-char z-3">Z</span></span></span>`;

let currentHeroIconMode = null;

function updateIndiaTime(){
  const timeVal = document.querySelector('#hero-time-val');
  if(!timeVal) return;
  const now = new Date();
  
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  timeVal.textContent = `${timeFormatter.format(now)} India`;
  
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
  
  if (currentHeroIconMode !== targetMode) {
    const iconContainer = document.querySelector('#hero-time-icon');
    if (iconContainer) {
      iconContainer.classList.remove('is-sun', 'is-moon');
      iconContainer.classList.add(targetMode === 'moon' ? 'is-moon' : 'is-sun');
      iconContainer.innerHTML = targetMode === 'moon' ? HERO_MOON_HTML : HERO_SUN_SVG;
      currentHeroIconMode = targetMode;
    }
  }
}
updateIndiaTime();
setInterval(updateIndiaTime, 1000);

// Sticky Nav Scroll Shrink with Glassmorphic Blur
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
initNavScroll();
