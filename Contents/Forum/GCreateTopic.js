const id = "635d3bbf698f58c6ab18b0bb"
const btn = document.getElementById("submit");
btn.addEventListener('click', e => {
    console.log('inside');
    const post = document.getElementById('postInput');


    fetch('http://localhost:3000/GeneralChat', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: post.value,
                author: id,
                authorname: "",
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

    window.location.replace("General.html")
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })