function getMovesArr(type) {
    if (type === void 0) { type = '3x3'; }
    var possibleMoves, moves, moveCount;
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
    return { moves: moves, possibleMoves: possibleMoves, moveCount: moveCount };
}
function chooseMove(old1, type, moves, possibleMoves, moveCount) {
    //* check which type of move
    var id1 = Math.floor(Math.random() * possibleMoves);
    id1 = id1 === possibleMoves ? id1-- : id1;
    //* check if moves are the same, as last time
    if (old1.toString() === id1.toString()) {
        var moveNew = chooseMove(old1, type, moves, possibleMoves, moveCount).move;
        var id1New = chooseMove(old1, type, moves, possibleMoves, moveCount).id1;
        return { move: moveNew, id1: id1New };
    }
    //* change the second symbol of the move
    var id2 = Math.round(Math.random() * 2);
    var move = moves[id1];
    if (id2 === 1) {
        move += "'";
    }
    if (id2 === 2) {
        move += "2";
    }
    return { move: move, id1: id1 };
}
function scramble(type) {
    //* make movecount work
    var moves = getMovesArr(type.toString()).moves;
    var possibleMoves = getMovesArr(type.toString()).possibleMoves;
    var moveCount = getMovesArr(type.toString()).moveCount;
    //* some values
    var moveCountRandom = Math.floor(Math.random() * 2) + (moveCount - 1);
    var scramble = [];
    var old1 = '';
    //* invoke chooseMove function a lot of times
    for (var i = 0; i < moveCountRandom; i++) {
        var move = chooseMove(old1, type, moves, possibleMoves, moveCount).move;
        var id1 = chooseMove(old1, type, moves, possibleMoves, moveCount).id1;
        old1 = id1;
        scramble.push(move);
    }
    var scrambleText = scramble.join(' ');
    //* return scramble
    return scrambleText;
}
