$('document').ready(() => {
    var $display = $('#displayData');

    let url = "http://marucik.azurewebsites.net/api/contact";
    
    var request = $.ajax({
        url:    url,
        type:   "get",
        crossDomain: true,
        dataType: 'json',
    });
    
    request.done((response, textStatus, jqXHR) => {
        console.log("connected");
        console.log(response);
        response.forEach((el, index, array) => {
            console.log(el);
            var $li = $('<li>');
            var $span = $('<span>', {
                text: el.name + ": "
            });
            $li.append($span)
                .append(document.createTextNode(el.value));
            $display.append($li);
        });
    });
    
    request.fail((jqXHR, textStatus, errorThrown) => {
        console.error(
            "Something went wrong! "+
            textStatus, errorThrown
        );
    });
})
