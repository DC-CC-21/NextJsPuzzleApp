"use client";
import { useEffect, useRef } from "react";
import { setCanvasQuality } from "@/app/lib/canvasUtils";

function readImage(
    input: HTMLInputElement,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
) {
    if (input.files && input.files[0]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const img = new Image();
        img.src = window.URL.createObjectURL(input.files[0]);

        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const data = canvas.toDataURL("image/jpeg", 1);
            console.log(`${data.length / 1024 / 1024}mb`);
            localStorage.setItem("customPuzzle", data);
        };
    }
}

type Props = React.CanvasHTMLAttributes<HTMLCanvasElement>;
function Canvas({ props }: { props: Props }) {
    const canvasRef: any = useRef(null);
    const quality = 2;

    useEffect(() => {
        const canvas = canvasRef.current;
        const width = Math.min(400, window.innerWidth*0.8)
        const ctx = canvas.getContext("2d");
        setCanvasQuality(canvas, ctx, width, width, quality);
        // setCanvasSize(canvas, canvas.width, canvas.height);

        ctx.fillStyle = "#ff0000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ffff";
        ctx.fillRect(-100, 0, canvas.width, canvas.height);

        let customFileEl = document.getElementById(
            "customFile",
        ) as HTMLInputElement;
        customFileEl.addEventListener("change", (e) => {
            console.log("readImage");
            readImage(e.target as HTMLInputElement, ctx, canvas);
        });
    });

    return <canvas ref={canvasRef} {...props} />;
}
export default Canvas;
