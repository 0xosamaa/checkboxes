const items = document.querySelectorAll('.item')
const checkboxes = document.querySelectorAll('input')

let lastChecked
let lastIdx
let inBetween = false
checkboxes.forEach((box,idx) => {
    box.addEventListener('click', (e) => {
        lastChecked = box
        lastIdx = idx

        if(e.shiftKey && box.checked){
            for (let i = checkboxes.length - 1; i >= 0; i--) {
                if(checkboxes[i].checked) inBetween = !inBetween
                if(inBetween) checkboxes[i].checked = true
            }
        }
    })
})

