document.addEventListener('DOMContentLoaded', () => {
            const campoBusca = document.querySelector('.campoBusca');
            const sugestoesLista = document.getElementById('sugestoes-lista');

            campoBusca.addEventListener('input', () => {
                const termo = campoBusca.value.trim().toLowerCase();
                sugestoesLista.innerHTML = ''; // limpa sugestões anteriores

                if (termo.length === 0) {
                    sugestoesLista.style.display = 'none';
                    return;
                }

                const correspondentes = listaDeMangas.filter(manga =>
                    manga.titulo.toLowerCase().startsWith(termo)
                );

                if (correspondentes.length === 0) {
                    sugestoesLista.style.display = 'none';
                    return;
                }

                // Preenche a ul com sugestões
                correspondentes.forEach(manga => {
                    const item = document.createElement('li');
                    item.classList.add('sugestao-item');
                    item.textContent = manga.titulo;

                    item.addEventListener('click', () => {
                        window.location.href = `/public/pagina/detalhes.html?id=${encodeURIComponent(manga.id)}`;
                    });

                    sugestoesLista.appendChild(item);
                });

                sugestoesLista.style.display = 'block';
            });

            // Esconde sugestões ao clicar fora
            document.addEventListener('click', (event) => {
                if (!sugestoesLista.contains(event.target) && event.target !== campoBusca) {
                    sugestoesLista.innerHTML = '';
                    sugestoesLista.style.display = 'none';
                }
            });
        });