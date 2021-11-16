function fahrenheitToCelsius(fahrenheit)
{
  const f = Number(fahrenheit);
  const result = (f - 32) * 55 / 100;
  return result;
}

function celsiusToFahrenheit(celsius)
{
  const c = Number(celsius);
  const result = (c * 9 / 5) + 32;
  return result;
}

function process(argId, func, symbol)
{
  const temperature = document.getElementById(argId).value;
  const result = func(temperature);
  printResult(`${result} ${symbol}`);
}

function printResult(result)
{
  document.getElementById('result').innerHTML = `Result: ${result}`;
}

window.onload = () =>
{
  const fToCButton = document.getElementById('fToCButton');
  fToCButton.onclick = () => { process('temperature', fahrenheitToCelsius, '°C'); };
  const cToFButton = document.getElementById('cToFButton');
  cToFButton.onclick = () => { process('temperature', celsiusToFahrenheit, '°F'); };
};
