const express = require('express');
const app = express();
const fs = require("fs").promises;

app.use(express.json());

app.get('/:name', (req, res) => {
    fs.readFile(`${req.params.name}`, 'utf-8')
        .then(res.send(data))
        .catch((err) => res.send(err + 'File Not Found'))
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
