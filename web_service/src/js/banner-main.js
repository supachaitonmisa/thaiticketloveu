let slideIndexBannersMain = 1;
showSlidesBannerMain(slideIndexBannersMain);

function plusSlidesBannersMain(n) {
  showSlidesBannerMain(slideIndexBannersMain += n);
}

function currentSlideBannersMain(n) {
  showSlidesBannerMain(slideIndexBannersMain = n);
}

function showSlidesBannerMain(n) {
  let i;
  let slides = document.getElementsByClassName("banners-main");
  let dots = document.getElementsByClassName("main-dot");
  if (n > slides.length) {slideIndexBannersMain = 1}    
  if (n < 1) {slideIndexBannersMain = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexBannersMain-1].style.display = "block";  
  dots[slideIndexBannersMain-1].className += " active";
}