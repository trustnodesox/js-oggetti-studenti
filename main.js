
//creo l'oggetto studente
var studente = {
  nome: 'Lorenzo',
  cognome: 'De sossi',
  età: '19',
}

var studente2 = {
  nome: 'Michele',
  cognome: 'Pippo',
  età: '18',
}

var studente3 = {
  nome: 'Antonio',
  cognome: 'Pluto',
  età: '22',
}

//stampo a schermo l'oggetto studente
for (var key in studente) {
  console.log(key, studente[key]);
}

//creo array di oggetti
var classe = [studente, studente2, studente3];
console.log(classe);

//stampo nome e cognome di tutti gli studenti
for (var i = 0; i < classe.length; i++) {
  console.log(classe[i].nome + ' ' + classe[i].cognome)
}


$('#invio').click(function () {
  var nome = $("#nome").val();
  var cognome = $("#cognome").val();
  var data = $("#data").val();
  var studente4 = {
    nome: nome,
    cognome: cognome,
    età: data
  }
  classe.push(nome + cognome + data);
  console.log(classe);
})
