const calculatorDiv=document.querySelector('#calculator-body')
const input=document.querySelector('#display');
const numberNine=document.querySelector('#number-nine')
const numberEight=document.querySelector('#number-eight')
const numberSeven=document.querySelector('#number-seven')
const  numberSix=document.querySelector('#number-six')
const numberFive=document.querySelector('#number-five')
const numberFour=document.querySelector('#number-four')
const numberThree=document.querySelector('#number-three')
const numberTwo=document.querySelector('#number-two')
const numberOne=document.querySelector('#number-one')
const zero=document.querySelector('#zero')
const plusSign=document.querySelector('#plus-sign');
const minusSign=document.querySelector('#minus-sign')
const divideSign=document.querySelector(('#divide-sign'));
const multiplySign=document.querySelector('#multiply-sign');

input.style.fontSize='2rem'

let firstOperand='';
let secondOperand='';


plusSign.addEventListener('click', e=>{  
  input.value+=plusSign.value;
  
})

minusSign.addEventListener('click', e=>{  
  input.value+=minusSign.value;
})


multiplySign.addEventListener('click', e=>{  
  input.value+=multiplySign.value;
})

divideSign.addEventListener('click', e=>{  
  input.value+=divideSign.value;
})

numberNine.addEventListener('click', e=>{  
  input.value+=numberNine.value;
  
})

numberEight.addEventListener('click', e=>{  
  input.value+=numberEight.value;
  
})

numberSeven.addEventListener('click', e=>{  
  input.value+=numberSeven.value;
  
})
numberSix.addEventListener('click', e=>{  
  input.value+=numberSix.value;
  
})

numberFive.addEventListener('click', e=>{  
  input.value+=numberFive.value;
  
})
numberFour.addEventListener('click', e=>{  
  input.value+=numberFour.value;
  
})

numberThree.addEventListener('click', e=>{  
  input.value+=numberThree.value;
  
})
numberTwo.addEventListener('click', e=>{  
  input.value+=numberTwo.value;
  
})
numberOne.addEventListener('click', e=>{  
  input.value+=numberOne.value;
  
})
zero.addEventListener('click', e=>{  
  input.value+=zero.value;
  
})



function clearDisplay(){
    return input.value='';
}

function operator(){
  let operands='';
  if(input.value.includes('+')){
      operands=input.value.split('+');
    firstOperand=operands[0];
    secondOperand=operands[1];
  }
  else if(input.value.includes('-')){
       operands=input.value.split('-');
    firstOperand=operands[0];
    secondOperand=operands[1];
  }
   else if(input.value.includes('*')){
       operands=input.value.split('*');
    firstOperand=operands[0];
    secondOperand=operands[1];
  }
   else if(input.value.includes('/')){
       operands=input.value.split('/');
    firstOperand=operands[0];
    secondOperand=operands[1];
  }
}

function Addition(){
  operator();
  let operand1=parseFloat(firstOperand);
  let operand2=parseFloat(secondOperand);

  let result=operand1+operand2
  input.value=result
  return input.value
}

function subtraction(){
  operator();
  let operand1=parseFloat(firstOperand);
  let operand2=parseFloat(secondOperand);

  let result=operand1-operand2
  input.value=result
  return input.value
}

function multiplication(){
  operator();
  let operand1=parseFloat(firstOperand);
  let operand2=parseFloat(secondOperand);

  let result=operand1*operand2
  input.value=result
  return input.value
}

function division(){
  operator();
  let operand1=parseFloat(firstOperand);
  let operand2=parseFloat(secondOperand);

  let result=operand1/operand2
  input.value=result
  return input.value
}
function equal(){
  if(input.value.includes('+')){
       Addition()
    }
    else if(input.value.includes('-')){
         subtraction()
    }
     else if(input.value.includes('*')){
         multiplication()
    }
     else if(input.value.includes('/')){
         division()
    }

}