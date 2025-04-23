const mangas = [
  {
    id: 1,
    titulo: "Fire Force",
    imagem: "img/Fireforce.webp",
    descricao: "Mundo em chamas e batalhas insanas!",
    autor: "Atsushi Ōkubo",
    conteudo: "Shinra Kusakabe é um jovem com o poder de emitir chamas pelos pés. Ele se junta à Fire Force para combater incêndios provocados por combustões humanas espontâneas e desvendar os segredos por trás disso."
  },
  {
    id: 2,
    titulo: "Solo Leveling",
    imagem: "img/Sololeveling.png",
    descricao: "O caçador mais fraco se torna o mais forte!",
    autor: "Chugong",
    conteudo: "Sung Jin-Woo era o caçador mais fraco de todos. Após uma experiência mortal em uma masmorra dupla, ele desperta com a habilidade de evoluir infinitamente!"
  },
  {
    id: 3,
    titulo: "Tanya the Evil",
    imagem: "img/TanyatheEvil.png",
    descricao: "Uma alma renascida na guerra.",
    autor: "Carlo Zen",
    conteudo: "Um executivo ateu é reencarnado como uma menina em um mundo em guerra. Para sobreviver, ele precisa superar desafios e encarar o ser misterioso que o colocou ali."
  },
  {
    id: 4,
    titulo: "Fate",
    imagem: "img/fate.png",
    descricao: "Lutas épicas entre magos e servos.",
    autor: "Type-Moon",
    conteudo: "Magos invocam heróis lendários do passado para batalharem na Guerra do Santo Graal, onde o desejo mais profundo do vencedor será realizado."
  }
];

// Função para montar os cards dinamicamente na galeria da home
function carregarMangas() {
  const container = document.querySelector('.alinhamentoItem');
  if (!container) return; // Garante que a função só execute se estiver na página correta

  mangas.forEach(manga => {
    const link = document.createElement('a');
    link.className = 'mangaDestaque';
    link.href = `Detalhes.html?id=${manga.id}`;
    link.style.backgroundImage = `url(${manga.imagem})`;
    container.appendChild(link);
  });
}

// Função para preencher os detalhes do mangá na página Detalhes.html
function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const item = mangas.find(manga => manga.id === id);

  if (!item) {
    document.body.innerHTML = "<h2>Mangá não encontrado.</h2>";
    return;
  }

  document.getElementById("titulo").textContent = item.titulo;
  document.getElementById("descricao").textContent = item.descricao;
  document.getElementById("imagem").src = item.imagem;
  document.getElementById("autor").textContent = "Autor: " + item.autor;
  document.getElementById("conteudo").textContent = item.conteudo;
}

window.onload = () => { //sem essa condição, ate mesmo a pagina inicial ira aparecer como manga não encontrado 
  if (document.querySelector('.alinhamentoItem')) {
    carregarMangas();
  }

  if (document.getElementById("titulo")) {
    carregarDetalhes();
  }
};
