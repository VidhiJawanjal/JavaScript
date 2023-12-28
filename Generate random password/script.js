// let a = Math.random()
// // console.log(Math.floor(a));

// console.log(a*10000);
// console.log(Math.floor(a*10000));


const pass = document.getElementById("password")
const btn = document.getElementById("btn")


const copy = document.getElementById("copy")
const copytext = document.getElementById("copyText")

const crossbtn = document.getElementById("crossbtn")


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const num = "1234567890"
const symbol = "@#$%&*!{}[]<>?=+-_/"

const allChar = upperCase + lowerCase + num + symbol

btn.addEventListener("click", ()=>{
    // console.log(pass.value);
    const length = 8
    let password = ""
    while (length>password.length) {
        password+=allChar[Math.floor(allChar.length*Math.random())]
    }
    // console.log(password);

    pass.value = password
})

//..............................................................................................
copy.addEventListener("click",()=>{
    pass.select() //ctrl a
    document.execCommand("copy") // copy
    copytext.style.visibility="visible"
})

crossbtn.addEventListener("click", ()=>{
    copytext.style.visibility="hidden"
})

//..............................................................................................





// console.log(upperCase[6]);
// console.log(lowerCase[2]);
// console.log(num[1]);
// console.log(symbol[0]);
// console.log(allChar.length);







// console.log(allChar[Math.floor(allChar.length*Math.random())]);