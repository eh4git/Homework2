$(document).ready(function () {
    // $("#contactFormBtn").on("click", function (event, name, email, message) {
    //     event.preventDefault();
    //     //save inputs as variables
    //     let name = $("#contactNameText").val();
    //     let email = $("#contactEmailText").val();
    //     let message = $("#contactMessageText").val();

    // });
    //landing page background animation
    $(".parallax-container").mousemove(function (e) {
        let screenWidth = $(window).width();
        let screenHeight = $(window).height();
        $(".parallax").css({
            transform:
                "translate(-" + e.pageX / screenWidth * 20 + "px, -" + e.pageY / screenHeight * 20 + "px)"
        });
        $(".parallax .title").css({
            transform:
                "translate(" + e.pageX / screenWidth * 45 + "px, " + e.pageY / screenHeight * 45 + "px)"
        });
    });

    //landing page logo animation
    //   $(".name").arctext({radius: 700});

    setTimeout(function () {
        console.log("setTimeout function running")
        const profileEnterBtn = `<a id='viewProfileBtn'>View Profile</a>`
        $("#buttonInsertSpace").append(profileEnterBtn);
        $("#viewProfileBtn").attr("href", "profile.html");
    }, 4500);

   
    // $("viewProfileBtn").click(()=>{
    //     window.location.href = "profile.html"
    // })
});
