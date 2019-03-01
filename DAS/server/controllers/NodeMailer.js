"use strict";
const nodemailer = require("nodemailer");

    nodemailer.createTestAccount((err,account) =>{
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: "evento.managment@gmail.com",
              pass: "evento12@#"
            },
            tls:{
                rejectUnauthorized: false
            }
          });
        
          // setup email data with unicode symbols
          let mailOptions = {
            from: '"E-Diary Automation 👻" <foo@example.com>', // sender address
    to: "bar@example.com, hafsa.maqsood15@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
          };
        
          // send mail with defined transport object
          transporter.sendMail(mailOptions,(error,info)=>{
              if(error){
                return console.log("eRRRORRRRRR$$$$$$ ",error);
              }
              else{
                console.log("Message sent: %s", info.messageId);
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              }
          })
        
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        
    })