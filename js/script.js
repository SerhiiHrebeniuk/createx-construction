const portSlider = document.querySelector('.portfolio__section-items')

const portfolioSlider = new Swiper(portSlider, {
    slidesPerView: 3,
    spaceBetween: 30,
    on: {
      init: function () {

        const activeSlide = portSlider.querySelector('.swiper-slide-active');
        const nextActiveSlide = activeSlide.nextElementSibling;
        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

        activeSlide.classList.add('slider-visible');
        nextActiveSlide.classList.add('slider-visible');
        nextNextActiveSlide.classList.add('slider-visible');

      },
    },
    navigation: {
      nextEl: '.portfolio__section-prev',
      prevEl: '.portfolio__section-next',
    }
  });

  document.querySelector('.portfolio__section-prev').addEventListener('click', () => {
    
    const activeSlide = portSlider.querySelector('.swiper-slide-next');


    if(activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      nextActiveSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      activeSlide.nextElementSibling.classList.add('slider-visible');
    }

  })

  document.querySelector('.portfolio__section-next').addEventListener('click', () => {
    
    const activeSlide = portSlider.querySelector('.swiper-slide-active');
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

    document.querySelectorAll('.portfolio__section-items .swiper-slide').forEach(el => {
      el.classList.remove('slider-visible');
    })

    activeSlide.classList.add('slider-visible');
    nextActiveSlide.classList.add('slider-visible');
    nextNextActiveSlide.classList.add('slider-visible');
  })