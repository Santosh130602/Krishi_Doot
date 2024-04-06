require("dotenv").config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_MAIL,
      pass: process.env.CONTACT_MAIL_PASSWORD,
    }
  });
  