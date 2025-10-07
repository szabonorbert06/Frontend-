# Ismétlés

## Történelmi áttekintő

1,  ECMAScript: - weboldal okosítás - kevés felhasználó/bonyolult kezelhetőség
2,  JS könyvtár: - JQuery $() - egyszerűsíteni a nehézségeket - sok uj de eltérő szintaxis - népszerű egyszerű - bootstrap
3,  Dinamikus weboldal létrehozása: - modern nyelvi eszközök - változók, függvények ujragondolása, uj adfatszerkezetek, beépitett függvények, átvették a könyvtárak szerepét
4,  frontend keretrendszer: meglévő problémára adott válasz, kompex js könyvtár, html+css be is belenyúl, who js, (html{JS}html), 
goodle-angular, meta-react,
Vuo. js, Express.js(backend), 
Node.js, --> megszünik a böngészőtől való függés, önálló szerverfuttatás, Vite, full js stack ek, 2 fajta adatbázis, 
front-back end fejlesztés egyszerre(fullstack)
böngésző-- képer alkalmazásként működni(lightmade)
Node: 
Defer(késleltetett betöltés) -- skript után irva, (<script src"main.js" defer><script>)
JS tulajdonságai: - C alapú programozási nyelv/script nyelv
                  - gyengén típusos
                  - értelmezett programozási nyelv -- böngésző értelmezi, 
                  - js opcionális eleme: ;(pontosvessző)

    Változók/típusok: 1, var: deffiniálás nélkül használható
                      2, let: általános változó
                      3, cons: állandó, érték nem változik
    Típusok: - számtípus: number --> egész és valósszámokat is tárol, 53 bit-en, NAN --> nem tárol, 
             - bigint: csak egész számok tárolása 64 biten, csak bigintel hajt végre jelölése: nagy N a szám után (102N)
             - strint: szöveget tárol, összevonja a szövegeket, indexelhető!-->karaktert kapsz vissza, jelölés: "" és ''
             templateliteral: \\, egyértelmű/hybrid, {{}}
             - boolean: hagyományos logikai változó, true/false értékek 
             - undifiend: (értékadás --> =), 
             - null: változó hivatkozik valamire de az megszűnt
             - symbol: speciális string, minden példány teljesen egyedi, kulcsnak jo, 

    Vezérlési szerkezetek: - ciklus: ismétlődés 
                                - while: addig fut ameddig a feltétel igaz, várható lefutás azáma--> 0, 
                                - do while: egyszer mindenképpen lefut, 
                                - for: ciklusváltozó--> logikai feltétel--> lépésszám; 0-szor biztosan lefut            
                                - for...in: visszaadja egy gyűjtemény összes indexét, 
                                - for...of: visszaadja az elemek összes elemét, 
                           - elágazás: kiválasztás, szelekció, 
                                - if: elágazásban elfogadott feltétel teljesül
                                - if else: több lehetőség
                                - else: többirányú 
                                - else if: végtelen, 
                                - swich case: 
    Logikai operátorok: - és/vagy: &&, ||
                        - true/false: 
                        - összeadás/kivonás:  
                        - szorzás/osztás: 
                        - == értékben egyenlő
                        - === értékben és típusban is egyenlő
                        - kisebb vagy egyenlő >=
                        - nagyobb vagy egyenlő <=
                        - kisebb >
                        - nagyobb <
                               
| AND | 0 | 1 |
|----|----|----|
|  0 |  0 |  0 |
|  1 |  0 | 1  |
 
| OR | 0 | 1 |
|----|----|----|
|  0 |  0 |  1 |
|  1 |  1 |  1 |


    Arraí: Tömb, - indexelhető 
                 - értékeket/adatokat tárol rendezetten
                 - több tiposú elemet is tárolhatunk benne
                 - const kulcsszóval deklarálunk
                 - tömböt tudunk tömben tárolni
                 - végtelen, mérete dinamikusan változtatható
                 - többfajta metódusa van: 
                 - nem homogén
                 - literal []
                 - Array an array eldönti hogy ténylegesen egy array(adatszerkezet-e)
                                    Array lenght() --> visszaadja a tömb hosszát
                                    Array toString() --> vesszővel elválasztva adja vissza az elemeket
                                    Array at() 
                                    Array join() --> beveszi az elemeket a tömbbe
                                    Array pop() --> eltávolítja az utolsó elemet a tömbből
                                    Array push() --> új elemet ad hozzá a tömbböz, a végére teszi, növeli a tömb méretét
                                    Array shift()
                                    Array unshift()
                                    Array delete()
                                    Array concat()
                                    Array copyWithin()
                                    Array flat()
                                    Array slice()
                                    Array splice()
                                    Array toSpliced()


SET, MAP, mi a külömbség const, literal, 




                 
