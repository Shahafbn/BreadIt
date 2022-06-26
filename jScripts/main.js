var currentSlide = 0;

function nextSlide() {
    currentSlide++;
    changeSlide(currentSlide);
}
function prevSlide() {
    currentSlide--;
    changeSlide(currentSlide);
}

function changeSlide(slideNum) {

    currentSlide = slideNum;
    if (slideNum > 4) {
        currentSlide = 0;
    }
    if (slideNum < 0) {
        currentSlide = 4;
    }
    var thumbnails = document.getElementsByClassName('thumbnail');
    var slides = document.getElementsByClassName('slidephoto');
    for (var slide of slides) {
        slide.style.display = 'none';
    }
    for (var thumbnail of thumbnails) {
        thumbnail.style.opacity = 0.4;
        thumbnail.style.transition = 0.3;
    }
    
    thumbnails[currentSlide].style.opacity = 1;
    slides[currentSlide].style.display = 'block';
    document.getElementById('altspace').innerHTML = thumbnails[currentSlide].img.alt;
    
}
