const express = require('express');
const app = express();
const randomName = require('node-random-name');
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');

const connection = mysql.createConnection(config);

const sqlCreateTable =
`CREATE TABLE IF NOT EXISTS people (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

connection.query(sqlCreateTable);

app.get('/', async (req, res) => {
    const sqlInsert = `INSERT INTO people(name) values('${randomName()}')`;
    connection.query(sqlInsert);
    const sqlSelect = `SELECT name FROM people`;

    connection.query(sqlSelect, (err, result) => {
        if (err) throw err;
        let html = '<h1>Full Cycle deafio node + docker!</h1>';
        html += '<ul>';
        result.forEach(row => {
            html += `<li>${row.name}</li>`;
        });
        html += '</ul>';
        res.send(html);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});