$(document).ready(function() {

  var timer = null;
  var editor = ace.edit('textile-edit');
  editor.getSession().on('change', function(e) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(preview, 500);
  });

  function preview () {
    $('#preview').html(textile(editor.getValue()));
    localStorage.setItem('data', editor.getValue());
  }

  // 復元
  editor.setValue(localStorage.getItem('data'));
  $('#preview').html(textile(editor.getValue()));
});


