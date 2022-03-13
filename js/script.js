let res = document.getElementById("res")
let arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+}{;\?/><}"


function generate() {
    let password = ""
    for (let i = 0;i < 20; i++)
    {
        password += arr[Math.floor(Math.random() * 82)]
    }
    console.log(password)
    let myp = document.createElement('p');
    myp.innerText = password
    res.appendChild(myp);
}