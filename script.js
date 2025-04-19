// Script principal para o site de fotografia Light and Moments
// Implementa funcionalidade bilingue e elementos interativos

// Dados das imagens para cada categoria
const galleryData = {
  landscapes: [
    { src: 'images/landscapes/landscape1.jpg', alt: 'Cidade ao pôr do sol', title_pt: 'Cidade ao Pôr do Sol', title_en: 'City at Sunset' },
    { src: 'images/landscapes/landscape2.jpg', alt: 'Vista da cidade em preto e branco', title_pt: 'Vista da Cidade', title_en: 'City View' },
    { src: 'images/landscapes/landscape3.jpg', alt: 'Cachoeira na floresta', title_pt: 'Cachoeira na Floresta', title_en: 'Forest Waterfall' },
    { src: 'images/landscapes/landscape4.jpg', alt: 'Miradouro com vista para montanhas', title_pt: 'Miradouro', title_en: 'Viewpoint' },
    { src: 'images/landscapes/landscape5.jpg', alt: 'Vista aérea de cidade', title_pt: 'Vista Aérea', title_en: 'Aerial View' },
    { src: 'images/landscapes/landscape6.jpg', alt: 'Árvore solitária junto ao mar', title_pt: 'Árvore Solitária', title_en: 'Solitary Tree' },
    { src: 'images/landscapes/landscape7.jpg', alt: 'Campos verdes', title_pt: 'Campos Verdes', title_en: 'Green Fields' },
    { src: 'images/landscapes/landscape8.jpg', alt: 'Cidade ao pôr do sol', title_pt: 'Cidade ao Entardecer', title_en: 'City at Dusk' },
    { src: 'images/landscapes/landscape9.jpg', alt: 'Pessoa observando a paisagem', title_pt: 'Contemplação', title_en: 'Contemplation' },
    { src: 'images/landscapes/landscape10.jpg', alt: 'Pôr do sol no campo', title_pt: 'Pôr do Sol no Campo', title_en: 'Sunset in the Field' },
    { src: 'images/landscapes/landscape11.jpg', alt: 'Cidade vista do alto', title_pt: 'Cidade Vista do Alto', title_en: 'City from Above' },
    { src: 'images/landscapes/landscape12.jpg', alt: 'Cruz ao pôr do sol', title_pt: 'Cruz ao Pôr do Sol', title_en: 'Cross at Sunset' },
    { src: 'images/landscapes/landscape13.jpg', alt: 'Caminho na floresta', title_pt: 'Caminho na Floresta', title_en: 'Forest Path' },
    { src: 'images/landscapes/landscape14.jpg', alt: 'Vista panorâmica da cidade', title_pt: 'Vista Panorâmica', title_en: 'Panoramic View' }
  ],
  macro: [
    { src: 'images/macro/macro1.jpg', alt: 'Cristais de gelo', title_pt: 'Cristais de Gelo', title_en: 'Ice Crystals' },
    { src: 'images/macro/macro2.jpg', alt: 'Flor branca', title_pt: 'Flor Branca', title_en: 'White Flower' },
    { src: 'images/macro/macro3.jpg', alt: 'Pequena flor rosa', title_pt: 'Pequena Flor Rosa', title_en: 'Small Pink Flower' },
    { src: 'images/macro/macro4.jpg', alt: 'Planta com gotas de orvalho', title_pt: 'Gotas de Orvalho', title_en: 'Dew Drops' },
    { src: 'images/macro/macro5.jpg', alt: 'Detalhe de porta ornamentada', title_pt: 'Detalhe Ornamentado', title_en: 'Ornate Detail' },
    { src: 'images/macro/macro6.jpg', alt: 'Cogumelos', title_pt: 'Cogumelos', title_en: 'Mushrooms' },
    { src: 'images/macro/macro7.jpg', alt: 'Cogumelo laranja', title_pt: 'Cogumelo Laranja', title_en: 'Orange Mushroom' },
    { src: 'images/macro/macro8.jpg', alt: 'Grupo de cogumelos', title_pt: 'Grupo de Cogumelos', title_en: 'Mushroom Group' },
    { src: 'images/macro/macro9.jpg', alt: 'Pequenos cogumelos', title_pt: 'Pequenos Cogumelos', title_en: 'Small Mushrooms' }
  ],
  details: [
    { src: 'images/details/detail1.jpg', alt: 'Barco visto através de janela', title_pt: 'Barco pela Janela', title_en: 'Boat through Window' },
    { src: 'images/details/detail2.jpg', alt: 'Azulejo antigo', title_pt: 'Azulejo Antigo', title_en: 'Ancient Tile' },
    { src: 'images/details/detail3.jpg', alt: 'Vista através de árvores', title_pt: 'Vista através das Árvores', title_en: 'View through Trees' },
    { src: 'images/details/detail4.jpg', alt: 'Escada em espiral', title_pt: 'Escada em Espiral', title_en: 'Spiral Staircase' },
    { src: 'images/details/detail5.jpg', alt: 'Pedras na praia', title_pt: 'Pedras na Praia', title_en: 'Beach Stones' },
    { src: 'images/details/detail6.jpg', alt: 'Porta vermelha', title_pt: 'Porta Vermelha', title_en: 'Red Door' },
    { src: 'images/details/detail7.jpg', alt: 'Vista entre edifícios', title_pt: 'Entre Edifícios', title_en: 'Between Buildings' },
    { src: 'images/details/detail8.jpg', alt: 'Árvore no inverno', title_pt: 'Árvore no Inverno', title_en: 'Winter Tree' },
    { src: 'images/details/detail9.jpg', alt: 'Porta vermelha dupla', title_pt: 'Porta Vermelha Dupla', title_en: 'Double Red Door' },
    { src: 'images/details/detail10.jpg', alt: 'Cacto verde', title_pt: 'Cacto Verde', title_en: 'Green Cactus' }
  ]
};

