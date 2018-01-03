var clickedNavbar = 0;

function loadB() {
	$('#header').css("background-color", "#333");
    var previousScroll = 0,
    headerOrgOffset = $('#header').height();
    
    $('#header-wrap').height($('#header').height());
	
    return;
}

function handleTransparencyHeader(currentScroll) {
	$('#header').css("background-color", "#333");
}

function handleResponsive() {
    var x = document.getElementById("header");
    if (x.className === "topnav") {
        x.className += " responsive";
        handleTransparencyHeader(99999);
    } else {
        x.className = "topnav";
    }
}

jQuery(function($) {
    $('.link').on('click', function(e) {
        if (!(($(this).attr('id') == 'homelink') && ($('#header').attr('class') == 'topnav')))
            handleResponsive();
        e.preventDefault();
        var scrollTo = $(this).attr('href'); // retrieve the hash using .attr()
        
        clickedNavbar = 2
        
        if (scrollTo != null && scrollTo != '') {
            $('html, body').animate({
                scrollTop: $(scrollTo).offset().top
            }, 500, function() {
                 // Animation complete.
                 handleTransparencyHeader($(window).scrollTop());
                 clickedNavbar = 1;
            });
        }
    });
});

function showPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

$( document ).ready(function() {
    $("#extraprojects").hide();
});