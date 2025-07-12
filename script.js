


$(document).ready(function () {


    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    

    function isPasswordComplex(password) {
        // Minimum 8 characters, at least one uppercase, one lowercase, one number
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(password);
    }

    $('#phoneno').keypress(function (event) {
        // Get the character code of the key pressed
        var charCode = (event.which) ? event.which : event.keyCode;

        // Allow only numbers (0-9), backspace (8), and delete (46)
        // Check if the character is not a digit
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            event.preventDefault(); // Prevent the character from being entered
        }
    });

    $('#password').after('<span class="toggle-password">&#128065;</span>');
    $('#confirmPassword').after('<span class="toggle-confirm-password">&#128065;</span>');

    $('.toggle-password').click(function () {
        var passwordField = $('#password');
        var fieldType = passwordField.attr('type');
        if (fieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).html('&#128064;'); // Closed eye icon
        } else {
            passwordField.attr('type', 'password');
            $(this).html('&#128065;'); // Open eye icon
        }
    });

    // Click handler for confirm password show/hide
    $('.toggle-confirm-password').click(function () {
        var confirmPasswordField = $('#confirmPassword');
        var fieldType = confirmPasswordField.attr('type');
        if (fieldType === 'password') {
            confirmPasswordField.attr('type', 'text');
            $(this).html('&#128064;');
        } else {
            confirmPasswordField.attr('type', 'password');
            $(this).html('&#128065;');
        }
    });



    $("#submit1").click(function () {

        event.preventDefault();

        let errormessage = "";
        let missingfield = "";

        // Clear previous messages
        $(".error").html("").hide();
        $(".success").html("").hide();


        if ($("#email").val() == "") {
            missingfield += "<p> Email Is not Filled</p>";
        };
        if ($("#phoneno").val() == "") {
            missingfield += "<p> Phone Number Is not Filled</p>";
        };
        if ($("#password").val() == "") {
            missingfield += "<p> Password Is not Filled</p>";
        };
        if ($("#confirmPassword").val() == "") {
            missingfield += "<p> Confirm Password  Is not Filled</p>";
        };
        if (isEmail($("#email").val()) == false) {
            errormessage += " <p>email is Not Valid </p> ";
        };

        if ($("#phoneno").val() !== "") {
            if ($.isNumeric($("#phoneno").val()) == false) {
                errormessage += " <p>Phone Number is not valid </p> ";
            } else if ($("#phoneno").val().length !== 10) {
                errormessage += "<p>Phone Number must be exactly 10 digits.</p>";
            }
        };

        if (!isPasswordComplex($("#password").val())) {
            errormessage += "<p>&#x2022; Password must be at least 8 characters long and include uppercase, lowercase, and a number.</p>";
        }

        if ($("#password").val() != $("#confirmPassword").val()) {
            errormessage += " <p> Enter Corrct Password </p>";
        };

        if (missingfield !== "" || errormessage !== "") {

            $(".error").html(missingfield + errormessage).show(); // 
        } else {

            $(".success").html("You are registered successfully!").show();

            $('input[type="text"], input[type="password"]').val('');
        }

       

    });



});

