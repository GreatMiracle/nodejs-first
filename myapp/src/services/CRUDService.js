const connection = require('../config/database');

const getAllUserService = async () => {
    const query = `SELECT * FROM Users`;
    return executeQueryBasic(query, []);
};

const getDetailUserService = async (id) => {
    const query = `SELECT * FROM Users WHERE id = ?`;
    return executeQueryBasic(query, [id]);
};

const deleteUserService = async (id) => {
    console.log("--------------------------------------DELETE User----------------------------------");
    const query = `DELETE FROM Users WHERE id = ?`;
    return executeQuery(query, [id]);
};



const postCreateUserService = async (email, fname, address) => {
    console.log("--------------------------------------Create User----------------------------------");
    const query = `INSERT INTO Users (id, email, name, city) VALUES (NULL, ? ,  ?, ?)`;
    const values = [email, fname, address];
    return executeQuery(query, values);
};

const putUpdateUserService = async (email, fname, address, userId) => {
    console.log("--------------------------------------Update User----------------------------------");
    const query = `UPDATE Users
                   SET email = ?, name = ?, city = ?
                   WHERE id = ?`;
    const values = [email, fname, address, userId];
    return executeQuery(query, values);
};

const executeQuery = async (query, values) => {
    try {
        const [results, fields] = await connection.execute(query, values);
        if (results.affectedRows > 0) {
            // Trả về một thông báo thành công nếu có bất kỳ bản ghi nào bị ảnh hưởng.
            console.log(results);
            console.log({ success: true, message: 'Update successful' });
            return results;
        } else {
            // Trả về một thông báo thất bại nếu không có bản ghi nào bị ảnh hưởng.
            console.log({ success: false, message: 'Update failed' });
            return [];
        }
    } catch (error) {
        console.error({ success: false, message: 'Update error', error });
        return [];
    }
};

const executeQueryBasic = async (query, values) => {
    try {
        const [results, fields] = await connection.execute(query, values);
        return results;
    } catch (error) {
        console.error(`Query error: ${error.message}`);
        throw error;
    }
};


module.exports = {
    getAllUserService
    , getDetailUserService
    , postCreateUserService
    , putUpdateUserService
    , deleteUserService
}