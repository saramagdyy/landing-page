let toggler = document.querySelector('.toggler');
let menu = document.querySelector('.links');
var x = window.matchMedia("(max-width: 700px)");
function handleMenuDisplay() {
    if (x.matches) {
        menu.style.display = 'none';
    } else { 
        menu.style.display = 'flex';
    }
}

handleMenuDisplay()
window.addEventListener('resize', handleMenuDisplay);

toggler.addEventListener('click', function() {
        if (menu.style.display === 'none') {
            menu.style.display = 'flex'; 
        } else {
            menu.style.display = 'none'; 
        }
});
