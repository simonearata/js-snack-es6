$(function(){
  
  // array di oggetti
  const arrAnimal = [
    {
      nome: 'leone',
      famiglia: 'felidi',
      classe: 'mammiferi',
    },
    {
      nome: 'cane',
      famiglia: 'canidi',
      classe: 'mammiferi',
    },
    {
      nome: 'gallina',
      famiglia: 'fasianidi',
      classe: 'uccelli',
    },
    {
      nome: 'delfino',
      famiglia: 'delfinidi',
      classe: 'mammiferi',
    },
  ]

  // filtro per trovare solamente gli animali che hanno la classe mammiferi
  const mammiferi = arrAnimal.filter((animale) => {
    
    return animale.classe === 'mammiferi'
  })

  console.log(mammiferi)

})