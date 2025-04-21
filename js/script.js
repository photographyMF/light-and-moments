// Adiciona funcionalidades interativas para a galeria
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const images = [
        'images/paisagem1.jpg',
        'images/macro1.jpg',
        'images/detalhes1.jpg',
        'images/viagem1.jpg'
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Fotografia';
        gallery.appendChild(img);
    });
});
