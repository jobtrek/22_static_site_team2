let pageButtons = document.getElementsByClassName('liststyle')
let burgerButton = document.getElementById('burger')
let userScreen = document.querySelector('body').clientWidth; 
document.querySelector('body').onresize = function () {
    userScreen = document.querySelector('body').clientWidth;
    if (document.documentElement.clientWidth <= 800) {
        for (const pagebutton of pageButtons) {
            pagebutton.style.display = 'none';
        }
    } else {
        for (const pagebutton of pageButtons) {
            pagebutton.style.display = 'flex';
        }
    }
}
burgerButton.addEventListener('click', function () {
    if (userScreen <= 800){
    for (const pagebutton of pageButtons) {
        if (pagebutton.style.display == 'flex') {
                 pagebutton.style.display = 'none'
        }else{
                 pagebutton.style.display = 'flex';
             }
        }
    }
});
 
