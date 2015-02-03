$(document).ready(function() {

  var timer = null;
  // $('#textile-edit').keydown(function() {
  //   if(timer) clearTimeout(timer);
  //   timer = setTimeout(preview, 500);
  // });
  var editor = ace.edit('textile-edit');
  editor.getSession().on('change', function(e) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(preview, 500);
  });

  function preview () {
    $('#preview').html(textile(editor.getValue()));

//    $('#preview').html(textile($('#textile-edit').val()));
  }
});


