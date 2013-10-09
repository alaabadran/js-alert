
//alert($(document).prop('title'));

$(function (){
    // First, storing default alert()
    var $alert = window.alert;
    // now overriding.
    window.alert = function (msg, title){
        if(!title){
            title = $(document).prop('title');
        }
        $('#jsalert_modal h4').html(title);
        $('#jsalert_modal .modal-body').html(msg);
        $('#jsalert_modal').fadeIn(400);
    };
    // preparing HTML layout for new alert()
    // Adding Modal HTML.
    var html = '<div class="modal" role="dialog" id="jsalert_modal"><div class="modal-dialog" aria-hidden="true"><div class="modal-content">'+
        '<div class="modal-header">'+
          '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
          '<h4 class="modal-title">{{TITLE}}</h4>'+
        '</div>'+
        '<div class="modal-body">'+
            '{{ALERT}}'+
        '</div>'+
    '</div></div></div>';
    var alertObj = $('body').append(html);
    // Showing your message
    $('#jsalert').on('click', function (e){
        e.preventDefault();
        alert($('#alert_message').val()); 
    });
    $(document).on('click', '#jsalert_modal .close', function (e){
        $('#jsalert_modal').fadeOut(300);
    });
});