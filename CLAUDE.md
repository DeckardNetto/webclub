# Club Pesca Caiac Catalunya — Web

## Stack
HTML estàtic pur + CSS + JS vanilla. Sense frameworks, sense build tools, sense Node/npm.
Servidor local de preview: `python3 -m http.server 9000` (des de `/home/xavier/webclub`)

## Estructura
```
webclub/
├── index.html                  # Landing page (slider + cards + formulari)
├── presentacio.html
├── valors.html                 # Graella 3×3 amb tarjetes + esfera Decàleg al centre
├── objectius.html
├── qui-som.html
├── beneficis.html
├── fer-se-soci.html            # Taula de preus + formulari d'inscripció (Formspree)
├── contacte.html               # Telèfon: +34 605 989 814 · Ubicació: Port del Garraf
├── collaboradors.html          # Clubs amics + Empreses del sector amb logos i enllaços
├── decaleg.html
├── condicions.html
├── enllacos.html
├── seguretat.html              # Protocol de seguretat (bento grid) + botó checklist PDF
├── checklist-seguretat.html    # Checklist imprimible/PDF per pre-sortida
├── CNAME                       # Domini personalitzat: pescacaiaccatalunya.club
├── recursos/                   # Logos de clubs i empreses col·laboradores
└── assets/
    ├── css/styles.css          # Tot el CSS en un sol fitxer
    ├── js/
    │   ├── components.js       # Header + footer injectats dinàmicament a totes les pàgines
    │   └── script.js           # Lògica per pàgina (slider, decàleg, formularis)
    └── img/                    # Imatges principals
```

## Decisions de disseny
- **Header**: fila blanca (logo PNG transparent + "Club Pesca Caiac Catalunya" en GaroaHackerClube + botó Lliga taronja) + barra de navegació blava marina centrada (width: fit-content)
- **Max-width general**: 960px (alineat amb l'amplada de la barra de navegació)
- **Pàgines internes** (`.page-main`): max-width 960px, centrades
- **Valors**: graella 3×3 — 8 tarjetes + esfera Decàleg al centre (injectat per JS a l'índex 4)
- **Col·laboradors**: tarjetes informatives (clubs/empreses) + logos amb enllaços externs
- **Icones de tarjetes**: color taronja `var(--color-accent)` — classes `.card-icon` i `.collab-card-icon`
- **Tags de seguretat**: OBL.=vermell `#dc2626`, COND.=taronja `#e85c1b`, REC.=groc `#eab308` (text fosc)

## Pàgina Seguretat
- `seguretat.html`: protocol tècnic en format bento grid (5 blocs: equip personal, eines, procediments, meteorologia, emergències)
- `checklist-seguretat.html`: checklist pre-sortida imprimible/PDF — s'obre des d'un botó a seguretat.html. Inclou camps de data i zona, caselles per marcar, i telèfons d'emergència. Botó "Descarregar / Imprimir PDF" usa `window.print()`

## Formularis
- Formspree endpoint: `https://formspree.io/f/xkoywnyw`
- Pàgines amb formulari: `fer-se-soci.html`, `contacte.html`, `index.html` (Preguntan's)

## Xarxes socials
- Facebook: https://www.facebook.com/clubpescacaiaccatalunya/
- Instagram: https://www.instagram.com/clubpescacaiaccatalunya/

## GitHub i desplegament
- Repositori: https://github.com/DeckardNetto/webclub.git
- Usuari git: DeckardNetto (rfonsi89@gmail.com)
- Branca principal: `master`
- GitHub Pages actiu → domini personalitzat: `pescacaiaccatalunya.club`
- DNS configurats a CDmon: 4 registres A apuntant a GitHub Pages (185.199.108-111.153) + CNAME www → deckardnetto.github.io

## Com clonar a un ordinador nou
```bash
git clone https://github.com/DeckardNetto/webclub.git
cd webclub
python3 -m http.server 9000
```
Per fer push cal un Personal Access Token de GitHub (crear a: github.com → Settings → Developer settings → Personal access tokens → Fine-grained → repo webclub amb permís Contents: Read and write).
