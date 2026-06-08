"use server";

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string; // Yeni alan
  const message = formData.get('message') as string;

  const transporter = nodemailer.createTransport({
    host: 'smtp.perfectcarbonrapier.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@perfectcarbonrapier.com',
      pass: 'BurayaEpostaSifrenizGelecek',
    },
  });

  const mailOptions = {
    from: `"Web Formu" <info@perfectcarbonrapier.com>`,
    to: 'info@perfectcarbonrapier.com',
    replyTo: email,
    subject: `İletişim Talebi: ${name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #111;">
        <h2 style="color: #dc2626;">Yeni Mesaj</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-Posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
        <p><strong>Mesaj:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: "E-posta gönderilemedi." };
  }
}