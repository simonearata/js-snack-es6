$(function(){

  // FUNZIONI
  // funzione freccia che crea numero random per media punti
  const randomNum = (min, max) => {
    let punteggio = [];
    punteggio.push(Math.floor(Math.random() * (max - min + 1)) + min);

    return punteggio
  }

  const randomNumLett = () => {
    let codiceGiocatore = [];
    let randomLetter = 'ABCDEFGHAILMNOPQRSTUVZ';
    // creo un ciclo che aggiunge un numero e una lettere
    while(codiceGiocatore.length < 6){
      codiceGiocatore += (Math.floor(Math.random() * 9) + 1);
      codiceGiocatore +=(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length - 1)));
    }
    
    return codiceGiocatore;
  }

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
  
  // ciclo for per aggiungere le statistiche ai giocatori
  for(let sportivo of arrSquadra) {
    sportivo.codiceGiocatore = randomNumLett();
    sportivo.punteggio = randomNum(0, 50)
    sportivo.tiri = randomNum(0, 100);
  }
  
  
  
  console.log(arrSquadra)
})