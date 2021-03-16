
//creo l'oggetto studente
var studente = {
  nome: 'Lorenzo',
  cognome: ['De sossi'],
  età: '19',
}

var studente2 = {
  nome: 'Michele',
  cognome: ['Pippo'],
  età: '18',
}

var studente3 = {
  nome: 'Antonio',
  cognome: ['Pluto'],
  età: '22',
}

//stampo a schermo l'oggetto studente
for (var key in studente) {
  console.log(key, studente[key]);
}

//creo array di oggetti
