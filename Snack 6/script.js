$(function(){
  
  // variabili
  let arr1 = ['a', 'b', 'c', 'd', 'e'];
  let arr2 = ['f', 'g', 'h'];
  let randomLetter = 'abcdefghijklmnopqrstuvwxyz';

  // ciclo che confranta la lunghezza dei due array e se diversa
  while(arr1.length != arr2.length) {
    
    // pusha nel secondo array lettere casuali fino a quando non ha la stessa lunghezza dell'altro
    if(arr1.length > arr2.length) {
      arr2.push(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length)));
    }else {
      arr1.push(randomLetter.charAt(Math.floor(Math.random() * randomLetter.length)));
    }
  }

  console.log(arr1);
  console.log(arr2);

})