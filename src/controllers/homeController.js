const express = require('express');
const connection = require('../config/database');
const getHomePage = (req, res) => {
    res.send(
        connection.query(
            'SELECT * FROM Users',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
            }
        ));
}

const getFirstPage = (req, res) => {
    res.send("Fisrt Page")
}
module.exports = {
    getHomePage, getFirstPage
}