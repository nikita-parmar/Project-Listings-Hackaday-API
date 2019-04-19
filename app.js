const express = require('express');
const app = express();
var cors = require('cors');

const projectlistRoute = require('./routes/projectlist')

app.use(cors());
app.use('/projectlist', projectlistRoute)

// to render index.html on starting the server
app.use(express.static("./"));
module.exports = app;
