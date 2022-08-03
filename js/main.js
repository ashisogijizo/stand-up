var slider = $('.slider'),
	wrapper = $('#wrapper'),
	animating = false,
	current = 0,
	lengthDiv = slider.length,
	delay = 300;

    slider.on('click', function(e){
        var anchor = $(this);
        if(!animating){
            animating = true;
            current = anchor.parent().index();
            wrapper.removeClass().addClass('slide'+current);
            setTimeout(function(){
                animating = false;
            }, delay);
            e.preventDefault();
        }
    });

    $(document).keydown(function(e){var key = e.keyCode;if(key == 38 || key == 40)e.preventDefault();});
    $(document).keyup(function(e){
        if(!animating){
            var key = e.keyCode;
            if(key == 38 && current > 0){
                $(slider[current - 1]).trigger('click');
            }else if(key == 40 && current < lengthDiv - 1){
                $(slider[current + 1]).trigger('click');
            }
        }
    });

    document.addEventListener('wheel', e => {
        if (e.deltaY < 0) {
            $(slider[current - 1]).trigger('click');
        } else if(e.deltaY > 0 && current < lengthDiv - 1){
            $(slider[current + 1]).trigger('click');
        }
        $(slider[current]).addClass('active');
        $(slider[current-1]).removeClass('active');
        $(slider[current+1]).removeClass('active');
    });
let swiper = new Swiper('.events-swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    allowTouchMove: true,
    grabCursor: true,
    centerInsufficientSlides: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
        767: {
        slidesPerView: 2,
        spaceBetween: 30,
        },
        480: {
            direction: 'vertical',
            slidesPerView: 4,
            spaceBetween: 180
        },
        375: {
            direction: 'vertical',
            slidesPerView: 4,
            spaceBetween: 180
        }
    }
  });

