// export function isWinner(boxes, currentPlayer) {
//   console.log(boxes[0]);
//   if (
//     (boxes[0] === currentPlayer && boxes[1] === currentPlayer && boxes[2] === currentPlayer) ||
//     (boxes[3] === currentPlayer && boxes[4] === currentPlayer && boxes[5] === currentPlayer) ||
//     (boxes[6] === currentPlayer && boxes[7] === currentPlayer && boxes[8] === currentPlayer) ||
//     (boxes[0] === currentPlayer && boxes[3] === currentPlayer && boxes[6] === currentPlayer) ||
//     (boxes[1] === currentPlayer && boxes[4] === currentPlayer && boxes[7] === currentPlayer) ||
//     (boxes[2] === currentPlayer && boxes[5] === currentPlayer && boxes[8] === currentPlayer) ||
//     (boxes[0] === currentPlayer && boxes[4] === currentPlayer && boxes[8] === currentPlayer) ||
//     (boxes[2] === currentPlayer && boxes[4] === currentPlayer && boxes[6] === currentPlayer)
//   ) {
//     return true;
//   } else {
//     return null;
//   }
// }

export function isWinner(boxes) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < wins.length; i++) {
    const [a, b, c] = wins[i];
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return boxes[a];
    }
  }
  return null;
}