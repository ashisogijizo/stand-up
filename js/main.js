var slider = $('.slider'),
	wrapper = $('#wrapper'),
	animating = false,
	current = 0,
	lengthDiv = slider.length,
	delay = 300;

if(!window.matchMedia('(max-width:768px)').matches){
    slider.on('click', function(e){
        var anchor = $(this);
        if(animating) return;
            animating = true;
            current = anchor.parent().index();
            wrapper.removeClass().addClass('slide'+current);
            setTimeout(function(){
                animating = false;
            }, delay);
            e.preventDefault();
            slider.removeClass('active');
            $(slider[current]).addClass('active');

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
    });
} 

document.querySelector('.project-comedians__more').addEventListener('click', () => {
    document.querySelector('.list').style.maxHeight = 'auto';
    document.querySelector('.project-comedians__more').style.display = 'none';

});
document.querySelector('.events-announcements__more').addEventListener('click', () => {
    document.querySelector('.events-swiper').style.maxHeight = 'auto';
    document.querySelector('.events-announcements__more').style.display = 'none';

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
        768: {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 30,
        },
        480: {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 50
        },
        375: {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 50
        },
        320: {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 50
        }
    }
  });

