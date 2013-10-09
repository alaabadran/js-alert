
'use strict';
var $alert = window.alert;

$.jsalert = {

    initialized: false,

    _init: function (){
        if(alert.options.bootstrap == true){
            this._bootstrapTemplate();
        } else {
            this._template();
        }
        alert.options.title = $(document).prop('title');
    },

    _template: function (){},

    _alert: function (msg, title){},

    _events: function (){},

    _bootstrapTemplate: function (){
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
    },

    _bsAlert: function (msg, title){
        if(msg == ''){
            msg = '<i>Empty</i>';
        }
        $('#jsalert_modal h4').html(alert.options.title);
        $('#jsalert_modal .modal-body').html(msg);
        $('#jsalert_modal').modal('show');
    },

    fire: function (msg){
        //console.log(msg);
        if(alert.options.bootstrap === true){
            if(this.initialized === false){
                this.initialized = true;
                this._init();
            }
            this._bsAlert(msg);
        } else {
            this._alert(msg);
        }
    }
};

var alert = function (msg){
    //console.log($.alert._bootstrap_template);
    $.jsalert.fire(msg);
};
alert.options = {
    'bootstrap': true,
    'html_tags': false  
};
alert.defaults = {
    'bootstrap': true,
    'html_tags': false
};

$(function (){
    //alert('message');
    $('#jsalert').on('click', function (e){
        e.preventDefault();
        alert($('#alert_message').val()); 
    });
});