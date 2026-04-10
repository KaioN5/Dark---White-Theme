'use strict';

const switcher = document.getElementById('btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    // Verifica se o body tem a classe dark-theme
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = "Light";
    } else {
        this.textContent = "Dark";
    }

    console.log('Current class name: ' + document.body.className);
});