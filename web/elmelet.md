Javascript láthatósági szintek:

- globális scope: mindenhol látható, pl. window, 
- függvény scope: a változó csak a függvényen belül látszik
- block scope: egy blokkon belül a létrehozott változókat csak a block látja
- modul scope: saját globális láthatósági szintjük van

Esemény vezérelt programozás: minden böngésző ezt követi, az alkalmazások egy eseméy bekövetkezésére várnak és reagálnak.

EventLoop: végrehajtás ütemezője, feladatokat és microtaskokat kezeli
Eventqeue: az események callbak jei kerülnek, 
CassStack: JS code aktuális hívási ütemezője
EventTarget: szinte bármely doom elem lehet eventtarget, 
Event: type, target, letiltás
addEventListener: eltávolítás--> remove(függvény)

Dome:
eseméy kezelés szintjei: window --> document --> ... célelem
bubleing(emit): célelem --> document --> window
target: célelem --> eventlistener

terjedésvezérlés: 
event.stopPropagation(), megállítja az esemény továbbterjedését a többi esemény felé
event.stopImmediatePropagation(), nem engedi hogy egy eventlistener ugyanarra az elemre mutasson
event.preventDefault(), megakadályozza az esemény alapvető böngészési működését(bekövetkezését), terjedési lánc nem szakad meg

EventListener: 
document.addEventListener('click', ()=>{}, {capture: true}) --> lánculás iránya
document.addEventListener('click', ()=>{}, {once: true}) --> egyszer lefut majd eltűnik
document.addEventListener('click', ()=>{}, {passive: true}) --> nem engedi hogy alapvető események lefussanak
document.addEventListener('click', ()=>{}, {signal: AbortController.signal}) --> ha abort megszakítja afolyamatot akkor autómatikusan eltávolításra kerül az esemény vezérlő

SetTimeOut: két paraméter: függvény, delay, nem garantál pontos időzítést, sorrendhelyes dolog, sorrendbe futnak le
változóba kimenteni igy kap id-t, --> clearTimeout(id) tudjuk törölni
max delay: 28.4 nap 
SetInterval: 
