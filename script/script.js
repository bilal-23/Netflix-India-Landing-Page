const plus = document.querySelectorAll('span');
const dropdowns = Array.from(document.querySelectorAll('.dropdown'));


function showDropdown() {
    const x = this.classList.value;
    const y = dropdowns[x];
    y.classList.toggle('show');
    if (y.classList.contains('show')) {
        this.textContent = '-';
    } else {
        this.textContent = '+';
    }
}

plus.forEach(plus => plus.addEventListener('click', showDropdown));