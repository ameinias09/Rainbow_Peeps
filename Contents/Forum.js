const cookieArr = document.cookie.split("; ");
var id = ""
var email = ""
for (var i = 0; i < cookieArr.length; i++) {
    const cookie = cookieArr[i].split("=")
    if (cookie[0] == "email") {
        email = cookie[1]
    } else
        alert("Bad Session/Session Expired")
}

fetch('http://localhost:3000/UserByEmail', {
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
        id = user.id
    })
document.cookie = "id" + "=" + id + "" + "; path=/"