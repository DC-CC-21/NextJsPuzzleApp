// > Get query parameters
let { puzzleType, puzzleIndex, pieceCount } = getQueries();

// > Set up canvas, context and bounding rect
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
let boundingClientRect = canvas.getBoundingClientRect();

// > Set the quality of the canvas)
const quality = 2; //! keep below 4

// > Update the quality of the canvas
setCanvasQuality(
    canvas,
    window.innerWidth,
    window.innerHeight - boundingClientRect.top,
);

// > Set up the puzzle by creating the puzzle image, url, and number of pieces
const puzzleImage = new Image();
let imageURL = [puzzleType, puzzleIndex, pieceCount];
let grid = ~~Math.sqrt(Number(imageURL[2]));
puzzleImage.src = `/puzzles/${imageURL[0]}/${imageURL[1]}`;

const testing = false;

let piecePos = pieceGenerator(grid)[0];
let pieceS = pieceGenerator(grid)[1];
let pieceB = pieceGenerator(grid)[2];

function createPiece2(x, y, w, h, pos, s, b, ctx = ctx) {
    let connectorL = 0.15;
    let connectorS = 0.13;
    let bevel = 1.2;
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);

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
    // ctx.stroke();
    ctx.restore();
}

createPiece2(
    canvas.width / 2,
    canvas.height / 2,
    300,
    300,
    [-1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    ctx,
);
