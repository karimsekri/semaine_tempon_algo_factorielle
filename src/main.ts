let nbr = 5;
console.log(nbr);
const resultat = factorielle(nbr);
console.log("le factorielle de " + nbr + " est :" ,resultat);

function factorielle(nombre: number): number {
  let res = 1;
  while (nombre > 1) {
    res = res * nombre ;
    nombre--;
  }
  return res;
}