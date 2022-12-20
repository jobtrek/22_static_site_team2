let pageButtons = document.getElementsByClassName('liststyle')
let burgerButton = document.getElementById('burger')
for (const pagebutton of pageButtons) {
    pagebutton.style.display = 'none';
    displaystyle = pagebutton.style.display;
    console.log(displaystyle);
}
burgerButton.addEventListener('click', function () {
    if (displaystyle == 'none') {
        for (const pagebutton of pageButtons) {
            pagebutton.style.display = 'flex';
            displaystyle = pagebutton.style.display;
            console.log(displaystyle);
        }
    } else {
        for (const pagebutton of pageButtons) {
            pagebutton.style.display = 'none';
            displaystyle = pagebutton.style.display;
            console.log(displaystyle);
        }
    }
});