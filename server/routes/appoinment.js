const express = require("express");
const router = express.Router();

const {createAppointment} = require("../controllers/appointmentController")

router.post('/appoinment', createAppointment);

module.exports = router;
