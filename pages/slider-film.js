// Data film dalam bentuk array of objects.
// Untuk menambah film, cukup tambahkan objek baru di sini!
const daftarFilm = [
    {
        judul: "Don't Look Up",
        rating: "4.5",
        imgUrl: "../img/film.jpg"
    },
    {
        judul: "The Batman",
        rating: "4.2",
        imgUrl: "../img/film.jpg"
    },
    {
        judul: "Blue Lock",
        rating: "4.6",
        imgUrl: "../img/film.jpg"
    },
    {
        judul: "Blue Lock",
        rating: "4.6",
        imgUrl: "../img/film.jpg"
    },
    {
        judul: "A Man Called Otto",
        rating: "4.4",
        imgUrl: "../img/film.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // --- Bagian untuk mengisi konten dinamis ---

    // 1. Ambil elemen kontainer dari HTML
    const container = document.querySelector('.film-slider');

    // 2. Fungsi untuk membuat satu elemen film, disesuaikan dengan CSS
    function buatKartuFilm(film) {
        const item = document.createElement('div');
        item.className = 'film-item';

        item.innerHTML = `
            <img src="${film.imgUrl}" alt="${film.judul}">
            <h3>${film.judul}</h3>
            <p>${film.rating}/5</p>
        `;
        return item;
    }

    // 3. Loop melalui data dan tampilkan setiap film
    if (container) {
        container.innerHTML = ''; // Kosongkan kontainer sebelum mengisi
        daftarFilm.forEach(film => {
            const kartuFilm = buatKartuFilm(film);
            container.appendChild(kartuFilm);
        });
    }

    // --- Bagian untuk fungsionalitas slider ---
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const slider = carousel.querySelector('.film-slider');
        const leftButton = carousel.querySelector('.nav-button.left');
        const rightButton = carousel.querySelector('.nav-button.right');

        if (!slider || !leftButton || !rightButton) return;

        rightButton.addEventListener('click', () => {
            slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
        });

        leftButton.addEventListener('click', () => {
            slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
        });
    });
});