# Zaujímavé JavaScript projekty

- Script Runner - Atom package allowing users to run various script files inside of the text editor.
- Framer Motion - An open source and production-ready motion library for React on the web.
- Quill - A modern WYSIWYG editor built for compatibility and extensibility.

## Script Runner

### Ukáka rozšírenia

- Zdrojovı kód: [https://github.com/ioquatix/script-runner](https://github.com/ioquatix/script-runner)
 
![Demo](https://github.com/ioquatix/script-runner/raw/master/resources/demo.gif)

### Popis rozšírenia

Rozšírenie textového editora Atom umoòujúce spusti Javascript, Python a Ruby skripty, prièom pouíva plne funkènı terminál na vıpisy.

### Architektúra rozšírenia

Rozšírenie je zaloené na CLI kninici Xterm.js, ktorá umoòuje prevádzkovanie príkazového riadku na webe, rozširuje desktopovú aplikáciu.

## Framer Motion

### Ukáka kninice

- Zdrojovı kód: [https://github.com/framer/motion](https://github.com/framer/motion)
- Príklad: [https://www.framer.com/api/motion/examples/](https://www.framer.com/api/motion/examples/)

### Popis kninice

Kninica umoòuje animovanie objektov priamo v prehliadaèi, dokáe vytvára interaktívne webstránky pomocou keyframou a prechodou, má podporu SVG.

### Architektúra kninice

Kninica pouíva React.js, a dá sa vyui priamo vo webovom prehliadaèi.

## Quill

### Ukáka aplikácie

- Zdrojovı kód: [https://github.com/quilljs/quill](https://github.com/quilljs/quill)
- Príklad: [https://quilljs.com/playground/](https://quilljs.com/playground/)

### Popis aplikácie

Aplikácia umoòuje vytvorenie prispôsobenı textovı editor s podporou ritch textu. Uívate¾ si môe vybra ktoré funkcie chce vyuíva, èi pozmeni vzh¾ad editora.

### Architektúra aplikácie

Zdrojovı kód aplikácia je v ES6 a vyuíva Webpack na organizovanie súborov, a beí priamo vo webovom prehliadaèi, prípadne na localhoste.