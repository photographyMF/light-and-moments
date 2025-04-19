// Dados de exemplo para as imagens
const placeholderData = {
  landscapes: [
    { id: 1, filename: 'landscape1.jpg', title_pt: 'Cidade ao Pôr do Sol', title_en: 'City at Sunset' },
    { id: 2, filename: 'landscape2.jpg', title_pt: 'Vista da Cidade', title_en: 'City View' },
    { id: 3, filename: 'landscape3.jpg', title_pt: 'Cachoeira na Floresta', title_en: 'Forest Waterfall' },
    { id: 4, filename: 'landscape4.jpg', title_pt: 'Miradouro', title_en: 'Viewpoint' },
    { id: 5, filename: 'landscape5.jpg', title_pt: 'Vista Aérea', title_en: 'Aerial View' },
    { id: 6, filename: 'landscape6.jpg', title_pt: 'Árvore Solitária', title_en: 'Solitary Tree' },
    { id: 7, filename: 'landscape7.jpg', title_pt: 'Campos Verdes', title_en: 'Green Fields' },
    { id: 8, filename: 'landscape8.jpg', title_pt: 'Cidade ao Entardecer', title_en: 'City at Dusk' }
  ],
  macro: [
    { id: 1, filename: 'macro1.jpg', title_pt: 'Cristais de Gelo', title_en: 'Ice Crystals' },
    { id: 2, filename: 'macro2.jpg', title_pt: 'Flor Branca', title_en: 'White Flower' },
    { id: 3, filename: 'macro3.jpg', title_pt: 'Pequena Flor Rosa', title_en: 'Small Pink Flower' },
    { id: 4, filename: 'macro4.jpg', title_pt: 'Gotas de Orvalho', title_en: 'Dew Drops' },
    { id: 5, filename: 'macro5.jpg', title_pt: 'Cogumelos', title_en: 'Mushrooms' }
  ],
  details: [
    { id: 1, filename: 'detail1.jpg', title_pt: 'Barco pela Janela', title_en: 'Boat through Window' },
    { id: 2, filename: 'detail2.jpg', title_pt: 'Azulejo Antigo', title_en: 'Ancient Tile' },
    { id: 3, filename: 'detail3.jpg', title_pt: 'Vista através das Árvores', title_en: 'View through Trees' },
    { id: 4, filename: 'detail4.jpg', title_pt: 'Escada em Espiral', title_en: 'Spiral Staircase' },
    { id: 5, filename: 'detail5.jpg', title_pt: 'Porta Vermelha', title_en: 'Red Door' }
  ]
};

// Gerar arquivos de placeholder para cada categoria
function generatePlaceholders() {
  const categories = ['landscapes', 'macro', 'details'];
  
  categories.forEach(category => {
    placeholderData[category].forEach(item => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Definir tamanho do canvas
      canvas.width = 800;
      canvas.height = 600;
      
      // Definir cor de fundo baseada na categoria
      let gradient;
      if (category === 'landscapes') {
        gradient = ctx.createLinearGradient(0, 0, 800, 600);
        gradient.addColorStop(0, '#1E3F29');
        gradient.addColorStop(1, '#3A7D52');
      } else if (category === 'macro') {
        gradient = ctx.createLinearGradient(0, 0, 800, 600);
        gradient.addColorStop(0, '#2C5D8D');
        gradient.addColorStop(1, '#7BAFD4');
      } else {
        gradient = ctx.createLinearGradient(0, 0, 800, 600);
        gradient.addColorStop(0, '#5E4A33');
        gradient.addColorStop(1, '#A68C69');
      }
      
      // Preencher o fundo
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 800, 600);
      
      // Adicionar texto
      ctx.fillStyle = 'white';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`${category.toUpperCase()}`, 400, 280);
      ctx.fillText(`${item.id}`, 400, 320);
      
      // Converter para URL de dados
      const dataUrl = canvas.toDataURL('image/jpeg');
      
      // Criar link para download
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = item.filename;
      link.click();
    });
  });
}

// Função para gerar um arquivo de placeholder para o cabeçalho
function generateHeaderPlaceholder() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Definir tamanho do canvas
  canvas.width = 1920;
  canvas.height = 1080;
  
  // Criar gradiente para o fundo
  const gradient = ctx.createLinearGradient(0, 0, 1920, 1080);
  gradient.addColorStop(0, '#1E3F29');
  gradient.addColorStop(0.5, '#2C5D8D');
  gradient.addColorStop(1, '#5E4A33');
  
  // Preencher o fundo
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1920, 1080);
  
  // Adicionar texto
  ctx.fillStyle = 'white';
  ctx.font = 'bold 80px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('HEADER BACKGROUND', 960, 540);
  
  // Converter para URL de dados
  const dataUrl = canvas.toDataURL('image/jpeg');
  
  // Criar link para download
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'header-bg.jpg';
  link.click();
}

// Executar as funções para gerar os placeholders
// Nota: Este código deve ser executado em um navegador para funcionar corretamente
// generatePlaceholders();
// generateHeaderPlaceholder();
