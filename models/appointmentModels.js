const dbPool = require('../config/database');


// CREATE - POST
const createAppointment = (body) => {
    const sqlQuery = `INSERT INTO appointment (nama, umur, gender, no_telepon, reason, id_doctor) VALUES ('${body.nama}', '${body.umur}', '${body.gender}', '${body.no_telepon}', '${body.reason}', '${body.id_doctor}')`
    return dbPool.execute(sqlQuery);
}

// READ - GET Method
const getAllAppointment = () => {
    const sqlQuery = 'SELECT * FROM appointment';
    return dbPool.execute(sqlQuery);
}

// UPDATE - PATCH Method
const updateAppointment = (body, idAppointment) => {
    const sqlQuery = `UPDATE appointment SET nama='${body.nama}', umur='${body.umur}', gender='${body.gender}', no_telepon='${body.no_telepon}', reason='${body.reason}', id_doctor='${body.id_doctor}' WHERE id=${idAppointment}`
    return dbPool.execute(sqlQuery);
}

// DELETE Method
const deleteAppointment = (idAppointment) => {
    const sqlQuery = `DELETE FROM appointment WHERE id=${idAppointment}`
    return dbPool.execute(sqlQuery);
}



module.exports = {
    createAppointment,
    getAllAppointment,
    updateAppointment,
    deleteAppointment
}