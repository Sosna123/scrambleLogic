"use strict";
function getMovesArr(type = '3x3') {
    let possibleMoves, moves, moveCount;
    if (type === '3x3') {
        //* 3x3
        moves = ['R', 'L', 'B', 'F', 'U', 'D'];
        possibleMoves = moves.length;
        moveCount = 20;
    }
    else if (type === '2x2') {
        //* 2x2
        moves = ['R', 'F', 'U'];
        possibleMoves = moves.length;
        moveCount = 10;
    }
    else if (type === '4x4') {
        //* 4x4
        moves = ['R', 'Rw', 'L', 'Lw', 'B', 'Bw', 'F', 'Fw', 'U', 'Uw', 'D', 'Dw'];
        possibleMoves = moves.length;
        moveCount = 45;
    }
    else if (type === 'skweb') {
        //* skweb
        moves = ['R', 'L', 'U', 'B'];
        possibleMoves = moves.length;
        moveCount = 9;
    }
    else {
        //* 3x3 if input is wrong
        moves = ['R', 'L', 'B', 'F', 'U', 'D'];
        possibleMoves = moves.length;
        moveCount = 20;
    }
    return { moves, possibleMoves, moveCount };
}
function chooseMove(old1, type, moves, possibleMoves, moveCount) {
    //* check which type of move
    let id1 = Math.floor(Math.random() * possibleMoves);
    id1 = id1 === possibleMoves ? id1-- : id1;
    //* check if moves are the same, as last time
    if (old1.toString() === id1.toString()) {
        let [moveNew, id1New, moveCountNew] = chooseMove(old1, type, moves, possibleMoves, moveCount);
        return [moveNew, id1New, moveCountNew];
    }
    //* change the second symbol of the move
    const id2 = Math.round(Math.random() * 2);
    let move = moves[id1];
    if (id2 === 1) {
        move += "'";
    }
    if (id2 === 2) {
        move += "2";
    }
    return [move, id1];
}
function scramble(type) {
    //* make movecount work
    let moves = getMovesArr(type.toString()).moves;
    let possibleMoves = getMovesArr(type.toString()).possibleMoves;
    let moveCount = getMovesArr(type.toString()).moveCount;
    //* some values
    const moveCountRandom = Math.trunc(Math.random() * 2) + (moveCount - 1);
    const scramble = [];
    let old1 = '';
    //* invoke chooseMove function a lot of times
    for (let i = 0; i < moveCountRandom; i++) {
        const [move, id1] = chooseMove(old1, type, moves, possibleMoves, moveCount);
        old1 = id1;
        scramble.push(move);
    }
    let scrambleText = scramble.join(' ');
    //* return scramble
    return scrambleText;
}
