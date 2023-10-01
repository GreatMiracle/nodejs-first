const connection = require('../config/database')
const { getAllUserService, getDetailUserService, putUpdateUserService, postCreateUserService, deleteUserService } = require('../services/CRUDService')

const getHomePageController = (req, res) => {
    return res.render('home.ejs')
}

const getAllUsersController = async (req, res) => {
    const results = await getAllUserService();
    res.render('listUser.ejs', { users: results });
}

const postNewUserController = async (req, res) => {
    let { email, fname, address } = req.body;
    if (!email && !fname && !address) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    await postCreateUserService(email, fname, address);

    res.redirect('/web/v1/list-users');
    // getAllUsersController(req, res);
}

const userManagementController = (req, res) => {
    res.render('createUser.ejs');
}

const getAbcController = (req, res) => {
    res.render('sample.ejs');
}

const getDetailUserController = async (req, res) => {
    const [results] = await getDetailUserService(req.body.id);
    // return 
    // res.render('sample.ejs');
}

const screenditUserController = async (req, res) => {
    const userId = req.params.userId;
    // res.render('editUser.ejs');
    const [results] = await getDetailUserService(userId);
    res.render('createUser.ejs', { userId, results });
}
const putUpdateUserController = async (req, res) => {
    const userId = req.params.userId;
    let { email, fname, address } = req.body;
    console.log(email, fname, address, userId);
    await putUpdateUserService(email, fname, address, userId)
    getAllUsersController(req, res);
}


const deleteUserController = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);

    const result = await deleteUserService(userId)
    getAllUsersController(req, res);
}

module.exports = {
    getHomePageController
    , getAbcController

    , postNewUserController
    , userManagementController
    , getAllUsersController
    , getDetailUserController
    , putUpdateUserController
    , deleteUserController

    , screenditUserController
};