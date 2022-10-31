const id = "iusa78uashiaiaiciiiczx9988cix"

fetch('http://localhost:3000/mentalhelp', {
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
    .then((data) => {

        const topic = document.getElementById("topic")

        for (var i = 0; i < data.length; i++) {
            const br = document.createElement("br")
            const a = document.createElement("a")
            a.href = "Topic.html?topic=" + data[i]._id
            a.innerText = "" + data[i].post
            topic.insertBefore(a, document.getElementById("btn"))
            topic.insertBefore(br, document.getElementById("btn"))
            topic.insertBefore(br, a)
        }

    })
document.getElementById("newPost").addEventListener('click', e => {
    window.location.href = "GCreateTopic.html"
})