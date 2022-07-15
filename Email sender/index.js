const express = require('express');
const nodemailer = require('nodemailer');

// configure dotenv in order to use environment variables
require('dotenv').config();

const app = express();
const PORT = 1337;

app.listen(PORT, () => {
  console.log(`Email sender is listening on port: ${PORT}`);
});

// append email addresses to send bulk mail
const email_addresses = [
  'dera@ieee.org',
  'starlingroot@protonmail.com',
  'chidexy67@gmail.com',
];

// setting up the email transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

// setting up the email parameters
let mailOptions = {
  from: 'starlingmediang@gmail.com',
  to: email_addresses,
  subject: 'Nodemailer at work',
  text: 'noreply-blablabla@email.com - This is an automated mail send via nodemailer',
};

// sending the email and catching errors
transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log('Error ' + err);
  } else {
    console.log('Email sent successfully');
  }
});
