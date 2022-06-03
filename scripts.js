
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


  function zero(){
    var currentNumberw = document.getElementById('currentNumber')
    var currentNumber = 0  
    currentNumberw.innerHTML = currentNumber; 
    
    
  }
  
  
