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

const getFirstPage = (req, res) => {
    res.send("Fisrt Page")
}
module.exports = {
    getHomePage, getFirstPage, createNewUser, createUserPage, getAllUser, creatUser
}