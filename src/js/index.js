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

  $(function () {
    // Add handlers after document is ready
    assignNavLinkClickHandlers();
  });
})();