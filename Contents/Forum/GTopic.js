const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('topic');
const cookieArr = document.cookie.split("; ");
var id = ""

for (var i = 0; i < cookieArr.length; i++) {
    const cookie = cookieArr[i].split("=")
    if (cookie[0] == "id") {
        id = cookie[1]
    }
}
const topic = document.getElementById("topic")
fetch('https://rainbowpeepsbackend.vercel.app/GTopic', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: myParam,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const redirect = document.getElementById('redirect')
        redirect.href = "../.././Profile/User.html?user=" + data.author
        topic.innerText = data.post
        fetch('https://rainbowpeepsbackend.vercel.app/User', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: data.author,
                }),
            })
            .then((response) => {
                return response.json();
            })
            .then((user) => {

                document.getElementById("authorpfp").src = "..\\..\\.\\Pics\\pfp\\" + user.pfp + ".webp"
                document.getElementById('authorName').innerText = user.name


            })
    })

fetch('https://rainbowpeepsbackend.vercel.app/GSubTopic', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: myParam,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        const parent = document.getElementById("box")
        for (var i = 0; i < data.length; i++) {
            const postContent = data[i].post
            const post = document.createElement("p")
            const author = document.createElement("a")
            author.href = "../.././Profile/User.html?user=" + data[i].author
            post.style = "margin-top: 3vh;"
            post.innerText = " " + postContent
            parent.insertBefore(post, document.getElementById("below"))
            author.innerText = ": " + data[i].authorname
            parent.insertBefore(author, document.getElementById("below"))



        }
    })
var authorname = ""
fetch('https://rainbowpeepsbackend.vercel.app/User', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .then((user) => {
        authorname = user.name
    })
const post = document.getElementById("subPostInput")
document.getElementById('submit').addEventListener('click', e => {
    fetch('https://rainbowpeepsbackend.vercel.app/GeneralChat', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: post.value,
                author: id,
                authorname: authorname,
                topic: false,
                sub: myParam,
                like: [],
                love: [],
                wow: [],
                angry: [],
                sad: [],
            }),
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => { console.log(data) })
    window.location.reload();
})