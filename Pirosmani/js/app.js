$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.navigation').toggleClass('active');
        $('body').toggleClass('lock')
        $('.main').toggleClass('blur')
    });
});