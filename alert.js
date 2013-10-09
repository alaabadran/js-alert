
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
        $('#jsalert_modal').modal('show');
    };
    // preparing HTML layout for new alert()
    // Adding Modal HTML.
    var html = '<div class="modal fade" role="dialog" id="jsalert_modal" aria-hidden="true"><div class="modal-dialog"><div class="modal-content">'+
        '<div class="modal-header">'+
          '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
          '<h4 class="modal-title">{{TITLE}}</h4>'+
        '</div>'+
        '<div class="modal-body">'+
            '{{ALERT}}'+
        '</div>'+
        '<div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal"> Ok </button></div>'+
    '</div></div></div>';
    var alertObj = $('body').append(html);
    $('#jsalert_modal').modal('hide');
    // Showing your message
    $('#jsalert').on('click', function (e){
        e.preventDefault();
        alert($('#alert_message').val()); 
    });
});