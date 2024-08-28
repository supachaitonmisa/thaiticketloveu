let slideIndexBannersSub = 1;
showSlidesBannersSub(slideIndexBannersSub);

function plusSlidesBannersSub(n) {
  showSlidesBannersSub(slideIndexBannersSub += n);
}

function currentSlideBannersSub(n) {
  showSlidesBannersSub(slideIndexBannersSub = n);
}

function showSlidesBannersSub(n) {
  let i;
  let slides = document.getElementsByClassName("banners-sub");
  let dots = document.getElementsByClassName("sub-dot");
  if (n > slides.length) {slideIndexBannersSub = 1}    
  if (n < 1) {slideIndexBannersSub = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexBannersSub-1].style.display = "block";  
  dots[slideIndexBannersSub-1].className += " active";
}