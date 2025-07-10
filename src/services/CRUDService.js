const connection = require('../config/database');

const getAllUser = async () => {
    const [results, fields] = await connection.query(
        `SELECT * FROM Users`
    )
    return results;
}

const creatUser = async (name, email, address) => {
    let [results, fields] = await connection.execute(
        `INSERT INTO Users (name, email, address) VALUES (?, ?, ?)`, [name, email, address]
    )
    return results;
}

module.exports = {
    getAllUser, creatUser
}