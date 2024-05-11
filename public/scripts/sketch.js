// > Get query parameters
let { puzzleType, puzzleIndex, pieceCount } = getQueries();

// > Set up canvas, context and bounding rect
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
let boundingClientRect = canvas.getBoundingClientRect();

// > Set up 2nd canvas (hidden) canvas for creating the pieces
const canvas2 = document.getElementById("createCanvas");
const ctx2 = canvas2.getContext("2d");

// > Set the quality of the canvas)
const quality = 2; //! keep below 4

// > Update the quality of the canvas
setCanvasQuality(
    canvas,
    window.innerWidth,
    window.innerHeight - boundingClientRect.top,
);

// > Hide the scrollbars
// document.body.style.overflow = "hidden";

// > Get the checkboxes by id
const minimap = document.getElementById("minimap");
const edgesOnly = document.getElementById("check");
const fps = document.getElementById("fps");

// > Set up the puzzle by creating the puzzle image, url, and number of pieces
const puzzleImage = new Image();
let imageURL = [puzzleType, puzzleIndex, pieceCount];
let grid = ~~Math.sqrt(Number(imageURL[2]));
puzzleImage.src = `puzzles/${imageURL[0]}/${imageURL[1]}`;

const testing = false;

let piecePos = pieceGenerator(grid)[0];
let pieceS = pieceGenerator(grid)[1];
let pieceB = pieceGenerator(grid)[2];

const pieces = [];

// > Find the orientation of the canvas window
const mode = window.innerWidth > window.innerHeight ? "portrait" : "landscape"; //# hold the orientation of the canvas
let smallest = 0; //# hold the dimension of the smallest side
if (mode == "portrait") {
    smallest = window.innerHeight;
} else {
    smallest = window.innerWidth;
}

// > Resize the hidden canvas
smallest *= quality; //# multiply to account for quality
const size = (smallest * 0.8) / grid;
setCanvasSize(canvas2, size * 3, size * 3);

let frameCount = 0;
let selectedPiece = false;
const errorDst = size * 0.3; //# error distance of piece from start position
const dragDst = 1;
const connectorDst = 5;
const offset = {
    x: (canvas.width - size * grid) / 2,
    y: (canvas.height - size * grid) / 2,
};
let piecePadding = 0;

puzzleImage.onload = function () {
    pieces.forEach((piece) => piece.createImage(ctx2));
    draw();
};
let dragged = false;

//> Loop through the x and y direction of the pieces and assign random values to the arrays
for (let i = 0; i < piecePos.length; i++) {
    for (let j = 0; j < piecePos[i].length; j++) {
        //? piecePos[i][j] = 0.5 + Math.random();
        piecePos[i][j] = random1(0.5, 1.5);

        //? pieceS[i][j] = 0.5 + Math.random();
        pieceS[i][j] = random(0.5, 1.5);

        //? pieceB[i][j] = 1 + random(-0.5, 0.5);
        pieceB[i][j] = random(0.1, 1.5);
    }
}

// > Loop through the grid and create the pieces
for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
        let gap = 1;
        pieces.push(
            new Piece(
                j * size * gap + offset.x,
                i * size * gap + offset.y,
                [
                    piecePos[j][i],
                    piecePos[j + 1][i],
                    piecePos[j][i + 1],
                    piecePos[j][i],
                ],
                [
                    pieceS[j][i],
                    pieceS[j + 1][i],
                    pieceS[j][i + 1],
                    pieceS[j][i],
                ],
                [
                    pieceB[j][i],
                    pieceB[j + 1][i],
                    pieceB[j][i + 1],
                    pieceB[j][i],
                ],
                size,
                [j, i],
            ),
        );
    }
}

// > Handle the fps rate
let lastLoop = new Date();
function gameLoop() {
    let thisLoop = new Date();
    let fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;
    return fps;
}

let placedPieces = 0;

function draw() {
    let frames = gameLoop(); //# get the fps
    frameCount += 0.01;
    if (~~(frameCount * 100) % 100 == 0) {
        fps.innerHTML = frames.toFixed(0) + "fps";
    }

    // > Draw background color
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // > If the minimap is checked, draw the minimap image
    if (minimap.checked) {
        ctx.drawImage(
            puzzleImage,
            offset.x,
            offset.y,
            size * grid,
            size * grid,
        );
        ctx.fillStyle = "#666a";
    } else {
        ctx.fillStyle = "#666";
    }
    // > Puzzle placeholder image
    ctx.fillRect(offset.x, offset.y, size * grid, size * grid);

    // > Render each puzzle piece
    placedPieces = 0;
    pieces.forEach((piece) => {
        // > If edgesOnly is checked, only render the edges
        if (piece.isEdge && edgesOnly.checked) {
            piece.draw(ctx);
        } else if (!edgesOnly.checked) {
            piece.draw(ctx);
        }
        if (piece.placed) {
            placedPieces += 1;
        }
    });

    if (placedPieces == grid * grid) {
        let finishEl = document.getElementById("finish");
        if (finishEl) {
            finishEl.style.display = "flex";
        }
        return;
    }
    // > Continue animation
    requestAnimationFrame(draw);
}
