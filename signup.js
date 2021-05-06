function createacc() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var type = document.getElementById("choice").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmPassword").value;

    if (name == "" || email == "" || username == "" || password == "" || confirmpassword == "") {
        alert("All fields are required")
    } else {
        if (username.length >= 4 && password === confirmpassword) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                alert("congratulations!")
            } else {
                alert("Check your email format and retry")
            }
        } else if (username.length < 4) {
            alert("Username is too short");
        } else if (password !== confirmpassword) {
            alert("Passwords must be the same.")
        } else {
            alert("Unknown error")
        }
    }
}

document.getElementById("registerbtn").addEventListener("click", createacc);