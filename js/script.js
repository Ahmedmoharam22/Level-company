
$(document).ready(function(){
  $('.level-slider').slick({
  dots:true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  });
});


let span = document.querySelector("#btn");

window.onscroll = function(){
  if( scrollY >= 1200){
    btn.classList.add("show")
  }else{
    btn.classList.remove("show")
  }
};

span.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
}
