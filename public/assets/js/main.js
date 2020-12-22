$(document).ready(function() {
   console.log("Ready")
   var presetantionCards = $('.list-group-item');
   var countOpacity = 0;
   presetantionCards.each(function(){
       gsap.fromTo($(this), {opacity: 0}, {opacity: 1, duration: 1, delay: countOpacity / 5});
       countOpacity ++;
   });

});
