$(function(){
  
  // array di oggetti
  const arrPeople = [
    {
      nome: 'Gino',
      cognome: 'Verdi',
      eta: 60,
    },
    {
      nome: 'Luigi',
      cognome: 'Bianchi',
      eta: 32,
    },
    {
      nome: 'Peppe',
      cognome: 'Neri',
      eta: 12,
    },
    {
      nome: 'Francesco',
      cognome: 'Porta',
      eta: 5,
    }
  ];

  
  // creo il nuovo array 
  const newPeople = arrPeople.map((people) => {
    
    // variabili che in base all'età vengono richiamate
    let guidare = ` ${people.nome} può guidare `;
    let noGuidare = ` ${people.nome} non può guidare `;     
    let guida = (people.eta > 18) ? guidare : noGuidare;
  
    return{
     ...people,
      guida
    }
  
  })

  console.log(newPeople)

  // funzioni
  // funzione che deternima in base all'età se si può guidare o no
  /* function peopleDrive (nome) {
    
    let guidare = ` ${nome} può guidare `;
    let noGuidare = ` ${nome} non può guidare `;     
    let guida = (arrPeople.eta > 5) ? guidare : noGuidare;

    return{
      ...arrPeople,
      guida
    }
  }; */

})


