import emailjs from 'emailjs-com';

const SERVICE_ID = 'gmail';
const TEMPLATE_ID = 'template_WrS0iyRA';
const USER_ID = 'user_rKsiCyTnYGcaUXtpD0SlM';

export const sendEmail = async params => {
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID);
};
