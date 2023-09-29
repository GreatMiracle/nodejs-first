const connection = require('../config/database')
const { getAllUser, getDetailUser } = require('../services/CRUDService')

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getAllUsers = async (req, res) => {
    let { email, fname, address } = req.body;
    const results = await getAllUser();
    console.log(results);

    res.render('listUser.ejs', { users: results });
}

const postNewUser = async (req, res) => {
    console.log(req.body);

    let { email, fname, address } = req.body;


    if (!email && !fname && !address) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // connection.query(
    //     `INSERT INTO Users (id, email, name, city) VALUES (NULL, ? ,  ?, ?)`,
    //     [email, fname, address],
    //     (error, results) => {
    //         if (error) {
    //             return console.error("Error inserting user:", error);
    //         }
    //         console.log("User inserted:", results);
    //         res.send('Tạo user thành công');
    //     }
    // )

    const [results, fields] = await connection.execute(`INSERT INTO Users (id, email, name, city) VALUES (NULL, ? ,  ?, ?)`, [email, fname, address]);

    res.render('sample.ejs');
}

const userManagement = (req, res) => {
    res.render('userManagement.ejs');
}


const getAbc = (req, res) => {
    res.render('sample.ejs');
}

const getDetailUser = async(req, res) => {
    const [results] = await getDetailUser(req.body.id);
    res.render('sample.ejs');
}


module.exports = {
    getHomePage
    , getAbc

    , postNewUser
    , userManagement
    , getAllUsers
};