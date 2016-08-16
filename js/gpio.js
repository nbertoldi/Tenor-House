$(document).ready(function(){
   $('#color-wheel').farbtastic('#color-bind')
   var wheel = $.farbtastic('#color-wheel')

    $(".list-group > .list-group-item").click(function()
    {   
        $(this).addClass("color-bind").siblings().removeClass("color-bind")
        $(this).css("background-color",wheel.color).siblings().css("background-color","")
        $(this).css("color",wheel.hsl[2] > 0.5 ? '#000' : '#fff').siblings().css("color","")
        $('#debug').text(wheel.hsl[2] > 0.5 ? 'black' : 'white')
    });
});


function updateDisplay(val)
{
    $('#display-thumbnail > h3').html(val);
}

function color_bind(thing, fb)
{
    $('.' + thing.id).css('background-color',fb.color);
    $('.' + thing.id).css('color',fb.hsl[2] > 0.5 ? '#000' : '#fff');
    updateDisplay(fb.color);
}
