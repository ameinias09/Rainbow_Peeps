const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('topic');
const cookieArr = document.cookie.split("; ");
var id = ""
var postAuthor = ""
for (var i = 0; i < cookieArr.length; i++) {
    const cookie = cookieArr[i].split("=")
    if (cookie[0] == "id") {
        id = cookie[1]

    }
}
const topic = document.getElementById("topic")
fetch('https://rainbowpeeps.onrender.com/STopic', {
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
        postAuthor = data.author
        const redirect = document.getElementById('redirect')
        redirect.href = "../.././Profile/User.html?user=" + data.author
        topic.innerText = data.post
        const delPost = document.getElementById('deletePost')
        if (id == data.author) {
            delPost.innerText = "Delete Post     "
        } else {
            delPost.innerText = ""
        }
        fetch('https://rainbowpeeps.onrender.com/User', {
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

fetch('https://rainbowpeeps.onrender.com/SSubTopic', {
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
fetch('https://rainbowpeeps.onrender.com/User', {
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
    fetch('https://rainbowpeeps.onrender.com/findingfriend', {
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
        .then((data) => {
            console.log(data)
            window.location.reload();
        })

})


function delpost() {
    console.log(postAuthor)
    fetch('https://rainbowpeeps.onrender.com/ProfileDelPost', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                post: myParam,
            }),
        })
        .then()
        .then()
    fetch('https://rainbowpeeps.onrender.com/findingfriendDelPost', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: myParam,
            }),
        })
        .then()
        .then()
    fetch('https://rainbowpeeps.onrender.com/Profile', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: postAuthor,
            }),
        })
        .then((response) => {
            return response.json();
        })
        .then((profile) => {
            for (var i = 0; i < profile.followers.length; i++) {
                fetch('https://rainbowpeeps.onrender.com/NotificationRemove', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: profile.followers[i],
                            post: postAuthor,
                        }),
                    })
                    .then()
                    .then()
            }
            redirect()

        })
}

function confirmDel() {
    const validate = confirm("Do you want to delete the post?")
    if (validate) {
        delpost()
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function redirect() {

    await sleep(3000);
    window.location.href = "Social.html";
}