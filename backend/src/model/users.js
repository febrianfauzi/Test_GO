const dbpool = require("../config/database");

const getAllUsers = () => {
    const SQLQuery = "SELECT * FROM pegawai";

    return dbpool.execute(SQLQuery);
};

const getUserById = (id) => {
    const SQLQuery = `SELECT * FROM pegawai WHERE id_pegawai=${id}`;

    return dbpool.execute(SQLQuery);
};

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO pegawai (nama_pegawai, email, jabatan) 
                        VALUES ('${body.nama_pegawai}','${body.email}','${body.jabatan}')`;

    return dbpool.execute(SQLQuery);
};

const updateUser = (body, id) => {
    const SQLQuery = `UPDATE pegawai 
                        SET nama_pegawai='${body.nama_pegawai}', email='${body.email}', jabatan='${body.jabatan}' 
                        WHERE id_pegawai=${id}`;

    return dbpool.execute(SQLQuery);
};

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM pegawai WHERE id_pegawai=${id}`;

    return dbpool.execute(SQLQuery);
};

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser,
};
