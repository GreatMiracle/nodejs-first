
const express = require('express');
const router = express.Router();
const { getHomePage, getAbc, postNewUser } = require('../controllers/homeController');



router.get('/', getHomePage);

router.get('/test', getAbc)

router.post('/create-user', postNewUser)

module.exports = router;