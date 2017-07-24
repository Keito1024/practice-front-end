// $(function(){
//   $('.tab li').click(function(){
//     var index = $('.tab li').index(this);
//     $('.content li').hide();
//     $('.content li').eq(index).fadeIn();
//     $('.tab li').removeClass('select');
//     $(this).addClass('select')
//   });
// });
//
//
// $(function(){
//   $("#acMenu dt").on("click", function() {
//     $(this).next().slideToggle();
//   });
// });


// ---------json--------------

$(function(){
  var template = _.template('<div><table><tr><th><%= id %></th>'+'<th><%= jp_name %></th>'+'<th><%= name %></th>'+'<th><%= description.ja %></th></tr></table></div>');
  $.ajax({
    method:"GET",
    url:"/files/members.json",
    dataType:"json"
  }).done(function(data){
    _.each(Object.keys(data), function(key){
      $('.ly-global-footer').append(template(data[key]));
    });
  });
});
