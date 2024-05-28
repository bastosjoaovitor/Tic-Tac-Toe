# Tic-Tac-Toe

## Descrição

Este é um simples jogo da velha (tic-tac-toe) implementado usando HTML, CSS e JavaScript. O jogo permite dois jogadores alternarem suas jogadas, marcando 'X' ou 'O' em um grid 3x3 até que um dos jogadores vença ou o jogo termine em empate.

## Other Languages

- [English version](README.md)

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: Contém a estrutura básica da página e os elementos do jogo.
- `style.css`: Define os estilos para os elementos da página.
- `media-queries.css`: Define estilos específicos para diferentes orientações de tela.
- `script.js`: Contém a lógica do jogo e manipulação dos elementos HTML.

## Funcionalidades

- Alternância de jogadores entre 'X' e 'O'.
- Verificação de vitória ou empate.
- Reset automático do jogo após vitória ou empate.
- Bloqueio de interações durante a exibição da mensagem de vitória ou empate.

## Como Usar

Acesse o site hospedado no GitHub Pages através do seguinte link:

[Tic-Tac-Toe](https://bastosjoaovitor.github.io/Tic-Tac-Toe/Pages/game.html)

## Estrutura do HTML

O arquivo `index.html` possui a estrutura básica do jogo, incluindo:
- Uma tabela 3x3 para representar o grid do jogo.
- Um cabeçalho (`<h1>`) com o título do jogo.
- Um elemento `<h2>` para exibir mensagens de vitória ou empate.
- Um rodapé com créditos.

## Estilos CSS

Os estilos básicos do jogo são definidos no arquivo `style.css`. Ele define o layout, cores e estilos dos elementos da página. Por exemplo:
- Definição de fontes e margens para todos os elementos.
- Estilo para o corpo da página, incluindo cor de fundo e alinhamento de itens.
- Estilos específicos para a tabela do jogo, incluindo tamanhos e bordas das células.

Os estilos específicos para diferentes orientações de tela são definidos em `media-queries.css`. Por exemplo:
- Ajustes no tamanho da tabela e das células para a orientação landscape.

## Lógica em JavaScript

O arquivo `script.js` contém a lógica do jogo. Algumas funções importantes incluem:

- `mark(number)`: Marca a célula selecionada com 'X' ou 'O', alternando entre os jogadores.
- `checkWinner()`: Verifica se há um vencedor, comparando as combinações de células preenchidas.
- `win(choice)`: Exibe uma mensagem de vitória e altera a cor de fundo temporariamente.
- `draw()`: Exibe uma mensagem de empate e altera a cor de fundo temporariamente.
- `reset()`: Reseta o jogo, limpando todas as células e permitindo novas jogadas.
- `blockInteractions()` e `unblockInteractions()`: Bloqueiam e desbloqueiam interações durante a exibição das mensagens de vitória ou empate.

## Autor

- **João Vitor Bastos** - [Instagram](https://www.instagram.com/bastosjzz/)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.