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
            // const ck = 0;
            // // bell.setAttribute('current-count', user.notification.length)
            // if (ck == 0) {
            //     // bell.classList.toggle('bell-off')
            //     document.styleSheets[0].addRule('div.bell-notification ::after ', 'content: "' + ck + '";');
            // }
        for (var i = 0; i < user.notification.length; i++) {
            console.log(i + " " + user.notification[i])
            const li = document.createElement("li")
            li.setAttribute('class', 'notificationTopic')
            li.setAttribute('id', "" + user.notification[i])
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
                //   a.href = "../Contents/Forum/ITopic.html?topic=" + user.notification[i].substring(1)
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

const selectedNotification = document.querySelector('li')
selectedNotification.addEventListner('click', e => {
    const post = selectedNotification.getAttribute('id')
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
        .then((response) => {
            return response.json();
        })
        .then((data) => {})
})
console.log(id)