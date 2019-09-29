# Zaujímavé JavaScript projekty

- Script Runner - Atom package allowing users to run various script files inside of the text editor.
- Framer Motion - An open source and production-ready motion library for React on the web.
- Quill - A modern WYSIWYG editor built for compatibility and extensibility.

## Script Runner

### Ukážka rozšírenia

- Zdrojový kód: [https://github.com/ioquatix/script-runner](https://github.com/ioquatix/script-runner)
 
![Demo](https://github.com/ioquatix/script-runner/raw/master/resources/demo.gif)

### Popis rozšírenia

Rozšírenie textového editora Atom umožňujúce spustiť Javascript, Python a Ruby skripty, pričom používa plne funkčný terminál na výpisy.

### Architektúra rozšírenia

Rozšírenie je založené na CLI knižnici Xterm.js, ktorá umožňuje prevádzkovanie príkazového riadku na webe, rozširuje desktopovú aplikáciu.

## Framer Motion

### Ukážka knižnice

- Zdrojový kód: [https://github.com/framer/motion](https://github.com/framer/motion)
- Príklad: [https://www.framer.com/api/motion/examples/](https://www.framer.com/api/motion/examples/)

### Popis knižnice

Knižnica umožňuje animovanie objektov priamo v prehliadači, dokáže vytvárať interaktívne webstránky pomocou keyframou a prechodou, má podporu SVG.

### Architektúra knižnice

Knižnica používa React.js, a dá sa využiť priamo vo webovom prehliadači.

## Quill

### Ukážka aplikácie

- Zdrojový kód: [https://github.com/quilljs/quill](https://github.com/quilljs/quill)
- Príklad: [https://quilljs.com/playground/](https://quilljs.com/playground/)

### Popis aplikácie

Aplikácia umožňuje vytvorenie prispôsobený textový editor s podporou ritch textu. Užívateľ si môže vybrať ktoré funkcie chce využívať, či pozmeniť vzhľad editora.

### Architektúra aplikácie

Zdrojový kód aplikácia je v ES6 a využíva Webpack na organizovanie súborov, a beží priamo vo webovom prehliadači, prípadne na localhoste.
