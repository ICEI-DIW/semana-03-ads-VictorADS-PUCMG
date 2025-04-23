// app.js
const mangas = [
    {
      id: 1,
      titulo: "Fire Force",
      imagem: "img/Fireforce.webp",
      descricao: "Mundo em chamas e batalhas insanas!"
    },
    {
      id: 2,
      titulo: "Solo Leveling",
      imagem: "img/Sololeveling.png",
      descricao: "O caçador mais fraco se torna o mais forte!"
    },
    {
      id: 3,
      titulo: "Tanya the Evil",
      imagem: "img/TanyatheEvil.png",
      descricao: "Uma alma renascida na guerra."
    },
    {
      id: 4,
      titulo: "Fate",
      imagem: "img/fate.png",
      descricao: "Lutas épicas entre magos e servos."
    }
  ];
  
  // Função para montar os cards dinamicamente
  function carregarMangas() {
    const container = document.querySelector('.alinhamentoItem');
    mangas.forEach(manga => {
      const link = document.createElement('a');
      link.className = 'mangaDestaque';
      link.href = `detalhes.html?id=${manga.id}`;
      link.style.backgroundImage = `url(${manga.imagem})`;
      container.appendChild(link);
    });
  }
  
  window.onload = carregarMangas;
  