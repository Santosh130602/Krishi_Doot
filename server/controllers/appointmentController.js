
// const nodemailer = require('nodemailer');
const Appointment = require('../models/Appoinment');
require("dotenv").config();

exports.createAppointment = async (req, res) => {
  const { name, email, phoneNumber, date, time } = req.body;

  try {
    // Parse the time string into a Date object
    const parsedTime = parseTime(time);

    // Check if the appointment already exists for the given date and time
    const existingAppointment = await Appointment.findOne({ date, time: parsedTime });

    if (existingAppointment) {
      return res.status(400).json({ error: `Appointment already exists for this ${date} and ${time}. Please choose another date and time.` });
    }

    // Create a new appointment entry
    const newAppointment = new Appointment({
      name,
      email,
      phoneNumber,
      date,
      time: parsedTime,
    });

    // Save the new appointment to the database
    await newAppointment.save();

    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
};

// Function to parse time in "hh:mm:ss AM/PM" format into Date object
function parseTime(timeString) {
  const [timePart, ampm] = timeString.split(' ');
  const [hours, minutes, seconds] = timePart.split(':').map(Number);
  let parsedHours = hours;
  if (ampm === 'PM' && hours < 12) {
    parsedHours += 12;
  } else if (ampm === 'AM' && hours === 12) {
    parsedHours = 0;
  }
  return new Date(2000, 0, 1, parsedHours, minutes, seconds);
}




