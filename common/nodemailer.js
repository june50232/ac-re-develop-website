import nodemailer from 'nodemailer';

const contactEmail = process.env.CONTACT_EMAIL;
const contactEmailTo = process.env.CONTACT_EMAIL_TO;
const contactEmailPass = process.env.CONTACT_EMAIL_PASS;

export const contactTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: contactEmailPass,
  },
});

export const contactMailOptions = {
  from: contactEmail,
  to: contactEmailTo,
  // cc : emailCc,
  // bcc: emailBcc
};
