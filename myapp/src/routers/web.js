
const express = require('express');
const router = express.Router();
const { getHomePageController, getAbcController, postNewUserController
    , userManagementController, getAllUsersController, getDetailUserController
    , putUpdateUserController, deleteUserController
    , screenditUserController
} = require('../controllers/homeController');


router.get('/', getHomePageController);

router.get('/test', getAbcController)

router.get('/user-management', userManagementController)

router.post('/create-user', postNewUserController)

router.get('/list-users', getAllUsersController);

router.get('/detail-user/:userId', getDetailUserController);

router.get('/edit-user/:userId', screenditUserController);

router.post('/update-user/:userId', putUpdateUserController);

router.post('/delete-user/:userId', deleteUserController);

module.exports = router;