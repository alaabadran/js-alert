js-alert
========

Overriding default alert()

Demo
----
See it in action: [JS Alert Demo](http://rawgithub.com/alaabadran/js-alert/master/index.html)

How it works
------------

Add this code after js-alert.js

`
// Setting options
alert.options = {
    'bootstrap': false // true if you use Bootstrap
};
`

Then you can call `alert()` at anytime as:
`
$(function (){
    $('#jsalert').on('click', function (e){
        e.preventDefault();
        alert($('#alert_message').val());
    });
});
`
