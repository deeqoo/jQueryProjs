var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');

    switch (category) {
      case 'nav-consumer':
        $('.thumbnail').removeClass('selected');
        $('.consumer').addClass('selected');
        break;
      case 'nav-mobile':
        $('.thumbnail').removeClass('selected');
        $('.mobile').addClass('selected');
        break;
      case 'nav-commerce':
        $('.thumbnail').removeClass('selected');
        $('.commerce').addClass('selected');
        break;
      case 'nav-enterprise':
        console.log('nav enterprise selected');
        $('.thumbnail').removeClass('selected');
        $('.enterprise').addClass('selected');
        break;
      case 'nav-all':
        $('.thumbnail').removeClass('selected');
        break;
      default:
        console.log('no valid option found!');
    }

    $('.nav li').removeClass('active');
    $(this).addClass('active');

  });
};

$(document).ready(main);
