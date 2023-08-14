const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');;

const getProjectsRoute = require('./routes/getProjectsRoute');



const router = express.Router();

// router.get('/projects', isLoggedIn, getProjectsRoute);


module.exports = router;