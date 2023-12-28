var pass = document.getElementById("password")
var text = document.getElementById("text")
var strength = document.getElementById("strength")
var input = document.getElementById("input")

pass.addEventListener('input',()=>{
    if (pass.value.length > 0) {
        text.style.display = "block"
    }
    else{
        text.style.display = "none"
    }

    if (pass.value.length < 4) {
        strength.innerHTML="weak"
        input.style.borderColor= "red"
        text.style.color= "red"
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        strength.innerHTML="medium"
        input.style.borderColor = "yellow"
        text.style.color = "yellow"
    }
    else if(pass.value.length >=  8){
        strength.innerHTML="strong"
        input.style.borderColor = "green"
        text.style.color = "green"
    }
})
