const express = require('express');
const connection = require('../config/database');
const { getAllUser, creatUser } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    const results = await getAllUser();
    return res.render('home.ejs', { allUsers: results });
}

const createNewUser = async (req, res) => {
    let { name, email, address } = req.body;
    const results = await creatUser(name, email, address);
    res.send('Create user success!');
}

const createUserPage = (req, res) => {
    res.render('create.ejs');
}

const editUserPage = async (req, res) => {
    const userId = req.params.id;

    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ?`, [userId]
    )

    let user = results && results.length > 0 ? results[0] : {};

    res.render('edit.ejs', { user: user });
}


const getFirstPage = (req, res) => {
    res.send("Fisrt Page")
}
module.exports = {
    getHomePage, getFirstPage, createNewUser, createUserPage, getAllUser, creatUser, editUserPage
}