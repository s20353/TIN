var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab #9' });
});

const getOperator = (cmd) => {
  switch (cmd) {
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post('/', (req, res) => {
  const result = getOperator(req.body.operator)(Number(req.body.left), Number(req.body.right));
  console.log(result);
  const response = { result };
  res.send(JSON.stringify(response));
});

module.exports = router;
