function login() {

    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (username === "" &&
        password === "") {
        alert("validation succeeded");
        location.href = "home.html";
    } else {
        alert("validation failed");
        location.href = "signin.html";
    }
}