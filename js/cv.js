// JavaScript Document
$(function () {
        //$('#ad-carousel').carousel();
        $('#menu-nav .navbar-collapse a').click(function (e) {
            var href = $(this).attr('href');
            var tabId = $(this).attr('data-tab');			
            if ('#' !== href) {
                e.preventDefault();
                //$(document).scrollTop($(href).offset().top - 100);
				$(document).scrollTop($(href).offset().top-70);
				console.log($(href).offset().top);
				console.log(href);
				console.log($(document).scrollTop());
                if (tabId) {
                    $('#feature-tab a[href=#' + tabId + ']').tab('show');
                }
            }
        });
 });