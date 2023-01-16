const cookieArr = document.cookie.split("; ");
var id = ""
var postId = ""
for (var i = 0; i < cookieArr.length; i++) {
    const cookie = cookieArr[i].split("=")
    if (cookie[0] == "id") {
        id = cookie[1]
    }
}
const btn = document.getElementById("submit");
btn.addEventListener('click', e => {
    console.log('inside');
    const post = document.getElementById('postInput');


    fetch('https://rainbowpeeps.onrender.com/memberintroduction', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: post.value,
                author: id,
                topic: true,
                sub: "",
                like: [],
                love: [],
                wow: [],
                angry: [],
                sad: [],
            }),
        })
        .then(res)
        .then(data => {
            console.log(data._id)
            postId = "I" + data._id;
        })
    fetch('https://rainbowpeeps.onrender.com/UserPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                author: id,
                post: postId,
            }),
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            for (var i = 0; i < data.followers.length; i++) {
                fetch('https://rainbowpeeps.onrender.com/NotificationPost', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: data.followers[i],
                            post: postId,
                        }),
                    })
                    .then(res => {
                        return res.json()
                    })
                    .then(d)
            }
        })

    //window.location.href = "Introduction.html";
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })