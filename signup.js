function signUp() {
    if (document.getElementById("password").value == document.getElementById("conpassword").value) {
        var users = new Object();
        users.name = document.getElementById("name").value;
        users.username = document.getElementById("username").value;
        users.email = document.getElementById("email").value;
        users.password = document.getElementById("password").value;


        var postUser = new XMLHttpRequest();
        postUser.open("POST", "/users", true);
        postUser.setRequestHeader("Content-Type", "application/json");


        postUser.send(JSON.stringify(users));
    } else {
        alert("Password column and Confirm Password column doesn't match!")
    }
}