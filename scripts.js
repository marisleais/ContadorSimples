/* var = variavés que podem ser alteradas
const = constantes que NÃO podem ser alteradas
function = para ser executada precisa ser chamada
*/

var currentNumberw = document.getElementById('currentNumber')

var currentNumber = 0



function decrement()
{

    if (currentNumber <= 0 ) {
        currentNumber = 0 

    } else {
        currentNumber = currentNumber - 1;
        currentNumberw.innerHTML = currentNumber;
    }

}


function increment(){
    
    currentNumber = currentNumber + 1;
    currentNumberw.innerHTML = currentNumber;
}

/*
document.querySelector('#restartBtn').addEventListener('click', function(){
    window.location.reload();
    return false;
  }); */

 

  function zero(){
    var currentNumberw = document.getElementById('currentNumber')
    var currentNumber = 0  
    currentNumberw.innerHTML = currentNumber; 
    /*return [ currentNumber= 0 ] */
    
  }
  
  
