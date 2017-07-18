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
  $.ajax({
    method:"GET"
    url :"members.json"
    dataType:"json"
  }).done(function(data){
    for(var i=0;i<data.length;i++){
      var tags = "";
      for(var dt in deta[i]){
        tags = tags+"<td>"+ data.name[i][dt]+"</td>";
        tags = tags+"<td>"+ data.jp_name[i][dt]+"</td>";
        tags = tags+"<td>"+ data.id[i][dt]+"</td>";
      }
      $("#tbl").append("<tr>" + tags + "</tr>");
    }
  });
});
