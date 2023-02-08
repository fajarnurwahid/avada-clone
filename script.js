// start: Navbar
$('.navbar-menu-dropdown-toggle').click(function(e) {
    if($(window).width() < 991) {
        e.preventDefault()
        $(this).parent().toggleClass('active')
    }
})

$('.navbar-toggle').click(function(e) {
    e.preventDefault()
    var el = $(this)

    $('.navbar-menu').toggleClass('active')
    el.toggleClass('active')
    $('html').toggleClass('no-scroll', el.hasClass('active'))
    if(el.hasClass('active')) {
        setTimeout(function() {
            el.html('<i class="ri-close-line"></i>')
        }, 250)
    } else {
        setTimeout(function() {
            el.html('<i class="ri-menu-line"></i>')
        }, 250)
    }
})
// end: Navbar



// start: Header
var indexTitle = 1;
var headerTitleAnimate = ['Creative', 'Portfolio', 'Online Store'];

$('.header-title-animate').on('animationend', function() {
    $('.header-title-animate').text(headerTitleAnimate[indexTitle])
    $('.header-title-animate').css('--animation', 'none')
    setTimeout(function() {
        $('.header-title-animate').css('--animation', 'headerTitle 5s')
        indexTitle++
        
        if(indexTitle >= headerTitleAnimate.length) {
            indexTitle = 0
        }
    }, 0)
})
// end: Header



// start: Features
$('.features-list a').click(function(e) {
    e.preventDefault()
    $('.features-list li').removeClass('active')
    $(this).parent().addClass('active')
})
// end: Features



// start: FAQ
$('.faq-toggle').click(function(e) {
    e.preventDefault()
    $('.faq-body').not($(this).siblings('.faq-body')).slideUp()
    $('.faq-toggle').not($(this)).find('span').text('+')
    if($(this).siblings('.faq-body').css('display') == 'block') {
        $(this).find('span').text('+')
    } else {
        $(this).find('span').text('-')
    }
    $(this).siblings('.faq-body').slideToggle()
})
// end: FAQ