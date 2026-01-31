(() => {
    const initCarousels = () => {
        if (typeof Swiper === 'undefined') {
            return;
        }

        const carousels = document.querySelectorAll('.js-carousel');
        carousels.forEach((carousel) => {
            const paginationEl = carousel.querySelector('.swiper-pagination');
            new Swiper(carousel, {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: paginationEl,
                    clickable: true,
                },
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            });
        });
    };

    document.addEventListener('DOMContentLoaded', initCarousels);
})();
