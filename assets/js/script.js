/* =========================================================
   script.js — lògica per pàgina
   ========================================================= */

const page = window.location.pathname.split('/').pop() || 'index.html';

/* ----- index.html: Hero Slider ----- */
if (page === 'index.html' || page === '') {
  (function () {
    const slides   = document.querySelectorAll('.slide');
    const dotsWrap = document.getElementById('slider-dots');
    const prevBtn  = document.querySelector('.slider-prev');
    const nextBtn  = document.querySelector('.slider-next');
    let current = 0;
    let timer;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Imatge ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    function goTo(n) {
      slides[current].classList.remove('active');
      dotsWrap.children[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dotsWrap.children[current].classList.add('active');
      resetTimer();
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 5000);
    }

    slides[0].classList.add('active');
    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    resetTimer();
  })();
}

/* ----- valors.html i decaleg.html: Decàleg ----- */
if (page === 'valors.html' || page === 'decaleg.html') {
  const decalegItems = [
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="9" r="5"/><line x1="12" y1="14" x2="12" y2="22"/><line x1="8" y1="18" x2="16" y2="18"/></svg>',
      titol: 'Condició de gènere',
      text: "Promocionar la activitat facilitant l'accés a la dona bé mitjançant la promoció al col·lectiu bé treballant amb entitats com l'Institut Català de la Dona."
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v10l4.5 6.5A2 2 0 0 1 18 22H6a2 2 0 0 1-1.5-2.5L9 13z"/><line x1="6" y1="3" x2="18" y2="3"/></svg>',
      titol: 'Col·laboració amb la Comunitat Científica',
      text: "Ens posarem a disposició d'aquelles Entitats i Institucions per tal de participar en aquelles tasques en les que l'associat pugui ser-ne útil: seguiment de peixos, marcatge, reculls de fons marí..."
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      titol: 'Promoure la Ciència Ciutadana',
      text: "Basant-nos en la informació rebuda mitjançant la observació, exploració i posterior recollida de dades del medi ambient la farem arribar a aquells Ens o Institucions amb les que hi col·laborem."
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
      titol: 'Promoure el respecte a la natura i el medi ambient',
      text: "Com a referents en la pesca responsable, sostenible i respectuosa amb el medi, fomentarem aquella pesca que promogui l'alliberament i la pesca de peixos i fer-ho de la millor manera possible causant el mínim dany a les espècies pescades."
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.5"/><path d="M2 15h8l2-5 2 5h8"/><line x1="12" y1="7.5" x2="12" y2="15"/><path d="M3 18c5 3 13 3 18 0"/></svg>',
      titol: 'Promoure la activitat als joves',
      text: "Fomentarem l'ús del caiac com a mitjà per integrar-se i fomentar el respecte pel medi ambient i la naturalesa practicant una pesca responsable, segura i sostenible des dels inicis."
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"/><path d="M10 7v7h6"/><path d="M16 10h4l-2 8"/><circle cx="10" cy="19" r="3"/></svg>',
      titol: 'Esport adaptat',
      text: "Hi ha col·lectius que han de poder gaudir tant de la part recreativa de l'activitat com esportiva. Col·laborarem per facilitar l'accés a l'Activitat a aquells col·lectius amb certes discapacitats col·laborant amb aquelles entitats i associacions que els representen."
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="3"/><line x1="12" y1="10" x2="12" y2="21"/><path d="M5 14h14"/><path d="M5 14c0 6 14 6 14 0"/></svg>',
      titol: "Col·laborar amb la gestió de l'activitat i cogestió de les activitats marítimes",
      text: "Harmonitzar els interessos i minimitzar els conflictes entre els diferents col·lectius que compartim el medi. Ser interlocutors vàlids i únics."
    },
    {
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
      titol: 'Amistat i companyerisme',
      text: "Compartir el plaer per la natura i la pesca i fer-ho des de l'amistat i el companyerisme i bon ambient és fonamental."
    }
  ];

  const listEl = document.getElementById('decaleg-list');
  if (listEl) {
    const liItems = decalegItems.map(item => `
      <li>
        <div>
          <div class="decaleg-item-title"><span class="card-icon">${item.icon}</span>${item.titol}</div>
          <div class="decaleg-item-text">${item.text}</div>
        </div>
      </li>
    `);

    // Targeta Decàleg al centre (posició 5 = índex 4)
    liItems.splice(4, 0, `<li class="decaleg-center"><span class="decaleg-center-icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="2"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/></svg></span><p class="decaleg-center-title">Decàleg<br>del Club</p><a href="decaleg.html" class="btn-decaleg">Llegir-lo</a></li>`);

    listEl.innerHTML = liItems.join('');
  }
}

/* ----- fer-se-soci.html: Formulari Soci ----- */
if (page === 'fer-se-soci.html') {
  const sociForm   = document.getElementById('soci-form');
  const sociStatus = document.getElementById('form-status');

  sociForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!sociForm.checkValidity()) { sociForm.reportValidity(); return; }
    const btn = sociForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviant...';
    try {
      const res = await fetch(sociForm.action, {
        method: 'POST',
        body: new FormData(sociForm),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        showStatus(sociStatus, 'success', 'Sol·licitud enviada correctament. Ens posarem en contacte amb tu aviat!');
        sociForm.reset();
      } else throw new Error();
    } catch {
      showStatus(sociStatus, 'error', "Hi ha hagut un error. Torna-ho a intentar o contacta'ns directament.");
    } finally {
      btn.disabled = false;
      btn.textContent = 'Enviar';
    }
  });
}

/* ----- contacte.html: Formulari Contacte ----- */
if (page === 'contacte.html') {
  const contacteForm   = document.getElementById('contacte-form');
  const contacteStatus = document.getElementById('contacte-form-status');

  contacteForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!contacteForm.checkValidity()) { contacteForm.reportValidity(); return; }
    const btn = contacteForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviant...';
    try {
      const res = await fetch(contacteForm.action, {
        method: 'POST',
        body: new FormData(contacteForm),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        showStatus(contacteStatus, 'success', "Missatge enviat! Et respondrem el més aviat possible.");
        contacteForm.reset();
      } else throw new Error();
    } catch {
      showStatus(contacteStatus, 'error', "Hi ha hagut un error. Torna-ho a intentar o contacta'ns directament.");
    } finally {
      btn.disabled = false;
      btn.textContent = 'Enviar missatge';
    }
  });
}

/* ----- index.html: Formulari Preguntan's ----- */
if (page === 'index.html' || page === '') {
  const preguntesForm   = document.getElementById('preguntes-form');
  const preguntesStatus = document.getElementById('preguntes-status');
  if (preguntesForm) {
    preguntesForm.addEventListener('submit', async e => {
      e.preventDefault();
      if (!preguntesForm.checkValidity()) { preguntesForm.reportValidity(); return; }
      const btn = preguntesForm.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Enviant...';
      try {
        const res = await fetch(preguntesForm.action, {
          method: 'POST',
          body: new FormData(preguntesForm),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          showStatus(preguntesStatus, 'success', 'Missatge enviat! Et responem aviat.');
          preguntesForm.reset();
        } else throw new Error();
      } catch {
        showStatus(preguntesStatus, 'error', "Hi ha hagut un error. Torna-ho a intentar.");
      } finally {
        btn.disabled = false; btn.textContent = 'Enviar';
      }
    });
  }
}

/* ----- Utilitat compartida ----- */
function showStatus(el, type, msg) {
  el.textContent = msg;
  el.className = `form-status ${type}`;
  setTimeout(() => { el.className = 'form-status'; el.textContent = ''; }, 7000);
}
