const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('HOME PAGE');
})

router.get('/first', (req, res) => {
    res.send("f1 homepage");
})

module.exports = router;