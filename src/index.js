const express = require('express');
const connection = require('./config/database')
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser')

const viewEngineConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//config
viewEngineConfig(app);

//route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
})
