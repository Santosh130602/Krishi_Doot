const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    date:{
        type:Date,
        require:true,
    },
    time: {
        type: Date, 
        required: true,
    }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
