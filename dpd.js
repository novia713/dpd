$(document).ready(function() {

    $('form').submit(function(){
      $('#key').val( $('#key').val().toLowerCase() );
    });

});
