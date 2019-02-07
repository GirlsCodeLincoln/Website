(function () {
  /**
   * Assigns Nav bar links to smooth scroll to section based on hash and section id
   */
  function assignNavLinkClickHandlers() {
    $('.navbar-nav .nav-link').on('click', function (e) {
      e.preventDefault(); // prevent jumping straight to section

      const target = this.hash;
      const $target = $(target); // use hash as a selector to find the section by id
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 700, 'swing', function () {
        window.location.hash = target;
      });
    });
  }

  /**
   * Shows and hides previous clubs when clicked
   */
  function assignTimelineShowMoreHandler() {
    $('.timeline-show-more, .timeline-show-less').on('click', function (e) {
      $('ul.timeline>li.previous-club').slideToggle();
      $('.timeline-show-more').toggle();
      $('.timeline-show-less').toggle();
    });
  }

  /**
   * Obfuscate email and assign href to email icon
   */
  function injectMailToButton() {
    const getEmailButtonHtmlStr = function (link) {
      return '<a href="mailto:' + link + '" aria-label="Email"><i class="fas fa-envelope fa-2x mx-2" aria-hidden="true"></i></a>';
    }

    // Email obfuscator script 2.1 by Tim Williams, University of Arizona
    // Random encryption key feature coded by Andrew Moulden
    // This code is freeware provided these four comment lines remain intact
    // A wizard to generate this code is at http://www.jottings.com/obfuscator/
    coded = "Js0N@iJ96ZyNFv6JsyN6s.yNo"
    key = "oaIMb8y7e3dG4WRQEZYB0qlHiNkVSnrPtvjFCmhDwLKcp1A6UJ5O2zs9TfuXxg"
    shift = coded.length
    link = ""
    for (i = 0; i < coded.length; i++) {
      if (key.indexOf(coded.charAt(i)) == -1) {
        ltr = coded.charAt(i)
        link += (ltr)
      }
      else {
        ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
        link += (key.charAt(ltr))
      }
    }

    $('#social-links').prepend(getEmailButtonHtmlStr(link));
  }

  /**
   * Programatically add copyright message with current year
   */
  function injectCopyrightStatement() {
    const CURR_YEAR = (new Date()).getFullYear();
    $('#copyright-container').text('Copyright © ' + CURR_YEAR + ' Girls Code Lincoln');
  }

  $(function () {
    // Add handlers after document is ready
    assignNavLinkClickHandlers();
    assignTimelineShowMoreHandler();
    injectMailToButton();
    injectCopyrightStatement();
  });
})();
