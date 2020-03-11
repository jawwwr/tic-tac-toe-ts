/**
 * Determines the winner of the tic-tac-toe game using the given array
 *
 * @param {string[]}    squares   Array of String.
 *
 * @returns {Object}
 */

export const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let game_done = false;
  let selected_lines = [] as number[];
  let name = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      game_done = true;
      name = squares[a];
      selected_lines = lines[i];
      break;
    } else {
      selected_lines = lines[i];
      game_done = false;
    }
  }
  return {
    game_done,
    name,
    lines: selected_lines
  };
};

/**
 * Determines the location of the selected square on the board
 *
 * @param {number}    value   Index of the selected square
 *
 * @returns {Object}
 */

export const findRowCol = (value: number) => {
  const board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
  let col;
  let row;
  board.forEach((board_row, index) => {
    if (board_row.includes(value)) {
      row = board_row.findIndex(e => e >= value) + 1;
      col = index + 1;
    }
  });

  return {
    col,
    row
  };
};
