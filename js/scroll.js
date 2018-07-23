
$(document).ready(function() {
    $('#link_1').click(function(){
       $('html, body').animate({scrollTop:$('#portfolio_section').position().top - 50}, 1000);
    });
    $('#link_2').click(function(){
       $('html, body').animate({scrollTop:$('#school_section').position().top - 100}, 1000);
    });
    $('#link_3').click(function(){
       $('html, body').animate({scrollTop:$('#portfolio_section').position().top - 150}, 1000);
    });
    $('#link_4').click(function(){
        $('html, body').animate({scrollTop:$('#services_section').position().top - 150}, 1000);
     });
    $('#link_5').click(function(){
       $('html, body').animate({scrollTop:$('#footer_section').position().top - 150}, 1000);
    });
    $('#link_6').click(function(){
       $('html, body').animate({scrollTop:$('#school_section').position().top - 200}, 1000);
    });
    $('#link_7').click(function(){
       $('html, body').animate({scrollTop:$('#portfolio_section').position().top - 100}, 1000);
    });
    $('#link_8').click(function(){
       $('html, body').animate({scrollTop:$('#services_section').position().top - 150}, 1000);
    });
    $('#link_9').click(function(){
       $('html, body').animate({scrollTop:$('#footer_section').position().top - 100}, 1000);
    });
    $('#link_10').click(function(){
        $('html, body').animate({scrollTop:$('#portfolio_section').position().top - 50}, 1000);
    });
    $('#link_11').click(function(){
       $('html, body').animate({scrollTop:$('#footer_section').position().top - 200}, 1000);
    });
    $('.arrow_top').click(function(){
       $('html, body').animate({scrollTop:$('#header_section').position().top - 300}, 1000);
    });
});
