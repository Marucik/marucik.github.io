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
            // url:    url,
            // type:   "post",
            // data:   data,
            // // contentType: 'application/json',
            // crossDomain: true,
            // "headers": {
            //     "content-type": "application/json",
            // }
            // // dataType: 'json'
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "POST",
            "headers": {
              "content-type": "application/json",
            //   "cache-control": "no-cache",
            //   "postman-token": "0a5d155a-ae87-4638-ae3e-0d51f0a5773d"
            },
            "processData": false,
            "data": data
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