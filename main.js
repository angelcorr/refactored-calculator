let firstValue = '';
let secondValue = '';
let operator = '';
let secondValueOn = false;
const result = document.getElementById('result');

const clear = () => {
  firstValue = '';
  secondValue = '';
  operator = '';
  secondValueOn = false;
}

const operatorFunctions = {
  '+': (string1, string2) => Number(string1) + Number(string2),
  '-': (string1, string2) => Number(string1) - Number(string2),
  '×': (string1, string2) => Number(string1) * Number(string2),
  '÷': (string1, string2) => Number(string1) / Number(string2),
};

const handleNumber = (event) => {
  const textContent = event.target.textContent;

  if (secondValueOn) {
    if (textContent === '0' && secondValue === '') {
      result.value = '';
      return;
    }

    secondValue += textContent;
    result.value = secondValue;
    return;
  }

  if (textContent === '0' && firstValue === '') {
    return;
  }

  firstValue += textContent;
  result.value = firstValue;
};

const handleClear = () => {
  clear();
  result.value = '';
}

const handleOperator = (event) => {
  operator = event.target.textContent;
  secondValueOn = true;
}

const handleEqualsSign = () => {
  if (!firstValue || !secondValue) {
    clear();
    result.value = '';
    return;
   }

   if (secondValue === '0' && operator === '÷') {
     clear();
     result.value = 'Division by 0';
     return;
   }

   const operatorFunction = operatorFunctions[operator];
   result.value = operatorFunction(firstValue, secondValue);
   clear();
}

document.getElementsByClassName('number').forEach(element => {
  element.addEventListener('click', handleNumber);
});

document.getElementById('clear').addEventListener('click', handleClear);

document.getElementsByClassName('operator').forEach(element => {
  element.addEventListener('click', handleOperator);
});

document.getElementById('equals-sign').addEventListener('click', handleEqualsSign);
