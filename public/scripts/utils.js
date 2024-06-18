function getQueries() {
    let query = window.location.search;
    let queries = new URLSearchParams(query);
    let puzzleType = queries.get("type");
    let puzzleIndex = queries.get("index");
    let pieceCount = queries.get("pieceCount");
    return { puzzleType, puzzleIndex, pieceCount };
}
function setCanvasSize(canvas, w, h) {
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
}
function setCanvasQuality(canvas, w, h, quality) {
    canvas.width = w * quality;
    canvas.height = h * quality;
    canvas.style.width = canvas.width / quality + "px";
    canvas.style.height = canvas.height / quality + "px";
} //draw piece shape
function createPiece(x, y, w, h, pos, s, b, ctx = ctx, testing = false) {
    let connectorL = 0.15;
    let connectorS = 0.13;
    let bevel = 1.2;
    ctx.beginPath();

    if (testing) {
        w = w * 0.8;
        h = h * 0.8;
    }
    ctx.save();
    ctx.translate(x, y);

    // LEFT
    ctx.lineTo(0, h / 2 + h * connectorS * s[3]);
    ctx.lineTo(
        w * connectorL * pos[3],
        h / 2 + h * connectorS * bevel * b[3] * s[3],
    );
    ctx.lineTo(
        w * connectorL * pos[3],
        h / 2 - h * connectorS * bevel * b[3] * s[3],
    );
    ctx.lineTo(0, h / 2 - h * connectorS * s[3]);
    ctx.moveTo(0, 0);

    //TOP
    ctx.lineTo(w / 2 - w * connectorS * s[0], 0);

    ctx.lineTo(
        w / 2 - w * connectorS * bevel * b[0] * s[0],
        h * connectorL * pos[0],
    );
    ctx.lineTo(
        w / 2 + w * connectorS * bevel * b[0] * s[0],
        h * connectorL * pos[0],
    );

    ctx.lineTo(w / 2 + w * connectorS * s[0], 0);
    ctx.lineTo(w, 0);

    ctx.lineTo(w, h / 2 - h * connectorS * s[1]);

    ctx.lineTo(
        w + w * connectorL * pos[1],
        h / 2 - h * connectorS * bevel * b[1] * s[1],
    );
    ctx.lineTo(
        w + w * connectorL * pos[1],
        h / 2 + h * connectorS * bevel * b[1] * s[1],
    );

    ctx.lineTo(w, h / 2 + h * connectorS * s[1]);
    ctx.lineTo(w, h);

    ctx.lineTo(w / 2 + w * connectorS * s[2], h);

    ctx.lineTo(
        w / 2 + w * connectorS * bevel * b[2] * s[2],
        h + h * connectorL * pos[2],
    );
    ctx.lineTo(
        w / 2 - w * connectorS * bevel * b[2] * s[2],
        h + h * connectorL * pos[2],
    );

    ctx.lineTo(w / 2 - w * connectorS * s[2], h);

    ctx.lineTo(0, h);

    ctx.fill();
    ctx.strokeStyle = "#0f0";
    // apply stroke
    // ctx.strokeStyle = "black";
    if (testing) {
        ctx.lineWidth = 5;
        ctx.stroke();
    }
    ctx.restore();
}

//create piece shape
function pieceGenerator(grid) {
    let piecePos = Array.from(new Array(grid + 1), () =>
        Array.from(new Array(grid + 1)).fill(0),
    );
    let pieceS = Array.from(new Array(grid + 1), () =>
        Array.from(new Array(grid + 1)).fill(0),
    );
    let pieceB = Array.from(new Array(grid + 1), () =>
        Array.from(new Array(grid + 1)).fill(0),
    );
    return [piecePos, pieceS, pieceB];
}
function dist(x, y, x1, y1) {
    x = x - x1;
    y = y - y1;
    return Math.sqrt(x ** 2 + y ** 2);
}
function constrain(aNumber, aMin, aMax) {
    return aNumber > aMax ? aMax : aNumber < aMin ? aMin : aNumber;
}
function random(min, max) {
    return Math.random() * (max - min) + min;
}

function random1(min, max) {
    if (Math.random() > 0.5) {
        return random(min, max);
    } else {
        return random(-max, -min);
    }
}
