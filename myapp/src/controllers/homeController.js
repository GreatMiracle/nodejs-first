const connection = require('../config/database')


const getHomePage = (req, res) => {

    return res.render('home.ejs')

}

const getAbc = (req, res) => {
    res.render('sample.ejs');
}

const postNewUser = (req, res) => {
    console.log(req.body);
    let email = req.body.email;
    let name = req.body.fname;
    let address = req.body.address;

    if (!email && !fname && !address) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    res.render('sample.ejs');
}

module.exports = {
    getHomePage
    , getAbc
    , postNewUser
};