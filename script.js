let firstOperand='';
let secondOperand='';
let operator=''
let result='';
let calculationInProgress=true;


const display=document.querySelector('#display');
const displayDiv=document.querySelector('#display-div')
const calculatorDiv=document.querySelector('#calculator-body');
const input=document.querySelectorAll('.inputs');
const acBtn=document.querySelector('#ac-btn');
const inputSign=document.querySelector('#input-sign');


display.style.color='Black';
display.style.fontSize='32px';
document.addEventListener('keydown',function(event){
   const key=event.key;
  if(!isNaN(key) || key==='.'){
      if(operator===''){
        firstOperand+=key;
        display.value=firstOperand
      }
      else{
        secondOperand+=key;
        display.value+=secondOperand
      }
  }
  else if(key==='+' || key==='-' || key==='*' || key==='/'){
    if(result !==''){
        firstOperand=result;
      }
    if(firstOperand!==''){
      operator=key;
      display.value=`${firstOperand}${operator}`;
    }
    else if(key==='%'){
      if(result !==''){
        firstOperand=result;
      }
      secondOperand=undefined;
      firstOperand=parseFloat(firstOperand);
      result=percentage(firstOperand);
      display.value=result;
      firstOperand='';
      secondOperand='';
       operator='';
    } 
    else if(key==='+/-'){
      if(result !==''){
        firstOperand=result;
      }
       firstOperand=parseFloat(firstOperand);
      result=innputSign(firstOperand);
        display.value=result;
      firstOperand='';
      secondOperand='';
       operator='';
    }
    else if(key==='=' || key==='Enter'){
      if(firstOperand !=='' && secondOperand !=='' && operator!==''){
        firstOperand=parseFloat(firstOperand);
        secondOperand=parseFloat(secondOperand);
        result=operate(firstOperand,secondOperand,operator);
        if(result=='Infinity'){
          result='LMAOOO';
          result='';
        firstOperand='';
        secondOperand='';
         operator='';
        }
        display.value=result;
        result='';
        firstOperand='';
        secondOperand='';
         operator='';
      }
    }
    else if(key==='Escape' || key==='Delete'){
       result='';
        firstOperand='';
        secondOperand='';
         operator='';
         display.value='';
    }
  }
});

input.forEach( function (el){
  el.addEventListener('click', function(){
    const value=el.value;
    if(!isNaN(value) || value==='.'){
        if(operator===''){
          firstOperand +=value;
           display.value=firstOperand
        }
        else{
          secondOperand+=value;
           display.value=secondOperand
        }
      }
         else if(value==="+" || value==="-" || value==="*" || value==="/"){
          if(result!==''){
            firstOperand=result;
          }
          if(firstOperand !==''){
            operator=value;
            display.value=`${firstOperand}${operator}`
          }
        }
      else if(value==="%"){
         if(result!==''){
        firstOperand=result;
      }
        firstOperand=parseFloat(firstOperand);
        result=percentage(firstOperand)
        display.value=result;
        firstOperand='';
            secondOperand='';
            operator='';
    }  
         else if(value==="+/-"){
         if(result!==''){
        firstOperand=result;
      }
        firstOperand=parseFloat(firstOperand);
        result=innputSign(firstOperand)
        display.value=result;
        firstOperand='';
            secondOperand='';
            operator='';
    }  
      else if(value==='='){
        if(firstOperand!=='' && secondOperand!=='' && operator!==''){
            firstOperand=parseFloat(firstOperand);
            secondOperand=parseFloat(secondOperand);
            result=operate(firstOperand,secondOperand,operator);
            if(result=='Infinity'){
             result='LMAOOO';
            }
            display.value=result;
            firstOperand='';
            secondOperand='';
            operator='';
          } 
        }
      }
    );
});
function add(x,y){
  return x+y;
}

function subtract(x,y){
  return x-y;
}


function multiply(x,y){
  return x*y;
}

function divide(x,y){
  return x/y;
}

function percentage(x){
  return x/100;
}

function operate(x,y,op){
  if(op==='+'){
    return add(x,y);
  }
   else if(op==='-'){
    return subtract(x,y);
  }
  else if(op==='*'){
    return multiply(x,y);
  }
  else if(op==='/'){
    return divide(x,y);
  }
  else if(op==='%'){
    secondOperand=null;
    return percentage(x)
  }
}

function innputSign(x){
    return x*-1;
}


  acBtn.addEventListener('click' , e=>{
    firstOperand='';
    secondOperand='';
    operator='';
    result='';
    display.value=''
  })

