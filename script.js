const button = document.getElementById
('hide_button')
const tableHead = document.getElementById('table_body')

function clickHandler() {
    tableHead.classList.toggle('table_body_hide')
}


button.addEventListener("click", clickHandler)