const plus = document.querySelectorAll('span');
const dropdowns = Array.from(document.querySelectorAll('.dropdown'));


function showDropdown() {
    const x = this.classList.value;
    const y = dropdowns[x];
    y.classList.toggle('show');
}

plus.forEach(plus => plus.addEventListener('click', showDropdown));