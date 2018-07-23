
// function menu(){
//   var menu = document.querySelector(".menu");
//   var links = document.querySelector(".links a");


//   menu.addEventListener("click",function(e){
//     e.preventDefault();
//     if(!(this.classList.contains('active_menu'))){
//       this.classList.toggle("active_menu");
//       links.classList.add("active_links");
//     } else {
//       this.classList.remove("active_menu");
//       links.classList.remove("active_links");
//     }
//   });
// }
// menu();


(function($) {
  $(function() {
    $('.menu').click(function() {
      $('.links').toggleClass('active_links');
    });
    $('.links li a').click(function() {
      $('.links').toggleClass('active_links');
    });
  });
})(jQuery);


