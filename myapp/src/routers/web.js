
const express = require('express');
const router = express.Router();
const { getHomePage, getAbc, postNewUser, userManagement, getAllUsers, getDetailUser } = require('../controllers/homeController');



router.get('/', getHomePage);

router.get('/test', getAbc)

router.get('/user-management', userManagement)

router.post('/create-user', postNewUser)

router.get('/list-users', getAllUsers);


router.get('/detail-user', getDetailUser);

module.exports = router;