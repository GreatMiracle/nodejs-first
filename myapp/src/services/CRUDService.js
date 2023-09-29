const connection = require('../config/database');

const getAllUser = async () => {
    const [results, fields] = await connection.execute(`SELECT * FROM Users`);
    return results;
}

const getDetailUser = async (id) => {
    const [results, fields] = await connection.execute(`SELECT * FROM Users WHERE id=?`, [id]);
    return results;
}

module.exports = {
    getAllUser
    ,getDetailUser
}