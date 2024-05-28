# Tic-Tac-Toe

## Description

This is a simple tic-tac-toe game implemented using HTML, CSS, and JavaScript. The game allows two players to alternate their turns, marking 'X' or 'O' on a 3x3 grid until one player wins or the game ends in a draw.

## Other Languages

- [Versão em Português](README_pt-BR.md)

## Project Structure

The project consists of the following files:

- `index.html`: Contains the basic structure of the page and game elements.
- `style.css`: Defines the styles for the page elements.
- `media-queries.css`: Defines specific styles for different screen orientations.
- `script.js`: Contains the game logic and HTML element manipulation.

## Features

- Player alternation between 'X' and 'O'.
- Win or draw detection.
- Automatic game reset after a win or draw.
- Interaction blocking during the display of win or draw messages.

## How to Use

Access the site hosted on GitHub Pages through the following link:

[Tic-Tac-Toe](https://bastosjoaovitor.github.io/Tic-Tac-Toe/Pages/game.html)

## HTML Structure

The `index.html` file has the basic structure of the game, including:
- A 3x3 table to represent the game grid.
- A header (`<h1>`) with the game title.
- An `<h2>` element to display win or draw messages.
- A footer with credits.

## CSS Styles

The basic game styles are defined in the `style.css` file. It defines the layout, colors, and styles of the page elements. For example:
- Definition of fonts and margins for all elements.
- Style for the body of the page, including background color and item alignment.
- Specific styles for the game table, including cell sizes and borders.

Specific styles for different screen orientations are defined in `media-queries.css`. For example:
- Adjustments to the table and cell sizes for landscape orientation.

## JavaScript Logic

The `script.js` file contains the game logic. Some important functions include:

- `mark(number)`: Marks the selected cell with 'X' or 'O', alternating between players.
- `checkWinner()`: Checks for a winner by comparing filled cell combinations.
- `win(choice)`: Displays a win message and temporarily changes the background color.
- `draw()`: Displays a draw message and temporarily changes the background color.
- `reset()`: Resets the game, clearing all cells and allowing new moves.
- `blockInteractions()` and `unblockInteractions()`: Block and unblock interactions during the display of win or draw messages.

## Author

- **João Vitor Bastos** - [Instagram](https://www.instagram.com/bastosjzz/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.