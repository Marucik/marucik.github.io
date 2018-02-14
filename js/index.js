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
        let url = "https://portfolio-db.herokuapp.com/api/message";
        let username = $('#username').val();
        let message = $('#message').val();
        let obj = {
            "username": username,
            "message": message
        };
        var data = JSON.stringify(obj);

        console.log(data);
        console.log(obj);

        var request = $.ajax({
            url:    url,
            type:   "post",
            data:   data,
            crossDomain: true,
            "processData": false,
            "headers": {
                "content-type": "application/json",
            },
            // contentType: 'application/json',
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
