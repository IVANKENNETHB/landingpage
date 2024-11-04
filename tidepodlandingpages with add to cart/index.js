const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderTrack = document.querySelector('.slider-track');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 20;
const totalCards = cards.length;


function updateSliderPosition() {
    sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}


prevButton.addEventListener('click', () => {
    
    if (currentIndex > 0) { 
        currentIndex--; 
    }
    updateSliderPosition();
});


nextButton.addEventListener('click', () => {
    
    if (currentIndex < totalCards - 3) { 
        currentIndex++; 
    updateSliderPosition();
    }
});

// Section 5
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".midText .text");
    let currentIndex = 0;

    items[currentIndex].classList.add("active");

    function showItem(index) {
        items.forEach(item => item.classList.remove("active"));
        
        items[index].classList.add("active");
    }

    document.querySelector(".midText").addEventListener("wheel", function(event) {
        event.preventDefault();
        
        if (event.deltaY > 0) {
            // Scroll down
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        } else {
            // Scroll up
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        }
        
        showItem(currentIndex);
    });
});

