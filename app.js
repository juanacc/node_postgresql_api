const express = require('express');
const morgan = require('morgan');
const app = express();
//import routes
const projectRoutes = require('./src/routes/projects');

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/projects', projectRoutes);

module.exports = app;