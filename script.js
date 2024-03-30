const calculatorDiv=document.querySelector('#calculator-body')
 const input=document.querySelector('#display');

function appendToDisplay(x){
    input.value +=x
 return calculatorDiv.append(input)
}





