const button = document.getElementById('hide_button')
const tableBody = document.getElementById('table_body')


function clickHandler() {
    tableBody.classList.toggle('table_body_hide')
}

button.addEventListener("click", clickHandler)