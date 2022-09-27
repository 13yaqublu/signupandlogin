function darkmode() {
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode")
    var theme;
    if (SetTheme.classList.contains("dark-mode")) {
        theme = "DARK";
    } else {
        theme = "LIGHT";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    if (GetTheme === "DARK") {
        document.body.classList = "dark-mode";
    } else {
        document.body.classList = "";
    }
}, 5);

const loginForm = document.querySelector('#login')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
let arr = JSON.parse(localStorage.getItem('user'));

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let userVarmı = true;
    for (let i = 0; i < arr.length; i++) {
        if (email.value == arr[i].email) {
            userYoxdu = false;
            if (password.value == arr[i].password) {
                alert('Hesaba uğurla giriş etdiniz')
            } else {
                alert('Yanlış parol')
            }
        } else {
            alert('Belə istifadəçi yoxdu!')
        }
        if (userYoxdu) {
            alert('Belə istifadəçi var')
        }
    }
    console.log(email.value.includes('@'));
})