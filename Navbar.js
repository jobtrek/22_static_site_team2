let pageButtons = document.getElementsByClassName('liststyle')
let burgerButton = document.getElementById('burger')
let displaystyle;
for (const pagebutton of pageButtons) {
    pagebutton.style.display = 'none';
    displaystyle = pagebutton.style.display
}
burgerButton.addEventListener('click', function () {
    if (displaystyle === 'none') {
        for (const pagebutton of pageButtons) {
            pagebutton.style.display = 'flex';
        }
    } else {
        for (const pagebutton of pageButtons) {
            pagebutton.style.display = 'none';
        }
    }
});