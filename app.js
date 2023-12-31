require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());


// Routes
const appointmentRoutes = require('./routes/appointmentRoutes');
app.use('/appointment', appointmentRoutes)


app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
})