/*=========================================================================================
  File Name: app.js
  Description: Template related app JS.
  ----------------------------------------------------------------------------------------
  Item Name: Stack - Responsive Admin Theme
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

(function (window, document, $) {
    'use strict';
    var $html = $('html');
    var $body = $('body');


    $(window).on('load', function () {
        var rtl;
        var compactMenu = false; // Set it to true, if you want default menu to be compact

        if ($body.hasClass("menu-collapsed")) {
            compactMenu = true;
        }

        if ($('html').data('textdirection') == 'rtl') {
            rtl = true;
        }

        setTimeout(function () {
            $html.removeClass('loading').addClass('loaded');
        }, 1200);

        $.app.menu.init(compactMenu);

        // Navigation configurations
        var config = {
            speed: 300 // set speed to expand / collpase menu
        };
        if ($.app.nav.initialized === false) {
            $.app.nav.init(config);
        }

        Unison.on('change', function (bp) {
            $.app.menu.change();
        });

        // Tooltip Initialization
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

        // Top Navbars - Hide on Scroll
        if ($(".navbar-hide-on-scroll").length > 0) {
            $(".navbar-hide-on-scroll.fixed-top").headroom({
                "offset": 205,
                "tolerance": 5,
                "classes": {
                    // when element is initialised
                    initial: "headroom",
                    // when scrolling up
                    pinned: "headroom--pinned-top",
                    // when scrolling down
                    unpinned: "headroom--unpinned-top",
                }
            });
            // Bottom Navbars - Hide on Scroll
            $(".navbar-hide-on-scroll.fixed-bottom").headroom({
                "offset": 205,
                "tolerance": 5,
                "classes": {
                    // when element is initialised
                    initial: "headroom",
                    // when scrolling up
                    pinned: "headroom--pinned-bottom",
                    // when scrolling down
                    unpinned: "headroom--unpinned-bottom",
                }
            });
        }

        // Collapsible Card
        $('a[data-action="collapse"]').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.card').children('.card-content').collapse('toggle');
            $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('icon-plus icon-minus');

        });

        // Toggle fullscreen
        $('a[data-action="expand"]').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.card').find('[data-action="expand"] i').toggleClass('icon-maximize icon-minimize');
            $(this).closest('.card').toggleClass('card-fullscreen');
        });

        //  Notifications & messages scrollable
        $('.scrollable-container').each(function () {
            var scrollable_container = new PerfectScrollbar($(this)[0], {
                wheelPropagation: false
            });
        });

        // Reload Card
        $('a[data-action="reload"]').on('click', function () {
            var block_ele = $(this).closest('.card');

            // Block Element
            block_ele.block({
                message: '<div class="feather icon-refresh-cw icon-spin font-medium-2"></div>',
                timeout: 2000, //unblock after 2 seconds
                overlayCSS: {
                    backgroundColor: '#FFF',
                    cursor: 'wait',
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
        });

        // Close Card
        $('a[data-action="close"]').on('click', function () {
            $(this).closest('.card').removeClass().slideUp('fast');
        });

        // Match the height of each card in a row
        setTimeout(function () {
            $('.row.match-height').each(function () {
                $(this).find('.card').not('.card .card').matchHeight(); // Not .card .card prevents collapsible cards from taking height
            });
        }, 500);


        $('.card .heading-elements a[data-action="collapse"]').on('click', function () {
            var $this = $(this),
                card = $this.closest('.card');
            var cardHeight;

            if (parseInt(card[0].style.height, 10) > 0) {
                cardHeight = card.css('height');
                card.css('height', '').attr('data-height', cardHeight);
            } else {
                if (card.data('height')) {
                    cardHeight = card.data('height');
                    card.css('height', cardHeight).attr('data-height', '');
                }
            }
        });

        // Add open class to parent list item if subitem is active except compact menu
        var menuType = $body.data('menu');
        if (menuType != 'horizontal-menu' && compactMenu === false) {
            $(".main-menu-content").find('li.active').parents('li').addClass('open');
        }
        if (menuType == 'horizontal-menu') {
            $(".main-menu-content").find('li.active').parents('li:not(.nav-item)').addClass('open');
            $(".main-menu-content").find('li.active').parents('li').addClass('active');
        }

        // If default collapsed menu then enable expand menu on hover
        if( compactMenu === true ){
            $(".main-menu-content").find('li.active').parents('li').addClass('menu-collapsed-open');
        }

        //card heading actions buttons small screen support
        $(".heading-elements-toggle").on("click", function () {
            $(this).parent().children(".heading-elements").toggleClass("visible");
        });

        //  Dynamic height for the chartjs div for the chart animations to work
        var chartjsDiv = $('.chartjs'),
            canvasHeight = chartjsDiv.children('canvas').attr('height');
        chartjsDiv.css('height', canvasHeight);

        if ($body.hasClass('boxed-layout')) {
            if ($body.hasClass('vertical-overlay-menu')) {
                var menuWidth = $('.main-menu').width();
                var contentPosition = $('.app-content').position().left;
                var menuPositionAdjust = contentPosition - menuWidth;
                if ($body.hasClass('menu-flipped')) {
                    $('.main-menu').css('right', menuPositionAdjust + 'px');
                } else {
                    $('.main-menu').css('left', menuPositionAdjust + 'px');
                }
            }
        }

        /************** search *******************/
        var $filename = $(".search-input input").data("search")
        // Navigation Search area Open
        $(".nav-link-search").on("click", function () {
            var $this = $(this)
            var searchInput = $(this)
                .parent(".nav-search")
                .find(".search-input")
            searchInput.addClass("open")
            $(".search-input input").focus()
            $(".search-input .search-list li").remove()
            $(".search-input .search-list").addClass("show")
        })

        // Navigation Search area Close
        $(".search-input-close i").on("click", function () {
            var $this = $(this),
                searchInput = $(this).closest(".search-input")
            if (searchInput.hasClass("open")) {
                searchInput.removeClass("open")
                $(".search-input input").val("")
                $(".search-input input").blur()
                $(".search-input .search-list").removeClass("show")
                if ($(".app-content").hasClass("show-overlay")) {
                    $(".app-content").removeClass("show-overlay")
                }
            }
        })

        // Navigation Search area Close on click of app-content
        $(".app-content").on("click", function () {
            var $this = $(".search-input-close"),
                searchInput = $($this).parent(".search-input"),
                searchList = $(".search-list")
            if (searchInput.hasClass("open")) {
                searchInput.removeClass("open")
            }
            if (searchList.hasClass("show")) {
                searchList.removeClass("show")
            }
            if ($(".app-content").hasClass("show-overlay")) {
                $(".app-content").removeClass("show-overlay")
            }
        })

        // Filter
        $(".search-input .input").on("keyup", function (e) {

            if (e.keyCode !== 38 && e.keyCode !== 40 && e.keyCode !== 13) {
                if (e.keyCode == 27) {
                    // $(".app-content").removeClass("show-overlay")

                    $(".search-input input").val("")
                    $(".search-input input").blur()
                    $(".search-input").removeClass("open")
                    if ($(".search-list").hasClass("show")) {
                        $(this).removeClass("show")
                        $(".search-input").removeClass("show")
                    }
                }

                // Define variables
                var value = $(this)
                    .val()
                    .toLowerCase(), //get values of inout on keyup
                    activeClass = "",
                    liList = $("ul.search-list li") // get all the list items of the search
                liList.remove()

                // If input value is blank
                if (value != "") {
                    $(".app-content").addClass("show-overlay")


                    var $startList = "",
                        $otherList = "",
                        $htmlList = "",
                        $activeItemClass = "",
                        a = 0

                    // getting json data from file for search results
                    $.getJSON("../../../app-assets/data/" + $filename + ".json", function (
                        data
                    ) {
                        for (var i = 0; i < data.listItems.length; i++) {

                            // Search list item start with entered letters and create list
                            if (
                                data.listItems[i].name.toLowerCase().indexOf(value) == 0 &&
                                a < 10 || !(data.listItems[i].name.toLowerCase().indexOf(value) == 0) &&
                                data.listItems[i].name.toLowerCase().indexOf(value) > -1 &&
                                a < 10
                            ) {
                                if (a === 0) {
                                    $activeItemClass = "current_item"
                                } else {
                                    $activeItemClass = ""
                                }
                                $startList +=
                                    '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer ' +
                                    $activeItemClass +
                                    '">' +
                                    '<a class="d-flex align-items-center justify-content-between w-100" href=' +
                                    data.listItems[i].url +
                                    ">" +
                                    '<div class="d-flex justify-content-start">' +
                                    '<span class="mr-75 ' +
                                    data.listItems[i].icon +
                                    '"></span>' +
                                    "<span>" +
                                    data.listItems[i].name +
                                    "</span>" +
                                    "</div>"
                                a++
                            }
                        }
                        if ($startList == "" && $otherList == "") {
                            $otherList =
                                '<li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer">' +
                                '<a class="d-flex align-items-center justify-content-between w-100">' +
                                '<div class="d-flex justify-content-start">' +
                                '<span class="mr-75"></span>' +
                                "<span>No results found.</span>" +
                                "</div>" +
                                "</a>" +
                                "</li>"
                        }

                        $htmlList = $startList.concat($otherList) // merging start with and other list
                        $("ul.search-list").html($htmlList) // Appending list to <ul>
                    })
                } else {
                    // if search input blank, hide overlay
                    if ($(".app-content").hasClass("show-overlay")) {
                        $(".app-content").removeClass("show-overlay")
                    }
                }
            }
        })

        // Add class on hover of the list
        $(document).on("mouseenter", ".search-list li", function (e) {
            $(this)
                .siblings()
                .removeClass("current_item")
            $(this).addClass("current_item")
        })
        $(document).on("click", ".search-list li", function (e) {
            e.stopPropagation()
        })

    });
    // If we use up key(38) Down key (40) or Enter key(13)
    $(window).on("keydown", function (e) {
        var $current = $(".search-list li.current_item"),
            $next,
            $prev
        if (e.keyCode === 40) {
            $next = $current.next()
            $current.removeClass("current_item")
            $current = $next.addClass("current_item")
        } else if (e.keyCode === 38) {
            $prev = $current.prev()
            $current.removeClass("current_item")
            $current = $prev.addClass("current_item")
        }

        if (e.keyCode === 13 && $(".search-list li.current_item").length > 0) {
            var selected_item = $(".search-list li.current_item a")
            window.location = selected_item.attr("href")
            $(selected_item).trigger("click")
        }
    })
    // Hide overlay menu on content overlay click on small screens
    $(document).on('click', '.sidenav-overlay', function (e) {
        // Hide menu
        $.app.menu.hide();
        return false;
    });

    // Execute below code only if we find hammer js for touch swipe feature on small screen
    if (typeof Hammer !== 'undefined') {

        // Swipe menu gesture
        var swipeInElement = document.querySelector('.drag-target');

        if ($(swipeInElement).length > 0) {
            var swipeInMenu = new Hammer(swipeInElement);

            swipeInMenu.on("panright", function (ev) {
                if ($body.hasClass('vertical-overlay-menu')) {
                    $.app.menu.open();
                    return false;
                }
            });
        }

        // menu swipe out gesture
        setTimeout(function () {
            var swipeOutElement = document.querySelector('.main-menu');
            var swipeOutMenu;

            if ($(swipeOutElement).length > 0) {
                swipeOutMenu = new Hammer(swipeOutElement);

                swipeOutMenu.get('pan').set({
                    direction: Hammer.DIRECTION_ALL,
                    threshold: 100
                });

                swipeOutMenu.on("panleft", function (ev) {
                    if ($body.hasClass('vertical-overlay-menu')) {
                        $.app.menu.hide();
                        return false;
                    }
                });
            }
        }, 300);

        // menu overlay swipe out gestrue
        var swipeOutOverlayElement = document.querySelector('.sidenav-overlay');

        if ($(swipeOutOverlayElement).length > 0) {

            var swipeOutOverlayMenu = new Hammer(swipeOutOverlayElement);

            swipeOutOverlayMenu.on("panleft", function (ev) {
                if ($body.hasClass('vertical-overlay-menu')) {
                    $.app.menu.hide();
                    return false;
                }
            });
        }
    }

    $(document).on('click', '.menu-toggle, .modern-nav-toggle', function (e) {
        e.preventDefault();

        // Toggle menu
        $.app.menu.toggle();

        setTimeout(function () {
            $(window).trigger("resize");
        }, 200);

        if ($('#collapsed-sidebar').length > 0) {
            setTimeout(function () {
                if ($body.hasClass('menu-expanded') || $body.hasClass('menu-open')) {
                    $('#collapsed-sidebar').prop('checked', false);
                } else {
                    $('#collapsed-sidebar').prop('checked', true);
                }
            }, 1000);
        }

        // Hides dropdown on click of menu toggle
        // $('[data-toggle="dropdown"]').dropdown('hide');

        // Hides collapse dropdown on click of menu toggle
        if ($('.vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse').hasClass('show')) {
            $('.vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse').removeClass('show');
        }

        return false;
    });

    $(document).on('click', '.main-menu-footer .footer-toggle', function (e) {
        e.preventDefault();
        $(this).find('i').toggleClass('pe-is-i-angle-down pe-is-i-angle-up');
        $('.main-menu-footer').toggleClass('footer-close footer-open');
        return false;
    });

    // Add Children Class
    $('.navigation').find('li').has('ul').addClass('has-sub');

    $('.carousel').carousel({
        interval: 2000
    });

    // Page full screen
    $('.nav-link-expand').on('click', function (e) {
        if (typeof screenfull != 'undefined') {
            if (screenfull.isEnabled) {
                screenfull.toggle();
            }
        }
    });
    if (typeof screenfull != 'undefined') {
        if (screenfull.isEnabled) {
            $(document).on(screenfull.raw.fullscreenchange, function () {
                if (screenfull.isFullscreen) {
                    $('.nav-link-expand').find('i').toggleClass('icon-minimize icon-maximize');
                } else {
                    $('.nav-link-expand').find('i').toggleClass('icon-maximize icon-minimize');
                }
            });
        }
    }

    $(document).on('click', '.mega-dropdown-menu', function (e) {
        e.stopPropagation();
    });

    $(document).ready(function () {

        /**********************************
         *   Form Wizard Step Icon
         **********************************/
        $('.step-icon').each(function () {
            var $this = $(this);
            if ($this.siblings('span.step').length > 0) {
                $this.siblings('span.step').empty();
                $(this).appendTo($(this).siblings('span.step'));
            }
        });
    });

    // Update manual scroller when window is resized
    $(window).resize(function () {
        $.app.menu.manualScroller.updateHeight();
    });

    // TODO : Tabs dropdown fix, remove this code once fixed in bootstrap 4.
    $('.nav.nav-tabs a.dropdown-item').on('click', function () {
        var $this = $(this),
            href = $this.attr('href');
        var tabs = $this.closest('.nav');
        tabs.find('.nav-link').removeClass('active');
        $this.closest('.nav-item').find('.nav-link').addClass('active');
        $this.closest('.dropdown-menu').find('.dropdown-item').removeClass('active');
        $this.addClass('active');
        tabs.next().find(href).siblings('.tab-pane').removeClass('active in').attr('aria-expanded', false);
        $(href).addClass('active in').attr('aria-expanded', 'true');
    });

    $('#sidebar-page-navigation').on('click', 'a.nav-link', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this),
            href = $this.attr('href');
        var offset = $(href).offset();
        var scrollto = offset.top - 80; // minus fixed header height
        $('html, body').animate({
            scrollTop: scrollto
        }, 0);
        setTimeout(function () {
            $this.parent('.nav-item').siblings('.nav-item').children('.nav-link').removeClass('active');
            $this.addClass('active');
        }, 100);
    });

    // main menu internationalization

    // init i18n and load language file
    i18next
        .use(window.i18nextXHRBackend)
        .init({
                debug: false,
                fallbackLng: "en",
                backend: {
                    loadPath: "../../../app-assets/data/locales/{{lng}}.json",
                },
                returnObjects: true
            },
            function (err, t) {
                // resources have been loaded
                jqueryI18next.init(i18next, $);
            });

    // change language according to data-language of dropdown item
    $(".dropdown-language .dropdown-item").on("click", function () {
        var $this = $(this);
        $this.siblings(".selected").removeClass("selected")
        $this.addClass("selected");
        var selectedLang = $this.text()
        var selectedFlag = $this.find(".flag-icon").attr("class");
        $("#dropdown-flag .selected-language").text(selectedLang);
        $("#dropdown-flag .flag-icon").removeClass().addClass(selectedFlag);
        var currentLanguage = $this.data("language");
        i18next.changeLanguage(currentLanguage, function (err, t) {
            $(".main-menu , .horizontal-menu").localize();
        });
    })

      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // We listen to the resize event
        window.addEventListener('resize', () => {
        // We execute the same script to get the inner height
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        })
  

})(window, document, jQuery);