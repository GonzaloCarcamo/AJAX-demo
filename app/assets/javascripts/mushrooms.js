$(document).ready(function(){

    $('#getButton').click(function(){
      $('ul').html('')
      $.ajax({
        type: "GET",
        url: "/comments",
        dataType: 'script',

      });
    })


  $('[type=submit]').click(function(e){
    e.preventDefault()
    if($('[type=text]').val() == ''){
      return false
    }
    $.ajax({
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      },
      type: "post",
      url: "/comments",
      data: { comment: $('[type=text]').val() },
      dataType: "script"
    });
  })

})


// también puede ser $('h1').on('click', function(){})
