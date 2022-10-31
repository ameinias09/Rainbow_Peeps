const cookieArr = document.cookie.split("; ");
var id = ""

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


    fetch('http://localhost:3000/memberintroduction', {
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
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))

    // window.location.href = "../Contents/Forum.html";
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })