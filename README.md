# 4health&beauty — redizajn

Responzívny statický web v slovenčine. Bez inštalácie závislostí a bez build kroku. Na vlastný hosting stačí skopírovať obsah `dist/`.

## Obsah a podklady

- https://4hb.eu/ a https://4hb.eu/script.js — služby, mená terapeutov, priamy kontakt, adresa, návštevy na objednávku.
- https://4hb.eu/picture/background.jpg — skutočná fotografia salónu, optimalizovaná ako `dist/assets/salon.jpg`.
- https://www.zlavomat.sk/podnik/40396-4health-beauty-masaze-a-maderoterapia — 4,8/5, 88 hodnotení, dva krátke citáty, informácie o prístupe. Overené pri návrhu 17. 11. 2026.
- https://www.instagram.com/4healthbeauty_4hb/ — overený profil prepojený z pôvodného webu. Obsah Instagramu sa nepodarilo načítať; nevymýšľali sa príspevky ani údaje.
- https://www.pexels.com/photo/19641818/ — ilustračná fotografia masáže, Jonathan Borba. Lokálne uložená ako `dist/assets/hero.jpg`. Nejde o fotografiu terapeutov salónu. Použitie podľa licencie Pexels: https://www.pexels.com/license/.
- Písma Prata a DM Sans z Google Fonts, lokálne uložené.

## Objednávanie

Dialóg podľa služby priradí terapeuta, pripraví text SMS alebo e-mailu, umožní zadať nepovinné meno a preferovaný dátum. Údaje sa neposielajú na server ani neukladajú. SMS/e-mail otvára príslušnú aplikáciu návštevníka. Termín je potrebné potvrdiť so salónom. Web nepoužíva rezervačný kalendár a nemá napojenie na systém salónu.

Aktuálne ceny a dĺžky služieb neboli overené, preto ich web neuvádza. Pôvodná doména 4hb.eu nebola týmto návrhom zmenená.

## Overenie

- Vizuálna kontrola počítača a mobilu (390 px); opravené presahovanie fotografie.
- Skontrolované mobilné menu, rozbaľovanie služieb, otvorenie a zavretie dialógu, prepojenie maderoterapie na správny kontakt a tvorba e-mailu.
- Kontrola syntaxe JavaScriptu a existencie miestnych odkazov a súborov.
- Prehliadač počas kontroly nezaznamenal chyby ani varovania.
- Skutočná SMS ani e-mail sa počas testovania neodosielali.
