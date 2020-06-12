const nodemailer = require("nodemailer");

function sendMail(name, email, message) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "profileNodeMailer@gmail.com", 
                pass: "NodeMailer1", 
            }
        });
        let mailInfo = {
            from: email, // sender address
            to: "ehirsch760@gmail.com", // list of receivers
            subject: name + " has sent you a message.", // Subject line
            html: message, // html body
        };
        transporter.sendMail(mailInfo, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ');
            }
        });
}

module.exports = sendMail;