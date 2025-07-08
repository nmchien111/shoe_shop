const express = require('express');

const getHomePage = (req, res) => {
    res.send("ABC");
}

const getFirstPage = (req, res) => {
    res.send("Fisrt Page")
}
module.exports = {
    getHomePage, getFirstPage
}