//1. feladat
let szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let osszeg = 0;

for (let i = 0; i < szamok.length; i++) {
  if (szamok[i] % 2 === 0) {
    osszeg = osszeg + szamok[i];
  }
}
//5. feladat
let szam = [3, 13, 8, 2, 852];

let legn = szam[0];

for (let i = 1; i < szam.length; i++) {
  if (szam[i] > legn) {
    legn = szam[i];
  }
}

//10, feladat
let szam2 =[1, 2, 32, 15, 25];
let ossz = 0;

for (let i = 0; i < szam2.length; i++) {
    ossz = ossz+ szam2[i];
}


