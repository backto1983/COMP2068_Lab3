const connect = require('connect');
const url = require('url');

const app = connect();

function add(req, res, next) {
    
    const queryString = url.parse(req.url, true).query;

    const { x, y } = queryString;

    const total = parseFloat(x) + parseFloat(y);

    res.end(`<h1>Addition</h1>
            Result: ${x} + ${y} = ${total}`);
};

function subtract(req, res, next) {
    
    const queryString = url.parse(req.url, true).query;

    const { x, y } = queryString;

    const total = parseFloat(x) - parseFloat(y);

    res.end(`<h1>Subtraction</h1>
            Result: ${x} - ${y} = ${total}`);
};

function multiply(req, res, next) {
    
    const queryString = url.parse(req.url, true).query;

    const { x, y } = queryString;

    const total = parseFloat(x) * parseFloat(y);

    res.end(`<h1>Multiplication</h1>
            Result: ${x} * ${y} = ${total}`);
};

function divide(req, res, next) {
    
    const queryString = url.parse(req.url, true).query;

    const { x, y } = queryString;

    const total = parseFloat(x) / parseFloat(y);

    res.end(`<h1>Division</h1>
            Result: ${x} / ${y} = ${total}`);
};

function incorrectOperation(req, res, next) { //err
    const queryString = url.parse(req.url, true).query;

    res.end(`You entered an invalid method`); //${JSON.stringify(queryString)};
}

app.use('/add', add);
app.use('/subtract', subtract);
app.use('/multiply', multiply);
app.use('/divide', divide);
app.use('/', incorrectOperation);
app.listen(3000);