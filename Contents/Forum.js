const cookieArr = document.cookie.split("; ");
var id = ""
var email = ""
for (var i = 0; i < cookieArr.length; i++) {
    const cookie = cookieArr[i].split("=")
    if (cookie[0] == "email") {
        email = cookie[1]
    } else
    if (cookie[0] == "email") {
        if (cookie[1] == "") {
            alert("Bad Session/ You are Logged Out!!")
            window.location.replace("../index.html")
        }
    }
}
console.log(email)
fetch('https://rainbowpeeps.onrender.com/UserByEmail', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .then((user) => {
        // console.log(user._id)
        document.cookie = "id" + "=" + user._id + "" + "; path=/"

    })
    .catch(e => {
        alert("Bad Session")
    })
console.log(id)