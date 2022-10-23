const btn = document.querySelector(".btn")
btn.addEventListener('click', e => {
    console.log('inside');
    const email = document.getElementById('emailInput');
    console.log(email.value)
    fetch('http://localhost:3000/SignUp', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email.value }),
        })
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })