
var main = function() {
    $('.day').click(function() {
        $(this).next().toggle('.hourly');
        var $el = $(this).find('span.glyphicon');
        $($el).toggleClass('glyphicon-plus glyphicon-minus');
    });
};

$(document).ready(main);
