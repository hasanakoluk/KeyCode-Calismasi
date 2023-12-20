const p = document.querySelector("p")
const input = document.getElementById("imp")

input.addEventListener("keyup",function press(event){
    if(input.value != 0 ){
        p.textContent = `Basılan Tuş: ${input.value} KeyCode: ${event.keyCode}`
    }
})


