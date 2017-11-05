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

    $('#send').click((e) => {
        e.preventDefault();
        let url = "https://marucik.azurewebsites.net/api/message";
        let username = $('#username').val();
        let message = $('#message').val();
        let data = {
            "username": username,
            "message": message
        };

        console.log(data);

        var request = $.ajax({
            url:    url,
            type:   "post",
            data:   data,
            // contentType: 'application/json',
            crossDomain: true,
            // dataType: 'json'
        });
        
        request.done((response, textStatus, jqXHR) => {
            console.log("sent");
            console.log(response);
            $('#circle').removeClass('expandCircle');
            $('.contactForm').addClass('hide');
            $('.formIcon').removeClass('hide');
            alert('Wiadomość wysłana pomyślnie! :)')
        });
        
        request.fail((jqXHR, textStatus, errorThrown) => {
            console.error(
                "Something went wrong! "+
                textStatus, errorThrown
            );
            alert('Coś poszło nie tak! :C')
        });
    })
});