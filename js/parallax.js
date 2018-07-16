
$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
  
      $('#parallax_img1').css({
        'transform' : 'translate(0px, '+ wScroll /150 +'%)'
      });
  
      $('#parallax_img2').css({
        'transform' : 'translate(0px, -'+ wScroll /150 +'%)'
      });
  
      $('#parallax_img3').css({
        'transform' : 'translate(0px, '+ wScroll /300 +'%)'
      });
  
});
  