const express = require('express');

require('dotenv').config();
const app = express();
const viewEngineConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

//config
viewEngineConfig(app);

//route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`);
})
