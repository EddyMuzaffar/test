const express = require('express');
const cors = require("cors");
const Sequelize = require("sequelize");


const app = express();
const port = 5000;


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"),
        res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT"),

        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
        next()
})


app.use(express.json());


const db = require("./models");
const { reduce } = require('lodash');

db.sequelize.sync()


app.get('/citation/all', async (req, res) => {
    const users = await db.citation.findAll();
    res.status(200).json(users);
});
app.get('/citation/random', async (req, res) => {
    const randomUser = await db.citation.findOne({
        order: Sequelize.literal('RAND()'),
    });
    res.status(200).json(randomUser);
});

app.post('/citation', async (req, res) => {
    console.log(req)
    var citation = db.citation.create({
        citation: req.body.citation,
        author: req.body.author,
        favori: req.body.favori



    }).then(function (data) {
        res.status(200).json(data);
    });





})

app.delete('/citation', async (req, res) => {
    console.log(req)
    db.citation.destroy({
        where: {
            id: req.body.citationId
        }
    }).then(function (data) {
        res.status(200).json(data);
    });
})
app.put('/citation', async (req, res) => {
    console.log(req.body.citation)
    db.citation.update({ citation: req.body.citation }, {
        where: {
            id: req.body.citationId
        }
    }).then(function (data) {
        res.status(200).json(data);
    });
})

app.put('/citation/favori', async (req, res) => {
    console.log(req.body.citationId)
    db.citation.update({ favori: req.body.favori }, {
        where: {
            id: req.body.citationId
        }
    }).then(function (data) {
        res.status(200).json(data);
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});