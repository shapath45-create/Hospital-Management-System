function welcomeMessage() {
    alert("Welcome to Hospital Management System!");
}

// Patient Registration Form Validation

var registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var dob = document.getElementById("dob").value;
        var gender = document.getElementById("gender").value;
        var address = document.getElementById("address").value.trim();
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm_password").value;

        event.preventDefault();

        if (name == "" || email == "" || phone == "" ||
            dob == "" || gender == "" || address == "" ||
            password == "" || confirmPassword == "") {

            alert("Please fill in all fields.");

        }
        else if (!/^[A-Za-z ]+$/.test(name)) {

    alert("Name can contain only English letters and spaces.");

}

        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            alert("Please enter a valid email address.");

        }

      else if (!/^01[3-9][0-9]{8}$/.test(phone)) {

    alert("Please enter a valid Bangladesh mobile number.");

}

        else if (new Date(dob) >= new Date()) {

            alert("Date of Birth must be in the past.");

        }

        else if (password.length < 8) {

            alert("Password must be at least 8 characters long.");

        }

        else if (password != confirmPassword) {

            alert("Password and Confirm Password do not match.");

        }

        else {

            alert("Registration Successful!");

        }

    });

}
