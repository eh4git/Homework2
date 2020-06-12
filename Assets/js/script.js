document.ready(function () {
    $("#contactFormBtn").on("click", function (event, name, email, message) {
        event.preventDefault();
        //save inputs as variables
        let name = $("#contactNameText").val();
        let email = $("#contactEmailText").val();
        let message = $("#contactMessageText").val();

        //send post request on click of submit button
        $.post("/send", { name: name, email: email, message: message }, function (data) {
            if (data == "sent") {
                console.log("email sent")
            }
        });
    }