$(function(){
  
  const arrCar = [
    {
      marca: 'renault',
      modello: 'twingo',
      alimentazione: 'benzina'
    },
    {
      marca: 'audi',
      modello: 'x3',
      alimentazione: 'diesel'
    },
    {
      marca: 'jeep',
      modello: 'renegade',
      alimentazione: 'benzina'
    },
    {
      marca: 'mercedes',
      modello: 'tr3',
      alimentazione: 'elettrico'
    },
    {
      marca: 'renault',
      modello: 'prt',
      alimentazione: 'metano'
    },
    {
      marca: 'toyota',
      modello: 'pp3',
      alimentazione: 'diesel'
    },
    {
      marca: 'mercedes',
      modello: '4x4',
      alimentazione: 'benzina'
    },
    {
      marca: 'jeep',
      modello: 'granturismo',
      alimentazione: 'elettrico'
    },
    {
      marca: 'bmw',
      modello: 'corsa',
      alimentazione: 'metano'
    },
    {
      marca: 'smart',
      modello: '4posti',
      alimentazione: 'diesel'
    }
  ];

  const carBenzina = arrCar.filter((car) => car.alimentazione === 'benzina')
  const carDiesel = arrCar.filter((car) => car.alimentazione === 'diesel')
  const carAltre = arrCar.filter((car) => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel')

  
})