const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#passwordInput');

togglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const btn = document.querySelector(".btn")
btn.addEventListener('click', e => {
    console.log('inside');
    const email = document.getElementById('emailInput');
    const password = document.getElementById('passwordInput');
    if (email.value == "" || name.value === "" || password.value === "" || email.value == null || password.value === null) {
        alert("Please fill out all the fields!!");
        return false;
    }
    document.cookie = "email" + "=" + email.value + "" + "; path=/"
    fetch('https://rainbowpeeps.onrender.com/Login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            })
        })
        .then(res => {
            // console.log("Login Success")
            console.log(res);
            if (res.status == 400)
                throw new Error("Invalid details")
            else
                window.location.replace(".././Contents/Forum.html");
        })
        .then(data => {})
        .catch(err => alert(err))
})

// method: 'POST', // or 'PUT'
// headers: {
//   'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// })