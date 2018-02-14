$('document').ready(() => {

    let url = "https://portfolio-db.herokuapp.com/api/tech";
    
    var request = $.ajax({
        url:    url,
        type:   "get",
        crossDomain: true,
        dataType: 'json',
    });
    
    request.done((response, textStatus, jqXHR) => {
        console.log("connected");
        console.log(response);

        var jsonData = response;

        for(keyName in jsonData) {
            jsonData[keyName].forEach((elem) => {
                var data = elem.name;
                elem.description != "" ? data += " - " + elem.description : "";
                
                var target = "#" + keyName;

                console.log(target);
                var $li = $("<LI>", {
                    text: data
                });

                console.log($li);
                $(target).append($li)

            }, this);
        }

        // response.forEach((el, index, array) => {
        //     var $li = $('<li>');
        //     var $name = $('<h3>', {
        //         text: el.name
        //     });
        //     var $descr = $('<p>', {
        //         text: el.description
        //     });
        //     var $link = $('<a href="' + el.link + '" target="_blank">');
        //     var $icon = ('<i class="fa fa-github-square fa-5x" aria-hidden="true"></i>');
            
        //     // $link.append($icon);

        //     $li.append($name);
        //     $li.append($descr)
        //     $li.append($link);
        //     if(el.isDone) {
        //         $displayDone.append($li);
        //         $displayDone.find("a").append($icon);
        //     }else {
        //         $displayUndone.append($li);
        //         $displayUndone.find("a").append($icon);
        //     }            
        
    });
    
    request.fail((jqXHR, textStatus, errorThrown) => {
        console.error(
            "Something went wrong! "+
            textStatus, errorThrown
        );
    });
})
