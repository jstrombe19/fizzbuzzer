document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const header = document.createElement('h1');
  const numericInputForm = document.createElement('form');
  const numericInputField = document.createElement('input');
  const fizzBuzzButton = document.createElement('button');

  header.innerHTML = 'Welcome to FizzBuzzer!';
  body.appendChild(header);

  function fizzBuzz(number) {
    returnPhrase = '';
    if (number % 3 === 0) {
      returnPhrase += 'fizz';
    }
    if (number % 5 === 0) {
      returnPhrase += 'buzz';
    }
    return returnPhrase;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('FIZZBUZZ!!');
    const number = event.target[0].value;
    const result = document.createElement('h3');
    result.innerHTML = fizzBuzz(number);
    body.appendChild(result);
  }

  numericInputField.setAttribute('type', 'text');
  numericInputField.setAttribute('id', 'numeric-input-field');
  fizzBuzzButton.setAttribute('type', 'submit');
  fizzBuzzButton.setAttribute('id', 'submit');
  fizzBuzzButton.innerText = 'FizzBuzz!';
  numericInputForm.append(numericInputField, fizzBuzzButton);
  numericInputForm.addEventListener('submit', handleSubmit);
  body.appendChild(numericInputForm);
});
