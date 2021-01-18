# Instruções
* npm install
* npm run start

# Comentários

Para esse projeto foi usado o framework Tailwind CSS.

## O que o teste entrega:
* Contém uma navbar com logo, categoria e campo de buscas.
* Consome a API e retorna os filmes em destaque.
* Traz cards que contêm o cartaz do filme, nome, nota e data de lançamento.
* Efetua a busca por título.
* Ao clicar em um botão em cada card, vai-se à respectiva página na qual aparecem o cartaz, uma imagem de fundo, o título e a sinopse do filme.
* Filmes com nota acima de 7 (o requisito original era nota 6 mas eu mudei porque senão teria poucos resultados na página) estão visualmente destacados dos demais.

## O que o teste não entrega:
* O retorno amigável caso a busca não retorne nenhum resultado.