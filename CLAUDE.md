# Club Pesca Caiac Catalunya — Web

## Stack
HTML estàtic pur + CSS + JS vanilla. Sense frameworks, sense build tools, sense Node/npm.
Servidor local de preview: `python3 -m http.server 9000` (des de `/home/xavier/webclub`)

## Estructura
```
webclub/
├── index.html             # Landing page (slider + cards + formulari)
├── presentacio.html
├── valors.html            # Graella 3×3 amb tarjetes espargides + esfera Decàleg al centre
├── objectius.html
├── qui-som.html
├── beneficis.html
├── fer-se-soci.html       # Taula de preus + formulari d'inscripció (Formspree)
├── contacte.html          # Telèfon: +34 605 989 814 · Ubicació: Port del Garraf
├── collaboradors.html     # Clubs amics + Empreses del sector amb logos i enllaços
├── decaleg.html
├── condicions.html
├── enllacos.html
├── recursos/              # Logos de clubs i empreses col·laboradores
└── assets/
    ├── css/styles.css     # Tot el CSS en un sol fitxer
    ├── js/
    │   ├── components.js  # Header + footer injectats dinàmicament a totes les pàgines
    │   └── script.js      # Lògica per pàgina (slider, decàleg, formularis)
    └── img/               # Imatges principals
```

## Decisions de disseny
- **Header**: fila blanca (logo PNG transparent + "Club Pesca Caiac Catalunya" en Cinzel + botó Lliga taronja) + barra de navegació blava marina centrada (width: fit-content, no full-width)
- **Max-width general**: 960px (alineat amb l'amplada de la barra de navegació)
- **Pàgines internes** (`.page-main`): max-width 960px, centrades, banner compacte amb badge daurada (Cinzel, border-radius 50px)
- **Valors**: graella 3×3 — 8 tarjetes amb rotació individual (efecte "cartes llançades") + esfera Decàleg al centre (injectat per JS a l'índex 4 de l'array)
- **Col·laboradors**: tarjetes informatives (clubs/empreses) + logos amb enllaços externs

## Formularis
- Formspree endpoint: `https://formspree.io/f/xkoywnyw`
- Pàgines amb formulari: `fer-se-soci.html`, `contacte.html`, `index.html` (Preguntan's)

## Xarxes socials
- Facebook: https://www.facebook.com/clubpescacaiaccatalunya/
- Instagram: https://www.instagram.com/clubpescacaiaccatalunya/

## GitHub
- Usuari git: DeckardNetto (rfonsi89@gmail.com)
