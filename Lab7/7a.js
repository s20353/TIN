const http = require('http');

const operandRegex = /\d+/g;

const getOperator = (cmd) =>
{
  switch (cmd)
  {
    case 'add':
      return (x, y) => x + y;
    case 'sub':
      return (x, y) => x - y;
    case 'mul':
      return (x, y) => x * y;
    case 'div':
      return (x, y) => x / y;
    default:
      return 'Error';
  }
};

const operation = (req) =>
{
  if (req.url !== null && req.url.length > 6)
  {
    const operatorString = req.url.substring(1, 4);
    const operator = getOperator(operatorString);
    if (operator.toString() !== 'Error')
	{
      const operands = req.url.match(operandRegex);
      if (operands != null && operands.length === 2)
	  {
        const number1 = Number(operands[0]);
        const number2 = Number(operands[1]);
        return `${number1} ${operatorString} ${number2} = ${operator(number1, number2)}`;
      }
    }
	else
	{
      return `${operatorString} is not an operator.`;
    }
  }
  return 'Error';
};

const server = http.createServer((req, res) =>
{
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`${operation(req)}`);
});

server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
