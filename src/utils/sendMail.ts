import nodemailer from 'nodemailer'

const sendMail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: 'rockyhaque99@gmail.com',
      pass: 'wxto zzcz smap bthc',
    },
  })

  await transporter.sendMail({
    from: '"Tour and Travels 👻" <rockyhaque99@gmail.com>', // sender address
    to,
    subject,
    text: 'Hello world?', // plain text body
    html,
  })
}

export default sendMail
