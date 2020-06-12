const sendMail = require("./nodemailer")

module.exports = function (app) {
    app.post('/send', function (req, res) {
        console.log("api post sent")
        sendMail(req.body.to, req.body.body)
        res.json(true)
    });

}