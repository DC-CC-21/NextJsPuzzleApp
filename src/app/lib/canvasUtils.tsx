export function getQueries() {
    let query = window.location.search;
    let queries = new URLSearchParams(query);
    let puzzleType = queries.get("type");
    let puzzleIndex = queries.get("index");
    let pieceCount = queries.get("pieceCount");
    return { puzzleType, puzzleIndex, pieceCount };
}
export function setCanvasSize(canvas: any, w: number, h: number) {
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
}
export function setCanvasQuality(canvas: any, w: number, h: number, quality: number) {
    canvas.width = w * quality;
    canvas.height = h * quality;
    canvas.style.width = canvas.width / quality + "px";
    canvas.style.height = canvas.height / quality + "px";
} //draw piece shape
export function createPiece(x:number, y:number, w:number, h:number, pos:any, s:any, b:any, ctx:any, testing = false) {
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
export function pieceGenerator(grid:any) {
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
export function dist(x:number, y:number, x1:number, y1:number) {
    x = x - x1;
    y = y - y1;
    return Math.sqrt(x ** 2 + y ** 2);
}
export function constrain(aNumber:any, aMin:any, aMax:any) {
    return aNumber > aMax ? aMax : aNumber < aMin ? aMin : aNumber;
}
export function random(min:any, max:any) {
    return Math.random() * (max - min) + min;
}

export function random1(min:any, max:any){
    if (Math.random() > 0.5) {
        return random(min, max);
    } else {
        return random(-max, -min);
    }
}
