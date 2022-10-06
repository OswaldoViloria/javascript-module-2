/*DOM-MANIPULATION 2 PART 1 */

document.querySelector("#blueBtn").addEventListener("click", function() {
    document.getElementById("jumbotronID").style.backgroundColor = "#588fbd"
    document.getElementById("btnPrimary").style.backgroundColor = "#ffa500"
    document.getElementById("btnSecondary").style.backgroundColor = "#000000"
    document.getElementById("btnSecondary").style.color = "white"
})

document.querySelector("#orangeBtn").addEventListener("click", function() {
    document.getElementById("jumbotronID").style.backgroundColor = "#f0ad4e"
    document.getElementById("btnPrimary").style.backgroundColor = "##5751fd"
    document.getElementById("btnSecondary").style.backgroundColor = "#31b0d5"
    document.getElementById("btnSecondary").style.color = "white"
})

document.querySelector("#greenBtn").addEventListener("click", function() {
    document.getElementById("jumbotronID").style.backgroundColor = "#87ca8a"
    document.getElementById("btnPrimary").style.backgroundColor = "black"
    document.getElementById("btnSecondary").style.backgroundColor = "#8c9c08"
})

/* DOM-MANUPLATION 2 PART 2 */

const submitButton = document.querySelector("form button")
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
   

    const emailInput = document.querySelector("#exampleInputEmail1")
    const email = emailInput.value
    const isEmailValid = email.length > 0 && email.includes("@")
    if (isEmailValid === false) {
        emailInput.style.background = "red"
    } else {
        emailInput.style.background = "white"
    }

    const nameInput = document.querySelector("#example-text-input")
    const name = nameInput.value
    const isNameValid = name.length > 0
    if (isNameValid === false) {
        nameInput.style.background = "red"
    } else {
        nameInput.style.background = "white"
    }

    const personalDescriptionInput = document.querySelector("#exampleTextarea")
    const personalDescription = personalDescriptionInput.value
    const isPersonalDescriptionValid = personalDescription.length > 0
    if (isPersonalDescriptionValid === false) {
        personalDescriptionInput.style.background = "red"
    } else {
        personalDescriptionInput.style.background = "white"
    }

    const isEverythingValid = isEmailValid && isNameValid && isPersonalDescriptionValid 
    if (isEverythingValid) {
        window.alert("thank you for filling out the form") 
        emailInput.value=""
        nameInput.value=""
        personalDescriptionInput.value=""
    }
})