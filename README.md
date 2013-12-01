js-alert
========

Overriding default alert()

Demo
----
See it in action: [JS Alert Demo](http://rawgithub.com/alaabadran/js-alert/master/index.html)

How it works
------------

Add this code after js-alert.js

<pre>
// Setting options
alert.options = {
    'bootstrap': false // true if you use Bootstrap
};
</pre>

Then you can call `alert()` at anytime as:

<pre>
$(function (){
    $('#jsalert').on('click', function (e){
        e.preventDefault();
        alert($('#alert_message').val());
    });
});
</pre>

In this example, I am using Bootstrap for CSS
