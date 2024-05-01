class Piece {
    constructor(x, y, pos, s, b, size, idxs) {
        this.x = x;
        this.y = y;
        this.start = {
            x: this.x,
            y: this.y,
        };
        this.overlap = {
            x: 0,
            y: 0,
        };
        this.width = size;
        this.height = size;
        this.origIdx = idxs;
        this.idxs = idxs;
        this.pos = pos;
        this.s = s;
        this.b = b;
        this.isEdge = false;
        //REMOVE CONNECTORS FROM EDGES
        if (this.idxs[0] == 0) {
            this.pos[3] = 0;
            this.isEdge = true;
        }
        if (this.idxs[0] == grid - 1) {
            this.pos[1] = 0;
            this.isEdge = true;
        }
        if (this.idxs[1] == 0) {
            this.pos[0] = 0;
            this.isEdge = true;
        }
        if (this.idxs[1] == grid - 1) {
            this.pos[2] = 0;
            this.isEdge = true;
        }
        this.clicked = false;
        this.hovered = false;
        this.currentRotation = 0;
        this.rotationSpeed = 0.1;
        this.rotationDst = Math.PI / 30;
        this.image = false;
        this.placed = false;
        this.rotations = [0, Math.PI / 2, Math.PI, Math.PI * 1.5];
        this.rotation = !testing
            ? this.rotations[~~random(0, this.rotations.length)]
            : 0;
        this.rotated = false;
    }
    createImage(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(size, size);
        createPiece(
            0,
            0,
            this.width,
            this.height,
            this.pos,
            this.s,
            this.b,
            ctx,
        );
        ctx.clip();
        ctx.drawImage(
            puzzleImage,
            -this.width * this.idxs[0],
            -this.height * this.idxs[1],
            size * grid,
            size * grid,
        );
        ctx.restore();

        let p = this;
        let image = new Image();
        image.src = canvas2.toDataURL();
        image.onload = function () {
            p.image = image;
            if (!testing) {
                if (imageURL[3]) {
                    let idx = p.idxs[1] + p.idxs[0] * grid;
                    // console.log("testing", p.idxs);
                    // console.log("testing", p.idxs[0] + p.idxs[1] * grid);
                    p.x = imageURL[3][idx].position.x;
                    p.y = imageURL[3][idx].position.y;
                    p.rotation = imageURL[3][idx].rotation;
                    p.currentRotation = imageURL[3][idx].rotation;
                } else {
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

                    p.y = constrain(
                        Math.random() * canvas.height,
                        piecePadding,
                        canvas.height - p.height - piecePadding,
                    );
                }
            }
        };
    }
    draw(ctx) {
        this.x = constrain(
            this.x,
            piecePadding,
            canvas.width - this.width - piecePadding,
        );
        this.y = constrain(
            this.y,
            piecePadding,
            canvas.height - this.height - piecePadding,
        );
        if (!this.image) {
            return false;
        }
        if (this.currentRotation < this.rotation) {
            this.currentRotation += this.rotationSpeed;
            this.rotated = false;
        }
        if (Math.abs(this.currentRotation - this.rotation) < this.rotationDst) {
            this.currentRotation = this.rotation;
            if (this.rotation >= Math.PI * 2) {
                this.currentRotation = this.rotation %= Math.PI * 2;
                this.rotation = this.rotation %= Math.PI * 2;
            }
            if (this.currentRotation == this.rotation && !this.rotated) {
                this.rotated = true;
                this.place();
            }
        }

        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.currentRotation);
        ctx.translate(-this.width * 1.5, -this.height * 1.5);
        ctx.drawImage(this.image, 0, 0);

        ctx.restore();

        //debugging
        // ctx.fillStyle = "#f005";
        // ctx.beginPath()
        // ctx.arc(this.start.x+this.width/2, this.start.y+this.height/2, errorDst, 0, Math.PI*2, true);
        // ctx.stroke()
        // ctx.beginPath()
        // ctx.arc(this.x+this.width/2, this.y+this.height/2, 15, 0, Math.PI*2, true);
        // ctx.fillStyle = '#00f'
        // ctx.fill()

        // ctx.fillStyle = "#ff05";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        // ctx.fillStyle = "#000";
        // ctx.font = '30px Arial'
        // ctx.fillText(this.start.x.toFixed(1)+',  '+this.start.y.toFixed(1), this.x+50, this.y+this.height/2-20)
        // ctx.fillText(this.clicked, this.x+50, this.y+this.height/2+50)
    }

    isin(x, y) {
        this.overlap = {
            x: this.x - x,
            y: this.y - y,
        };
        return (
            x > this.x &&
            x < this.x + this.width &&
            y > this.y &&
            y < this.y + this.height
        );
    }
    drag(x, y) {
        if (this.placed) return;
        this.x = constrain(
            x + this.overlap.x,
            piecePadding,
            canvas.width - this.width - piecePadding,
        );
        this.y = constrain(
            y + this.overlap.y,
            piecePadding,
            canvas.height - this.height - piecePadding,
        );
    }
    place() {
        if (
            dist(
                this.x + this.width / 2,
                this.y + this.height / 2,
                this.start.x + this.width / 2,
                this.start.y + this.height / 2,
            ) < errorDst &&
            this.rotation == 0
        ) {
            this.x = this.start.x;
            this.y = this.start.y;
            this.placed = true;
        }
        this.clicked = false;
    }
}
