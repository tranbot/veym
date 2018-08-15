$("#submit").on('click', function(event){
    // This stops the page from refreshing when you hit submit
    event.preventDefault();
    var newUser = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: $("#email").val(),
        userName: $("#userName").val(),
        password: $("#password").val()
    }
    $.ajax({
        // If you check apiRoutes.js, you will see that it will send the information to the app.post("/new/user") route
        url: "/new/user",
        type: "POST",
        data: newUser
    }).done(function (res) {
        window.location.replace("/");
    });
});