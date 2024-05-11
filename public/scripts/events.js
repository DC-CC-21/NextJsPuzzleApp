//> Events
let dragging = false;
function dragPiece(x, y) {
    x -= boundingClientRect.left;
    x *= quality;
    y -= boundingClientRect.top;
    y *= quality;

    if (typeof selectedPiece == "number") {
        pieces[selectedPiece].drag(x, y);
        dragging = true;
    }
}
function clickPiece(x, y) {
    x -= boundingClientRect.left;
    x *= quality;
    y -= boundingClientRect.top;
    y *= quality;
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (!pieces[i].isEdge && edgesOnly.checked) {
            continue;
        }
        if (pieces[i].isin(x, y) && !pieces[i].placed) {
            pieces.splice(pieces.length - 1, 0, pieces.splice(i, 1)[0]);
            selectedPiece = pieces.length - 1;
            pieces[selectedPiece].clicked = true;
            return false;
        }
    }
}
function releasePiece() {
    if (typeof selectedPiece == "number") {
        pieces[selectedPiece].place();
        if (!dragging && !pieces[selectedPiece].placed) {
            pieces[selectedPiece].rotation += Math.PI / 2;
        }
        selectedPiece = false;
        dragging = false;
        return;
    }
}

// > Touch events
canvas.addEventListener("touchmove", (e) => {
    dragPiece(e.touches[0].clientX, e.touches[0].clientY);
    e.preventDefault();
    return false;
});
canvas.addEventListener("touchstart", (e) => {
    clickPiece(e.touches[0].clientX, e.touches[0].clientY);
});
canvas.addEventListener("touchend", (e) => {
    releasePiece();
    e.preventDefault();
    return false;
});
canvas.addEventListener("touchcancel", (e) => {
    releasePiece();
    e.preventDefault();
    return false;
});

// > Mouse events
canvas.addEventListener("mousemove", (e) => {
    dragPiece(e.clientX, e.clientY);
});
canvas.addEventListener("mousedown", (e) => {
    clickPiece(e.clientX, e.clientY);
});
canvas.addEventListener("mouseup", (e) => {
    releasePiece(e.clientX, e.clientY);
    e.preventDefault();

    return false;
});

document.getElementById("shuffle").addEventListener("click", (e) => {
    pieces.forEach((p) => {
        // > Check if piece is already placed because placed pieces should not me moved
        if (!p.placed) {
            // > values less than 0.5 will be randomized in the space to the left of the canvas and values greater will be randomized in the space to the right
            p.x =
                Math.random() > 0.5
                    ? constrain(
                          Math.random() * offset.x,
                          piecePadding,
                          offset.x - p.width,
                      )
                    : constrain(
                          Math.random() * offset.x,
                          piecePadding,
                          offset.x - p.width,
                      ) +
                      offset.x +
                      size * grid;

            // > randomize y positions from the bottom to the top of the canvas
            p.y = constrain(
                Math.random() * canvas.height,
                piecePadding,
                canvas.height - p.height - piecePadding,
            );
        }
    });
});
