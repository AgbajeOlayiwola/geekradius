require('dotenv').config()

export default function (req, res){
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          // email
          user: 'olaheed1@gmail.com',
          pass: 'fingertips12F',
        },
        secure: true,
    })

        const mailData = {
        // where email will be sent from 
        from: 'olaheed1@gmail.com',
        //where email is being sent to
        to: 'tech@geekradius.com',
        subject: `Request Email`,
        text: req.body.email + " | Sent from: Geekradius" ,
        html: `<div>${req.body.email}</div><p></p>`
        }

      transporter.sendMail(mailData, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info)
          })
          res.status(200)
          
    console.log(req.body)
  }

