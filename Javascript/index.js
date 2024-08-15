// Code for Hamburger menu and Sidebar menu.
var hamburger_container = document.querySelector(".hamburger");
var exit_container = document.querySelector(".exit_container");
var sidebar = document.querySelector('.sidebar');

hamburger_container.addEventListener('click', () => {
    if(sidebar.style.display == 'none' || sidebar.style.display == ''){
        sidebar.style.display = 'flex';
        // Disable scrolling
        document.body.style.overflow = 'hidden';
    }
});

exit_container.addEventListener('click', () => {
    if(sidebar.style.display == 'flex' || sidebar.style.display != ''){
        sidebar.style.display = 'none';
        // Enable scrolling
        document.body.style.overflow = 'auto';
    }
});

// Code for Image Slideshow
const images = document.querySelectorAll('.slideshow-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Get current date (Year)
var rights_bar = document.querySelector('.rights_container');
const currentYear = new Date().getFullYear();
rights_bar.innerHTML = "<p>All Rights Reserved by Bieco XP International Ltd. © " + currentYear + "</p>";