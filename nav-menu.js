let menu = document.querySelector('.catalogue-menu');
let catalogue = document.getElementById('Catalogue');
let arrow = document.getElementById('catalogue-arrow');
let rotation = 0;
catalogue.addEventListener('click', function(event) {
    menu.classList.toggle('hide');
    rotation += 180;
    arrow.style.transform = `rotate(${rotation}deg)`;
});