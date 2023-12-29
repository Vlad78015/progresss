let cardName = document.querySelector(".card__name")
let inputName = document.querySelector(".form__name")
inputName.addEventListener("input", function(){
    let inputNameValue = inputName.value
    cardName.innerHTML = inputNameValue
})

let cardSurname = document.querySelector(".card__surname")
let inputSurname = document.querySelector(".form__surname")
inputSurname.addEventListener("input", function(){
    let inputSurnameValue = inputSurname.value
    cardSurname.innerHTML = inputSurnameValue
})

let cardCvv = document.querySelector(".card__cvv")
let formCvv = document.querySelector(".form__receive-2")
formCvv.addEventListener("click", function(event){
    event.preventDefault()
    let randomCvv = Math.floor(Math.random()*900)+100
    cardCvv.innerHTML = `CVV - ${randomCvv}`
})

let cardNumber = document.querySelector(".card__number")
let formNumber = document.querySelector(".form__receive")
formNumber.addEventListener("click", function(event){
    event.preventDefault()
    let randomOne = Math.floor(Math.random()*9000)+1000
    let randomTwo = Math.floor(Math.random()*9000)+1000
    let randomThree = Math.floor(Math.random()*9000)+1000
    let randomFour = Math.floor(Math.random()*9000)+1000
    cardNumber.innerHTML = `${randomOne} ${randomTwo} ${randomThree} ${randomFour}` 
})

let cardDate = document.querySelector(".card__date")
let inputDate = document.querySelector(".form__date")
inputDate.addEventListener("change", function(){
    let inputDateValue = inputDate.value
    let dateSelected = inputDateValue.split("-")
    if(dateSelected.length === 3){
        let year = dateSelected[0]
        let month = dateSelected[1]
        let day = dateSelected[2]
        let years = Number(parseInt(year)) + 5
        cardDate.innerHTML = `${month}/${years}`
    }
})
