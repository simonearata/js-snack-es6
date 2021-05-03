$(function(){
  
  // array di stringhe
  const arrStringhe = ['gino', 'peppe', 'Paperino', 'JOHN'];
  
  const newStringhe = arrStringhe.map((wordsUpperCase))

  
  // funzioni
  // funzione che rende maiuscola la prima lettera e minuscole le successie
  function wordsUpperCase (stringa){
    
    return stringa.charAt(0).toUpperCase() + stringa.slice(1).toLowerCase();
  }

  console.log(newStringhe)
})