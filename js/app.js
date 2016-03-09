
$(document).ready(function() {
  ryuThrowing = $('.ryu-throwing');
  ryuReady = $('.ryu-ready');
  ryuStill = $('.ryu-still');
  hadouken = $('.hadouken');
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    if ($('.hadouken').length) {
        playHadouken(); 
    };
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
     .animate(
       {'left': '300px'},
       500,
       function() {
         $(this).hide();
         $(this).css('left', '-210px');
       }
     );
  })
  .mouseup(function() {
  $('.ryu-throwing').hide();
  $('.ryu-ready').show();
  });
  $('body').keydown(function(event) {
    if (event.which == 88) {
      event.preventDefault();
      ryuThrowing.detach();
      ryuReady.detach();
      ryuStill.detach();
      hadouken.finish().detach();
      $('#hadouken-sound')[0].currentTime = 0;
      $('#hadouken-sound')[0].pause();
      $('.ryu-cool').show();
    };
  }).keyup(function(event){
    if (event.which == 88) {
      $('.ryu-cool').hide();
      ryuThrowing.prependTo($('.ryu'));
      ryuReady.prependTo($('.ryu'));
      ryuStill.prependTo($('.ryu'));
      $('.ryu').after(hadouken);
    }
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

});



function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

$(document).keydown(function(event) {
		/* Act on the event */
		if (event.keyCode === 88) {
			$('.ryu div').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function(event) {
		/* Act on the event */
		if (event.keyCode === 88) {
			$('.ryu div').hide();
			$('.ryu-still').show();
		}
	});


