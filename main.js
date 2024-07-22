document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.dropdown-toggle');
    const menu = document.querySelector('.dropdown-menu');

    toggleButton.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!toggleButton.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});