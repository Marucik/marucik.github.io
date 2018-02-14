$('document').ready(() => {
    var $displayDone = $('#done');
    var $displayUndone = $('#unDone');

    let url = "https://portfolio-db.herokuapp.com/api/projects";
    
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
            var $li = $('<li>');
            var $name = $('<h3>', {
                text: el.name
            });
            var $descr = $('<p>', {
                text: el.description
            });
            var $link = $(`<a id="${index}" href="${el.link}" target="_blank">`);
            var $icon = ('<i class="fa fa-github-square fa-5x" aria-hidden="true"></i>');

            $li.append($name);
            $li.append($descr);
            $li.append($link);
            var finder = "#" + index;
            if(el.isDone) {
                $displayDone.append($li);
                $displayDone.find(finder).append($icon);
            }else {
                $displayUndone.append($li);
                $displayUndone.find(finder).append($icon);
            }            
        });
    });
    
    request.fail((jqXHR, textStatus, errorThrown) => {
        console.error(
            "Something went wrong! "+
            textStatus, errorThrown
        );
    });
})
