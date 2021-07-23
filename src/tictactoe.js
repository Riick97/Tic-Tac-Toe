export function ticTacToe(first) {
    let board = {0:[0, 0, 0], 1:[0, 0, 0], 2:[0, 0, 0]};
    let player = first || 1;
    return {board: board, player: player, strikeTrough: 'none', winner: null}
}

export function setChoice(ticTacToe, location) {
    let row = location.row;
    let col = location.col;
    ticTacToe.board[row][col] = ticTacToe.player;
    return ticTacToe;
}

export function changePlayer(ticTacToe){
    if(ticTacToe.player === 1) ticTacToe.player = 2;
    else if(ticTacToe.player === 2) ticTacToe.player = 1;
    return ticTacToe;
}

export function checkWin(ticTacToe) {
    let board = ticTacToe.board;
    let rows = checkRows(board);
    let cols = checkCols(board);
    let diag = checkDiag(board);
    let draw = checkDraw(board);

    if(rows) {
        ticTacToe.winner = rows.winner;
        ticTacToe.strikeTrough = rows.stikeTrough
    }
    if(cols) {
        ticTacToe.winner = cols.winner;
        ticTacToe.strikeTrough = cols.stikeTrough
    }
    if(diag) {
        ticTacToe.winner = diag.winner;
        ticTacToe.strikeTrough = diag.stikeTrough
    }
    if(draw) {
        ticTacToe.winner = draw;
    }
    return ticTacToe
}

function checkRows(board) {
    let row1 = board[0][0] === board[0][1] && board[0][1] === board[0][2]
    let row2 = board[1][0] === board[1][1] && board[1][1] === board[1][2]
    let row3 = board[2][0] === board[2][1] && board[2][1] === board[2][2]

    if (row1 && board[0][0] !== 0) return {winner: board[0][0], stikeTrough: 'row1'};
    if (row2 && board[1][0] !== 0) return {winner: board[1][0], stikeTrough: 'row2'};
    if (row3 && board[2][0] !== 0) return {winner: board[2][0], stikeTrough: 'row3'};
}

function checkCols(board) {
    let col1 = board[0][0] === board[1][0] && board[1][0] === board[2][0]
    let col2 = board[0][1] === board[1][1] && board[1][1] === board[2][1]
    let col3 = board[0][2] === board[1][2] && board[1][2] === board[2][2]

    if (col1 && board[0][0] !== 0) return {winner: board[0][0], stikeTrough: 'col1'};
    if (col2 && board[0][1] !== 0) return {winner: board[0][1], stikeTrough: 'col2'};
    if (col3 && board[0][2] !== 0) return {winner: board[0][2], stikeTrough: 'col3'};
}

function checkDiag(board) {
    let diag1 = board[0][0] === board[1][1] && board[1][1] === board[2][2]
    let diag2 = board[0][2] === board[1][1] && board[1][1] === board[2][0]

    if (diag1 && board[1][1] !== 0) return {winner: board[1][1], stikeTrough: 'diag1'};
    if (diag2 && board[1][1] !== 0) return {winner: board[1][1], stikeTrough: 'diag2'};
}

function checkDraw(board){
    let draw = []
    Object.entries(board).forEach(([key, value]) => {
        if (!value.includes(0)) draw[key] = true
    }); // "foo: bar", "baz: 42"

    // board.forEach((row, i) => {
    //     if (!row.includes(0)) draw[i] = true;
    // });
    if (draw[0] && draw[1] && draw[2]) {
        return 3
    }
}
