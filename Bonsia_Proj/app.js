var main = function() {
  $('#top-text').keyup(function(key){
    var text = $('#top-text').val();
    $('.top-caption').html(text);
    if(key.keyCode === 13){
      $('#top-text').val('');
    }
  });

  $('#bottom-text').keyup(function(key){
    var btText = $('#bottom-text').val();
    $('.bottom-caption').html(btText);
    console.log(key.keyCode);
    if(key.keyCode === 13){
      $('#bottom-text').val('');
    }
  });

  $('#image-url').keyup(function(key){
    var imgSrc = $('#image-url').val();
    if(key.keyCode === 13){
      $('.main img').attr('src', imgSrc);
      $('#image-url').val('');
    }
  });
};

$(document).ready(main);
