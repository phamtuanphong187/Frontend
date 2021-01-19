//Owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navigation : true,
    navText: ["<i class='btnCarousel fa fa-chevron-circle-left' aria-hidden='true'></i>","<i class='btnCarousel fa fa-chevron-circle-right' aria-hidden='true'></i>"],

    responsive:{
        1920:{
            items:3
        },
        1200:{
            items:3
        },
        1024:{
            items:2
        },
        640:{
            items:2
        },
        480:{
            items:2
        },
        0:{
            items:1
        }
    }
});

//click button to focus search input
$(document).ready(function(){
    var search_in = document.getElementById('search-button');
    search_in.addEventListener('click',function(){
        $("#header__search").show();
        document.getElementById('form-search').focus();
        document.getElementById('close-button').click();
        $('.header__top').css('border-bottom', '0');
        $('.search-navbar').css('border-bottom', 'solid 1px #ddd');
    });
});

//scroll event
$(document).ready(function(){
    var prevScrollpos = window.pageYOffset;
    
    window.onscroll = function() {
        //change position sticky to fixed
        var currentScrollPos = window.pageYOffset;
        var topbar = document.querySelector('.topbar');
        var header = document.querySelector('.header');

        var viewportOffset = topbar.getBoundingClientRect();
        var top = viewportOffset.top;
        if (top <= -46 && $(window).width() >  1200) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        //scroll up hide header
        if($(window).width() <  1200)
        {
            if (prevScrollpos > currentScrollPos) {
                
                if (currentScrollPos < 46) {
                    
                    $("#header__search").slideDown('fast');
                    $('.header__top').css('border-bottom', '0');
                    $('.search-navbar').css('border-bottom', 'solid 1px #ddd');
                } else {
                    $('.header__top').css('border-bottom', 'solid 1px #ddd');
                    $('.search-navbar').css('border-bottom', '0');
                    $("#header__search").hide();
                }
                header.style.top = "0";
            } else {
                header.style.top = "-200px";
            }
            prevScrollpos = currentScrollPos;
        } else {
            if (prevScrollpos > currentScrollPos) {
                header.style.top = "0";
            } else {
                header.style.top = "-200px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
});

//show search form
$(document).ready(function(){
    var search_out = document.querySelector('.search-out');
    var search = document.querySelector('.search2');
    search_out.addEventListener('click', function() {
        var tag = $('.search2');
        if (tag.hasClass('hidden')) {
            tag.stop().removeClass('hidden').css('opacity' ,'0');
            tag.resumeTrnsn().css('opacity' ,'1');
        }else {
            tag.stop().css('opacity' ,'0').wait(500, function() {
            tag.addClass('hidden');
            });
        }
    });
});

$.fn.wait = function (time, fn) {
    if (time)
        this.delay(time);
    if (!fn)
        return this;

    var _this = this;
    return this.queue(function (n) {
        fn.call(_this);
        n();
    });
};

$.fn.resumeTrnsn = function () {
    return this.each(function (i, tag) {
        tag.offsetHeight;    
        tag.style.transition = null;
    });
};

//disable enable search icon
$(document).ready(function(){
    var search = document.querySelector('#form-search');
    search.addEventListener('input', function() {
        $('.form-control-feedback').css({
            'color':'#000',
            'pointer-events':'auto'
        });
    });
});

$(document).ready(function(){
    $(".list-item").click(function(){
      window.location.href = '#';
    });
});