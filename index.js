var clickedNavbar = 0;

function loadB() {
    var previousScroll = 0,
    headerOrgOffset = $('#header').height();
    
    $('#header-wrap').height($('#header').height());
    
    var position1 = $('#bgimg-1Placeholder').offset().top + $('#bgimg-1Placeholder').height() + $('#content-1').height() / 2;
    var position2 = $('#bgimg-2Placeholder').offset().top + $('#bgimg-2Placeholder').height() + $('#content-2').height() / 2;
    var position3 = $('#bgimg-3Placeholder').offset().top + $('#bgimg-3Placeholder').height() +$('#content-3').height() / 2;
    
    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        
        if (($(window).width() <= 768) && (clickedNavbar < 2)) {
            $('.bgimg-2').css("opacity", +(currentScroll > position1));
            $('.bgimg-3').css("opacity", +(currentScroll > position2));
            $('.bgimg-4').css("opacity", +(currentScroll > position3));
        }
        
        if (currentScroll > headerOrgOffset) {
            if (currentScroll > previousScroll) {
                if (clickedNavbar == 0) $('#header-wrap').slideUp();
                else if (clickedNavbar == 1) clickedNavbar = 0;
            } else if (currentScroll < previousScroll) {
                $('#header-wrap').slideDown();
                handleTransparencyHeader(currentScroll);
            }
        } 
        previousScroll = currentScroll;
    });
}

function handleTransparencyHeader(currentScroll) {
    if ($('#header').className != " responsive")
    if (currentScroll < $('.bgimg-1').height() / 2) {
        $('#header').css("background-color", "transparent");
    } else {
        $('#header').css("background-color", "#333");
    }
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
	if(window.location.hash.length > 0) {
        window.scrollTo(0, $(window.location.hash).offset().top);
    }
});