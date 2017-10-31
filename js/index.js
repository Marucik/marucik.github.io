$('document').ready(() => {

    $('#circle').click(() => {
        $('#circle').addClass('expandCircle');
        $('.contactForm').removeClass('hide');
        $('.formIcon').addClass('hide');
    });

    $('.main').click(() => {
        $('#circle').removeClass('expandCircle')
        $('.contactForm').addClass('hide');
        $('.formIcon').removeClass('hide');
    });


    
});