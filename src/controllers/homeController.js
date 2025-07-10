const express = require('express');
const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
}

const createNewUser = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let address = req.body.address;

    let [results, fields] = await connection.execute(
        `INSERT INTO Users (name, email, address) VALUES (?, ?, ?)`, [name, email, address]
    );
    res.send('Create user success!');
}

const createUserPage = (req, res) => {
    res.render('create.ejs');
}

const getFirstPage = (req, res) => {
    res.send("Fisrt Page")
}
module.exports = {
    getHomePage, getFirstPage, createNewUser, createUserPage
}