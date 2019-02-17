(function () {
  /**
   * Assigns Nav bar links to smooth scroll to section based on hash and section id
   */
  function assignNavLinkClickHandlers() {
    $('.navbar-nav .nav-link').on('click', function (e) {
      // Do not prevent default behavior if href is to an anchor/hash
      if ($(this).attr('href').indexOf('#') === -1) {
        return;
      }

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
      $('ul.timeline > li.previous-club').slideToggle();
      $('.timeline-show-more').toggle();
      $('.timeline-show-less').toggle();
    });
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
    injectCopyrightStatement();
  });
})();
