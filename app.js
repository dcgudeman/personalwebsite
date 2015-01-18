$(document).ready(function(){


  var count = 0;



  $('#origin').on('click',function(event){



    $('.element').toggleClass('swingAround');
    if(count%2 === 0)
    {

      $('.description').removeClass('fadeOut').addClass('fadeIn');
      count++;
    }
    else
    {
      $('.description').removeClass('fadeIn').addClass('fadeOut');
      count++;
    }

  });

  $('#origin div').on('click',function(event){
    event.stopPropagation();
  });




});