(() => {
    const continueWatching = [
        {
            title: "Don't Look Up",
            rating: '4.5',
            image: '../assets/images/continue-watching/continue-1.png',
        },
        {
            title: 'All of Us Are Dead',
            rating: '4.2',
            image: '../assets/images/continue-watching/continue-2.png',
        },
        {
            title: 'Blue Lock',
            rating: '4.6',
            image: '../assets/images/continue-watching/continue-3.png',
        },
        {
            title: 'A Man Called Otto',
            rating: '4.4',
            image: '../assets/images/continue-watching/continue-4.png',
        },
    ];

    const sliderData = {
        'continue': continueWatching,
    };

    const createCard = (film) => {
        const item = document.createElement('div');
        item.className = 'slider-card';
        item.innerHTML = `
            <img src="${film.image}" alt="${film.title}" class="slider-card__image">
            <h3 class="slider-card__title">${film.title}</h3>
            <p class="slider-card__rating">${film.rating}/5</p>
        `;
        return item;
    };

    const renderCards = (track, films) => {
        track.innerHTML = '';
        films.forEach((film) => {
            track.appendChild(createCard(film));
        });
    };

    const setupSliderControls = (root) => {
        const track = root.querySelector('[data-slider-track]');
        const prevButton = root.querySelector('[data-slider-prev]');
        const nextButton = root.querySelector('[data-slider-next]');

        if (!track || !prevButton || !nextButton) {
            return;
        }

        nextButton.addEventListener('click', () => {
            track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
        });

        prevButton.addEventListener('click', () => {
            track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
        });
    };

    const initSliders = () => {
        const sliderRoots = document.querySelectorAll('[data-slider]');
        sliderRoots.forEach((sliderRoot) => {
            const sliderKey = sliderRoot.dataset.slider;
            const films = sliderData[sliderKey];
            if (!films) {
                return;
            }

            const track = sliderRoot.querySelector('[data-slider-track]');
            if (!track) {
                return;
            }

            renderCards(track, films);
            setupSliderControls(sliderRoot);
        });
    };

    document.addEventListener('DOMContentLoaded', initSliders);
})();