// Variável para armazenar o idioma atual
let currentLanguage = 'pt';

// Função para mudar o idioma do site
function changeLanguage() {
  const languageSelect = document.getElementById('language-select');
  currentLanguage = languageSelect.value;
  
  // Atualiza todos os elementos com atributos data-pt e data-en
  document.querySelectorAll('[data-pt][data-en]').forEach(element => {
    element.textContent = element.getAttribute(`data-${currentLanguage}`);
  });
  
  // Atualiza o atributo lang do HTML
  document.documentElement.lang = currentLanguage;
  
  // Atualiza os títulos das imagens nas galerias
  updateGalleryTitles();
  
  // Salva a preferência de idioma no localStorage
  localStorage.setItem('preferredLanguage', currentLanguage);
}

// Função para atualizar os títulos das imagens nas galerias
function updateGalleryTitles() {
  document.querySelectorAll('.gallery-item .overlay h3').forEach(title => {
    const titlePt = title.getAttribute('data-pt');
    const titleEn = title.getAttribute('data-en');
    title.textContent = currentLanguage === 'pt' ? titlePt : titleEn;
  });
}

// Função para carregar as imagens nas galerias
function loadGalleryImages() {
  // Carrega imagens de paisagens
  const landscapesGallery = document.getElementById('landscapes-gallery');
  if (landscapesGallery) {
    galleryData.landscapes.forEach(image => {
      createGalleryItem(landscapesGallery, image, 'landscape-theme');
    });
  }
  
  // Carrega imagens macro
  const macroGallery = document.getElementById('macro-gallery');
  if (macroGallery) {
    galleryData.macro.forEach(image => {
      createGalleryItem(macroGallery, image, 'macro-theme');
    });
  }
  
  // Carrega imagens de detalhes
  const detailsGallery = document.getElementById('details-gallery');
  if (detailsGallery) {
    galleryData.details.forEach(image => {
      createGalleryItem(detailsGallery, image, 'details-theme');
    });
  }
}

// Função para criar um item de galeria
function createGalleryItem(gallery, imageData, themeClass) {
  const item = document.createElement('div');
  item.className = `gallery-item ${themeClass} fade-in`;
  
  // Cria a imagem com lazy loading
  const img = document.createElement('img');
  img.src = imageData.src;
  img.alt = imageData.alt;
  img.loading = 'lazy';
  
  // Cria a sobreposição com o título
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  
  const title = document.createElement('h3');
  title.setAttribute('data-pt', imageData.title_pt);
  title.setAttribute('data-en', imageData.title_en);
  title.textContent = currentLanguage === 'pt' ? imageData.title_pt : imageData.title_en;
  
  overlay.appendChild(title);
  
  // Adiciona os elementos ao item da galeria
  item.appendChild(img);
  item.appendChild(overlay);
  
  // Adiciona o item à galeria
  gallery.appendChild(item);
  
  // Adiciona evento de clique para abrir a imagem em tamanho maior
  item.addEventListener('click', () => {
    openLightbox(imageData);
  });
}

// Função para criar e abrir o lightbox
function openLightbox(imageData) {
  // Cria o container do lightbox
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  
  // Cria o conteúdo do lightbox
  const content = document.createElement('div');
  content.className = 'lightbox-content';
  
  // Cria a imagem
  const img = document.createElement('img');
  img.src = imageData.src;
  img.alt = imageData.alt;
  
  // Cria o botão de fechar
  const closeBtn = document.createElement('span');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(lightbox);
    document.body.style.overflow = 'auto';
  });
  
  // Cria a legenda
  const caption = document.createElement('div');
  caption.className = 'lightbox-caption';
  caption.textContent = currentLanguage === 'pt' ? imageData.title_pt : imageData.title_en;
  
  // Adiciona os elementos ao lightbox
  content.appendChild(img);
  content.appendChild(closeBtn);
  content.appendChild(caption);
  lightbox.appendChild(content);
  
  // Adiciona o lightbox ao body
  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden';
  
  // Fecha o lightbox ao clicar fora da imagem
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      document.body.removeChild(lightbox);
      document.body.style.overflow = 'auto';
    }
  });
}

// Função para criar o botão de voltar ao topo
function createBackToTopButton() {
  const backToTopBtn = document.createElement('div');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '&#8679;';
  document.body.appendChild(backToTopBtn);
  
  // Mostra ou esconde o botão baseado na posição de rolagem
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Adiciona evento de clique para rolar para o topo
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Função para adicionar animações de entrada aos elementos
function addScrollAnimations() {
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Função para inicializar o site
function initSite() {
  // Verifica se há uma preferência de idioma salva
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) {
    currentLanguage = savedLanguage;
    document.getElementById('language-select').value = savedLanguage;
    changeLanguage();
  }
  
  // Carrega as imagens nas galerias
  loadGalleryImages();
  
  // Cria o botão de voltar ao topo
  createBackToTopButton();
  
  // Adiciona animações de entrada
  addScrollAnimations();
  
  // Adiciona estilos para o lightbox dinamicamente
  addLightboxStyles();
}

// Função para adicionar estilos do lightbox
function addLightboxStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
    }
    
    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }
    
    .lightbox-content img {
      max-width: 100%;
      max-height: 90vh;
      display: block;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    
    .lightbox-close {
      position: absolute;
      top: -40px;
      right: 0;
      color: white;
      font-size: 30px;
      cursor: pointer;
    }
    
    .lightbox-caption {
      color: white;
      text-align: center;
      padding: 10px;
      font-size: 1.1rem;
    }
  `;
  document.head.appendChild(style);
}

// Inicializa o site quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initSite);
