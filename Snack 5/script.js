$(function(){
  
  // funzione che mi restituisce un array in cui sono stati pushati le lettere in base alla distanza di a da b
  const snack5 = (arr, a, b) =>{
    let arrReturn = [];
  
    for (let i in arrAlfabeto) {
      if(i >= a && i <= b) {
        arrReturn.push(arr[i]);
      }
    }
  
    return arrReturn; 
  }

  const arrAlfabeto = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z"];
  
  // chiediamo di inserire due numeri
  let a = parseInt(prompt(
  `
  inserisci un numero fra 0 e ${arrAlfabeto.length}

  `
  ));

  let b = parseInt(prompt(
  `
  inserisci un numero maggiore del precedente fra ${a + 1} e ${arrAlfabeto.length}

  `
  ));
  

  console.log(snack5(arrAlfabeto, a, b));


})