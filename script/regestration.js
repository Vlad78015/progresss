let buttonSub = document.querySelector(".regestration__button")
buttonSub.addEventListener("click", function(){
    let userName = document.querySelector(".regestration__username")
    let email = document.querySelector(".regestration__email")
    let password = document.querySelector(".regestration__password")
    let tel = document.querySelector(".regestration__tel")

    let userNameValue = userName.value
    let emailValue = email.value
    let passwordValue = password.value
    let telValue = tel.value

    if(userNameValue.length === 0 || userName.value[0] != userName.value[0].toLocaleUpperCase() ){
        let modalFirst = document.querySelector(".modal")
        if(modalFirst.className === "modal"){
            modalFirst.classList.add("false__modal")
            userName.style.border = "2px solid red"
            userName.style.borderRadius = "15px"
        }
        setTimeout(function(){
            modalFirst.classList.remove("false__modal")
        },2400)
        return
    }
    else if(!emailValue.includes("@gmail.com")){
        userName.style.border = "none"
        userName.style.borderRadius = "0px"
        userName.style.borderBottom = "1px solid lime"
        let modalSecond = document.querySelector(".modal__email")
        if(modalSecond.className === "modal__email"){
            modalSecond.classList.add("false__modal__email")
            email.style.border = "2px solid red"
            email.style.borderRadius = "15px"
        }
        setTimeout(function(){
            modalSecond.classList.remove("false__modal__email")
        },2400)
        return
    }
    else if(passwordValue.length < 7){
        email.style.border = "none"
        email.style.borderRadius = "0px"
        email.style.borderBottom = "1px solid lime"
        let modalThird = document.querySelector(".modal__password")
        if(modalThird.className === "modal__password"){
            modalThird.classList.add("false__modal__password")
            password.style.border = "2px solid red"
            password.style.borderRadius = "15px"
        }
        setTimeout(function(){
            modalThird.classList.remove("false__modal__password")
        },2400)
        return
    }
    else if(telValue.length !== 13){
        password.style.border = "none"
        password.style.borderRadius = "0px"
        password.style.borderBottom = "1px solid lime"
        let modalFour = document.querySelector(".modal__tel")
        if(modalFour.className === "modal__tel"){
            modalFour.classList.add("false__modal__tel")
            tel.style.border = "2px solid red"
            tel.style.borderRadius = "15px"
        }
        setTimeout(function(){
            modalFour.classList.remove("false__modal__tel")
        },2400)
        return
    }
    else {
        tel.style.border = "none"
        tel.style.borderRadius = "0px"
        tel.style.borderBottom = "1px solid lime"
        window.location.href = "./card.html"
    }
})
