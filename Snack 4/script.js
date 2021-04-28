$(function(){

  // squadra di basket
  const arrSquadra = [

    {
      giocatore: 'Francesco',
    },

    {
      giocatore: 'Gino',
    },

    {
      giocatore: 'Luca',
    },

    {
      giocatore: 'Peppe',
    }
  ];
  
  for(let sportivo of arrSquadra) {
    sportivo.codiceGiocatore = randomNumLett();
    sportivo.punteggio = randomNum(0, 50)
    sportivo.tiri = randomNum(0, 100);
  }


  // FUNZIONI
  function randomNumLett(){
    let codiceGiocatore = [];
    let randomLetter = 'ABCDEFGHAILMNOPQRSTUVZ';
    // creo un ciclo che aggiunge un numero e una lettere
    while(codiceGiocatore.length < 3){
      codiceGiocatore += (Math.floor(Math.random() * 10) + 1);
      codiceGiocatore +=(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length - 1)));
    }
    
    return codiceGiocatore;
  }
  
  // funzione che crea numero random per media punti
  function randomNum(min, max){
    var punteggio = [];
    punteggio.push(Math.floor(Math.random() * (max - min + 1)) + min);

    return punteggio
  }

  console.log(arrSquadra)
})