const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.SERVER_PORT || 3001;

const photosRoutes = require('./routes/photos-routes');

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api/', photosRoutes);

app.listen(port, () => {
    console.log(`Inlimbo Site listening on port ${port}`);
})
