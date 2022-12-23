let pageButtons = document.getElementsByClassName('liststyle')
let burgerButton = document.getElementById('burger')
document.querySelector('body').onresize = function () {
    let w = document.documentElement.clientWidth;
    console.log(w)
    if (w < 800) {
        for (const pagebutton of pageButtons) {
            pagebutton.style.display = 'none';
        }
    } else {
        for (const pagebutton of pageButtons) {
            pagebutton.style.display = 'flex';
        }
    }

    burgerButton.addEventListener('click', function () {

        for (const pagebutton of pageButtons) {
            pagebutton.style.display = 'flex';
        }

    });



}
