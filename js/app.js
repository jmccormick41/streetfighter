$(document).ready(function () {
    intro();
    // $('.instructions').fadeIn();
    $('.ryu').mouseover(function () {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
        .mouseleave(function () {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
        .mousedown(function () {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
            .animate({
            'left': '950px'
        },
        500,
        function () {
            $(this).hide();
            $(this).css('left', '450px');
        });
    })
        .mouseup( function () {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

$('body').on('keydown', function(event) {
        if (event.which == 88) {
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        }
    })
       .on('keyup', function(event) {
        if (event.which == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    });

    function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }

    function intro() {
         $('.text :first-child').fadeToggle().delay(3000).fadeToggle().delay(1000)
             .next().delay(4000).fadeToggle().delay(3000).fadeToggle().delay(1000)
              .next().delay(8000).fadeToggle().delay(3000).fadeToggle().delay(1000)
                .next().delay(12000).fadeIn();
    }


});

  
