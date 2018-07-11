var owl;

function customPager() {

    $.each(this.owl.userItems, function (i) {

        var titleData = jQuery(this).find('h3').text();
        var paginationLinks = jQuery('.owl-controls .owl-pagination .owl-page span');

        $(paginationLinks[i]).append(titleData).wrap('<h3 class="slideTitle"></h3>');

    });
}

$('#owl-1').owlCarousel({
    autoPlay: 4000,
    navigation: true,
    slideSpeed: 3000,
    paginationSpeed: 2000,
    singleItem: true,
    afterInit: customPager,
    afterUpdate: customPager,
    navigationText : false
});

//option to move owl button through DOM
//$('.homeCarousel .owl-buttons').detach().appendTo('.homeCarousel');