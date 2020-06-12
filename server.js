const express = require("express");

// const nodemailer = require("nodemailer");
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/api-routes.js")(app);
require("./routes/nodemailer.js")(app);

//starting our Express app
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
