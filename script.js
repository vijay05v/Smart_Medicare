function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function showMedicalCard() {
    const medicalCard = document.getElementById('medical-card');
    medicalCard.style.display = 'block';
    // Hide menu when medical card is shown
    document.getElementById('nav-menu').style.display = 'none';
}

function closeMedicalCard() {
    document.getElementById('medical-card').style.display = 'none';
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('nav-menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = 'none';
    }
});