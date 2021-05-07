function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (form.username.value == "myusername" && form.password.value == "mypassword") {
        window.open("index.html")
    } else {
        alert("Error wrong Password or Username")
    }


}

document.getElementById("btn").addEventListener("click", login);