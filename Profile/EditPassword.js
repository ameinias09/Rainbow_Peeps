const togglePasswordOld = document.querySelector('#togglePasswordOld');
const oldPassword = document.querySelector('#oldPassword');

togglePasswordOld.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = oldPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    oldPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const togglePasswordNew = document.querySelector('#togglePasswordNew');
const newPassword = document.querySelector('#newPassword');

togglePasswordNew.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    newPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const cookieArr = document.cookie.split("; ");
var id = ""

for (var i = 0; i < cookieArr.length; i++) {
    const cookie = cookieArr[i].split("=")
    if (cookie[0] == "id") {
        id = cookie[1]
    }
}

const btn = document.querySelector(".btn")
btn.addEventListener('click', e => {

    if (oldPassword.value == "" || newPassword.value === "" || oldPassword.value == null || newPassword.value === null) {
        alert("Please fill out all the fields!!");
        return false;
    }
    fetch('https://rainbowpeeps.onrender.com/changePassword', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                oldPassword: oldPassword.value,
                newPassword: newPassword.value,
            })
        })
        .then(res => {
            // console.log("Login Success")
            console.log(res);
            if (res.status == 400)
                throw new Error("Invalid details")
            else {
                alert("Password Changed Successfully.");
                window.location.replace("./Profile.html");
            }
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