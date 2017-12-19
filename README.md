# Game of Life

This is an implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). The goal is to learn the basics of React and practise TDD with a well-defined small game.

## Instructions

- The game is a zero-player game, meaning that once initial state is determined, no further input is required.
- To configure initial state, either each cell is clicked to toggle them on and off, or randomise is clicked to start the game with an initial seed.
- To start or cancel simulation, click play or stop.
- You'll be able to play the game [here](https://khaleed.github.io/game-of-life) :video_game:

## Approach

- The game is broken down into a [functional core](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell) and an imperative shell.
- The functional core consists of a model and functions that update the model using the [Elm Architecture](https://guide.elm-lang.org/architecture/).
- Shallowly cloned arrays are used for immutability.
- To make the UI for the game, there was a deep dive into React documentation and source code - including how React is divided into core, renderers, and the reconciler.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Test

To run tests of the core of the game using [Jest](https://facebook.github.io/jest/)

`yarn test` or `npm test`

## Tasks

- [x] Complete units tests for the functional core
- [x] Add React components
- [x] Add controller to configure initial state
- [ ] Allow user to choose the grid size

## License

Game of Life is released under the <a href="https://opensource.org/licenses/lgpl-3.0.html">The GPL 3.0 License<a/>.


