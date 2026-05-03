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
      icon: '⚧',
      titol: 'Condició de gènere',
      text: "Promocionar la activitat facilitant l'accés a la dona bé mitjançant la promoció al col·lectiu bé treballant amb entitats com l'Institut Català de la Dona."
    },
    {
      icon: '🔬',
      titol: 'Col·laboració amb la Comunitat Científica',
      text: "Ens posarem a disposició d'aquelles Entitats i Institucions per tal de participar en aquelles tasques en les que l'associat pugui ser-ne útil: seguiment de peixos, marcatge, reculls de fons marí..."
    },
    {
      icon: '🌍',
      titol: 'Promoure la Ciència Ciutadana',
      text: "Basant-nos en la informació rebuda mitjançant la observació, exploració i posterior recollida de dades del medi ambient la farem arribar a aquells Ens o Institucions amb les que hi col·laborem."
    },
    {
      icon: '🌿',
      titol: 'Promoure el respecte a la natura i el medi ambient',
      text: "Com a referents en la pesca responsable, sostenible i respectuosa amb el medi, fomentarem aquella pesca que promogui l'alliberament i la pesca de peixos i fer-ho de la millor manera possible causant el mínim dany a les espècies pescades."
    },
    {
      icon: '🧒',
      titol: 'Promoure la activitat als joves',
      text: "Fomentarem l'ús del caiac com a mitjà per integrar-se i fomentar el respecte pel medi ambient i la naturalesa practicant una pesca responsable, segura i sostenible des dels inicis."
    },
    {
      icon: '♿',
      titol: 'Esport adaptat',
      text: "Hi ha col·lectius que han de poder gaudir tant de la part recreativa de l'activitat com esportiva. Col·laborarem per facilitar l'accés a l'Activitat a aquells col·lectius amb certes discapacitats col·laborant amb aquelles entitats i associacions que els representen."
    },
    {
      icon: '⚓',
      titol: "Col·laborar amb la gestió de l'activitat i cogestió de les activitats marítimes",
      text: "Harmonitzar els interessos i minimitzar els conflictes entre els diferents col·lectius que compartim el medi. Ser interlocutors vàlids i únics."
    },
    {
      icon: '🤝',
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
    liItems.splice(4, 0, `<li class="decaleg-center"><span class="decaleg-center-icon">📜</span><p class="decaleg-center-title">Decàleg<br>del Club</p><a href="decaleg.html" class="btn-decaleg">Llegir-lo →</a></li>`);

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
