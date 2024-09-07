let toggler = document.querySelector('.toggler');
let barMenu = document.querySelector('.links');
toggler.addEventListener('click', function() {
    if (barMenu.style.display === "flex") {
        barMenu.style.display = "none";
    } else {
        barMenu.style.display = "flex";
    }
});
