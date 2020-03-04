$(document).ready(function(){

    $('#getButton').click(function(){

      $.ajax({
        type: "GET",
        url: "/comments",
        dataType: 'script',

      });
    })


  $('[type=submit]').click(function(e){
    e.preventDefault()
    if($('[name=create]').val() == ''){
      return false
    }
    $.ajax({
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      },
      type: "post",
      url: "/comments",
      data: { comment: $('[name=create]').val() },
      dataType: "script"
    });
  })




$('[name=q]').on('keyup', function(){
  if($(this).val().length > 2){
    $.ajax({
      type: "get",
      url: "/comments",
      data: { q: $(this).val() },
      dataType: "script"
    });
  }
})

})
