
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

//stampo in console.log l'oggetto studente
for (var key in studente) {
  console.log(key, studente[key]);
}

//creo array di oggetti
var classe = [studente, studente2, studente3];
console.log(classe);



//raccolgo i dati forniti dall'utente e li compilo in nome-cognome-età
$('#invio').click(function () {
  var nome = $('input:text#nome').val();
  var cognome = $('input:text#cognome').val();
  var eta = $('#età').val();
  var studente4 = {
    nome: nome,
    cognome: cognome,
    età: eta
  }
  classe.push(studente4);
  //stampo a schermo nome e cognome di tutti gli studenti
  for (var i = 0; i < classe.length; i++) {
    document.getElementById('registro').innerHTML += "<li>" + classe[i].nome + " " + classe[i].cognome + "</li>";
}

//stampo nome e cognome di tutti gli studenti
})
