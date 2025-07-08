const express = require('express');

require('dotenv').config();
const app = express();
const mysql = require('mysql2');

const viewEngineConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//test connection 
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '123456',
    database: 'MCShop',
});



//config
viewEngineConfig(app);

//route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
})
