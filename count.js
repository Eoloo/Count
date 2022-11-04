
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
}

// let countEl = count + 1


// console.log(count)

//let x=x+6
