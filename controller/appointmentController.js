const userModel = require('../models/appointmentModels');


// CREATE - POST Method 
const createAppointment = async(req, res) => {
    const {body} = req;
    try {
        await userModel.createAppointment(body);
        res.json({
            pesan: "Berhasil menambahkan appointment",
            data: body
        })
    } catch (error) {
        res.json({
            pesan: error
        })
    }
}


// READ - GET Method
const getAllAppointment = async(req, res) => {
    try {
        const [data] = await userModel.getAllAppointment();
        res.json({
            pesan: "Berhasil menampilkan data dari database",
            data: data
        })
    } catch (error) {
        res.json({
            pesan: error
        })
    }
}


// UPDATE - PATCH Method
const updateAppointment = async(req, res) => {
    const {body} = req;
    const {idAppointment} = req.params;
    try {
        await userModel.updateAppointment(body, idAppointment)
        res.json({
            pesan: "Berhasil update appointment"
        })
    } catch (error) {
        res.json({
            pesan: error
        })
    }
}


// DELETE Method
const deleteAppointment = async(req, res) => {
    const {idAppointment} = req.params;
    try {
        await userModel.deleteAppointment(idAppointment)
        res.json({
            pesan: "Berhasil menghapus Appointment"
        })
    } catch (error) {
        res.json({
            pesan: error
        })
    }
}



module.exports = {
    createAppointment,
    getAllAppointment,
    updateAppointment,
    deleteAppointment
}