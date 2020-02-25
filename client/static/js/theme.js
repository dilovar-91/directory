/*!
 *
 * Directory Theme 1.2.0
 * Copyright 2019 - Bootstrapious.com
 * 
 */

'use strict';

$(function () {

    // ------------------------------------------------------- //
    //   Lightbox in galleries
    // ------------------------------------------------------ //

    $('.slider-gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true,
                tCounter: '' // markup of counter
            }
        });
    });

    $('.gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // =====================================================
    //     Reset input
    // =====================================================

    $('.input-reset .form-control').on('focus', function () {
        $(this).parents('.input-reset').addClass('focus');
    });
    $('.input-reset .form-control').on('blur', function () {
        setTimeout(function () {
            $('.input-reset .form-control').parents('.input-reset').removeClass('focus');
        }, 333);

    });


    
    // ------------------------------------------------------- //
    //   Increase/Decrease product amount
    // ------------------------------------------------------ //
    $('.btn-items-decrease').on('click', function () {
        var input = $(this).siblings('.input-items');
        if (parseInt(input.val(), 10) >= 1) {
            if (input.hasClass('input-items-greaterthan')) {
                input.val((parseInt(input.val(), 10) - 1) + '+');
            } else {
                input.val(parseInt(input.val(), 10) - 1);
            }
        }
    });

    $('.btn-items-increase').on('click', function () {
        var input = $(this).siblings('.input-items');
        if (input.hasClass('input-items-greaterthan')) {
            input.val((parseInt(input.val(), 10) + 1) + '+');
        } else {
            input.val(parseInt(input.val(), 10) + 1);
        }
    });

    // ------------------------------------------------------- //
    //   Scroll to top button
    // ------------------------------------------------------ //

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 1500) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });


    $('#scrollTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // ------------------------------------------------------- //
    // Adding fade effect to dropdowns
    // ------------------------------------------------------ //

    $.fn.slideDropdownUp = function () {
        $(this).fadeIn().css('transform', 'translateY(0)');
        return this;
    };
    $.fn.slideDropdownDown = function (movementAnimation) {

        if (movementAnimation) {
            $(this).fadeOut().css('transform', 'translateY(30px)');
        } else {
            $(this).hide().css('transform', 'translateY(30px)');
        }
        return this;
    };

    $('.navbar .dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().slideDropdownUp();
    });
    $('.navbar .dropdown').on('hide.bs.dropdown', function (e) {

        var movementAnimation = true;

        // if on mobile or navigation to another page
        if ($(window).width() < 992 || (e.clickEvent && e.clickEvent.target.tagName.toLowerCase() === 'a')) {
            movementAnimation = false;
        }

        $(this).find('.dropdown-menu').first().slideDropdownDown(movementAnimation);
    });

    // ------------------------------------------------------- //
    //    Collapse button control (used for more/less filters)
    // ------------------------------------------------------ //

    $('.btn-collapse').each(function () {
        var button = $(this),
            collapseId = button.attr('data-target');

        if ($(collapseId).length) {

            var collapseElement = $(collapseId);

            $(collapseElement).on('hide.bs.collapse', function () {
                button.text(button.attr('data-collapsed-text'));
            })

            $(collapseElement).on('show.bs.collapse', function () {
                button.text(button.attr('data-expanded-text'));
            })

        }
    });

    // ------------------------------------------------------- //
    //   Bootstrap tooltips
    // ------------------------------------------------------- //

    //$('[data-toggle="tooltip"]').tooltip();

    // ------------------------------------------------------- //
    //   Smooth Scroll
    // ------------------------------------------------------- //

    /*var smoothScroll = new SmoothScroll('a[data-smooth-scroll]', {
        offset: 80
    }); */

    // ------------------------------------------------------- //
    //   Object Fit Images
    // ------------------------------------------------------- //    

    //objectFitImages();

});