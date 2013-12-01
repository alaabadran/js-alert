/*
 * User: Alaa Badran
 * Date: 2013-12-01
 * Time: 15:34:25
 * Contact: me@alaabadran.com
 * URL: http://www.alaabadran.com/
 */

'use strict';
var $alert = window.alert;
// Setting options
var alert.options = {
    bootstrap: false
}

$.jsalert = {

    /**
     * Used to not initialize more than once.
     */
    initialized: false,

    /**
     * Initialize the script.
     */
    _init: function (){
        if(alert.options.bootstrap == true){
            this._bootstrapTemplate();
        } else {
            this._template();
        }
        // Setting the title.
        alert.options.title = $(document).prop('title');
    },

    /**
     * Preparing alert HTML template
     */
    _template: function (){
        var html = '<div class="modal_bg"></div>'+
        '<div class="jsalert" role="dialog" id="jsalert_modal">'+
            '<div class="jsalert_wrapper">'+
                '<h4></h4>'+
                '<div class="modal-body"></div>'+
                '<div class="jsa-buttons"><button class="jsclose">Ok</button></div>'+
            '</div>'+
        '</div>';
        $('body').append(html);
        this._events();
    },

    /**
     * Show alert message.
     */
    _alert: function (msg){
        $('#jsalert_modal h4').html(alert.options.title);
        console.log(msg);
        $('#jsalert_modal .modal-body').html(msg);
        $('#jsalert_modal,.modal_bg').fadeIn(300);
    },

    /**
     * Add events to elements.
     */
    _events: function (){
        var jsalert = $('#jsalert_modal');
        jsalert.on('click', '.close, .jsclose', function (e){
            e.preventDefault();
            jsalert.fadeOut(200);
            $('.modal_bg').fadeOut(150);
        });
    },


    /**
     * Preapre the HTML layout for alert from Twitter Bootstrap 3
     */
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
        $('body').append(html);
        $('#jsalert_modal').modal('hide');
    },

    /**
     * Show alert message for Bootstrap 3
     */
    _bsAlert: function (msg, title){
        if(msg == ''){
            msg = '<i>Empty</i>';
        }
        $('#jsalert_modal h4').html(alert.options.title);
        $('#jsalert_modal .modal-body').html(msg);
        $('#jsalert_modal').modal('show');
    },

    /**
     * Fires the message.
     * This method specifies what function to call.
     */
    fire: function (msg){
        //console.log(msg);
        if(alert.options.bootstrap === true){
            if(this.initialized === false){
                this.initialized = true;
                this._init();
            }
            this._bsAlert(msg);
        } else {
            if(this.initialized === false){
                this.initialized = true;
                this._init();
            }
            this._alert(msg);
        }
    }
};

// Re-Defining alert()
var alert = function (msg){
    //console.log($.alert._bootstrap_template);
    $.jsalert.fire(msg);
};
