const express = require('express');
const app = express();
var cors = require('cors');

const projectlistRoute = require('./routes/projectlist')
const teamRoute = require('./routes/team')
const searchRoute = require('./routes/search')
const commentRoute = require('./routes/comment')


app.use(cors());
app.use('/projectlist', projectlistRoute)
app.use('/team', teamRoute)
app.use('/search', searchRoute)
app.use('/comment', commentRoute)

module.exports = app;
