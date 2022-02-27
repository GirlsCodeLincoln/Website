(function () {
  /**
   * Assigns intrapage navigation links to smooth scroll to section based on hash and section id
   */
  function assignIntrapageNavHandlers() {
    $('.intrapage-nav').on('click', function (e) {
      // Do not prevent default behavior if href is to an anchor/hash
      if ($(this).attr('href').indexOf('#') === -1) {
        return;
      }

      e.preventDefault(); // prevent jumping straight to section

      const target = this.hash;
      const $target = $(target); // use hash as a selector to find the section by id
      $('html, body').stop().animate({
        'scrollTop': $('.navbar').css('position') === 'sticky' ? $target.offset().top - $('.navbar').outerHeight() : $target.offset().top // scroll to section location minus the height of navbar
    }, 700, 'swing', function () {
        window.location.hash = target;
      });
    });
  }

  /**
   * Adds all images to the image gallery carousel programatically to reduce clutter in the HTML
   */
  function appendImageGalleryImages() {
    // constructs markup for HTML structure:
    // <div class="carousel-item><img class="d-block" src="someSrc" alt="someAlt"></div>
    // isActive is a boolean. When true, the class "active" is added to the carousel-item outer div
    const getCarouselImageItemMarkup = function(src, alt, isActive) {
      let carouselItemClass = '"carousel-item';
      carouselItemClass += (isActive) ? ' active"' : '"';

      return '<div class=' + carouselItemClass +'><img class="d-block" src="' + src + '" alt="' + alt + '"></div>';
    };

    // constructs markup for HTML structure:
    // <li data-target="#image-carousel" data-slide-to="someIndex"></li>
    // isActive is a boolean. When true, the class "active" is added to the li
    const getCarouselIndicatorsItemMarkup = function(index, isActive) {
      const carouselIndicatorClass = (isActive) ? ' class="active"' : '';
      return '<li data-target="#image-carousel" data-slide-to="' + index + '"' + carouselIndicatorClass + '></li>';
    }

    // array of objects denoting src of img, alt text, and any custom css applied to the image
    const images = [
      {
        src: '/assets/img/gallery/girlscode-17.jpg',
        alt: 'Girl Smiling While Coding',
      },
      {
        src: '/assets/img/gallery/girlscode-1.jpg',
        alt: 'Girls With Yarn During a Leadership Activity',
      },
      {
        src: '/assets/img/gallery/girlscode-4.jpg',
        alt: 'Girls High Fiving',
        css: { 'object-position': '25% center' }
      },
      {
        src: '/assets/img/gallery/girlscode-18.jpg',
        alt: 'Girl Focusing While Coding',
      },
      {
        src: '/assets/img/gallery/girlscode-19.jpg',
        alt: 'Volunteer and Two Girls Laughing While Coding',
      }
    ];

    const $galleryInnerCarousel = $('#image-gallery .carousel-inner');
    const $galleryCarouselIndicators = $('#image-gallery .carousel-indicators');

    let isFirstImage = true;
    images.forEach(function (imageData, index) {
      $galleryInnerCarousel.append(getCarouselImageItemMarkup(imageData.src, imageData.alt, isFirstImage));

      if (imageData.css) {
        const $image = $($galleryInnerCarousel.children().children()[index]);
        $image.css(imageData.css);
      }

      $galleryCarouselIndicators.append(getCarouselIndicatorsItemMarkup(index, isFirstImage));
      isFirstImage = false;
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

  $(function () {
    // Add handlers after document is ready
    assignIntrapageNavHandlers();
    appendImageGalleryImages();
    assignTimelineShowMoreHandler();
  });
})();
