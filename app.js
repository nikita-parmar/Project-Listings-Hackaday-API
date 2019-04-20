const express = require('express');
const app = express();
var cors = require('cors');

const projectlistRoute = require('./routes/projectlist');
const userdetailRoute = require('./routes/userdetail');
app.use(cors());
app.use('/projectlist', projectlistRoute);
app.use('/userdetail', userdetailRoute);

// to render index.html on starting the server
app.use(express.static("./"));
module.exports = app;
