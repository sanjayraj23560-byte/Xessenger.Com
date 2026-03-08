// getting all elements form the html 
const warn_main = document.querySelector(".warn_main")
const textarea = document.querySelector("#msg")
const count = document.querySelector("#count")
const warning = document.querySelector(".warning")

// fixing the linit of chars 
const maxChars = 200

// event for input limit 
textarea.addEventListener("input", function () {
    let currentLength = textarea.value.length

    // condition for limit 
    if (currentLength > maxChars) {
        textarea.value = textarea.value.substring(0, maxChars)
        alert("Limit reached !!")
        currentLength = maxChars
        warning.value = "Reached limit "
        warning.style.color = "red"
    }
    else {
        warning.textContent = ""
        
    }
    // defining latest
    count.textContent = currentLength
})
