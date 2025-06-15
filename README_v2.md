# Chakri01's Fun Games

Welcome to my collection of small, fun web games! This repository serves as a central hub for a variety of simple and entertaining games that you can play directly in your browser.

## Structure

This repository follows a hybrid approach to organization. It contains:

*   **A landing page (`index.html`)**: This page provides a list of all available games with links to play them.
*   **Shared assets (`css/`, `js/`)**: These directories contain CSS styles and JavaScript utility functions that are used by multiple games, promoting code reuse and consistency.
*   **Simple games (`games/`)**: This directory contains the HTML, CSS, and JavaScript files for simple games that are self-contained within this repository.
*   **Links to external repositories**: For more complex games, links are provided to their respective repositories on GitHub.

The directory structure is as follows:

```
small-fun-games/
├── index.html         # Landing page with links to all games
├── css/
│   └── styles.css     # Shared CSS styles
├── js/
│   └── utils.js       # Shared JavaScript utility functions
├── games/
│   ├── calculator/    # Directory for the simple calculator game
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── crazytetris/   #Directory for crazy tetris game
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   └── ...            # Other simple games
└── README.md          # This file
```

## Games

### Games Hosted Within This Repository

These games are simple and self-contained within this repository. You can play them directly by opening the `index.html` file in the respective game directory **in your web browser**.

*   **Calculator with Secrets (`games/calculator/`)**: A simple calculator with hidden quotes and game links revealed by entering specific codes.
*   **Crazy Tetris (`games/crazytetris/`)**: Tetris with random gravity flips and other crazy modifications.



## How to Play

1.  **Browse to the Landing Page:** Open the `index.html` file in your browser by double-clicking it, or visit the deployed version of this repository (if available) by entering the URL in your browser's address bar.
2.  **Choose a Game:** Click on the link for the game you want to play.
3.  **Follow Instructions:** Each game will have its own instructions on how to play.

## Contributing

If you'd like to contribute to this collection of fun games, you can:

*   **Suggest new game ideas:** Open an issue to suggest a new game idea.
*   **Contribute code:** Fork this repository, implement a new game, and submit a pull request.
*   **Improve existing games:** Submit pull requests to fix bugs, improve performance, or add new features to existing games.

Please follow these guidelines when contributing:

*   Keep games simple and fun.
*   Use clear and concise code.
*   Follow the existing directory structure.
*   Include a `README.md` file in each game directory with instructions on how to play.

## License

This project is licensed under the [MIT License](LICENSE) - see the `LICENSE` file for details.