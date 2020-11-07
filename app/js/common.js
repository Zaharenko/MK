$(document).ready(function () {
  // First slider 
  $('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    prevArrow: "<svg class='arrow-icon arrow-icon-prev'><use xlink:href='#arrow-icon'></use></svg>",
    nextArrow: "<svg class='arrow-icon arrow-icon-next'><use xlink:href='#arrow-icon'></use></svg>"
  });

  // Company slider 
  $('.company-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    prevArrow: "<svg class='arrow-icon arrow-icon-prev'><use xlink:href='#arrow-icon'></use></svg>",
    nextArrow: "<svg class='arrow-icon arrow-icon-next'><use xlink:href='#arrow-icon'></use></svg>"
  });

  // Reviews slider 
  $('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    rows: 0,
    prevArrow: "<svg class='arrow-icon arrow-icon-prev'><use xlink:href='#arrow-icon'></use></svg>",
    nextArrow: "<svg class='arrow-icon arrow-icon-next'><use xlink:href='#arrow-icon'></use></svg>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
  .on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });

  // Logo company slider
  $('.logo-company').slick({
    lazyLoad: 'ondemand',
    dots: false,
    infinite: true,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Animate 
  wow = new WOW(
    {
    mobile: false
  }
  )
  wow.init();


  // Phone mask
  // $(".form-input-tel").mask("+375(XX) XXX-XX-XX");

});
