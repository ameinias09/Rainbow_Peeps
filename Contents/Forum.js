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
        const bell = document.getElementById('Bell')
        const ck = 0;
        // bell.setAttribute('current-count', user.notification.length)
        if (user.notification.length != 0) {
            bell.setAttribute('class', 'bell-notification')
            console.log("Inside if")
        }
        for (var i = 0; i < user.notification.length; i++) {
            console.log(i + " " + user.notification[i].substring(1))
            const li = document.createElement("li")
            li.setAttribute('class', 'notificationTopic')
            li.setAttribute('id', "" + user.notification[i])
            li.setAttribute('onclick', 'popNotification(this.id)')
            const a = document.createElement("a")
            if (user.notification[i].charAt(0) == 'G') {
                a.href = "../Contents/Forum/GTopic.html?topic=" + user.notification[i].substring(1)

                fetch('https://rainbowpeeps.onrender.com/GTopic', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: user.notification[i].substring(1),
                        }),
                    })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        a.innerText = "" + data.post

                    })
            }
            if (user.notification[i].charAt(0) == 'I') {
                a.href = "../Contents/Forum/ITopic.html?topic=" + user.notification[i].substring(1)
                fetch('https://rainbowpeeps.onrender.com/ITopic', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: user.notification[i].substring(1),
                        }),
                    })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        a.innerText = "" + data.post

                    })
            }
            if (user.notification[i].charAt(0) == 'L') {
                a.href = "../Contents/Forum/LTopic.html?topic=" + user.notification[i].substring(1)
                fetch('https://rainbowpeeps.onrender.com/LTopic', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: user.notification[i].substring(1),
                        }),
                    })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        a.innerText = "" + data.post

                    })
            }
            if (user.notification[i].charAt(0) == 'M') {
                a.href = "../Contents/Forum/MTopic.html?topic=" + user.notification[i].substring(1)
                fetch('https://rainbowpeeps.onrender.com/MTopic', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: user.notification[i].substring(1),
                        }),
                    })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        a.innerText = "" + data.post

                    })
            }
            if (user.notification[i].charAt(0) == 'S') {
                a.href = "../Contents/Forum/STopic.html?topic=" + user.notification[i].substring(1)
                fetch('https://rainbowpeeps.onrender.com/STopic', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: user.notification[i].substring(1),
                        }),
                    })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        a.innerText = "" + data.post

                    })
            }
            li.appendChild(a)
            document.getElementById("BellDropdown").appendChild(li)
        }



    })
    .catch(e => {
        alert("Bad Session")
    })

function popNotification(idat) {
    const post = idat
    const cookieArr = document.cookie.split("; ");

    for (var i = 0; i < cookieArr.length; i++) {
        const cookie = cookieArr[i].split("=")
        if (cookie[0] == "id") {
            id = cookie[1]
        }
    }
    fetch('https://rainbowpeeps.onrender.com/NotificationRemove', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                post: post,
            }),
        })
        .then()
        .then()
}
console.log(id)