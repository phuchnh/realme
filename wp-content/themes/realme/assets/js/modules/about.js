export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.SmoothScrollSetup();
        this.BannerVideo();
    }


    /* ===================================
     *  EVENTS
     * =================================== */

    SmoothScrollSetup() {
        // Select all links with hashes

        $('a[href*="#"]')
        // Remove links that don't actually link to anything
                .not('[href="#"]')
                .not('[href="#0"]')
                .click(function(event) {
                    // On-page links
                    if (
                            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                            &&
                            location.hostname == this.hostname
                    ) {
                        // Figure out element to scroll to
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        // Does a scroll target exist?
                        if (target.length) {
                            // Only prevent default if animation is actually gonna happen
                            event.preventDefault();

                            // get height menu for scroll exactly position of div
                            var getHeightMenu = 52;
                            if ($(window).width() < 767) {
                                getHeightMenu = 62;
                            }

                            $('html, body').animate({
                                scrollTop: target.offset().top - getHeightMenu
                            }, 1000);
                        }
                    }
                });
    }

    BannerVideo() {
        var $getVideo = $('#banner__video');
        $('.about__banner h1 i').click(function () {
            $('.about__banner').toggleClass('play-video');
            $getVideo.get(0).paused ? $getVideo.get(0).play() : $getVideo.get(0).pause();
        })
    }

    /* ===================================
     *  METHODS
     * =================================== */
    
}