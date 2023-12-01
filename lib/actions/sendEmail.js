const { NextApiRequest, NextApiResponse } = require('next');
const { EmailTemplate } = require('@/email/emailTemplate');
const { Resend } = require('resend');

try {
  const apiKey = process.env.RESEND_API_KEY;
  const resend = new Resend(apiKey);
  // Rest of your code...
} catch (error) {
  console.error("ERROR: Missing RESEND_API_KEY. Please provide the API key.");
}

export const sendEmail = async (req, res, formData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  try {
    const data = await resend.emails.send({
      from: 'Contact Form<onboarding@resend.dev>',
      to: 'corpuz52@gmail.com',
      subject: 'Message from portfolio',
      react: EmailTemplate({ firstName: 'John' }),
      reply_to: senderEmail,
      text: message
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
