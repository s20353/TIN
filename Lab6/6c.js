function validateEmail(input)
{
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(input.trim());
}

function validateAge(input)
{
  const cast = Number(input);
  return (cast >= 18 && cast <= 101);
}

function validate()
{
  const inputEmail = document.getElementById('inputEmail');
  const inputAge = document.getElementById('inputAge');

  const emailPass = validateEmail(inputEmail.value);
  if (!emailPass)
  {
    inputEmail.style.backgroundColor = '#ff0000';
    return false;
  }
  inputEmail.style.backgroundColor = '#ffffff';

  const agePass = validateAge(inputAge.value);
  if (!agePass)
  {
    inputAge.style.backgroundColor = '#ff0000';
    return false;
  }
  inputAge.style.backgroundColor = '#ffffff';
  return true;
}

function printResult(result)
{
  const br = document.createElement('br');
  const text = document.createTextNode(`Valid? ${result}`);
  document.body.appendChild(text);
  document.body.appendChild(br);
}

window.onload = () =>
{
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => { e.preventDefault(); }, false);
  const submitButton = document.getElementById('Submit');
  submitButton.onclick = () =>
  {
    const result = validate();
    printResult(result);
  };
};
