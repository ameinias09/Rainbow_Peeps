const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('topic');
const id = "635d3bbf698f58c6ab18b0bb"
const topic = document.getElementById("topic")
fetch('http://localhost:3000/GTopic', {
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

        topic.innerText = data.post
        fetch('http://localhost:3000/User', {
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

fetch('http://localhost:3000/GSubTopic', {
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
        const parent = document.getElementById("box")
        for (var i = 0; i < data.length; i++) {
            const postContent = data[i].post
            const post = document.createElement("p")
            const author = document.createElement("a")
            author.href = "../.././Profile/User.html?user=" + data.author
            post.style = "margin-top: 3vh;"
            post.innerText = " " + postContent
            parent.insertBefore(post, document.getElementById("below"))
            author.innerText = ": " + data[i].authorname
            parent.insertBefore(author, document.getElementById("below"))



        }
    })
var authorname = ""
fetch('http://localhost:3000/User', {
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
    fetch('http://localhost:3000/GeneralChat', {
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
})