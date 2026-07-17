// Vercel serverless function — handles the portfolio contact form.
// No database required: validates input and logs the submission.
// To receive messages by email, set the RESEND_API_KEY and TO_EMAIL
// environment variables in your Vercel project and uncomment the email block.

import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ status: 'error', message: 'Method not allowed.' });
  }

  const { name, email, message } = req.body || {};

  // Basic validation
  const clean = {
    name: typeof name === 'string' ? name.trim() : '',
    email: typeof email === 'string' ? email.trim() : '',
    message: typeof message === 'string' ? message.trim() : '',
  };
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!clean.name || !emailRe.test(clean.email) || clean.message.length < 10) {
    return res.status(400).json({ status: 'error', message: 'Please provide a valid name, email, and message (min 10 chars).' });
  }

  // For now, log the submission (visible in Vercel function logs).
  console.log('New contact submission:', clean);

  // ---- Optional: send via email with Resend ----
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'Portfolio <onboarding@resend.dev>',
  //   to: process.env.TO_EMAIL,
  //   subject: `New message from ${clean.name}`,
  //   reply_to: clean.email,
  //   text: `Name: ${clean.name}\nEmail: ${clean.email}\n\n${clean.message}`,
  // });

  return res.status(200).json({
    status: 'success',
    message: `Thank you, ${clean.name}. I will get back to you soon.`,
  });
}
