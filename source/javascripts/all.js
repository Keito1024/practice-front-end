$(function(){
  $('.tab li').click(function(){
    var index = $('.tab li').index(this);
    $('.content li').hide();
    $('.content li').eq(index).fadeIn();
    $('.tab li').removeClass('select');
    $(this).addClass('select')
  });
});


$(function(){
  $("#acMenu dt").on("click", function() {
    $(this).next().slideToggle();
  });
});
